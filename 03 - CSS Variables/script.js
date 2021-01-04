// select all the input in controls
const input = document.querySelectorAll(".controls input");
// console.log(input);

function handleUpdate() {
  // console.log(this.value);
  console.log(this.dataset);

  const suffix = this.dataset.sizing || "";
  // console.log(suffix);

  // console.log(this.name);

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

input.forEach((input) => input.addEventListener("change", handleUpdate));
input.forEach((input) => input.addEventListener("mousemove", handleUpdate));
