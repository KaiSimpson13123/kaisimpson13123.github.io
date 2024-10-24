let tilt = document.querySelectorAll(".rounded");
VanillaTilt.init(tilt, {
  max: 3,
  speed: 500,
  scale: 1.05,
  glare: true,
  "max-glare": 0.3,
});


function copyEmail() {
  navigator.clipboard.writeText("kaiysimpson@gmail.com");
  swal("Email Copied", "Email Has Been Copied To Your Clipboard!", "success");
}