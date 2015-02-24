import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function(){
    "use strict";
    var
      self = this,
      modal = Ember.$(".basic.modal"),
      collegeEl = Ember.$("#selectCollege"),
      collegeId = null;

    collegeEl.attr("placeholder", "Pilih kampus");

    Ember.$(".ui.dropdown").dropdown({
      transition: "fade up",
      fullTextSearch: true,//,
      //    onNoResult: function(searchValue) {
      //    TODO add next step
      //    }
      onChange: function(){
        var selectedCollegeId = collegeEl.val();
        if(collegeId === selectedCollegeId){
          return false;
        }else{
          collegeId = selectedCollegeId;
          collegeEl.removeAttr("placeholder");
        }

        console.log(selectedCollegeId);

        var controller, store;
        store = self.get("controller").store;
        controller = self.get("controller");
        store.find("college", selectedCollegeId).then(function(college){
          controller.set("selectedCollege", {
            name: college.get("name"),
            descName: college.get("descName"),
            supportedFormats: college.get("supportedFormats")
          });
        });
        modal.modal("show");
      }
    });
  },
  modal: Ember.View.extend({
    templateName: 'modal'
  })
});

