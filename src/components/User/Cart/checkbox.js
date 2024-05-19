
const selectAll = document.getElementById("selectAll");
const checkboxes = document.querySelectorAll(".checkboxchirl");

selectAll.addEventListener("change", (event) => {
    const checked = event.target.checked;
    checkboxes.forEach((checkbox) => {
        checkbox.checked = checked;
    });
});
