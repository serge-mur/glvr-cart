document.addEventListener("DOMContentLoaded", () => {

    console.log('DOMContentLoaded');

    // collapse products
    document.querySelectorAll('.products__header').forEach(btn => {
        btn.addEventListener('click', function(e) {
            console.log(e.target);
            const item = e.target.closest('.products');
            const isActive = item.classList.contains('active');
            item.classList.toggle('active', !isActive);
        });
    });

});