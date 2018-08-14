window.addEventListener('DOMContentLoaded', function() {
    var burgers = document.querySelectorAll(".burger-container");
    for (var i = 0; i < burgers.length; i++) {
        toggle.apply(burgers[i]);
    }

    var control = document.getElementById("chk-control"), child;
    control.indeterminate = true;
    control.addEventListener('click', function() {
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
    this.addEventListener('click', function() {
        menu.classList.toggle(menu.id + "-open");
    });
}

$('input[type=range]').on('input', function(e){
    var min = e.target.min,
        max = e.target.max,
        val = e.target.value;

    $(e.target).css({
        'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
    });
}).trigger('input');