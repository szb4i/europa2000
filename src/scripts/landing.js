window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.hero-title-loading')?.classList.add('hero-title-loaded');
        document.querySelectorAll('.hero-element-hidden')?.forEach(element => {
            element.classList.add('hero-element-shown');
        });
    }, 500);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden-1s, .hidden-2s");
hiddenElements.forEach((el) => observer.observe(el));



