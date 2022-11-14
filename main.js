var comfirmed;

function ShowWelcome() {
    alert("Hello, Welcome to my profile.");
    //x = confirm("Do you want to exit?");
}

function ShowConfirm() {
    confirmed = confirm("Do you want to exit?");

    if(comfirmed == false) window.close();
}