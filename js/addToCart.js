const handleAddToCart = () => {
    const productName = document.getElementById('productName');
    const productQuantity = document.getElementById('productQuantity');
    const name = productName.value;
    const quantity = productQuantity.value;
    
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