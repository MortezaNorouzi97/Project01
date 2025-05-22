function toggleActive(clickedDiv) {

    var allDivs = document.querySelectorAll('.custom-div');
    allDivs.forEach(function (div) {
        div.classList.remove('active');
    });

    clickedDiv.classList.add('active');
}


document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var tabClass = this.getAttribute('data-tab');

            var targetDiv = document.querySelector('.' + tabClass);
            if (targetDiv) {
                toggleActive(targetDiv);
            }
        });
    });
});