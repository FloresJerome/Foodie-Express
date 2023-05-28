// Add a variable to store the ID of the category to be deleted
let categoryId;

function showAlert(id) {
  // Store the ID of the category to be deleted
  categoryId = id;
  // Display the custom alert box
  document.getElementById("custom-alert").style.display = "block";
}

function deleteCategory() {
  // Call the delete category URL with the ID of the category to be deleted
  window.location.href = "{{url('delete_category')}}/" + categoryId;
}

function closeAlert() {
  // Hide the custom alert box
  document.getElementById("custom-alert").style.display = "none";
}
