import Ember from 'ember';

export default Ember.Controller.extend({
  colleges: function(){
    "use strict";
    var self = this;
    Ember.run(function(){
      Ember.$.ajax({
        url: "/colleges",
        type: "GET"
      }).then(function(data){
        var id = 1;
        data.colleges.forEach(function(object){
          self.store.createRecord("college", Ember.merge({ id: id++ }, object));
        });
      });
    });
    return self.store.all('college');
  }.property(),
  actions: {
    importData: function(parsedData){
      "use strict";
      var defaultGrade = [], courseId = 1, semesterId, semesterRecord, self = this, semesters = [];
      parsedData.gradePointValue.forEach(function(grade){
        defaultGrade.pushObject(self.store.createRecord("grade", self.store.normalize("grade", {
            id: grade.id, letter: grade.letter, point: grade.point
          })
        ));
      });
      parsedData.data.forEach(function(semester, semesterIndex){
        semesterId = semesterIndex + 1;
        semesterRecord = self.store.createRecord("semester",
          self.store.normalize("semester", {
            id: semesterId, name: semester.semesterName
          })
        );
        semester.courses.forEach(function(course){
          semesters.pushObject(self.store.createRecord("course", self.store.normalize("course",
                {
                  id: courseId++,
                  semester: semesterRecord,
                  name: course.courseName,
                  ppc: course.creditHour,
                  grade: defaultGrade.find(function(gradeItem){
                    return gradeItem.id.toString() === course.grade.toString();
                  })
                }
              )
            )
          );
        });
      });

      var grade = [];
      defaultGrade.forEach(function(g){
        grade.pushObject({
          id: g.get('id'),
          letter: g.get('letter'),
          point: g.get('point')
        });
      });

      return this.transitionToRoute("calculators", {queryParams: {parsedGrade: JSON.stringify(grade)}});
    }
  }
});
