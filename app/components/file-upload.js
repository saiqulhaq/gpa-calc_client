import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  url: "",
  college: {},
  filesDidChange: (function() {
    "use strict";
    var
      uploadUrl = this.get("url"),
      files = this.get("files"),
      uploader = EmberUploader.Uploader.create({
        url: uploadUrl
      });

    if (!Ember.isEmpty(files)) {
      var
        promise = uploader.upload(files[0], { college: this.college.name }),
        self = this,
        importProgressEl = Ember.$("#importProgress");
      uploader.on("progress", function(e) {
        importProgressEl.progress({
          percent: e.percent
        });
        importProgressEl.find(".label").text(e.percent.toString() + "% complete");
      });
      uploader.on("didUpload", function(){
        Ember.$(".basic.modal").modal("hide");
      });

      promise.then(function(data) {
        self.sendAction("import", data);
      }, function(error) {
        console.log(error);
      });
    }
  }).observes("files")
});
