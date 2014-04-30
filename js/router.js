Restaurant.Router.map(function() {
  this.resource('index', { path: '/' }, function() {
    });
});


Restaurant.IndexRoute = Ember.Route.extend({
  model: function() {
      return Ember.RSVP.hash({
          tables: this.store.find('table'),
          items: this.store.find('item')
      })
  }
});
