var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var MovieModel = require('./models.js');

module.exports = Backbone.Collection.extend({
  model: MovieModel,
  url: 'http://tiy-fee-rest.herokuapp.com/collections/trossyMovies',

});
