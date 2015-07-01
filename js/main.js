var $= require('jquery');
var MoviesCollection= require('./collections');
var MovieCollectionView= require('./collectionView');



module.exports = $(document).ready(function(){
  page.init();
});

var page = {

  init:function(arguments){
      page.initStyling();
      page.initEvents();
    },

    initStyling: function(arguments){
      var moviesCollection = new MoviesCollection();
      moviesCollection.fetch().then(function(){
      var moviesView = new MovieCollectionView({collection: moviesCollection});
      });
    },

    initEvents: function(arguments){

    },

};
