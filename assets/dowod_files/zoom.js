document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

document.addEventListener('wheel', function (e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchmove', function (e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });
