// Code goes here

// myObject

var myObject = {

  myList: [],

  addItem: function (item) {
    this.myList.push(
      {
        description: item,
        completed: false
      });

  },

  deleteItem: function (position) {
    this.myList.splice(position, 1);

  },

  changeItem: function (position, newValue) {
    this.myList[position].description = newValue;

  },

  toggleItem: function (position) {
    var item = this.myList[position];
    item.completed = !item.completed;

  },

  toggleAll: function () {

    var mylistLength = this.myList.length;
    var mylistCompleted = 0;

    // get number of completed items
    for (i = 0; i < mylistLength; i++) {
      if (this.myList[i].completed === true) {
        mylistCompleted++;
      }
    }

    // case1: if every element in the list is true, make the all the elements false
    if (mylistLength === mylistCompleted) {
      for (i = 0; i < mylistLength; i++) {
        this.myList[i].completed = false;
      }
      // case2: otherwise make everything true
    } else {
      for (i = 0; i < mylistLength; i++) {
        this.myList[i].completed = true;
      }
    }

  }
}


// hanlder object

var handlers = {

  addItem: function () {
    var addItemTextInput = document.getElementById("addItemTextInput");
    myObject.addItem(addItemTextInput.value);
    addItemTextInput.value = '';
    view.displayList();
  },

  deleteItem: function () {
    var deleteItemPositionInput = document.getElementById('deleteItemPositionInput');
    myObject.deleteItem(deleteItemPositionInput.valueAsNumber)
    deleteItemPositionInput.value = '';
    view.displayList();
  },

  changeItem: function () {
    var changeItemPositionInput = document.getElementById('changeItemPositionInput');
    var changeItemTextInput = document.getElementById('changeItemTextInput');
    myObject.changeItem(changeItemPositionInput.valueAsNumber, changeItemTextInput.value);
    changeItemPositionInput.value = '';
    changeItemTextInput.value = '';
    view.displayList();
  },

  toggleItem:function(){
    var toggleItemPositionInput = document.getElementById('toggleItemPositionInput');
    myObject.toggleItem(toggleItemPositionInput.valueAsNumber);
    toggleItemPositionInput.value = '';
    view.displayList();
  },

  toggleAll: function () {
    myObject.toggleAll();
    view.displayList();
  }

}


// view object

var view = {
  displayList: function () {

    var listUl = document.querySelector('ul');
    listUl.innerHTML = '';

    for (var i = 0; i < myObject.myList.length; i++) {
      var listLi = document.createElement('li');
      listLi.className = "list-group-item";
      var item = myObject.myList[i];
      var listLiTextWithCompletion = '';


      if (item.completed == true) {
        listLiTextWithCompletion = '(x) ' + item.description;
      } else {
        listLiTextWithCompletion = '( ) ' + item.description;
      }

      listLi.textContent = listLiTextWithCompletion;
      listUl.appendChild(listLi);
    }
  }
}