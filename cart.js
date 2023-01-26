    //     var cartarr = [
    //         {
    //         image_url:"https://assets.ajio.com/medias/sys_master/root/20220513/xlLS/627e266eaeb26921af76fb97/-288Wx360H-463292644-grey-MODEL.jpg",
    //         brand:"Shirt",
    //         price: 800,
    //         name: "ALEXANDER MCQUEEN OVERSIZED LEATHER SNEAKER",
    //         qty:1,
    //         },
    //         {
    //         image_url: "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0123_2653a840-1950-40c4-9534-357696378291.jpg?v=1663818590",
    //         brand: "Printed Shirt",
    //         price: 1000,
    //         name: "ALEXANDER MCQUEEN OVERSIZED LEATHER SNEAKER",
    //         qty:1,
    //     },
    //     {
    //         image_url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/179f5214-4241-4d21-9126-107890c1c1fa/sb-long-sleeve-skate-t-shirt-zbRRls.png",
    //         brand: "T shirt",
    //         price: 600,
    //         name: "ALEXANDER MCQUEEN OVERSIZED LEATHER SNEAKER",
    //         qty:1,
    // }];

localStorage.setItem("sum", 0);
var prodList = JSON.parse(localStorage.getItem("prodList")) || [];
var sum = localStorage.getItem("sum") || 0;
console.log(sum);
var container = document.createElement("div");
container.setAttribute("id", "container");

display();

function display(){
    if(prodList.length>0){
        displayCart(prodList);
    }
    else{
        displayEmpty();
    }
}
function displayEmpty(){
    container.innerHTML = "";

    var head = document.createElement("div");
    head.setAttribute("id", "heading");
    var h1 = document.createElement("h1");
    h1.innerText = "CART";
    var divP = document.createElement("div");
    var empty = document.createElement("p");
    empty.innerText = "Your cart is currently empty."
    var btnContinue = document.createElement("p");
    btnContinue.setAttribute("id", "btn-continue-shopping");
    btnContinue.innerText = "Continue Shopping";
    btnContinue.onclick = continueShopping;
    divP.append(btnContinue);
    head.append(h1,empty, divP);
    container.append(head)
    document.querySelector("#page-content").append(container);
}

