import {
  moduleForModel,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForModel('semester', {
  // Specify the other units that are required for this test.
  needs: ['model:course', 'model:grade']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it have valid attributes', function(assert){
  var
    semesterModel = this.store().modelFor('semester'),
    attributes = Ember.get(semesterModel, 'attributes'),
    expectedAttributes = ['name'];

  assert.ok(expectedAttributes.length === attributes.keys.list.length, "Semester should have " + expectedAttributes.length + " attributes");

  expectedAttributes.forEach(function(attr){
    assert.ok(attributes.keys.list.find(function(item){
      return item === attr;
    }), "Semester should have " + attr + " attribute");
  });
});

test('course relationship', function(assert) {
  var Semester = this.store().modelFor('semester');
  var relationship = Ember.get(Semester, 'relationshipsByName').get('courses');

  assert.equal(relationship.key, 'courses');
  assert.equal(relationship.kind, 'hasMany');
});

