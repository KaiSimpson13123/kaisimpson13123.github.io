let isDown = 1;

window.addEventListener('load', (event) => {
    if (isDown === 1) {
        window.location.replace("other/down.html");
      } else {
        console.log("isDown is false");
      }
});