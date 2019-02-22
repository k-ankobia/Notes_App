(function (exports) {
  function NoteList () {
    this.allnotes = [];
  };

  NoteList.prototype.getAllNotes = function () {
    return this.allnotes;
  };

  NoteList.prototype.addNote = function (text) {
    var note = new Note(text);
    this.allnotes.push(note);
    return note;
  };

  exports.NoteList = NoteList;
})(this);
