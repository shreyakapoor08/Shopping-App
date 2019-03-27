$(function () {

    let productList = $('#product-list')
    
    fetchProducts(function (products) {
        productList.empty()
        for (product of products) {
            productList.append(createProductCard(product))
        }
    })
})

//we will make our function into our dollar function which makes it load after the window is loaded