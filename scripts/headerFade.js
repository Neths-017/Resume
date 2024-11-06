document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY) {
    header.classList.add("scrolled");
    console.log("scrolled");
  } else {
    header.classList.remove("scrolled");
    console.log("not ");
  }
});
