var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var $= require('jquery');
var MoviesCollection= require('./collections');
var MovieCollectionView= require('./collectionView');
var MovieModel = require('./models');
var MovieView = require('./movieView');
var ButtonsView = require('./buttonsView.js');
var FormView = require('./formView.js');

module.exports = Backbone.Router.extend({
  routes: {
    "": "home",
    "home": "home",
    "movie/:id": "detailView",
    "addMovie": "addMovie",
    "sort": "sorted",
    "*anything": "notExist"
  },
  notExist: function (stuff) {
    $('body').html('Sorry, but this: ' + stuff + " does not exist!" );
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
      $('#overlay').addClass('hide');
      $('.moviesHere').removeClass('hide');
      $('.moviesHere').empty();
      var moviesView = new MovieCollectionView({collection: moviesCollection});
    });

    var buttonView = new ButtonsView();
    var buttonData = buttonView.render().el;
    $('.buttons').append(buttonData);

    var formView = new FormView();
    var formData = formView.render().el;
    $('#listOfMovies').append(formData);

  },
  addMovie: function(){
    $('#overlay').removeClass('hide');
    $('.moviesHere').addClass('hide');
    $('.moviesHere').empty();
  },
  sorted: function(){
    $('.moviesHere').removeClass('hide');
    $('.moviesHere').empty();
  }

});
