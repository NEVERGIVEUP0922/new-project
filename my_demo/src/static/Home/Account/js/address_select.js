'use strict';

define(['jquery', 'Toolkit/district', 'css!Home/Public/css/select_address.css'], function ($) {
    //初始化
    var $first = $('.js-select-first');
    var $second = $('.js-select-second');
    var $third = $('.js-select-third');
    var $input = $('input[name="company_area"]');
    var first_option = '';
    $.each(DISTRICT, function (index, value) {
        first_option += '<li data-index="' + index + '">' + value.name + '</li>';
    });
    $first.children('.lj-option-box').html(first_option);

    $('.jl-y-select').on('blur', function () {
        $(this).removeClass('jl-y-select-active');
    });
    $('.jl-y-select-title').on('click', function () {
        var $this = $(this);
        if ($this.parent().hasClass('jl-y-select-active')) {
            $this.parent().removeClass('jl-y-select-active');
        } else {
            $('.jl-y-select').removeClass('jl-y-select-active');
            $this.parent().addClass('jl-y-select-active');
        }
    });
    //第一层
    $('.js-select-first .lj-option-box').on('click', 'li', function () {
        var $this = $(this);
        var index = $this.data('index');
        $this.addClass('lj-active-li').siblings().removeClass('lj-active-li');
        $first.removeClass('jl-y-select-active').children('.jl-y-select-title').children('.jl-c-c').text($this.text());
        //第二层初始化
        if (DISTRICT[index].cell) {
            $second.show();
            $third.show();
            $second.removeClass('jl-c-right'); //给第二个删除属性值
            var second_option = '';
            $.each(DISTRICT[index].cell, function (index, value) {
                second_option += '<li data-index="' + index + '">' + value.name + '</li>';
            });
            $second.children('.lj-option-box').html(second_option);
            $second.children('.jl-y-select-title').children('.jl-c-c').text('请选择');
            $third.children('.jl-y-select-title').children('.jl-c-c').text('请选择');
            if ($input.val() !== '') {
                $input.val('');
                $input.change();
            }
        } else {
            $input.val(DISTRICT[index].code);
            $input.change();
            $second.hide();
            $third.hide();
        }
    });
    //第二层
    $('.js-select-second .lj-option-box').on('click', 'li', function () {
        var $this = $(this);
        var index1 = $('.js-select-first').find('.lj-active-li').data('index');
        var index2 = $this.data('index');
        $this.addClass('lj-active-li').siblings().removeClass('lj-active-li');
        $second.removeClass('jl-y-select-active').children('.jl-y-select-title').children('.jl-c-c').text($this.text());
        //初始化第三层
        if (DISTRICT[index1].cell[index2].cell) {
            $third.show();

            var third_option = '';
            $.each(DISTRICT[index1].cell[index2].cell, function (index, value) {
                third_option += '<li data-index="' + index + '">' + value.name + '</li>';
            });
            $third.children('.lj-option-box').html(third_option);
            $third.children('.jl-y-select-title').children('.jl-c-c').text('请选择');
            if ($input.val() !== '') {
                $input.val('');
                $input.change();
            }
        } else {
            $third.hide();
            $second.addClass('jl-c-right'); //给第二个添加属性值
            $input.val(DISTRICT[index1].cell[index2].code);
            $input.change();
        }
    });
    //第三层
    $('.js-select-third .lj-option-box').on('click', 'li', function () {
        var $this = $(this);
        var index1 = $('.js-select-first').find('.lj-active-li').data('index');
        var index2 = $('.js-select-second').find('.lj-active-li').data('index');
        var index3 = $this.data('index');
        $this.addClass('lj-active-li').siblings().removeClass('lj-active-li');
        $input.val(DISTRICT[index1].cell[index2].cell[index3].code);
        $input.change();
        $third.removeClass('jl-y-select-active').children('.jl-y-select-title').children('.jl-c-c').text($this.text());
    });
});