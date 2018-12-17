require(["js/libs/jquery.js"], function() {
    $("#btn").click(function() {
        if ($("#date").val() == "") {
            alert("您还没有日期")
        } else {
            var yue = $("#date").val().split("月")[0];
            var ri = $("#date").val().split("月")[1].slice(0, $("#date").val().split("月")[1].indexOf("日"))
            console.log(ri)
            window.location.href = `page/content.html?yue=${yue}&ri=${ri}`
        }
    })
})