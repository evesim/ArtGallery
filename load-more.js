let loadTopContainer= document.getElementsByClassName("load-top-container")[0];
let loadMoreA = document.createElement("a");
loadMoreA.href = "#";
loadMoreA.id = "loadMore";
loadMoreA.innerHTML = "Load More"

let loadToTop = document.createElement("a");
loadToTop.href = "#";
loadToTop.id = "top";
loadToTop.innerHTML = "Back to the top"

loadTopContainer.appendChild(loadMoreA);
loadTopContainer.appendChild(loadToTop);

$(function () {
    $(".product-card-container").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".product-card-container:hidden").slice(0, 4).slideDown();
        if ($(".product-card-container:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$('').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#top a').fadeIn();
    } else {
        $('#top a').fadeOut();
    }
});