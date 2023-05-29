import CheckButton from "@/components/common/CheckButton";
import React, { useEffect } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { TbTrash } from "react-icons/tb";
import { useCart } from "./hooks/useCart";
import useSelect from "./hooks/useSelect";
import EmptyCart from "./components/EmptyCart";
import CostDisplay from "./components/CostDisplay";

const Cart = () => {
    const [
        selectedProducts,
        selectProduct,
        unSelectProduct,
        selectMultipleProducts,
        unSelectMultipleProducts,
    ] = useSelect();
    const {
        cart,
        increaseItem,
        removeItem,
        decreaseItem,
        removeMultipleItems,
    } = useCart();

    function handleCheckButton({ id: productId, toggleAction }) {
        if (toggleAction === true) {
            selectProduct(productId);
        } else if (toggleAction === false) {
            unSelectProduct(productId);
        }
    }
    function handleSelectAll() {
        selectMultipleProducts(cart.map((cartItem) => cartItem.id));
    }
    function handleUnselectAll() {
        unSelectMultipleProducts(cart.map((cartItem) => cartItem.id));
    }
    function handleRemoveSelectedProducts() {
        removeMultipleItems(selectedProducts);
        unSelectMultipleProducts(selectedProducts);
    }
    function handleRemoveItem(id) {
        removeItem(id);
        unSelectProduct(id);
    }

    return (
        <div className="mt-10">
            {cart.length === 0 && <EmptyCart />}

            {cart.length !== 0 && (
                <div className="lg:grid lg:grid-cols-6 lg:gap-x-12">
                    <div className="text-sm lg:text-base  lg:col-span-4">
                        <div className="font-semibold flex justify-between items-center">
                            <h1 className="text-3xl">Cart</h1>
                            <button
                                onClick={handleRemoveSelectedProducts}
                                disabled={selectedProducts.length === 0}
                                className="flex gap-1 text-sm items-center p-2 rounded-md disabled:opacity-50">
                                <TbTrash className="text-xl" /> Remove
                            </button>
                        </div>

                        <table className="w-full mt-10">
                            <thead>
                                <tr className="uppercase lg:text-sm text-gray-500">
                                    <th className="text-start pb-5 pr-3 sm:pr-0">
                                        <CheckButton
                                            disabled={cart.length === 0}
                                            id="select-all"
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    handleSelectAll();
                                                } else {
                                                    handleUnselectAll();
                                                }
                                            }}
                                        />
                                    </th>
                                    <th className="font-bold  text-start pb-5">
                                        product
                                    </th>
                                    <th className="font-bold text-center sm:text-start pb-5">
                                        quantity
                                    </th>
                                    <th className="font-bold text-end pb-5">
                                        price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(
                                    ({
                                        id,
                                        img,
                                        name,
                                        count,
                                        unitPrice,
                                        props,
                                    }) => {
                                        return (
                                            <tr
                                                key={id}
                                                className="border-t last:border-b">
                                                <td className="py-5">
                                                    <CheckButton
                                                        id={id}
                                                        checked={
                                                            selectedProducts.find(
                                                                (pId) =>
                                                                    pId === id
                                                            )
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={(e) =>
                                                            handleCheckButton({
                                                                id,
                                                                toggleAction:
                                                                    e.target
                                                                        .checked,
                                                            })
                                                        }
                                                    />
                                                </td>
                                                <td className="flex gap-3 flex-col sm:flex-row flex-wrap py-5 capitalize font-semibold">
                                                    <img
                                                        src={img}
                                                        alt={name}
                                                        className="max-w-[4rem] sm:max-w-[8rem] aspect-square rounded-md object-cover"
                                                    />
                                                    <div>
                                                        <span>{name}</span>
                                                        <div className="mt-0.5">
                                                            {Object.values(
                                                                props
                                                            ).map((prop) => (
                                                                <span
                                                                    key={prop}
                                                                    className="first:border-l-0 first:pl-0 border-gray-300 text-gray-400 font-medium border-l-2 px-2">
                                                                    {prop}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-5 align-top">
                                                    <div className="w-min mx-auto sm:mx-0">
                                                        <div className="flex gap-2 border w-min rounded-md overflow-hidden items-center">
                                                            <button
                                                                onClick={() =>
                                                                    decreaseItem(
                                                                        {
                                                                            id,
                                                                            decrement: 1,
                                                                        }
                                                                    )
                                                                }
                                                                className="p-3  text-gray-600">
                                                                <FiMinus />
                                                            </button>
                                                            <span className="font-semibold">
                                                                {count}
                                                            </span>
                                                            <button
                                                                onClick={() =>
                                                                    increaseItem(
                                                                        {
                                                                            id,
                                                                            increment: 1,
                                                                        }
                                                                    )
                                                                }
                                                                className="p-3  text-gray-600">
                                                                <FiPlus />
                                                            </button>
                                                        </div>

                                                        <button
                                                            onClick={() =>
                                                                handleRemoveItem(
                                                                    id
                                                                )
                                                            }
                                                            className="text-sm font-semibold flex gap-1 items-center mx-auto w-min mt-4">
                                                            <TbTrash className="text-xl" />
                                                            Remove
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="py-5 font-semibold  align-top text-end">
                                                    ${unitPrice * count}
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>

                    <CostDisplay cart={cart} />
                </div>
            )}
        </div>
    );
};

export default Cart;
