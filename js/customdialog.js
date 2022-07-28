var customAlertTarget = document.getElementById("customAlert");
var customAlertDiagram = document.getElementById("alertDialog");
var alertCloseButton = document.getElementById("alertClose");
var customConfirmTarget = document.getElementById("customConfirm");
var customConfirmDiagram = document.getElementById("confirmDialog");
var customConfirmTrueButton = document.getElementById("trueConfirm");
var customConfirmFalseButton = document.getElementById("falseConfirm");
var customContentBlockTarget = document.getElementById("customContentBlock");
var customPromptTarget = document.getElementById("customPrompt");
var customPromptDiagram = document.getElementById("promptDialog");
var promptInputTarget = document.getElementById("inputPrompt");
var promptCloseTarget = document.getElementById("promptClose");
var promptEnterTarget = document.getElementById("promptEnter");

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

function showAlertDialog() {
    customContentBlockTarget.innerHTML = ``
    customAlertDiagram.showModal();
    if(alertCloseButton){
        alertCloseButton.addEventListener('click', function closeAlertDialog() {
            customAlertDiagram.close();
        });
    }
}

function showConfirmDialog() {
    customContentBlockTarget.innerHTML = ``
    customConfirmDiagram.showModal();

    customConfirmTrueButton.addEventListener('click',function trueReturn() {
        customConfirmDiagram.close();
        customContentBlockTarget.innerHTML = `<p class = "content">Confirm result : true</p>`
    });

    customConfirmFalseButton.addEventListener('click',function falseReturn() {
        customConfirmDiagram.close();
        customContentBlockTarget.innerHTML = `<p class = "content">Confirm result : false</p>`
    });
}

function showPromptDialog() {
    customContentBlockTarget.innerHTML = ``
    customPromptDiagram.showModal(); 
    promptInputTarget.value = "";
    if(promptEnterTarget){
        promptEnterTarget.addEventListener('click',function enterAndParsePrompt() {
            var input = myTag(promptInputTarget.value);
            customPromptDiagram.close();
            customContentBlockTarget.innerHTML = `<p class = "content">${input}</p>`
        })
    }
    if(promptCloseTarget){
        promptCloseTarget.addEventListener('click',
        function cancelAndClosePrompt() {
            customPromptDiagram.close();
            customContentBlockTarget.innerHTML = `<p class = "content">User canceled the prompt</p>`
        
        })
    }
}



    

if(customPromptTarget){
    customPromptTarget.addEventListener('click',showPromptDialog);
}
if(customConfirmTarget){
    customConfirmTarget.addEventListener('click',showConfirmDialog);
}
if(customAlertTarget){
    customAlertTarget.addEventListener('click',showAlertDialog);
}
