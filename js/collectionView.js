var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var MovieView = require('./movieView');
var MovieModel = require('./models');


module.exports = Backbone.View.extend({
  el: '#listOfMovies',
  events: {
    'click .submit': 'submitMovie',
    'click .cancel': 'cancelAdd'
  },

  initialize: function (options) {
    this.addAll();
  },

  reload: function(){
    $('.moviesHere').empty();
    this.addAll();
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  },

  addOne: function (movie) {
    var modObj= {
      model:movie
    };
    var moviesView = new MovieView(modObj);
    this.$el.append(moviesView.render().el);
  },

  cancelAdd: function(event){
    $('#overlay').addClass('hide');
    $('.moviesHere').removeClass('hide');
    window.location = "/#home";

  },
  submitMovie: function(event){
    event.preventDefault();
    var obj = {
      title: $('.ftitle').val() || 'Movie Title',
      releaseYear: $('.fyear').val() || '2080',
      CoverImage: $('.fimage').val() || "http://img4.wikia.nocookie.net/__cb20130307231227/divergent/images/8/84/Dauntless.gif",
      plot: $('.fplot').val() || "This is a movie about the world",
      rating: $('.stars').val() || 5
    };

    console.log("saving: ", obj.title);

    var addMovie = new MovieModel(obj);
    addMovie.save().then(function(){
        $('.newMovie').trigger('reset');
        window.location = "/#home";
    });


  },

  movieSort: function(value){
   this.collection.comparator = value;
   this.collection.sort();
   $('.moviesHere').empty();
   this.addAll();
 }
});
