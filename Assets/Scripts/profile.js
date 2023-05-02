function editProfile() {
    let D1 = prompt("Welcome to your profile settings! Pick and type a setting you would like to edit.\n\nSetting Values:\nName", "Input setting value here").toLowerCase();

    if (D1 === null) {
        return;
    }
    if (D1 === "name") {
        editName();
    }

}

function editName() {
    let L1 = localStorage.getItem("MMLS_name");
    let D2 = prompt("Please enter a new username below.", L1);
    if (D2 < 2) {
        alert("Your new username must be more than 2 characters long!");
        editName();
        return;
    }
    if (D2 > 15) {
        alert("Your new username can't be more than 15 characters long!");
        editName();
        return;
    }
    localStorage.setItem("MMLS_name", D2);
    alert("Set your new name too " + D2 + "!");
    location.reload();
}

function viewProfile() {
    alert("Hello World!");
}