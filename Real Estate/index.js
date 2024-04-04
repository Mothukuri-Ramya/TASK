document.addEventListener("mousemove", function(e) {
    let x = e.clientX;
    let y = e.clientY;
    document.querySelectorAll('.hover-effect').forEach(function(img) {
        img.nextElementSibling.style.left = x + 'px';
        img.nextElementSibling.style.top = y + 'px';
    });
});
