const about = document.querySelector('#about');

if (about) {
    const aboutAside = document.querySelector('#about-aside');

    aboutAside.addEventListener('click', e => {
        if (e.target.tagName === 'LI') {
            const target = e.target.dataset.target;
            const aboutSections = Array.from(document.querySelector('#about-content').children);

            aboutSections.forEach(child => {
                if (child.id === target && child.classList.contains('d-none')) child.classList.remove('d-none');
                else if (child.id !== target) child.classList.add('d-none');
            });
        }
    });
}