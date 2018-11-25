$.getJSON("data/products.json", function(data){
    var items = [];
    $.each(data, function(key, val){
        items.push("<li id='"+key+"'>"+val['name']+"</li>");
        if (val['ships'].length > 0){
            items.push("<li><ul>")
            $.each(val['ships'], function(key, val){
                items.push("<li>"+val+"</li>");
            });
            items.push("</li></ul>")
        }
    });

    $("<ul/>",{
        "class":"my-new-list",
        html: items.join("")
    }).appendTo("body");
});