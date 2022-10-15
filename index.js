function MyFunction(event){
    event.preventDefault();
    console.log(event);
    const userEmail = document.getElementById("form-email").value;
    const sign = window.confirm('Please confirm account creation for ' + userEmail);
    if(sign){
        const userEmailSpan = document.createElement("span");
        const text = document.createTextNode(` ${userEmail}`);
        userEmailSpan.appendChild(text);

        document.getElementsByClassName("span-after")[0].appendChild(userEmailSpan)
        document.getElementById("form").style.display = "none"
        document.getElementsByClassName("after")[0].style.display = "flex";
    }
    return false
    
}