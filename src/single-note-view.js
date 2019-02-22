(function (exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.printHTML = function () {
    let HTML = this.note.text;
    return `<div> ${HTML} </div>`;
  };
  exports.SingleNoteView = SingleNoteView;
})(this);
