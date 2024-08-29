//Quais ações meu carrinho pode fazer

// adicionar item no cart
async function addItem(userCart, item) {
    userCart.push(item);
}

// deletar item do cart
async function deleteItem(userCart, name){

}

// remover um item
async function removeItem(userCart, index){

}

// calcular o total
async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}


export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal
}