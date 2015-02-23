import {
  moduleForModel,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForModel('course', {
  // Specify the other units that are required for this test.
  needs: ['model:semester', 'model:grade']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it have valid attributes', function(assert){
  var
    courseModel = this.store().modelFor('course'),
    attributes = Ember.get(courseModel, 'attributes'),
    expectedAttributes = ['name', 'ppc'];

  assert.ok(expectedAttributes.length === attributes.keys.list.length, "Course should have " + expectedAttributes.length + " attributes");

  expectedAttributes.forEach(function(attr){
    assert.ok(attributes.keys.list.find(function(item){
      return item === attr;
    }), "Course should have " + attr + " attribute");
  });
});

test('semester relationship', function(assert) {
  var Course = this.store().modelFor('course');
  var relationship = Ember.get(Course, 'relationshipsByName').get('semester');

  assert.equal(relationship.key, 'semester');
  assert.equal(relationship.kind, 'belongsTo');
});

test('grade relationship', function(assert) {
  var Course = this.store().modelFor('course');
  var relationship = Ember.get(Course, 'relationshipsByName').get('grade');

  assert.equal(relationship.key, 'grade');
  assert.equal(relationship.kind, 'belongsTo');
});

