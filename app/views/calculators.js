import Ember from 'ember';

export default Ember.View.extend({
  course: Ember.Select.extend({
    content: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }),
  grade: Ember.Select.extend({
    attributeBindings: ["course-id"],
    didInsertElement: function(){
      "use strict";
      var self = this;
      Ember.$(this.element).dropdown({
        transition: "fade up",
        fullTextSearch: true,
        onChange: function(value){
          if(typeof value !== "undefined"){
            var courseId = Ember.$(this).attr("course-id");
            Ember.run.later(function(){
              self.get('controller').send('updateCourse', courseId, value);
            }, 200);
          }
        }
      });
    }
  })
});

