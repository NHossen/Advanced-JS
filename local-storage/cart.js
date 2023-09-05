//Full Procees to save data in local stroage 

const addYourProduct=()=>{//Get Data from input 1
    //console.log("cliked");
    //add product
    const getValue=document.getElementById("product-name");
    const getQuantiyValue=document.getElementById('product-quantity');
    const productName=getValue.value;
    const productQuantity=getQuantiyValue.value;
    getValue.value="";
    getQuantiyValue.value="";
    console.log(productName,productQuantity);
    displayProduct(productName,productQuantity);//Send product value another funtion
    saveProductInLocalStorage(productName,productQuantity);

}

const displayProduct=(product,quantity)=>{ //2 //Display all data in ui //this parameter need to used dynamicaly
    const addInDisplay=document.getElementById('product-container')
    const li =document.createElement("li");
    li.innerText=`${product} :- ${quantity} `;//dynamicaly added product name and quantity 
    addInDisplay.appendChild(li); 
}




//# Get Stored data// Important //3.2
const getStoredShoppingCart=()=>{
    const storeCart=localStorage.getItem("cart");
    let cart={} 
    if(storeCart){//If data availabe inside StoreCart -- cart = convert by json
       cart=JSON.parse(storeCart)//If data availabile inside storage it will convert in json
    }
    return cart;
}
//# Save product in local Storage //3.1
const saveProductInLocalStorage=(product,quantity)=>{//Final Step Save User data in local Storage
     
    const cart=getStoredShoppingCart();
    cart[product]=quantity;
    console.log(cart);
    const cartStringfu=JSON.stringify(cart);
    console.log(cartStringfu)
    localStorage.setItem('cart',cartStringfu)

} 

const displayProductfromLoaclStorage=()=>{
    const savedCart=getStoredShoppingCart();
    console.log(savedCart)
    for(const product in savedCart ){
        const quantity=savedCart[product];
        console.log(product,quantity)
        displayProduct(product,quantity)
    }
}
displayProductfromLoaclStorage()
