var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Router = require('./router');

module.exports = $(document).ready(function(){
  page.init();
});

var page = {

  init:function(arguments){
      page.initStyling();
      page.initEvents();
    },

    initStyling: function(arguments){
      new Router();
      Backbone.history.start();
    },

    initEvents: function(arguments){

    },

};
