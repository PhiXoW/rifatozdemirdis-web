// Sayfa yüklendiğinde çalışacak ana fonksiyon
document.addEventListener('DOMContentLoaded', () => {

    // === 1. MODAL İŞLEMLERİ ===
    const modal = document.getElementById("treatmentModal");
    
    // Modal açma fonksiyonunu global yapmak için window objesine ekliyoruz
    window.openModal = function(title, description) {
        if(modal) {
            document.getElementById("modalTitle").innerText = title;
            document.getElementById("modalDesc").innerText = description;
            modal.style.display = "flex"; 
        }
    }
    
    window.closeModal = function() {
        if(modal) modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target === modal) window.closeModal();
    }

    // === 2. HAMBURGER MENÜ ===
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mainMenu = document.querySelector('.main-menu');
    
    if (hamburgerBtn && mainMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mainMenu.classList.toggle('active');
            if (mainMenu.classList.contains('active')) {
                hamburgerBtn.style.color = '#2563eb'; 
            } else {
                hamburgerBtn.style.color = ''; 
            }
        });
        
        const menuLinks = document.querySelectorAll('.main-menu ul li a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainMenu.classList.remove('active');
                hamburgerBtn.style.color = '';
            });
        });
    }

    // === 3. SWIPER (KLİNİK GALERİSİ) COVERFLOW TASARIMI ===
    const clinicGallery = document.querySelector('.clinicGallery');
    if(clinicGallery) {
        const swiper = new Swiper('.clinicGallery', {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            loop: true,
            coverflowEffect: {
                rotate: 0,
                stretch: -20,
                depth: 120,
                modifier: 2,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

});