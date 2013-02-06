Meteor.subscribe("documents");

Meteor.startup(function () {
  allDocumentsCursor = DocumentCollection.find();

  allDocumentsCursor.observe({
    added: function (doc, beforeIndex) {
      console.log("allDocumentsCursor added: ", doc.text);
    }
  });

  visibleDocumentsCursor = DocumentCollection.find(
    { is_visible: true }
  );

  visibleDocumentsCursor.observe({
    added: function (doc, beforeIndex) {
      console.log("visibleDocumentsCursor added: ", doc.text);
    }
  });
});
