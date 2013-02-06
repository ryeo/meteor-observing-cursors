Meteor.publish("documents", function () {
  return DocumentCollection.find();
});

Meteor.startup(function () {

  function seedDocumentCollection () {
    DocumentCollection.remove({});

    var isVisible = [true, true, false];

    for (var i = 0; i < 3; i++) {
      DocumentCollection.insert({
        text: "Document " + i,
        order: i,
        is_visible: isVisible[i]
      });
    }
  }

  seedDocumentCollection();
});
