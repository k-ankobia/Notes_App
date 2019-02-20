(function (exports) {
  function Note(text) {
    this.text = text;
  };

  Note.prototype.displayNote = function () {
    return this.text;
  };

  // var note = new Note('go shopping');
  // return note.displayNote();

  exports.Note = Note;
})(this);
