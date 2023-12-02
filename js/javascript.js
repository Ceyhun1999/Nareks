let sectionBottom = document.querySelector('.section-bottom')

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 0) {
        sectionBottom.classList.add('header-active')
        
    } else {
        sectionBottom.classList.remove('header-active')
    }
});


