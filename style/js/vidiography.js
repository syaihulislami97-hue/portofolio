// Script Animasi Scroll (Reveal)

document.addEventListener('DOMContentLoaded', () => {
    
    // Fungsi Reveal saat Scroll
    const revealElements = () => {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealElements);
    revealElements(); // Trigger awal

    // Logika Video Player
    const videos = document.querySelectorAll('video');
    
    if (videos.length === 0) {
        console.log("Info: Tidak ada video ditemukan di halaman ini.");
    }

    videos.forEach(video => {
        // Cek Error: Jika video gagal dimuat (salah path/format), log ke console
        video.addEventListener('error', function() {
            console.error("Error: Video tidak dapat dimuat. Cek path file:", video.currentSrc);
            video.parentElement.style.border = "1px solid red"; // Indikator visual error
        }, true);

        // 1. Fitur Toggle: Klik area video untuk Play/Pause
        video.addEventListener('click', (e) => {
            // Cek apakah video sedang pause atau play
            if (video.paused) {
                // Gunakan Promise untuk menangkap error playback
                var playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        // Video berhasil diputar
                    })
                    .catch(error => {
                        console.error("Gagal memutar video:", error);
                    });
                }
            } else {
                video.pause();
            }
        });

        // 2. Opsional: Pause video lain saat satu video diputar (Biar suara gak tabrakan)
        video.addEventListener('play', () => {
            videos.forEach(v => {
                if(v !== video) {
                    v.pause();
                }
            });
        });
    });
});