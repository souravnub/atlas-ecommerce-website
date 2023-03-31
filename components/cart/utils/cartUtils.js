export function getIncreasedItemCountCart(currentCart, productId, increment) {
    const newCart = currentCart.map((cartItem) => {
        if (cartItem.id === productId) {
            return { ...cartItem, count: cartItem.count + increment };
        }
        return cartItem;
    });
    return newCart;
}
export function getDecreasedItemCountCart(currentCart, productId, increment) {
    if (currentCart.find((item) => item.id === productId).count - 1 === 0) {
        return removeItemFromCart(currentCart, productId);
    }

    return currentCart.map((cartItem) => {
        if (cartItem.id === productId) {
            return { ...cartItem, count: cartItem.count - increment };
        }
        return cartItem;
    });
}
export function removeItemFromCart(currentCart, productId) {
    return currentCart.filter((item) => item.id !== productId);
}
