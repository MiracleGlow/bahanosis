// (JavaScript tidak perlu diubah, sama seperti versi sebelumnya)
        document.addEventListener('DOMContentLoaded', function() {
            const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
            const mainNav = document.querySelector('.main-nav');
            const dropdownLinks = document.querySelectorAll('.main-nav .dropdown > a');
            
            const submenuContainer = document.querySelector('.mobile-submenu-container');
            const submenuTitle = document.querySelector('.submenu-title');
            const submenuList = document.querySelector('.submenu-list');
            const backButton = document.querySelector('.submenu-back-button');

            mobileNavToggle.addEventListener('click', () => {
                const isNavOpen = mainNav.classList.contains('active');
                if (isNavOpen) {
                    mainNav.classList.remove('submenu-active');
                }
                mainNav.classList.toggle('active');
                document.body.classList.toggle('nav-open');
            });

            dropdownLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        const parentDropdown = link.parentElement;
                        const title = link.querySelector('.icon-text').textContent;
                        const sourceList = parentDropdown.querySelector('.dropdown-menu');
                        submenuTitle.textContent = title;
                        submenuList.innerHTML = ''; 
                        sourceList.querySelectorAll('li a').forEach(item => {
                            const newLi = document.createElement('li');
                            const newA = document.createElement('a');
                            newA.href = item.href;
                            newA.textContent = item.textContent;
                            newLi.appendChild(newA);
                            submenuList.appendChild(newLi);
                        });
                        mainNav.classList.add('submenu-active');
                    }
                });
            });

            backButton.addEventListener('click', () => {
                mainNav.classList.remove('submenu-active');
            });
        });