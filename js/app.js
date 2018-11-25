$(document).foundation()
$.getJSON("data/products.json", function(data){
    var items = [];
    $.each(data, function(key, val){
        items.push("<div class=\"column\">\n<img class=\"thumbnail\" src=\"https://placehold.it/550x550\">\n<h5>"+val['name']+"</h5>\n</div>");
    });
    
    $('#my_list').append.apply($('#my_list'), items);
});