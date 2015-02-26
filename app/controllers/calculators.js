import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['parsedGrade'],
  parsedGrade: null,
  grade: [],
  totalSemester: 0,
  totalCourse: 0,
  actions: {
    addSemester: function(){
      "use strict";
      var currentTotalSemester = this.get("totalSemester");
      this.store.push("semester",
        this.store.normalize("semester", {
          id: currentTotalSemester + 1,
          name: "Semester " + (currentTotalSemester + 1).toString()
        })
      );

      this.incrementProperty("totalSemester");
    },
    addCourse: function(semesterObj){
      "use strict";
      var controller = this, currentTotalCourse = controller.get("totalCourse");
      controller.store.find("semester", semesterObj.get('id')).then(function(semester){
        controller.store.find("grade", 1).then(function(grade){
          controller.store.push("course",
            controller.store.normalize('course', {
              id: currentTotalCourse + 1,
              semester: semester,
              name: "",
              ppc: 1,
              grade: grade
            })
          );
          controller.incrementProperty("totalCourse");
        });
      });
    },
    updateCourse: function(courseId, value){
      "use strict";
      var controller = this;
      this.store.find("course", courseId).then(function(course){
        controller.store.find("grade", value).then(function(grade){
          course.set("grade", grade);
        });
      });
    }
  }
});

