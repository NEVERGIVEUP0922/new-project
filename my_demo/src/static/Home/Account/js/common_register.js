'use strict';

//复选框
$("#jl-checkbox").click(function () {
    if ($(this).hasClass('jl-check-active')) {
        $(this).removeClass('jl-check-active');
    } else {
        $(this).addClass('jl-check-active');
    }
});

//按回车键光标落在下一个文本框

$('.js-next-input').on('keydown', function (e) {
    var e = e || event;
    var $all_input = $('.js-next-input');
    var index = $all_input.index(this);
    var length = $all_input.length;
    if (index + 1 < length && e.keyCode === 13) {
        $all_input[index + 1].focus();
    }
});