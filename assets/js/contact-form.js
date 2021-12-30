const scriptURL = "https://script.google.com/macros/s/AKfycbyiqtnoN4APgUQBvk-sgQTDP_iVoQUTB1ZfkK2Jshs8FQ82VtHna1948MXHC2uVRgFcMA/exec";
const form = document.forms["portfolio-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Ketika tombol submit diklik
  // Tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // Tampilkan alert
      myAlert.classList.toggle("d-none");
      // Form reset
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});