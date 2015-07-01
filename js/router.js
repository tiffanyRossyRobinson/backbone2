var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var $= require('jquery');
var MoviesCollection= require('./collections');
var MovieCollectionView= require('./collectionView');
var MovieModel = require('./models');
var MovieView = require('./movieView');
var ButtonsView = require('./buttonsView.js');

module.exports = Backbone.Router.extend({
  routes: {
    "": "home",
    "home": "home",
    "teddybear": "cuteAlert",
    "movie/:id": "detailView",
    "*anything": "notFound"
  },
  notFound: function (stuff) {
    $('body').html('Sorry, but this: ' + stuff + " is not found" );
  },
  detailView: function (id) {
    var movie = new MovieModel({_id: id});
    movie.fetch().then(function () {
      var movieView = new MovieView({model: movie});
      $('#listOfMovies').html(movieView.render().el);
    });

  },
  home: function () {
    var moviesCollection = new MoviesCollection();
    moviesCollection.fetch().then(function(){
    var moviesView = new MovieCollectionView({collection: moviesCollection});
    });
    var buttonView = new ButtonsView();
    var buttonData = buttonView.render().el;
    $('.buttons').append(buttonData);

  },

});
