let docTitle = document.title;
window.addEventListener("blur", () =>{
document.title = "Where do you think you're going?";
})
windows.addEventListener("focus", () =>{
document.title = docTitle;
})



// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.5 });

    cards.forEach(card => {
        observer.observe(card);
    });
});

/* Add this CSS for the scroll animation */
.card {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.card.in-view {
    opacity: 1;
    transform: translateY(0);
}
