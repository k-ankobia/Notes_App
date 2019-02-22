/* eslint-disable no-undef */
function testDisplayNote () {
  var note = new Note("go shopping");
  assert.isTrue(note.displayNote() === "go shopping");
  console.log("testDisplayNote is passing");
};

testDisplayNote();
