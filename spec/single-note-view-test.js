function testSingleNoteView () {
  var singleNoteview = new SingleNoteView();
  assert.isTrue(singleNoteview !== "undefined");

  console.log("Test for Single Note View as Object Passed");
};

function testMethodtoPrint() {
  var note = new Note("Favourite drink: seltzer");
  var singlenote = new SingleNoteView(note);
  singlenote.printHTML();
  assert.isTrue(singlenote.printHTML() === "<div> Favourite drink: seltzer </div>");

  console.log("Test for print method Passed");
}
testSingleNoteView();
testMethodtoPrint();
