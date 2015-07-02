var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var MoviesCollection = require('./collections');
var MovieCollectionView = require('./collectionView');


module.exports = Backbone.View.extend({
  el: $('.buttons'),
  template: _.template( $('#buttonTmpl').html() ),
  tagName: 'div',
  events: {
    'click #titleMovie': 'movieSort',
    'click #ratingMovie': 'movieSort',
    'click #releaseYearMovie' : 'movieSort',
    'click .addMovie': 'addMovie',
    'click .home': 'goHome'
  },

  initialize: function (options) {
  },

  render: function () {
    var htmlData = this.template();
    this.$el.html(htmlData);
    return this;
  },

  goHome: function(){
    window.location = "/#home";

  },
  movieSort: function(e){
    window.location = "/#sort";
    $('#overlay').addClass('hide');
    e.preventDefault();
    var find= e.currentTarget.id;
    find = find.split('Movie');
    var moviesCollection = new MoviesCollection();
    moviesCollection.fetch().then(function(){
    var newSort = new MovieCollectionView({collection: moviesCollection});
      $('.moviesHere').empty();
      newSort.movieSort(find[0]);
    });


  },
  addMovie: function(){
    window.location = "/#addMovie" ;
    $('.moviesHere').addClass('hide');

  }


});
