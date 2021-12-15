function ShowProductsOnMain(products,location,cartArray){
    location.innerHTML = "";
    document.querySelector("#ForNoShow").innerHTML = "";
    products.map(function(item,index){
        let Mdiv = document.createElement("div");
        Mdiv.setAttribute("id","Mdiv");
        Mdiv.style.cursor = "pointer";

        var overlayDiv = document.createElement('div');
        overlayDiv.setAttribute("id","overlay");

        let btn = document.createElement("button");
        btn.textContent = "ADD TO CART";
        btn.setAttribute("id","toCartBtn1")
        btn.addEventListener("click",function(){
            addtoCart(item,index,cartArray)
        });

        overlayDiv.append(btn);
        Mdiv.append(overlayDiv);

        let image = document.createElement("img");
        image.src = item.image_url[0];
        image.onclick = ()=> {
            redirectedProduct(item);
        };

        let title = document.createElement("p");
        title.setAttribute("id","nameofprod")
        title.textContent = item.title;
        title.addEventListener("click", function(){
            redirectedProduct(item);
        });

        let price = document.createElement("p");
        price.setAttribute("id","priceOf")
        price.textContent = "₹ " + item.price ;
        price.addEventListener("click", function(){
            redirectedProduct(item);
        });

        let rating = document.createElement("div");
        let ratingtag = document.createElement("p");
        ratingtag.innerHTML = `${item.rating} <i style="font-size:8px" class="fas fa-star"></i>` ;
        rating.setAttribute("id","ratingOf");
        rating.append(ratingtag);
        if(item.rating < 4.0 && item.rating >= 2) rating.style.backgroundColor = "#cdd614";
        if(item.rating < 2.0) rating.style.backgroundColor = "#ff7800"
        rating.addEventListener("click", function(){
            redirectedProduct(item);
        });

        Mdiv.append(image, title, price,rating);
        location.append(Mdiv);

    })
}

function addtoCart(item,index,cartArray){
    console.log(item);
    console.log(index);
    let toCartItem = item;
    let uniqueId = item.id;
    let count = 0;
    for(let i = 0; i < cartArray.length ; i++){
        if(uniqueId == cartArray[i].id) alert("Item already exists in cart");
        else count++;
    }
    if(count == cartArray.length){
       document.querySelector("#toCartBtn1").innerHTML = "ADDED TO CART";
       cartArray.push(toCartItem);
       localStorage.setItem("cartItems", JSON.stringify(cartArray));  
    }
    
 }

 function redirectedProduct(item){
    let data = item;
    localStorage.setItem("DataIndivi",JSON.stringify(data));
    window.location.href = "productDetails.html";
}


export default ShowProductsOnMain ;