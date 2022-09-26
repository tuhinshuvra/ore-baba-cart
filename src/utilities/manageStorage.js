// let shoppingCart;
// const shoppingCartItem = localStorage.getItem('shopping-cart');

// if (shoppingCartItem) {
//     shoppingCart = JSON.parse(shoppingCartItem);
// } else {
//     shoppingCart = {};
// }


// // add item to shopping cart
// const addToDb = (id) => {

//     const quantity = shoppingCart[id];
//     if (quantity) {
//         shoppingCart[id] = quantity + 1;
//     } else {
//         shoppingCart[id] = 1;
//     }

//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// };

// // decrease no of item from shopping cart
// const decreaseItemFromDb = (id) => {
//     const quantity = shoppingCart[id];
//     if (quantity > 1) {
//         shoppingCart[id] = quantity - 1
//     } else {
//         shoppingCart[id] = 1;
//     }

//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// };

// // remove an selected item from shopping cart
// const removeFromDb = (id) => {
//     if (id in shoppingCart) {
//         delete shoppingCart[id];
//         localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//     }
// }

// // delete all item from shopping cart
// const deleteShoppingCart = () => {
//     localStorage.removeItem('shopping-cart');
// }

// export { addToDb, decreaseItemFromDb, removeFromDb, deleteShoppingCart };