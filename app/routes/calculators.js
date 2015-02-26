import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    "use strict";
    if(typeof params !== "undefined"){
      if(typeof params.parsedGrade === "string") {
        var grade = JSON.parse(params.parsedGrade);
        if(Ember.isArray(grade)){
          this.controllerFor('calculators').set('grade', grade);
        }
      }
    }
    return this.store.find("semester");
  },
  beforeModel: function(){
    "use strict";
    var self = this;
    this.store.find('grade').then(function(grade){
      if(grade.toArray().length === 0){
        grade = [
          {
            id: 1,
            letter: "A",
            point: 4,
          },
          {
            id: 2,
            letter: "B",
            point: 3
          },
          {
            id: 3,
            letter: "C",
            point: 2
          },
          {
            id: 4,
            letter: "D",
            point: 1
          },
          {
            id: 5,
            letter: "E",
            point: 0
          }
        ];
        var gradeObjects = [];
        grade.forEach(function(grade){
          self.store.push('grade', self.store.normalize('grade', grade));
          gradeObjects.pushObject(grade);
        });
        self.controllerFor('calculators').set('grade', gradeObjects);
      }
    });

    this.store.find("semester").then(function(semesters){
      self.controllerFor("calculators").incrementProperty("totalSemester", semesters.toArray().length);
    });

    this.store.find("course").then(function(courses){
      self.controllerFor("calculators").incrementProperty("totalCourse", courses.toArray().length);
    });
  }
});

