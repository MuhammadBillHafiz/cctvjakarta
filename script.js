// Mengambil semua elemen marker CCTV
const markers = document.querySelectorAll(".cctv-marker");

// Mengambil elemen popup video, sumber video, dan alamat
const videoPopup = document.getElementById("video-popup");
const closePopup = document.getElementById("close-popup");
const videoSrc = document.getElementById("video-src");
const alamatCctv = document.getElementById("alamat-cctv");

// Fungsi untuk membuka video saat marker diklik
markers.forEach((marker) => {
  marker.addEventListener("click", function () {
    const videoLink = marker.getAttribute("data-video");
    const alamat = marker.getAttribute("data-alamat");
    videoSrc.src = videoLink; // Menambahkan URL video ke iframe
    alamatCctv.textContent = `Alamat: ${alamat}`; // Menampilkan alamat CCTV
    videoPopup.style.display = "block"; // Menampilkan popup
  });
});

// Fungsi untuk menutup popup video
closePopup.addEventListener("click", function () {
  videoPopup.style.display = "none"; // Menyembunyikan popup
  videoSrc.src = ""; // Menghentikan pemutaran video saat popup ditutup
  alamatCctv.textContent = ""; // Menghapus teks alamat
});
