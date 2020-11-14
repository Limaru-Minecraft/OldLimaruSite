function pictures(){
    $('#cover').css("background-image","url('./Resources/osaka-small.jpg')")
    setTimeout(function(){
        $('#cover').css("opacity","0")
    },3500)
    setTimeout(function(){
        $('#cover').css("background-image","url('./Resources/1200.jpg')")
    },4000)
    setTimeout(function(){
        $('#cover').css("opacity","1")
    },4500)
}
window.setInterval(pictures,8000)