
function testDisplayNote (note = new Note("go shopping")) {
  // var note = new Note("go shopping");
  assert.isTrue(note.displayNote() === "go shopping");
};

testDisplayNote();

// function isNote(note) {
//   lte constructor_name = "Note"
//   assert.isNote(note.__proto__.constructor_name === constructor_name)
//   console.log("test isNote has passed")
// }

function testCreate () {
  var notelist = new NoteList();
  var note1 = new Note("This is the first note");
  var note2 = new Note("This is the second note");

  notelist.addNote(note1);
  notelist.addNote(note2);

  var createdNotes = notelist.getAllNotes();
  console.log(createdNotes);

  var testArr = [note1, note2];
  var i;

  // console.log(testArr);

  for (i = 0; i < createdNotes.length; i++) {
    // if (!createdNotes[i] === testArr[i]) {
    //   throw new Error("Not equal");
    // } else {
    //   console.log("Create Test Passed");
    // };
    assert.isTrue(createdNotes[i] === testArr[i]);
  }
};

testCreate();
