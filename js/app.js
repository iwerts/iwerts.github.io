$(document).foundation()
$.getJSON("data/products.json", function(data){
    var items = [];
    $.each(data, function(key, val){
//<div class="input-group plus-minus-input">
//  <div class="input-group-button">
//    <button type="button" class="button hollow circle" data-quantity="minus" data-field="quantity">
//      <i class="fa fa-minus" aria-hidden="true"></i>
//    </button>
//  </div>
//  <input class="input-group-field" type="number" name="quantity" value="0">
//  <div class="input-group-button">
//    <button type="button" class="button hollow circle" data-quantity="plus" data-field="quantity">
//      <i class="fa fa-plus" aria-hidden="true"></i>
//    </button>
//  </div>

        items.push("<div class=\"column\">"+
            "<img class=\"thumbnail\" src=\"https://placehold.it/550x550\">"+
            "<h5>"+val['name']+"</h5>"+
            "<div class=\"input-group plus-minus-input\">"+
            "<div class=\"input-group-button\">"+
            "<button type=\"button\" class=\"button hollow circle\" data-quantity=\"minus\" data-field=\"quantity"+val['product_code']+"\">"+
            "<i class=\"fa fa-minus\" aria-hidden=\"true\"></i>"+
            "</button>"+
            "</div>"+
            "<input class=\"input-group-field\" type=\"number\" name=\"quantity"+val['product_code']+"\" value=\"0\">"+
            "<div class=\"input-group-button\">"+
            "<button type=\"button\" class=\"button hollow circle\" data-quantity=\"plus\" data-field=\"quantity"+val['product_code']+"\">"+
            "<i class=\"fa fa-plus\" aria-hidden=\"true\"></i>"+
            "</button>"+
            "</div>"+
            "</div>");
    });
    
    $('#my_list').append.apply($('#my_list'), items);
});

jQuery(document).ready(function(){
    // This button will increment the value
    $('[data-quantity="plus"]').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $('[data-quantity="minus"]').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
});

