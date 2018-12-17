require(["../js/libs/jquery.js"], function() {
    $.ajax({
        type: "get",
        url: "/api/data",
        success: function(data) {
            console.log(JSON.parse(data))
        }
    })
})