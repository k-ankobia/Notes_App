(function (exports) {
  function NoteListView (notelist) {
    this.notelist = notelist;

    NoteListView.prototype.getHtml = function () {
      var array = notelist.getAllNotes();
      // console.log(array);     
      var newArray = [];
      for (var i in array) {
        newArray.push(`<li><div>${array[i].text}</div></li>`);
      }
      newArray.unshift("<ul>");
      newArray.push("</ul>");
      console.log(newArray.join(""));
      return newArray.join("");
    };
  };

  exports.NoteListView = NoteListView;
})(this);

// TODO:try this
// console.log(newArray.map(i => { return i; }));