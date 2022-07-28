var addButtonTarget = document.getElementById('addButton');
var postingDialog = document.getElementById('originalDialog');
var cancelButtonTarget = document.getElementById('cancelBtn');
// this add in dialog
var addBtnTarget = document.getElementById('addBtn');
//
var summaryTarget = document.getElementById('summary');
var titleTarget = document.getElementById('title');
var dateTarget = document.getElementById('date');
var postingListTarget = document.getElementById('postingList');
var deleteDialog = document.getElementById('deleteDialog');
var deleteButton = document.getElementById('deleteConfirm')
var deleteCancelButton = document.getElementById('noDeleteConfirm');
var editPostingDialogTarget = document.getElementById('editDialog');
var editBtnTarget = document.getElementById('editBtn');
var editCancelBtnTarget = document.getElementById('editCancelBtn');

function showAddDialog(){
  postingDialog.showModal();
  titleTarget.value = "";
  summaryTarget.value = "";
  if(cancelButtonTarget){
    cancelButtonTarget.addEventListener('click',function closeAndNotSave(){
      postingDialog.close();
    })
  }  
}

if(addBtnTarget){
  addBtnTarget.addEventListener('click',function closeAndParse(){
    if(!titleTarget.value){
      alert('title is required');
    }
    else{
      var list = document.createElement('li');
      postingListTarget.appendChild(list);
      var deleteItem = document.createElement('button')
      list.innerHTML = `<span><span>${titleTarget.value}</span> (<i>${dateTarget.value}</i>) - Summary : <p style="display:inline;">${summaryTarget.value}</p></span>`;
      deleteItem.innerHTML = `delete`;
      list.appendChild(deleteItem);
      var editItem = document.createElement('button');
      editItem.innerHTML = `edit`;
      list.appendChild(editItem);
      postingDialog.close();
    }

    deleteItem.addEventListener('click', function(){
      deleteDialog.showModal();
      deleteButton.addEventListener('click',function(){
          postingListTarget.removeChild(list);
          deleteDialog.close();
        });
        deleteCancelButton.addEventListener('click',function(){
          deleteDialog.close();
        })
    })
    editItem.addEventListener('click',function(){
      editPostingDialogTarget.showModal();
        var title = document.getElementById('changedTitle');
        var year = document.getElementById('changedDate');
        var rate = document.getElementById('changedSummary');
        title.value = this.parentNode.firstChild.firstChild.innerText;
        year.value = this.parentNode.firstChild.firstChild.nextSibling.nextSibling.innerText;
        rate.value = this.parentNode.firstChild.lastChild.innerText;
        editBtnTarget.addEventListener('click',function(){
          list.innerHTML = `<span><span>${title.value}</span> (<i>${year.value}</i>) - Summary : <p style="display:inline;">${rate.value}</p></span>`
          list.appendChild(deleteItem);
          list.appendChild(editItem);
          editPostingDialogTarget.close();
        },{once: true})
        editCancelBtnTarget.addEventListener('click',function(){
          editPostingDialogTarget.close();
        })
    });

  });  
}


 

if(addButtonTarget){
  addButtonTarget.addEventListener('click',showAddDialog);
}
