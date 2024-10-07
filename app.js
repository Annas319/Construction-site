document.addEventListener('DOMContentLoaded', function() {
    const counters = [
        { element: document.getElementById('counter1'), target: Math.floor(Math.random() * 1000) + 1 },
        { element: document.getElementById('counter2'), target: Math.floor(Math.random() * 1000) + 1 },
        { element: document.getElementById('counter3'), target: Math.floor(Math.random() * 100) + 1 },
        { element: document.getElementById('counter4'), target: Math.floor(Math.random() * 10000) + 1 },
    ];

    counters.forEach(counter => {
        let count = 0;
        const interval = setInterval(() => {
            if (count < counter.target) {
                count++;
                counter.element.textContent = count;
                counter.element.classList.add('spin-animation');
                setTimeout(() => counter.element.classList.remove('spin-animation'), 400);
            } else {
                clearInterval(interval);
            }
        }, 50); // Adjust the speed of the counter by changing the interval time
    });
});
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})