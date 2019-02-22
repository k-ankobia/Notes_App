function testViewListReturnHtml() {
  var view = new NoteListView();

  view.notelist.addNote("Favourite food: pesto");
  view.notelist.addNote("Favourite drink: seltzer");
  // console.log(notelist.getAllNotes());

  console.log(view.getHtml());

  assert.isTrue(view.getHtml() === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>");
  console.log("test is passing");
};

function testViewListNoText() {
  var notelist = new NoteList();

  var view = new NoteListView(notelist);
  assert.isTrue(view.getHtml() === "<ul></ul>");
  console.log("test to view list with no text is passing");
};

testViewListReturnHtml();
testViewListNoText();
