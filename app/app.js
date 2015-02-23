import Ember from 'ember';
import DS from 'ember-data';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

DS.FixtureAdapter.reopenClass({
  simulateRemoteResponse: false
});
DS.Model.reopenClass({ FIXTURES: []});

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

App.ApplicationAdapter = DS.FixtureAdapter;
App.ApplicationStore = DS.Store.extend();

loadInitializers(App, config.modulePrefix);

export default App;
