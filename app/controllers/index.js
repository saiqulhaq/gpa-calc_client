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
  }.property()
});
