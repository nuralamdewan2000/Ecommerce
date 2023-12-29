const products = [
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
      name: 'APPLE iPhone 14 (Blue, 128 GB)',
      price: '₹57,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70',
      name: 'APPLE iPhone 12 (Blue, 64 GB)',
      price: '₹42,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70',
      name: 'APPLE iPhone 13 (Blue, 128 GB)',
      price: '₹58,900'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/r/x/-original-imagth5xf4shxcuv.jpeg?q=70',
      name: 'SAMSUNG Galaxy S22 5G (Phantom White, 128 GB)',
      price: '₹39,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/x/0/-original-imagtnqjjfgxzpz4.jpeg?q=70',
      name: 'Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)',
      price: '₹32,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/x/0/-original-imagszg3qxqgdx9c.jpeg?q=70',
      name: 'Infinix Zero 30 5G (Rome Green, 256 GB)',
      price: '₹23,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/l4ln8nk0/mobile/6/s/i/-original-imagfgf9nf8psuyv.jpeg?q=70',
      name: 'OPPO A57 (Glowing Green, 64 GB)',
      price: '₹10,987'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/l0zm64w0/mobile/w/0/i/-original-imagcnn5ahg6pwzd.jpeg?q=70',
      name: 'OPPO A96 (Starry Black, 128 GB)',
      price: '₹15,849'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70',
      name: 'REDMI 12 (Moonstone Silver, 128 GB)',
      price: '₹10,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/a/g/-original-imags37h4prxjazz.jpeg?q=70',
      name: 'REDMI 12 (Pastel Blue, 128 GB)',
      price: '₹10,999'
    }
  ];

let cartDAta = JSON.parse(localStorage.getItem("cartItems"));
let cartCountDiv = document.getElementById("cart-count");
cartCountDiv.innerText = cartDAta.length

let cardContainer = document.querySelector("#card-container");

//create a single card
function createCard(product){
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = product.imageUrl;
  img.alt = product.name;

  const title = document.createElement('h2');
  title.textContent = product.name;

  const price = document.createElement('p');
  price.classList.add('price');
  price.textContent = product.price;

  let button = document.createElement("button");
  button.className = "button";
  button.innerText = "ADD TO CART";
  button.addEventListener("click",()=>{
    let cardObject = {
      imageUrl: product.imageUrl,
      name: product.name,
      price: product.price,
   }
    //check if the cartItems is present in the local Storage or take empty array
    if(isProductInCart( cardObject )){
      alert("The product is already in the cart!");
    }else{
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(cardObject);
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    cartCountDiv.innerText = cartItems.length;
    }
    
    
  })

  card.append(img,title,price,button);

  return card;
}

// //to product into cart
// function addTocart(product){
//   let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
//   cart.push(product);
//   localStorage.setItem("cartItems",JSON.stringify(cart));

// }

// //to update the 
// function updatedCartCount (){
//   let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
//   let cardCountDiv = document.getElementById("cart-count");
//   cardCountDiv.innerText = cart.length
// }

//append the all cards into the DOM
function appendProducts(products){
  //catch the container from the DOM
  let card_container = document.getElementById("card-container");
  //reset the conatiner if necessary
  // card_container.innerHTML = "";

  products.forEach((product)=>{
    //create a card
    let card = createCard(product);
    card_container.append(card);

  })
}

appendProducts(products)
//  updatedCartCount ();

function isProductInCart( cardObject ){
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [] ;
 
      for(let item of cartItems){
      if(item.imageUrl === cardObject.imageUrl ||
        item.name === cardObject.name ||
        item.price === cardObject.price ) {
        return true;
        }
      }
      return false ;
}