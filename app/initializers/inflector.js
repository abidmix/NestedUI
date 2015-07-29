import Ember from 'ember';
export function initialize(/* container, application */) {
  var inflector = Ember.Inflector.inflector;
  inflector.uncountable('activities');
}

export default {
  name: 'inflector',
  initialize: initialize
};


