$(document).ready(function () {
  $(".card-triggers__item").click(function (e) {
    e.preventDefault();

    $(".card-triggers__item").removeClass("card-triggers__item--active");
    $(".card-content").removeClass("card-content--active");

    $(this).addClass("card-triggers__item--active");
    $($(this).attr("href")).addClass("card-content--active");
  });
  $(".card-triggers__item:first").click();
});
