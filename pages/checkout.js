import Steps from "@/components/Steps";
import FormControl from "@/components/formik/FormControl";
import FormikContainer from "@/components/formik/FormikContainer";
import React, { useMemo, useRef } from "react";
import { object, string, ref as yup_ref } from "yup";
import { useAtom } from "jotai";
import {
    selectedCountryIso2Atom,
    selectedStateAtom,
} from "@/stores/checkoutPageStore";
import RadioLabel from "@/components/layout/checkout/RadioLabel";
import fetchCities from "@/utils/checkout page/fetchCities";
import fetchCountries from "@/utils/checkout page/fetchCountries";
import fetchStates from "@/utils/checkout page/fetchStates";
import { useCart } from "@/components/cart/hooks/useCart";
import Product from "@/components/layout/checkout/Product";

const steps = [
    {
        title: "cart",
        href: "/cart",
    },
    {
        title: "checkout",
        href: "/checkout",
    },
    {
        title: "payment",
        href: "/payment",
    },
];

const INITIAL_CHECKOUT_FORM_VALUES = {
    name: "",

    contact: {
        email: "",
        confirmationEmail: "",
        phone: "",
    },

    address: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
    },

    shipping: {
        country: "",
        method: "free",
    },

    discountCode: "",
};

const validationSchema = object({
    name: string().required("Full name is required"),
    contact: object({
        email: string()
            .email("Invalid email")
            .required("Email is required")
            .oneOf([yup_ref("confirmationEmail")], "Emails don't match"),
        confirmationEmail: string()
            .email("Invalid email")
            .required("Confirmation Email is required")
            .oneOf([yup_ref("email")], "Emails don't match"),
        phone: string().required("Phone number is required"),
    }),
    address: object({
        street: string().required("Street & house number is required"),
        // state: string().required("State is required"),
        // city: string().required("City is required"),
        postalCode: string().required("Postal code is required"),
    }),
    shipping: object({
        country: string().required("Country is required"),
        method: string().oneOf(
            ["free", "regular", "express"],
            "Invalid shipping method"
        ),
    }),
});

// Todos : handle errors in select components

