import {
  moduleForModel,
  test
  } from 'ember-qunit';

import Ember from "ember";

moduleForModel('college', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it have valid attributes', function(assert){
  var
    collegeModel = this.container.lookupFactory('model:college'),
    attributes = Ember.get(collegeModel, 'attributes'),
    expectedAttributes = ['descName', 'name', 'supportedFormats'];

  assert.ok(expectedAttributes.length === attributes.keys.list.length, "College should have " + expectedAttributes.length + " attributes");

  expectedAttributes.forEach(function(attr){
    assert.ok(attributes.keys.list.find(function(item){
      return item === attr;
    }), "College should have " + attr + " attribute");
  });
});

