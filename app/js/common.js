window.addEventListener('DOMContentLoaded', function () {
    var burgers = document.querySelectorAll(".burger-container");
    for (var i = 0; i < burgers.length; i++) {
        toggle.apply(burgers[i]);
    }

    var control = document.getElementById("chk-control"), child;
    control.indeterminate = true;
    control.addEventListener('click', function () {
        if (this.checked) {
            for (let i = 0; i < burgers.length; i++) {
                child = burgers[i].children[0];
                child.classList.add(child.id + "-open");
            }
        }
        else {
            for (let i = 0; i < burgers.length; i++) {
                child = burgers[i].children[0];
                child.classList.remove(child.id + "-open");
            }
        }
    })
});

function toggle() {
    var menu = this.children[0];
    this.addEventListener('click', function () {
        menu.classList.toggle(menu.id + "-open");
    });
}

$('input[type=range]').on('input', function (e) {
    var min = e.target.min,
        max = e.target.max,
        val = e.target.value;

    $(e.target).css({
        'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
    });
}).trigger('input');


$(document).on({
    mouseenter: function () {
        mouse_is_inside = true;
        $(".text-wrapper1").addClass("text-active");
        $('.first-image').attr('src', 'img/1color.png');
    },

    mouseleave: function () {
        mouse_is_inside = false;
        $(".text-wrapper1").removeClass("text-active");
        $('.first-image').attr('src', 'img/1bw.png');
    }
}, '.our-team__container__photo-wrapper__one, .first-image');

$(document).on({
    mouseenter: function () {
        mouse_is_inside = true;
        $(".text-wrapper2").addClass("text-active");
        $('.second-photo').attr('src', 'img/2color.png');
    },

    mouseleave: function () {
        mouse_is_inside = false;
        $(".text-wrapper2").removeClass("text-active");
        $('.second-photo').attr('src', 'img/2bw.png');
    }
}, '.our-team__container__photo-wrapper__two, .second-photo');

$(document).on({

    mouseenter: function () {
        mouse_is_inside = true;
        $(".text-wrapper3").addClass("text-active");
        $('.third-photo').attr('src', 'img/3color.png');
    },

    mouseleave: function () {
        mouse_is_inside = false;
        $(".text-wrapper3").removeClass("text-active");
        $('.third-photo').attr('src', 'img/3bw.png');
    }
}, '.our-team__container__photo-wrapper__three, .third-photo');

let isActive = false;
let isActiveP = false;

$(document).on({
    click: function () {
        isActive = !isActive;
        if (!this.isActive) {
            $(".light-btn").addClass("active");
            $(".premium-btn").removeClass("active");
            isActiveP = false;
        }
        else
            $(".light-btn").removeClass("active");
    }
}, '.light-btn');

$(document).on({
    click: function () {
        isActiveP = !isActiveP;
        if (!this.isActiveP) {
            $(".premium-btn").addClass("active");
            $(".light-btn").removeClass("active");
            isActive = false;
        }
        else
            $(".premium-btn").removeClass("active");
    }
}, '.premium-btn');

// AOS.init( {disable: 'mobile'} );
