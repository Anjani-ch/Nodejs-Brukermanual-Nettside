const docs = document.querySelector('#docs');

if (docs) {
    docs.addEventListener('click', e => {
        if (e.target.tagName === 'LI') {
            const docsContent = document.querySelector('#docs-content');
            const docContentSections = Array.from(docsContent.children);

            const target = e.target.dataset.target;
            
            if (target.includes('installation')) {
                const docsInstallation = document.querySelector('#docs-installation');
                const installationSections = Array.from(docsInstallation.children);

                docContentSections.forEach(child => {
                    if (child === docsInstallation && child.classList.contains('d-none')) child.classList.remove('d-none');
                    else if (child !== docsInstallation && !child.classList.contains('d-none')) child.classList.add('d-none');
                });

                installationSections.forEach(child => {
                    if (child.id === target && child.classList.contains('d-none')) child.classList.remove('d-none');
                    else if (child.id !== target) child.classList.add('d-none');
                });
            } else {
                docContentSections.forEach(child => {
                    if (child.id === target && child.classList.contains('d-none')) child.classList.remove('d-none');
                    else if (child.id !== target) child.classList.add('d-none');
                });
            }
        } else if (e.target.id === 'docs-menu-toggler') {
            const docsMenuContainer = e.target.parentElement;
            const docsMenu = docsMenuContainer.parentElement.parentElement.children[1];
            const docsMenuIconSrc = !docsMenu.classList.contains('d-mb-none') ? '/img/hamburger-menu-icon.svg' : '/img/mark-icon.svg';

            e.target.src = docsMenuIconSrc;

            docsMenuContainer.style.marginTop = docsMenu.classList.contains('d-mb-none') ? '-5px' : '0px';
            docsMenu.classList.toggle('d-mb-none');
        } else {
            let targetEl;

            if (e.target.classList.contains('dropdown-head')) targetEl = e.target;
            if (e.target.parentElement.classList.contains('dropdown-head')) targetEl = e.target.parentElement;

            if (targetEl) {
                targetEl.parentElement.children[1].classList.toggle('d-none-important');
                targetEl.children[1].classList.toggle('dropdown-toggled');
            }
        }
    });
}