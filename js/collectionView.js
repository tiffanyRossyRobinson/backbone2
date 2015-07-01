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
    'click .cancel': 'cancelAdd',
    'click #titleMovie' : 'titleSort',
  },

  initialize: function (options) {
    this.addAll();
    this.listenTo(this.collection, 'change', this.reload);
    $('.addMovie').on('click', function(event){
      $('#overlay').removeClass('hide');
    });
    $('#titleMovie').on('click', function(event){
        alert('cant get it to work');
    })
  },

  reload: function(){
    $('#listOfMovies').empty();
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
  },
  submitMovie: function(event){
    event.preventDefault();
    var obj = {
      title: $('.ftitle').val() || 'Movie Title',
      releaseYear: $('.fyear').val() || '2080',
      CoverImage: $('.fimage').val() || "https://discussions.apple.com/___sbsstatic___/migration-images/194/19494496-1.gif",
      plot: $('.fplot').val() || "This is a movie about the world",
      rating: $('.stars').val() || 5
    };
    var addMovie = new MovieModel(obj);
    addMovie.save();
    this.addOne(addMovie);
    $('#overlay').addClass('hide');
  },

  titleSort: function(){
    console.log('sort by title');
   this.collection.comparator = "title";
   this.collection.sort();
   $('#listOfMovies').empty();
   this.addAll();
 }
});
