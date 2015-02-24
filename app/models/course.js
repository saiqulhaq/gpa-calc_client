import DS from 'ember-data';

export default DS.Model.extend({
  semester: DS.belongsTo('semester'),
  name: DS.attr('string'),
  ppc: DS.attr('number'), // point per credit / SKS
  grade: DS.belongsTo('grade', { async: true })
});