function displayCart(data){
    
    container.innerHTML = "";

    var head = document.createElement("div");
    head.setAttribute("id", "heading");
    var h1 = document.createElement("h1");
    h1.innerText = "CART";
    var divP = document.createElement("div");
    var btnContinue = document.createElement("p");
    btnContinue.setAttribute("id", "btn-continue-shopping");
    btnContinue.innerText = "Continue Shopping";
    btnContinue.onclick = continueShopping;
    divP.append(btnContinue);
    head.append(h1, divP);

    var divRowHead = document.createElement("div");
    divRowHead.setAttribute("id", "wrap-row-head");
    var rowConstant = document.createElement("div");
    rowConstant.setAttribute("id", "row-constant");
    rowConstant.classList.add("two-fifth");

    var hPrice = document.createElement("p");
    hPrice.innerText = "Price";
    
    var hQty = document.createElement("p");
    hQty.innerText = "Quantity";
    
    var hTotal = document.createElement("p");
    hTotal.innerText = "Total";
    
    rowConstant.append(hPrice, hQty, hTotal);
    divRowHead.append(rowConstant);

    container.append(head, divRowHead);

    var divCartProd = document.createElement("div");
    divCartProd.classList.add("cart_products");

    data.map((e, i)=>{


        var divProductDetail = document.createElement("div");
        divProductDetail.classList.add("product-detail");

        var divImgAndDetails =document.createElement("div");
        divImgAndDetails.classList.add("image-and-details", "three-fifth");

        var divImage = document.createElement("div");
        divImage.classList.add("image", "one-fourth");

        var aImg = document.createElement("a");
        aImg.setAttribute("href", "#");
        var img = document.createElement("img");
        img.setAttribute("src", e.image_url);
        aImg.append(img);
        divImage.append(aImg);
        // divImgAndDetails.append(divImage);


        var divDetailsClrSize = document.createElement("div");
        divDetailsClrSize.classList.add("details-clr-size", "three-fourth");
        
        var prodTitle = document.createElement("div");
        prodTitle.classList.add("prod-title");
        var aTitle = document.createElement("a");
        aTitle.setAttribute("href", "#");
        var title = document.createElement("p");
        title.innerText = e.name;
        aTitle.append(title);
        prodTitle.append(aTitle);

        var divColorSize = document.createElement("div");
        divColorSize.classList.add("color-size")
        var smallDetails = document.createElement("p");
        smallDetails.innerText = e.brand;
        divColorSize.append(smallDetails);

        var divRemBtn = document.createElement("div");
        divRemBtn.classList.add("remove-btn");
        var remove = document.createElement("p");
        remove.innerText = "REMOVE";
        divRemBtn.append(remove);
        divRemBtn.onclick = function(){
            removeItem(e, i);
        };
        divDetailsClrSize.append(prodTitle, divColorSize, divRemBtn);

        divImgAndDetails.append(divImage, divDetailsClrSize);

        var divPriceQtyTotal = document.createElement("div");
        divPriceQtyTotal.classList.add("price-qty-total", "two-fifth")

        var wrapPQT = document.createElement("div");
        wrapPQT.classList.add("wraps-price-qty-total");


        var price = document.createElement("div");
        price.classList.add("price");
        price.innerText = `$${e.best_price}`;
        
        var qty = document.createElement("div");
        qty.classList.add("qty");
        

        var input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("min", "0");
        input.setAttribute("value", e.qty);

        input.onchange = function(){
            qtyChanged(e, i);
        };
        // input.innerText = e.qty;
        qty.append(input);
        //need to take this after update cart button;

        var total = document.createElement("div");
        total.classList.add("total");
        var totalThis = e.qty * e.best_price;
        totalThis = Math.round(totalThis * 100)/100;
        total.innerText = `$${totalThis}`; //total logic = qty * price

        wrapPQT.append(price, qty, total);
        divPriceQtyTotal.append(wrapPQT);

        divProductDetail.append(divImgAndDetails, divPriceQtyTotal);
        divCartProd.append(divProductDetail);


    })

    container.append(divCartProd);

    var divCartTotal = document.createElement("div");
    divCartTotal.setAttribute("id", "cart-total");

    var divsubtotal = document.createElement("div");
    divsubtotal.classList.add("subTotal");
    var divSubText = document.createElement("div");
    divSubText.innerText = "SUBTOTAL";
    var divTotal = document.createElement("div");
    divTotal.setAttribute("id", "sumtotal");
    var total = 0;
    for(var i=0; i<data.length; i++){
        total += data[i].qty * data[i].best_price;
    }
    total = Math.round(total * 100)/100;
    divTotal.innerText = `$${total}`;
    //logic for total is sum of all the product;
    localStorage.setItem("sum", total);
    divsubtotal.append(divSubText, divTotal);

    var smalltext = document.createElement("p");
    smalltext.setAttribute("id", "small-text");
    smalltext.innerText = "Shipping, taxes, and discounts codes calculated at checkout.";

    var divBtns = document.createElement("div");
    divBtns.setAttribute("id", "btns");
    var updateBtn = document.createElement("button");
    updateBtn.setAttribute("id", "update-btn");
    var aCart = document.createElement("a");
    aCart.setAttribute("href", "cart.html");
    aCart.innerText = "UPDATE CART";
    updateBtn.append(aCart);
    updateBtn.onclick = function(){
        updateSubtotal(data);


    }

    var checkoutBtn = document.createElement("button");
    checkoutBtn.setAttribute("id", "checkout-btn");
    var aChkout = document.createElement("a");
    aChkout.setAttribute("href", "Information.html");
    aChkout.innerText = "CHECK OUT";
    checkoutBtn.append(aChkout);
    checkoutBtn.onclick = gotoCheckout;
    divBtns.append(updateBtn, checkoutBtn);

    divCartTotal.append(divsubtotal, smalltext, divBtns);
    
    container.append(divCartTotal);

    document.querySelector("#page-content").append(container);

    
}

function qtyChanged(e, i){
    e.qty = event.target.value;
    localStorage.setItem("prodList", JSON.stringify(prodList));
    // console.log(e.qty);
    // console.log(prodList[i]);
    var prod = document.getElementsByClassName("product-detail")[i];
    if(e.qty == 0){
        removeItem(e, i);
        // console.log(prod);
        // prod.remove();
    }
    
    updateThisTotal(e, i);

}

function updateThisTotal(e, i){
    if(e.qty>0){
        console.log(e.qty, e.best_price);
        var totalThis = e.qty * e.best_price;
        totalThis = Math.round(totalThis * 100)/100;
        console.log(totalThis);
        var targetTotal = document.getElementsByClassName("total")[i];
        targetTotal.innerText =  `$${totalThis}`;
        console.log(targetTotal.innerText);
        display();
    }
}

function removeItem(e, i){
    var prod = document.getElementsByClassName("product-detail")[i];
    prod.remove();
    console.log(e, i);
    prodList.splice(i, 1);
    localStorage.setItem("prodList", JSON.stringify(prodList));
    updateSubtotal(prodList);
}

function updateSubtotal(data){
    event.preventDefault();
    console.log(data);
    var total = 0;
    for(var i=0; i<data.length; i++){
        total += data[i].qty * data[i].best_price;
    }
    total = Math.round(total * 100)/100;
    console.log(total);
    // var subtotal = document.getElementById("sumtotal");
    // var qty = document.querySelectorAll("input");
    // var totalSingle = document.querySelectorAll(".total");
    
    // for(var i=0; i<qty.length; i++){
    //     sum =sum +  parseInt(totalSingle[i].innerText);
    //     // console.log(totalSingle[i].innerText);

    // }
    // sum = Math.round(sum * 100)/100;
    localStorage.setItem("sum", total);
    // subtotal.innertext = ("$", sum);
    // console.log(sum);
    display();
}
function continueShopping(){
    location.href = "index.html"
}

function gotoCheckout(){
    location.href = "Information.html";
}