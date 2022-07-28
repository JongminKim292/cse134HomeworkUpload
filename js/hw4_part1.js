var alertTarget = document.getElementById("builtInAlert");
var confirmTarget = document.getElementById("builtInConfirm");
var promptTarget = document.getElementById("builtInPrompt");
var saferPromptTarget = document.getElementById("builtInSaferPrompt");
var saferPromptText = document.getElementById("builtInSaferPromtText");

// tagged template
function myTag(str){
    var res;
    if(str == null){
        res = "user just canceled the prompt window";
        return res;
    }
    if(str.length<=0){
        res = "user didn't answer anything";
    }else{
        res = `Prompt message :  ${str} `;
    }
    return res;
}

function saferPromptListener() {
    var safeName = prompt("Safer Prompt::Safer Prompt message");
    document.getElementById("contentBlock").innerHTML = `<p class = "content">Safer ${myTag(safeName)}`;
}

function promptListener() {
    var unSafeName = prompt("Prompt::Prompt message");
    var message = myTag(unSafeName);
    document.getElementById("contentBlock").innerHTML = `<p class = "content">${message}</p>`    ;
}

function confirmListener() {
    var truefalse = confirm("True = ok, False = cancel");
    let res = `The value returned by the confirm method is ${truefalse}`;
    document.getElementById("contentBlock").innerHTML = `<p class="content">${res}</p>`
}

//arrow function
var alertListener = () => alert("Alert button pressed");
if(alertTarget){
    alertTarget.addEventListener("click", alertListener);
}
if(confirmTarget){
    confirmTarget.addEventListener("click", confirmListener);
}
if(promptTarget){
    promptTarget.addEventListener("click", promptListener);
}
if(saferPromptTarget){
    saferPromptTarget.addEventListener("click",saferPromptListener);
}
