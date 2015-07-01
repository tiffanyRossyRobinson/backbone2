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
    'click .addMovie': 'addMovie'
  },

  initialize: function (options) {
  },

  render: function () {
    var htmlData = this.template();
    this.$el.html(htmlData);
    return this;
  },

  movieSort: function(e){
    window.location = "/#home";
    e.preventDefault();
    var find= e.currentTarget.id;
    find = find.split('Movie');
    var moviesCollection = new MoviesCollection();
    moviesCollection.fetch().then(function(){
    var newSort = new MovieCollectionView({collection: moviesCollection});
      newSort.movieSort(find[0]);
    });


  },
  addMovie: function(){
    $('#overlay').removeClass('hide');
  }


});
