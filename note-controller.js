
// console.log(document.getElementById("app"));
// var greeting = document.getElementById('app');
// greeting.innerText = "howdy";

// TODO:
// The note controller constructor does the following:
//  - Takes a note list model as a parameter.
//  - Adds a note that says Favourite drink: seltzer.
//  - Creates a note list view, passing in the note list model.
//  - The note controller has a method that gets HTML from the note list view and inserts it into the app element.

(function (exports) {
  function NoteController () {
    this.view = new NoteListView();
    this.view.notelist.addNote("Favourite drink: seltzer");
  };
  var notecontroller = new NoteController();
  console.log(notecontroller);

  NoteController.prototype.printHtml = function () {
    let print = this.printHtmlDouble().innerHTML = this.view.getHtml();
    return print;
  };

  NoteController.prototype.printHtmlDouble = function () {
    return document.getElementById("app");
  };

  exports.NoteController = NoteController;
})(this);
