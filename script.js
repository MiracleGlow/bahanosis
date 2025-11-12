document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const dropdowns = document.querySelectorAll('.main-nav .dropdown');

    // Fungsi untuk membuka/menutup menu mobile
    mobileNavToggle.addEventListener('click', () => {
        const isNavActive = mainNav.classList.toggle('active');
        document.body.classList.toggle('nav-open', isNavActive);
    });

    // Menangani dropdown agar bisa di-tap di mobile
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        link.addEventListener('click', (event) => {
            // Hanya jalankan logika ini jika dalam mode mobile (navbar tidak terlihat)
            if (getComputedStyle(mainNav).display !== 'flex' && window.innerWidth <= 768) {
                event.preventDefault(); // Mencegah link berpindah halaman
                
                // Tutup dropdown lain yang mungkin terbuka
                dropdowns.forEach(d => {
                    if (d !== dropdown) {
                        d.classList.remove('active');
                    }
                });

                // Buka/tutup dropdown yang di-tap
                dropdown.classList.toggle('active');
            }
        });
    });

    // Menutup menu mobile jika salah satu link (non-dropdown) di-klik
    const navLinks = document.querySelectorAll('.main-nav a:not(.dropdown > .nav-link)');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (document.body.classList.contains('nav-open')) {
                mainNav.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
    });
});