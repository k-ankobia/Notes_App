/* eslint-disable no-undef */
function testCreate () {
  var notelist = new NoteList();

  notelist.addNote("This is the first note");
  notelist.addNote("This is the second note");

  var createdNotes = notelist.getAllNotes();
  var testArr = notelist.allnotes;
  var i;

  for (i = 0; i < createdNotes.length; i++) {
    assert.isTrue(createdNotes[i] === testArr[i]);
  }
  console.log("test to create note is passing");
};

testCreate();
