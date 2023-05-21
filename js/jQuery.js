$(document).ready(function(){
    const gnb = [
        ["Best Items","#Best-Items","nav-item","nav-link"]
        ,["Event","#Event","nav-item","nav-link"]
        ,["회사소개","#회사소개","nav-item","nav-link"]
        ,["고객리뷰","#고객리뷰","nav-item","nav-link"]
        ,["대표홈페이지","#대표홈페이지","nav-item","nav-link",]
    ]

    let nav = ""
    for(c in gnb)
        nav += `<li class=${gnb[c][2]}><a href=${gnb[c][1]} class=${gnb[c][3]}>${gnb[c][0]}</a></li>`

    $(".navbar-nav").html(nav)
})