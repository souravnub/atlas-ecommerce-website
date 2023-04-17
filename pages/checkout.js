import Steps from "@/components/Steps";
import FormControl from "@/components/formik/FormControl";
import FormikContainer from "@/components/formik/FormikContainer";
import React, { useRef } from "react";
import { object, string } from "yup";
import { useAtom, useSetAtom } from "jotai";
import {
    countriesAtom,
    loadableCitiesAtom,
    lodableStateAtom,
    selectedCountryIso2Atom,
    selectedStateAtom,
} from "@/stores/checkoutPageStore";

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
        region: "",
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
        email: string().email("Invalid email").required("Email is required"),
        confirmationEmail: string()
            .email("Invalid email")
            .required("Confirmation Email is required"),
        phone: string().required("Phone number is required"),
    }),
    address: object({
        street: string().required("Street & house number is required"),
        state: string().required("State is required"),
        city: string().required("City is required"),
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

const Checkout = () => {
    const stateSelectRef = useRef();
    const citySelectRef = useRef();
    const setSelectedCountryIso2 = useSetAtom(selectedCountryIso2Atom);
    const [selectedState, setSelectedState] = useAtom(selectedStateAtom);

    const [countries] = useAtom(countriesAtom);
    const [states] = useAtom(lodableStateAtom);
    const [cities] = useAtom(loadableCitiesAtom);

    return (
        <div className="mt-10">
            <Steps steps={steps} activeStepIdx={1} />

            <FormikContainer
                validationSchema={validationSchema}
                className="mt-8 p-5 border rounded-lg border-gray-200"
                formId="checkout-form"
                initialValues={INITIAL_CHECKOUT_FORM_VALUES}
                onSubmit={(values) => console.log(values)}>
                <div>
                    <span className="font-semibold text-gray-700 mb-4 block">
                        Select shipping country
                    </span>
                    <FormControl
                        required
                        form="checkout-form"
                        placeholder="Select a country..."
                        name="shipping.country"
                        controlType="select"
                        options={countries.data || []}
                        isLoading={countries.state === "loading"}
                        onChange={({ value: countryIso }) => {
                            setSelectedCountryIso2(countryIso);
                            stateSelectRef.current.clearValue();
                        }}
                    />
                </div>
                <hr className="my-6" />

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
                <div className="flex  gap-2">
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

                <div>
                    <FormControl
                        ref={stateSelectRef}
                        name="address.state"
                        required
                        id="state"
                        options={states.data || []}
                        controlType="select"
                        label="State"
                        placeholder="State"
                        isLoading={states.state === "loading"}
                        onChange={async (selectedStateObj) => {
                            citySelectRef.current.clearValue();

                            if (!selectedStateObj) return;

                            const {
                                value: { country, state },
                            } = selectedStateObj;
                            setSelectedState({ country, state });
                        }}
                    />

                    <FormControl
                        ref={citySelectRef}
                        name="address.city"
                        required
                        id="city"
                        options={cities.data || []}
                        controlType="select"
                        label="City"
                        placeholder="City"
                        isLoading={cities.state === "loading"}
                    />
                </div>

                <button type="submit">submit</button>
            </FormikContainer>
        </div>
    );
};

export default Checkout;
