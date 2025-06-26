document.addEventListener("DOMContentLoaded", () => {

    console.log('DOMContentLoaded');

    // collapse products
    document.querySelectorAll('.products__header').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const item = e.target.closest('.products');
            const isActive = item.classList.contains('active');
            item.classList.toggle('active', !isActive);
        });
    });

    // dropdown
    document.querySelectorAll('.dropdown').forEach(el => {
        el.querySelector('.dropdown__button').addEventListener("click", () => {         
            el.classList.toggle('dropdown_open');
        });  
    });

    // collapse total item
    document.querySelectorAll('.total__name-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const item = e.target.closest('.total__item-wrapper');
            const isActive = item.classList.contains('active');
            item.classList.toggle('active', !isActive);
        });
    });

    /* offcanvas */
    const offcanvasLink = document.querySelectorAll('.offcanvas-link');
    offcanvasLink.forEach(link => {
        const target = link.dataset.target;
        const offcanvas = document.getElementById(target);
        const offcanvasClose = offcanvas.querySelector('.offcanvas__close');
        const offcanvasOverlay = offcanvas.querySelector('.offcanvas__overlay');
        const offcanvasWrapper = offcanvas.querySelector('.offcanvas__wrapper');      
        link.addEventListener('click', () => {
            offcanvas.classList.add('is-opened');
            document.body.classList.add("remove-scrolling");
        });
        offcanvasClose.addEventListener('click', () => {
            offcanvas.classList.remove('is-opened');
            document.body.classList.remove("remove-scrolling");
        });
        offcanvasOverlay.addEventListener('click', () => {
            offcanvas.classList.remove('is-opened');
            document.body.classList.remove("remove-scrolling");
        });
    });

});