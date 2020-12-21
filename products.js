$.getJSON("products.json", function (json) {
    console.log(json);
    createProducts(json);
});

function createProducts(productsArray) {
    let productCardMajorSection = document.getElementsByClassName("product-card-major-section")[0];
    
    for (let i = 0; i < productsArray.length; i++) {
        let productCardContainer = document.createElement("div");
        productCardContainer.className = "product-card-container";
        let productCardWrapper = document.createElement("div");
        productCardWrapper.className = "product-card-wrapper";

        let productImgDiv = document.createElement("div");
        productImgDiv.className = "product-img";
        let productImg = document.createElement("img");

        let productInfo = document.createElement("div");
        productInfo.className = "product-info";

        let productText = document.createElement("div");
        productText.className = "product-text";

        let productTextH1 = document.createElement("h1");
        let productTextH2 = document.createElement("h2");
        let productTextP = document.createElement("p");
        productTextH1.className = "product-text-h1";
        productTextH2.className = "product-text-h2";
        productTextP.className = "product-text-p";

        let productPriceWrapper = document.createElement("div");
        productPriceWrapper.className = "product-price-btn";

        let productPriceArea = document.createElement("p");
        let productPriceButton = document.createElement("button")


        productCardWrapper.appendChild(productImgDiv);
        productInfo.appendChild(productText);
        productCardWrapper.appendChild(productInfo);
        productText.appendChild(productTextH1);
        productText.appendChild(productTextH2);
        productText.appendChild(productTextP);

        productInfo.appendChild(productPriceWrapper);
        productPriceWrapper.appendChild(productPriceArea);
        productPriceWrapper.appendChild(productPriceButton);


        productImgDiv.appendChild(productImg);
        productCardContainer.appendChild(productCardWrapper);
        productCardMajorSection.appendChild(productCardContainer);


        productImg.src = productsArray[i]["product-img"];
        productImg.style.height = "420";
        productImg.style.width = "327";


        productTextH1.innerHTML = productsArray[i]["product-text"]["product-text-h1"];
        productTextH2.innerHTML = productsArray[i]["product-text"]["product-text-h2"];
        productTextP.innerHTML = productsArray[i]["product-text"]["product-text-p"];

        productPriceArea.innerHTML = productsArray[i]["product-price-p"];

        productPriceButton.type = "button";
        productPriceButton.innerHTML = "BUY NOW"

    }
}