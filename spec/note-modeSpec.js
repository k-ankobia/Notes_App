function testDisplayNote (note = new Note("go shopping")) {
  // var note = new Note("go shopping");
  assert.isTrue(note.displayNote() === "go shopping");
};

function testCreate () {
  var notelist = new NoteList();
  var note1 = new Note("This is the first note");
  var note2 = new Note("This is the second note");

  notelist.addNote(note1);
  notelist.addNote(note2);

  var createdNotes = notelist.getAllNotes();

  var testArr = [note1, note2];
  var i;

  for (i = 0; i < createdNotes.length; i++) {
    assert.isTrue(createdNotes[i] === testArr[i]);
  }
};

function testViewListReturnHtml () {
  var notelist = new NoteList();
  var note1 = new Note("Favourite food: pesto");
  var note2 = new Note("Favourite drink: seltzer");

  notelist.addNote(note1);
  notelist.addNote(note2);
  // console.log(notelist.getAllNotes());

  var view = new NoteListView(notelist);
  assert.isTrue(view.getHtml() === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>");
  console.log("test is passing");
};

function testViewListNoText () {
  var notelist = new NoteList();

  var view = new NoteListView(notelist);
  assert.isTrue(view.getHtml() === "<ul></ul>");
  console.log("test is passing");
};

function testPrintNoteToHtml () {
  var notelist = new NoteList();
  var note = new Note("Favourite drink: seltzer");
  var controller = new NoteController(notelist, note);
  var view = new NoteListView(notelist);
  // console.log(view.getHtml(notelist));

  assert.isTrue(view.getHtml(notelist) === "<ul><li><div>" + "Favourite drink: seltzer" + "</div></li></ul>");
  console.log("test has passed");
};

//     var note1 = new Note("Favourite drink: seltzer");
//     varaddNote(note1);
//     var noteListView = new NoteListView(notelist);

testCreate();
testDisplayNote();
testViewListReturnHtml();
testViewListNoText();
testPrintNoteToHtml();
