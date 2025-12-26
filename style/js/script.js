// 1. Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if(navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars'); icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times'); icon.classList.add('fa-bars');
    }
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times'); icon.classList.add('fa-bars');
    });
});

// 2. Scroll Reveal Animation
window.addEventListener('scroll', revealElements);

function revealElements() {
    var reveals = document.querySelectorAll('.reveal');
    var windowHeight = window.innerHeight;
    var elementVisible = 100;

    for (var i = 0; i < reveals.length; i++) {
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
revealElements();

// 3. Skill Bar Animation
const skillSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress-fill');
let animated = false;

window.addEventListener('scroll', () => {
    if (skillSection) {
        const sectionPos = skillSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if(sectionPos < screenPos && !animated) {
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => { bar.style.width = width; }, 100);
            });
            animated = true;
        }
    }
});

// 4. Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        btn.disabled = true;
        setTimeout(() => {
            alert('Pesan terkirim! Terima kasih telah menghubungi.');
            contactForm.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 1500);
    });
}

// 5. Download CV Handler
const downloadBtn = document.getElementById('downloadCvBtn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const cvContent = `CURRICULUM VITAE\n\nNama: Syaihulislami\nRole: Fotografer & Videografer\n\n(Ini adalah file contoh. Ganti dengan PDF asli Anda)`;
        const blob = new Blob([cvContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const tempLink = document.createElement('a');
        tempLink.href = url;
        tempLink.setAttribute('download', 'syaihulislami.txt');
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
    });
}
