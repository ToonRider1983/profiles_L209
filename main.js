function ShowWelcome() {
    let profileName = "Jiraech Koedsiri";
    //let timeStemp = getDate(); 

    alert("Welcome to " + profileName);
}

function AskClose() {
    if (confirm("Do you want to close this web?")) 
        window.close(); 
}