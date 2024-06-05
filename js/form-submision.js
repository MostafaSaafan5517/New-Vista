// Handle form submission
let form = document.querySelector("form");

// add the action attribute to the form
form.action = "https://sheetdb.io/api/v1/g5uxdacfaeryi";

form.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      return;
    }

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => response.json())
      .then((html) => {
        // You can put any JS code here
        let successAlert = document.querySelector(".success");
        let btn = document.querySelector(".success .btn");
        let submit = document.querySelector("#submit");

        submit.blur();
        successAlert.style.display = "block";
        document.body.style.overflow = "hidden";

        btn.addEventListener("click", () => {
          successAlert.style.display = "none";
          document.body.style.overflow = "auto";
          location.reload();
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    form.classList.add("was-validated");
  },
  false
);

// Solving the problem of the date
let jourDate = document.querySelectorAll(".jourDate");

jourDate.forEach((date) => {
  date.addEventListener("focus", () => {
    date.type = "date";
  });

  date.addEventListener("blur", () => {
    date.type = "text";
  });
});

// set the current date as the value of the hidden input
let input = document.querySelector("#date");

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1; // javascript month is 0-11
let year = date.getFullYear();

// if month or day is less than 10 add a 0 in front
if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}

input.value = `${year}-${month}-${day}`;
