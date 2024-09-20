// Loading Screen Logic
let progress = 0;
const loadingScreen = document.getElementById('loading-screen');
const loadingPercentage = document.getElementById('loading-percentage');
const loadingProgress = document.getElementById('loading-progress');
const content = document.getElementById('content');

// Simulasi Proses Loading
function fakeLoading() {
    let interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            loadingScreen.classList.add('hide'); // Menghilangkan loading screen
            content.style.display = 'block'; // Menampilkan konten utama
        } else {
            progress += 1; // Tambah persentase
            loadingPercentage.innerText = progress + '%';
            loadingProgress.style.width = progress + '%'; // Update lebar loading bar
        }
    }, 30); // Kecepatan loading (30ms setiap kenaikan 1%)
}

// Memulai loading setelah halaman dimuat
window.addEventListener('load', fakeLoading);
 // Memulai loading setelah halaman dimuat
 window.addEventListener('load', fakeLoading);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
 // Form Validation
 const contactForm = document.getElementById('contactForm');

 contactForm.addEventListener('submit', function(event) {
     event.preventDefault();

     let name = document.getElementById('name').value;
     let email = document.getElementById('email').value;
     let message = document.getElementById('message').value;

     // Basic validation
     if(name === '' || email === '' || message === '') {
         alert('Semua field harus diisi!');
         return;
     }

     // Email validation (simple regex)
     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if(!emailPattern.test(email)) {
         alert('Email tidak valid!');
         return;
     }

     alert('Pesan berhasil dikirim!');
     contactForm.reset();  // Reset form after submission
 });
   // Back to Top Button
   const backToTopBtn = document.getElementById('backToTop');

   window.addEventListener('scroll', function() {
       if (window.scrollY > 300) {
           backToTopBtn.style.display = 'block';
       } else {
           backToTopBtn.style.display = 'none';
       }
   });

   backToTopBtn.addEventListener('click', function(e) {
       e.preventDefault();
       window.scrollTo({
           top: 0,
           behavior: 'smooth'
       });
   });