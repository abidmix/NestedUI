 import Ember from 'ember';
 import Mirage from 'ember-cli-mirage';
 export default Ember.Controller.extend({
  sortProperties: ['name'],
  sortAscending: true,
  queryParams: ['search'],
  search: " ",
   activities: (function() {
    if (this.get('filterText')) {
       return this.get('filteredResults');
    } else {
      return this.get('model');
    }
  }).property('filterText', 'filteredResults'),
   filterText: '',
  filteredResults: function() {
    var filter = this.get('filterText');
	if(!filter) {return;}
	var filterArray=[];
    var regex = new RegExp(filter, 'i');
    this.get('content').filter(function(item) {
     if(item.get('name').toLowerCase().indexOf(filter.toLowerCase()) > -1)
	 {
		 filterArray.push({id:item.get('id'),name:item.get('name')});
	 }
	
    });
	 return filterArray;
  }.property('model','filterText')
});

