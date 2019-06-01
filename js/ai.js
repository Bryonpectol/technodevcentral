function myFunction(){
    let person = prompt("Enter your name:");
    console.log(JSON.stringify([ new String(person)]));
    const mainContainer = document.createElement("div");

    let result = document.createElement("p");
    result.className = "result"
mainContainer.className = "container";

    if (person != null) {
        console.log(JSON.stringify([ new String(person)]));
        result.textContent = person;
        mainContainer.appendChild(result);
        result.appendChild(person);
    }

    document.JSON.stringify(person);
    document.body.appendChild(mainContainer);
}