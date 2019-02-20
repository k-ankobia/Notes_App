(function (exports) {
  function NoteList (allnotes) {
    this.allnotes = [];
  };

  NoteList.prototype.getAllNotes = function () {
    return this.allnotes;
  };

  NoteList.prototype.addNote = function (note) {
    this.allnotes.push(note);
    return note;
  };

  exports.NoteList = NoteList;
})(this);
