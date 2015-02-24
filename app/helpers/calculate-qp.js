import Ember from 'ember';

export function calculateQp(course) {
  return course.get("ppc") * course.get("grade").get("point");
}

export default Ember.Handlebars.makeBoundHelper(calculateQp, "ppc", "grade");

