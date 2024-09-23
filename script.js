const tombol = document.getElementById("tombol");

tombol.addEventListener("click", () => {
  console.log('clicked');
  const ganti = document.getElementById("ganti");
  const img = document.getElementById("gambar");
  ganti.style.color = "white";
  img.style.boxShadow = "2px 2px 20px white";
  img.style.border = "2px solid white";
  tombol.style.color = "white";
  tombol.style.border = "2px solid white";
})