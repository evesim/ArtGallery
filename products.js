$.getJSON("products.json", function (json) {
    console.log(json);
    createProducts(json);
});

function createProducts(productsArray) {
    for (let i = 0; i < productsArray.length; i++) {
        let productCardMajorSection = document.createElement("div");
        productCardMajorSection.className = "product-card-major-section";
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
        // work on this
        // let productTextH1 = document.createElement("h1");
        // let productTextH2 = document.createElement("h1");
        // let productTextP = document.createElement("h1")

        productImgDiv.appendChild(productImg);
        productInfo.appendChild(productText);
        productCardWrapper.appendChild(productInfo);
        productCardWrapper.appendChild(productImgDiv);
        productCardContainer.appendChild(productCardWrapper);
        productCardMajorSection.appendChild(productCardContainer);

        productImg.src = productsArray[i]["product-img"];
        productImg.style.height = "420";
        productImg.style.width = "327";

        document.body.appendChild(productCardMajorSection);
    }
}