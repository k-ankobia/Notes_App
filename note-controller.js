
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
  function NoteController(notelist = new NoteList(), note) {
    this.notelist = notelist.addNote(note);
    this.view = new NoteListView(notelist);
  };

  NoteController.prototype.printHtml = function (view, notelist) {
    document.getElementById("app").innerHTML = view.getHtml(notelist);
  };

  exports.NoteController = NoteController;
})(this);
