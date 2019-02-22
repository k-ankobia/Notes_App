/* eslint-disable no-undef */
function testDisplayNote () {
  var note = new Note("go shopping");
  assert.isTrue(note.displayNote() === "go shopping");
  console.log("testDisplayNote is passing");
};

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
  console.log("testCreate is passing");
};

function testViewListReturnHtml () {
  var view = new NoteListView();

  view.notelist.addNote("Favourite food: pesto");
  view.notelist.addNote("Favourite drink: seltzer");
  // console.log(notelist.getAllNotes());

  console.log(view.getHtml());

  assert.isTrue(view.getHtml() === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>");
  console.log("test is passing");
};

function testViewListNoText () {
  var notelist = new NoteList();

  var view = new NoteListView(notelist);
  assert.isTrue(view.getHtml() === "<ul></ul>");
  console.log("test is passing");
};
console.log("-----------------------");
function testPrintNoteToHtml () {
  var controller = new NoteController();

  controller.printHtmlDouble = function () {
    var doc = document.createElement("app");
    doc.innerHTML = "<div id='app'>hello</div>";
    return doc;
  };
  console.log(controller.view.notelist);
  console.log("__" + controller.printHtml());
  assert.isTrue(controller.printHtml() === "<ul><li><div>" + "Favourite drink: seltzer" + "</div></li></ul>");
  console.log("PrintNoteToHtml test has passed");
};

// function mocktestHTMLlist () {
//   var note = new Note("Favourite drink: seltzer");
//   var notelist = new NoteList();
//   var controller = new NoteController(notelist);
//   var view = new NoteListView(notelist);
// }

testDisplayNote();
testCreate();
testViewListReturnHtml();
testViewListNoText();
testPrintNoteToHtml();

// mocktestHTMLlist();
