//Quais ações meu carrinho pode fazer

// adicionar item no cart
async function addItem(userCart, item) {
    userCart.push(item);
}

// deletar item do cart
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}

// remover um item
async function removeItem(userCart, index){

}

// calcular o total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log("\nShopee Cart TOTAL IS: ");
    return console.log(`🎁 Total: ${result}`);
}

async function displayCart(userCart) {
    console.log("\n🛒 Shopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
    });
}


export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
}