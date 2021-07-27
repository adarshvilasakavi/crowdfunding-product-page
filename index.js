  $(".bookmark-button").click(function() {
    $(this).html("<span class='bookmark'><img src='images/icon-bookmark.svg' class='bookmark-logo' alt='bookmark'></span><span class='bookmark bookmark-text'>Bookmarked</span>");
    $(this).css("color", "hsl(176, 72%, 28%)");
  });

  $(".donate-director").click(function() {
    $(".modal").css("display", "block");
  });
  $(".close").click(function() {
    $(".modal").css("display", "none");
  });

  $(".card-click").click(function() {
    $(this).toggleClass("border-class");
    $(".entering").toggleClass("block-class");
  });

$(".continue").click (function() {
  $(".modal").css("display", "none");
  $(".thanks-modal").css("display", "block");
});

$(".got-it").click(function() {
  $(".thanks-modal").css("display", "none");
});

$(".icon").click(function() {
  $(".navbar-nav").toggleClass("navbar-nav1");
})
