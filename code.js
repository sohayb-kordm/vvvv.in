window.onresize = function () {
    const container = document.getElementById("container");
    const width = window.innerWidth;

    if (width <= 768) {
      container.style.width = "90%";
    } else {
      container.style.width = "60%";
    }
  };