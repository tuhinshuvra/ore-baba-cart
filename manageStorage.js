



let shoppingCart;
const shoppingCartItem = localStorage.getItem('shopping-cart');

if (shoppingCartItem) {
    shoppingCart = JSON.parse(shoppingCartItem);
} else {
    shoppingCart = {};
}

const addToDb = (id) => {

    const quantity = shoppingCart[id];
    if (quantity) {
        shoppingCart[id] = quantity + 1;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

const decreaseToDb = (id) => {
    const quantity = shoppingCart[id];
    if (quantity > 1) {
        shoppingCart[id] = quantity - 1
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const cleanShoppingCart = () => {
    localStorage.setItem('shopping-cart', {});
    localStorage.removeItem('shopping-cart');
}

export { addToDb, decreaseToDb, removeFromDb, cleanShoppingCart };