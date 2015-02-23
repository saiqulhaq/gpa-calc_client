import DS from 'ember-data';

export default DS.Model.extend({
  letter: DS.attr('string'),
  point: DS.attr('number'),
  courses: DS.hasMany('course')
});