const Checkout = () => {
    const stateSelectRef = useRef();
    const citySelectRef = useRef();
    const [selectedCountryIos2, setSelectedCountryIso2] = useAtom(
        selectedCountryIso2Atom
    );
    const [selectedState, setSelectedState] = useAtom(selectedStateAtom);
    const { cart } = useCart();

    const {
        data: countries,
        isLoading: isCountriesLoading,
        isError: isCountriesError,
        error: countriesError,
    } = fetchCountries();

    const {
        data: states,
        isLoading: isStatesLoading,
        error: statesError,
        isError: isStatesError,
    } = fetchStates({
        countryIso: selectedCountryIos2,
        enabled: !!selectedCountryIos2,
    });

    const {
        data: cities,
        isLoading: isCitiesLoading,
        isError: isCitiesError,
        error: citiesError,
    } = fetchCities({
        enabled: !!selectedState,
        selectedStateProps: selectedState,
    });

    const validationSchemaWithState = useMemo(() => {
        if (states && states.length > 0) {
            return validationSchema.shape({
                address: object({
                    state: object().required("State is required"),
                }),
            });
        }
        return validationSchema;
    }, [states]);

    const finalValidationSchema = useMemo(() => {
        if (cities && cities.length > 0) {
            return validationSchema.shape({
                address: object({
                    city: string().required("City is required"),
                }),
            });
        }
        return validationSchemaWithState;
    }, [cities, validationSchemaWithState]);

    return (
        <div className="mt-10">
            <Steps steps={steps} activeStepIdx={1} />

            <FormikContainer
                validationSchema={finalValidationSchema}
                formId="checkout-form"
                className="mt-5"
                initialValues={INITIAL_CHECKOUT_FORM_VALUES}
                onSubmit={(values) => console.log(values)}>
                <button type="submit">submit</button>
                <div className="p-5 border rounded-lg border-gray-200">
                    <div>
                        <span className="font-semibold text-gray-700 mb-4 block">
                            {!isCountriesError
                                ? "Select shipping country"
                                : "Shipping country"}
                        </span>

                        {!isCountriesError ? (
                            <FormControl
                                required
                                form="checkout-form"
                                placeholder="Select a country..."
                                name="shipping.country"
                                controlType="select"
                                options={countries || []}
                                isLoading={isCountriesLoading}
                                onChange={({ value: countryIso }) => {
                                    setSelectedCountryIso2(countryIso);
                                    stateSelectRef.current?.clearValue();
                                }}
                            />
                        ) : (
                            <FormControl
                                required
                                controlType="text"
                                placeholder="Enter Your Country"
                                name="shipping.country"
                            />
                        )}
                    </div>
                    <hr className="my-6" />

                    <div className="space-y-4">
                        <span className="font-semibold text-gray-700 mb-4 block">
                            Shipping address
                        </span>
                        <FormControl
                            required
                            id="name"
                            controlType="text"
                            name="name"
                            label="Full name"
                            placeholder="Enter your full name"
                        />
                        <div className="flex  gap-3 flex-col md:flex-row">
                            <FormControl
                                name="contact.email"
                                required
                                id="email"
                                controlType="text"
                                type="email"
                                label="Email address"
                                placeholder="Enter your email address"
                                containerClass="flex-1"
                            />

                            <FormControl
                                name="contact.confirmationEmail"
                                required
                                id="email"
                                controlType="text"
                                type="email"
                                label="Confirmation email"
                                placeholder="Enter your confirmation email"
                                containerClass="flex-1"
                            />
                        </div>
                        <FormControl
                            name="contact.phone"
                            required
                            id="phone"
                            controlType="text"
                            label="Phone number"
                            placeholder="Enter your phone number (only digits)"
                        />

                        <FormControl
                            name="address.street"
                            required
                            id="street"
                            controlType="text"
                            label="Street name and house number"
                            placeholder="Enter your Street name and house number"
                        />

                        <div className="flex gap-3 flex-col md:flex-row">
                            <div className="flex-1">
                                {!countriesError && !isStatesError ? (
                                    <FormControl
                                        ref={stateSelectRef}
                                        name="address.state"
                                        required
                                        id="state"
                                        options={states || []}
                                        isDisabled={
                                            selectedCountryIos2 ? false : true
                                        }
                                        controlType="select"
                                        label="State"
                                        placeholder="State"
                                        isLoading={isStatesLoading}
                                        onChange={async (selectedStateObj) => {
                                            citySelectRef.current?.clearValue();

                                            if (!selectedStateObj) return;

                                            const {
                                                value: { country, state },
                                            } = selectedStateObj;
                                            setSelectedState({
                                                country,
                                                state,
                                            });
                                        }}
                                    />
                                ) : (
                                    <FormControl
                                        required
                                        label="State"
                                        controlType="text"
                                        placeholder="Enter Your State"
                                        name="address.state"
                                    />
                                )}
                            </div>

                            <div className="flex-1">
                                {!countriesError &&
                                !isStatesError &&
                                !isCitiesError ? (
                                    <FormControl
                                        ref={citySelectRef}
                                        name="address.city"
                                        required
                                        id="city"
                                        isDisabled={
                                            selectedState ? false : true
                                        }
                                        options={cities || []}
                                        controlType="select"
                                        label="City"
                                        placeholder="City"
                                        isLoading={isCitiesLoading}
                                    />
                                ) : (
                                    <FormControl
                                        required
                                        label="City"
                                        controlType="text"
                                        placeholder="Enter Your City"
                                        name="address.city"
                                    />
                                )}
                            </div>
                        </div>

                        <FormControl
                            name="address.postalCode"
                            id="postal_code"
                            label="Postal code"
                            required
                            placeholder="Enter your postal code"
                            controlType="text"
                        />
                    </div>
                </div>

                <div className="p-5 mt-5 border rounded-lg border-gray-200">
                    <FormControl
                        controlType="radio"
                        title="Shipping method"
                        name="shipping.method"
                        options={[
                            {
                                label: (
                                    <RadioLabel
                                        label="Free shipping"
                                        info="7 - 21 business days"
                                        price="$0"
                                    />
                                ),
                                value: "free",
                            },
                            {
                                label: (
                                    <RadioLabel
                                        label="Regular shipping"
                                        info="3 - 7 business days"
                                        price="$10.5"
                                    />
                                ),
                                value: "regular",
                            },
                            {
                                label: (
                                    <RadioLabel
                                        label="Express shipping"
                                        info="1 - 3 business days"
                                        price="$22.5"
                                    />
                                ),
                                value: "express",
                            },
                        ]}
                    />
                </div>

                <div className="p-5 mt-5 border rounded-lg border-gray-200">
                    <span className="font-semibold text-gray-700 mb-4 block">
                        Your Order
                    </span>
                </div>
            </FormikContainer>
        </div>
    );
};

export default Checkout;
