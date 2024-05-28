// Bu dosya, admin.html sayfasındaki işlevselliği sağlar.

// Sayfa yüklendiğinde localStorage'dan yasaklı haritaları alıp UI'yı günceller.
document.addEventListener('DOMContentLoaded', () => {
    const bannedMaps = JSON.parse(localStorage.getItem('bannedMaps')) || [];
    bannedMaps.forEach(map => {
        const button = document.getElementById(`slct${map}`);
        if (button) {
            button.style.filter = 'grayscale(100%)'; // Haritanın yasaklandığını görsel olarak belirtir
        }
    });
});
