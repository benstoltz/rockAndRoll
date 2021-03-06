import Ember from 'ember';
import config from './config/environment';

let Router = Ember.Router.extend({
  location: config.locationType
});

Router.map( function() {
  this.route('bands', function() {
    this.route('band', { path: ':slug' }, function() {
      this.route('songs');
      this.route('albums');
    });
  });
});

export default Router;
