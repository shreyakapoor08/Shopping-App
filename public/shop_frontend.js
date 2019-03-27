
function fetchProducts (done) {
    $.get('/api/products', function (data) {
        done(data) //this data is all the data that we have fetched
    })
}

function createProductCard (product) {
    return $(` 
    <div class="col-4 card mx-2 p-4">
       <h4 class="product-name">${product.name}</h4>
       <div class="product-manufacturer">${product.manufacturer}</div>
       <div class="row">
       <div class="col m-3 p-3">
       <b>Rs. ${product.price}</b>
       </div>
       <button class="col btn btn-primary m-3">Buy</button>
       </div>
    </div> `
    )
}

$(function () {

    let productList = $('#product-list')
    
    fetchProducts(function (products) {
        productList.empty()
        for (product of products) {
            productList.append(createProductCard(products))
        }
    })
})

//we will make our function into our dollar function which makes it load after the window is loaded