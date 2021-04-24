$(function () {
    $('#clock').countdown('2021/1/1').on('update.countdown', function (event) {
        $(this).html(event.strftime(''
            + '<div class="m-2"><span class="h1 font-weight-bold">%D</span> Day%!d</div>'
            + '<div class="m-2"><span class="h1 font-weight-bold">%H</span> Hr</div>'
            + '<div class="m-2"><span class="h1 font-weight-bold">%M</span> Min</div>'
            + '<div class="m-2"><span class="h1 font-weight-bold">%S</span> Sec</div>'));
    });
});