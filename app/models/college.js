import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  descName: DS.attr('string'),
  supportedFormats: DS.attr('array')
});
