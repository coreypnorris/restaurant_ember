Restaurant.IndexController = Ember.ObjectController.extend({
  actions: {
    createTable: function() {
      var tablesArrayLength = this.get('length');
      console.log(Table.all);
      var table = this.store.createRecord('table', {
        number: tablesArrayLength + 1
      });

      table.save();
    }
  }
});
