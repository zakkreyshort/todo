// back end
function todoList(){
  this.lists = [];
  this.currentId = 0;
}

todoList.prototype.addList = function(list){
  list.id = this.assignId();
  this.lists.push(list);
}

todoList.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

function toDo(item){
  this.item = item
}

toDo.prototype.returnList = function(){
  return this.item;
}


// front end

$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var userInput = $("input#todo").val();
    $("#output").append("<li>" + userInput + "</li>");
  })
})