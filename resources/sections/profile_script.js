function toggleDropdown() {
  var dropdown = document.getElementById("dropdownMenu");
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

function toggleEditProfile() {
  var profileManagement = document.getElementById("profileManagement");
  if (profileManagement.style.display === "none" || profileManagement.style.display === "") {
    profileManagement.style.display = "block";
  } else {
    profileManagement.style.display = "none";
  }
}

function saveProfileChanges() {
  var newName = document.getElementById("new-name").value;
  var newBio = document.getElementById("new-bio").value;

  if (newName) {
    document.getElementById("user-name").innerText = newName;
  }
  if (newBio) {
    document.getElementById("user-bio").innerText = newBio;
  }

  cancelProfileChanges();
}

function cancelProfileChanges() {
  document.getElementById("profileManagement").style.display = "none";
}
