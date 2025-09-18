document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");
  const buttons = document.querySelectorAll(".dropdown-btn");

  // first one visible by default
  if (dropdowns.length > 0) {
    dropdowns[0].classList.add("visible");
  }

  // Loop over each button
//   index is the position of each button in the array
// btn is the current button
  buttons.forEach((btn, index) => {
    // attach click event to each button
    btn.addEventListener("click", () => {
        // loop through each dropdown to make visible/invisible
      dropdowns.forEach((dropdown, i) => {
        // checks if dropdown is at the same position as the clicked button
        if (i === index) {
            // if yes toggle the dropdown to visible
            // if dropdown doesnt contain visible already add it else it gets removed
           if (!dropdown.classList.contains("visible")) {
            dropdown.classList.add("visible");
          }
        } else {
            // hide all except the one that is the same as the current index
          dropdown.classList.remove("visible"); 
        }
      });
    });
  });
});
// fetching specifick data and sending it to private server example
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("myForm");

//   form.addEventListener("submit", async (e) => {
//     e.preventDefault(); // Prevent page reload

//     // Grab only the selected values from each dropdown
//     const data = {};
//     const dropdowns = form.querySelectorAll("select");

//     dropdowns.forEach((select) => {
//       data[select.name] = select.value; // key: select name, value: selected option
//     });

//     try {
//       const response = await fetch("https://your-private-server.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) throw new Error(`Server error: ${response.status}`);

//       const result = await response.json();
//       console.log("Form submitted:", result);
//       alert("Form submitted successfully!");
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("There was an error submitting the form.");
//     }
//   });
// });
