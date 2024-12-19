document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = this;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/moradeyovictor@gmail.com", {
      method: "POST",
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then(data => {
      document.getElementById("success-message").style.display = "block";
      form.reset(); // Clear the form fields
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
      alert("Something went wrong. Please try again.");
    });
  });