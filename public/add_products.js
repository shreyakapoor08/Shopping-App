$(function () {
    let productName = $('#productName')
    let productManufacturer = $('#productManufacturer')
    let productPrice = $('#productPrice')


    $('#btnProductAdd').click(function () {
        //when button is clicked we will do something
        addProduct(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            function (addedProduct) {
                window.alert("Added " + addedProduct.name + " to Database")
            }
        )

    })

})