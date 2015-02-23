import {
  moduleForModel,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForModel('grade', {
  // Specify the other units that are required for this test.
  needs: ['model:course', 'model:semester']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it have valid attributes', function(assert){
  var
    courseModel = this.store().modelFor('grade'),
    attributes = Ember.get(courseModel, 'attributes'),
    expectedAttributes = ['letter', 'point'];

  assert.ok(expectedAttributes.length === attributes.keys.list.length, "Grade should have " + expectedAttributes.length + " attributes");

  expectedAttributes.forEach(function(attr){
    assert.ok(attributes.keys.list.find(function(item){
      return item === attr;
    }), "Grade should have " + attr + " attribute");
  });
});

test('course relationship', function(assert) {
  var Grade = this.store().modelFor('grade');
  var relationship = Ember.get(Grade, 'relationshipsByName').get('courses');

  assert.equal(relationship.key, 'courses');
  assert.equal(relationship.kind, 'hasMany');
});

