$(window).ready(function(){
    document.getElementById("loading").innerHTML='<p>Done!</p>';
    setTimeout(function(){
        $("#loading").css("opacity","0");
        $("#bigtext").css("left","0");
    },200)
    setTimeout(function(){
        $("header").css("top","0px");
        $("#rulesiframe").css("opacity","1");
    },400)
    setTimeout(function(){
        $("#loading").css("display","none");
        document.getElementById("loading").innerHTML='<p>Loading...</p>';
    },700)
});
function loadingpage() {
    console.log("Ok")
    $("#loading").css("display","flex");
    setTimeout(function(){
        $("#loading").css("opacity","1");
    },30)
    
    console.log("Done")
}