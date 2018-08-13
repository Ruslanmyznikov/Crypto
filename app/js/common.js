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