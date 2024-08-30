document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.count');

    function updateCounter(counter, target) {
        const speed = 200; // Adjust this for smoother transition
        const increment = target / speed;
        let count = 0;
        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(interval);
            }
            counter.innerText = Math.floor(count) + '%'; // Append '%' at the end
        }, 10); // Adjust the interval for smoother animation
    }

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        updateCounter(counter, target);
    });
});
