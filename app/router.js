import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('examples', {path:'/'});
  this.route('index', {path:'/:id'});
  this.route('configure', {path:'/configure/:id'});
});

export default Router;
