function fetchProducts (done) {
    $.get('/api/products', function (data) {
        done(data) //this data is all the data that we have fetched
    })
} //it sends a get req to the path and returns an array of products each of them being a JSON object

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
} //this function takes a product object and returns how the product card going to look like