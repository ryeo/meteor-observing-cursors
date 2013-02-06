Meteor.subscribe("documents");

Meteor.startup(function () {
  allDocumentsCursor = DocumentCollection.find();

  allDocumentsCursor.observe({
    added: function (doc, beforeIndex) {
      console.log("allDocumentsCursor added: ", doc.text);
    }
  });
});
