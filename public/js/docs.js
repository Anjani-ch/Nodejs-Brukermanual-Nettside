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
        } else {
            let target;

            if (e.target.classList.contains('dropdown-head')) target = e.target;
            if (e.target.parentElement.classList.contains('dropdown-head')) target = e.target.parentElement;

            if (target) {
                target.parentElement.children[1].classList.toggle('d-none-important');
                target.children[1].classList.toggle('dropdown-toggled');
            }
        }
    });
}

// Docs view responsiv
// Navbar responsiv
// theme toggle
// more examples