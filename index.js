var button = document.querySelector(".info_button");

var onClick = function() {
  if (window.innerWidth > 850) {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  } else {
    var content = document.querySelector(".mobile_content_wrapper");
    var arrow = button.querySelector(".arrow");
    content.classList.toggle("visible_block");
    arrow.classList.toggle("rotate_arrow");
  }
};

button.addEventListener("click", onClick);
