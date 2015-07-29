import Mirage from 'ember-cli-mirage';
export default Mirage.Factory.extend({  
  name: i => `Activity ${i+1}`
});