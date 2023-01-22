// casquette
// price_1M8NbhFdXSlraEJ4jusCMSd8

// tshirt 
// price_1M8NaVFdXSlraEJ4TjHV6B3C

// Mug
// price_1M8Nb0FdXSlraEJ4nwIc80l8


const productsArray = [
    {
        id: "price_1M8NaVFdXSlraEJ4TjHV6B3C",
        nom: "Tshirt",
        prix: "14.99",
        imgUrl: "/imgs/tshirt.jpg" 
    },
    {
        id: "price_1M8NbhFdXSlraEJ4jusCMSd8",
        nom: "Casquette",
        prix: "11.99",
        imgUrl: "/imgs/casquette.jpg"
    },
    {
        id: "price_1M8Nb0FdXSlraEJ4nwIc80l8",
        nom: "Mug",
        prix: "7.99",
        imgUrl: "/imgs/mug.jpg"
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id)
    return undefined
    }

    return productData
}

export { productsArray, getProductData }