function displaynum(n1) {
    calculator.text1.value = calculator.text1.value + n1;
}

const toggle = document.getElementById("toggle");
const theme = window.localStorage.getItem("theme");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (theme === "dark") {
      window.localStorage.setItem("theme", "light");
    } else window.localStorage.setItem("theme", "dark");
  });