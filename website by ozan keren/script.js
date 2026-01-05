// Function to change footer text when page loads (just for fun!)
window.addEventListener('load', function() {
    const footerH2 = document.querySelector('div:last-of-type h2');
    footerH2.textContent = 'Good luck, hope it works!!'; // Add fun text
    footerH2.style.color = '#ff4500'; // Orange color for excitement
});

// Optional: Make nav items alert a message when clicked (like a game!)
const navItems = document.querySelectorAll('li');
navItems.forEach(item => {
    item.addEventListener('click', function() {
    });
});function tampilkanPesan(jenis) {
} {

}function bukaModal(tipe) {
  const modal = document.getElementById("myModal");
  const isi = document.getElementById("isi-modal");

  modal.style.display = "block";

  if (tipe === 'about') {
    isi.innerHTML = `
      <h1>Tentang Saya</h1>
      <hr style="border: 1px solid #38bdf8; margin: 20px 0;">
      <p>halo! saya adalah seorang pelajar dari SMP Mutiara Depok.</p>
    `;
  } else if (tipe === 'contact') {
    isi.innerHTML = `
      <h1>Hubungi Saya</h1>
      <hr style="border: 1px solid #38bdf8; margin: 20px 0;">
      <p>Punya pertanyaan  Silakan hubungi saya melalui:</p>
      <p>📱 Instagram: <strong>@fzan_354</strong></p>
    `;
  }
}

function tutupModal() {
  document.getElementById("myModal").style.display = "none";
}

// Menutup modal jika user klik di luar kotak
window.onclick = function(event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}