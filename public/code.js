$(".bi.bi-toggle-off").click(function(){
    onandoff();
    nightmodeOn();
});
$(".bi.bi-toggle-on").click(function(){
    onandoff();
    nightmodeOff();
});
$(".bi.bi-google").click(function(e){
    e.preventDefault()
    var query = document.querySelector(".prompt-submit").value;
    var enconding = encodeURIComponent(query);
    window.location.href = "https://www.google.com/search?q=" + enconding;
});
$(".play-in-prompt-a").click(function(e){
    e.preventDefault();
    $(".savedGenerated-videos").toggleClass("hide");
    var spanning = $(".play-in-prompt-a span").html();
    $(".background-video").attr('src',`${spanning}`);
    $(".background-video").attr('controls',"true");
    $(".intro-conteiner").addClass("hide"); 
});
$(".bi.bi-play").dblclick(function(e){
    e.preventDefault();
    $(".savedGenerated-videos").toggleClass("hide");
    var spanning = $(".play-in-prompt-a span").html();
    $(".background-video").attr('src',"#");
    $(".background-video").removeAttr('controls');
    $(".intro-conteiner").removeClass("hide"); 
});
$(".bi.bi-list").click(function(){
    closeOpen();
    $(".side-bar").css("min-width","15rem");
    $(".side-bar").toggleClass("change");
    $("body").css("padding-right","0px")
});
$(".bi.bi-play").click(function(){
    $(".savedGenerated-videos").toggleClass("hide"); 
    var a = document.querySelector(".savedGenerated-videos");
    var b = document.querySelector(".bi.bi-play");
    closeTab(a,b)
});
$(".bi.bi-robot").click(function(){
    alert("feature not available at the moment")
});
$(".bi.bi-mic-fill").click(function(){
    alert("feature not available at the moment")
})
$(".bi.bi-sliders").click(function(){
    $(".options").toggleClass("hide"); 
    var a = document.querySelector(".options");
    var b = document.querySelector(".bi.bi-sliders");
    closeTab(a,b)
});
$(".bi.bi-images").click(function(){
    $(".pictureUpload").toggleClass("hide");
});
$(".bi.bi-cloud-arrow-up").click(function(){
    $(".files").click();
})
$(".bi.bi-x-square-fill").click(function(){
    $(".options").toggleClass("hide"); 
});
$(".bi.bi-x-lg").click(function(){
    closeOpen();
    $(".side-bar").css("min-width","3rem");
    $(".side-bar").toggleClass("change");
    $("body").css("padding-right","10px")
});
$(".bi.bi-view-list").click(function(){
    $(".side-bar").toggleClass("hide");
});
function closeOpen(){
    $(".opened").toggleClass("hide");
    $(".closed").toggleClass("hide");
}
function onandoff(){
    $(".bi.bi-toggle-off").toggle("hide");
    $(".bi.bi-toggle-on").toggle("hide");
};
function nightmodeOn(){
    $(".side-bar").addClass("side-bar-nightmode");
    $("i").addClass("icon-nightmode");
    $("body").addClass("body-nightmode");
    $(".hero-Section").addClass("hero-nightmode");
    $(".prompt-answers").addClass("prompt-a-nightmode");
    $(".prompt").addClass("prompt-nightmode");
    $(".prompt input").addClass("input-nightmode");
    $(".search-conteiner").addClass("search-conteiner-nightmode");
    $(".hero-Section h3").addClass("hero-Section-nightmode-h3");
    $(".member").addClass("member-night-mode");
}
function nightmodeOff(){
    $(".side-bar").removeClass("side-bar-nightmode");
    $("i").removeClass("icon-nightmode");
    $("body").removeClass("body-nightmode");
    $(".hero-Section").removeClass("hero-nightmode");
    $(".prompt-answers").removeClass("prompt-a-nightmode");
    $(".prompt").removeClass("prompt-nightmode");
    $(".prompt input").removeClass("input-nightmode");
    $(".search-conteiner").removeClass("search-conteiner-nightmode");
    $(".hero-Section h3").removeClass("hero-Section-nightmode-h3");
    $(".member").removeClass("member-night-mode");
};
function closeTab(a,b){
    $(document).click(e=>{
        if(!a.contains(e.target) && e.target !== b){
            a.classList.add("hide");
        }
    })
}
