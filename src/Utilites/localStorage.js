const getStoredCart = () => {
    const getStoredCartString = localStorage.getItem('cart');
    if (getStoredCartString) {
        return JSON.parse(getStoredCartString);
    }
    return []
}

const savedCartToLS = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const addToLS = (id) => {
    const cart = getStoredCart();
    cart.push(id);

    //saved cart LS
    savedCartToLS(cart)
}

const removeItemLS=(id)=>{
    const cart = getStoredCart();
    const remainingCart = cart.filter(idx=> idx !== id);
    savedCartToLS(remainingCart);
}

export { addToLS, getStoredCart, removeItemLS }