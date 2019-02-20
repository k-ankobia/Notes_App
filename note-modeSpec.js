function TestCurrentNote () {
  var note = new Note("go shopping");
  assert.isTrue(note.displayNote() === "go shopping");
};

TestCurrentNote();
