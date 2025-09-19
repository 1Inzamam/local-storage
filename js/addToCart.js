const handleAddToCart = () => {
    const productName = document.getElementById('productName');
    const productQuantity = document.getElementById('productQuantity');
    const name = productName.value;
    const quantity = productQuantity.value;
    
    store(name, quantity);
    display(name, quantity);
    
    productName.value = "";
    productQuantity.value ="";
}

const display = (pname , pquantity) =>{
    const container = document.getElementById('productContainer');
    const li = document.createElement('li');
    li.innerText = `${pname} : ${pquantity}`;
    container.appendChild(li);
}

const store = (name, quantity) => {
    const product = { Name: name, Quantity: quantity};
    localStorage.setItem("Cart", JSON.stringify(product))
}