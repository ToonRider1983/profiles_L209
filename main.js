var comfirmed;

function ShowWelcome() {
    alert("Hello, Welcome to my profile.");
    //x = confirm("Do you want to exit?");
}

function ShowConfirm() {
    if(confirm("Do you want to exit?") == false) window.close();
}