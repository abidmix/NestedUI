import Ember from 'ember';
export default Ember.Route.extend({
 model:function()
 {
	  this.store.push('activity', {
      id: 1,
      name: "Consulting",
    
    });

     this.store.push('activity', {
      id: 2,
      name: "Training",
     
    });
	 
 }
  
});