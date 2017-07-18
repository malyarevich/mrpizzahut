$("btn-feel-pizza").mousemove(function(){
    alert('Hi');
    $("container-fluid").css("-webkit-filter", function () {
       return "grayscale(0)";
    });
});


/*$("container-fluid").css("filter", function () {
    "grayscale(0)"
};
$("container-fluid").css("-webkit-filter", "grayscale(1)");
*/