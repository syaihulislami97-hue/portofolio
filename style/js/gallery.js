// Script Animasi Scroll (Reveal) khusus Halaman Galeri

document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk memeriksa elemen dalam viewport
    const revealElements = () => {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Jarak dari bawah sebelum elemen muncul

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Jalankan saat di-scroll
    window.addEventListener('scroll', revealElements);

    // Jalankan sekali saat halaman dimuat agar elemen atas langsung muncul
    revealElements();
});