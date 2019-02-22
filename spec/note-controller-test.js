/* eslint-disable no-undef */
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

testPrintNoteToHtml();
