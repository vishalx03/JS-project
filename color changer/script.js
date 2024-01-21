let box1 = document.querySelectorAll(".box");
for (let i = 0; i < box1.length; i++) {
  box1[i].addEventListener("click", function () {
    document.body.style.backgroundColor = box1[i].id;
  });
}
