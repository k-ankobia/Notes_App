(function (exports) {
  function Note (text) {
    this.text = text;
  };

  Note.prototype.displayNote = function () {
    return this.text;
  };

  exports.Note = Note;
})(this);
