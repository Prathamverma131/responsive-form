let form = document.querySelector("form");
let data = {};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputChild = form.querySelectorAll("input");
  let selectChild = form.querySelectorAll("select");

  if (!inputChild[0].value) {
    alert("Enter valid first name");
  } else if (!inputChild[1].value) {
    alert("Enter valid last name");
  } else if (!inputChild[2].value) {
    alert("Enter valid email");
  } else if (!inputChild[3].value) {
    alert("Enter valid address");
  } else if (selectChild[0].value === "month") {
    alert("Enter valid month");
  } else if (selectChild[1].value === "day") {
    alert("Enter valid day");
  } else if (selectChild[2].value === "year") {
    alert("Enter valid year");
  } else {
    data.firstName = inputChild[0].value;
    data.lastName = inputChild[1].value;
    data.email = inputChild[2].value;
    data.address = inputChild[3].value;
    data.month = selectChild[0].value;
    data.day = selectChild[1].value;
    data.year = selectChild[2].value;

    localStorage.setItem("data", JSON.stringify(data));

    setTimeout(() => {
      window.location.href = "output.html";
    }, 2000);
  }
});
