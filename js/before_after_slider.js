if (window.innerWidth > 776) {
    document.addEventListener('DOMContentLoaded', function () {
        let parent = document.querySelector('.splitview'),
            topPanel = parent.querySelector('.top'),
            handle = parent.querySelector('.handle'),
            skewHack = 0,
            delta = 0;

        // If the parent has .skewed class, set the skewHack var.
        if (parent.className.indexOf('skewed') !== -1) {
            skewHack = 1000;
        }

        parent.addEventListener('mousemove', function (event) {
            // Get the delta between the mouse position and center point.
            delta = (event.clientX - window.innerWidth / 2) * 0.01;

            // Move the handle.
            handle.style.left = event.clientX + delta + 'px';

            // Adjust the top panel width.
            topPanel.style.width = event.clientX + skewHack + delta + 'px';
        });
    });
}
