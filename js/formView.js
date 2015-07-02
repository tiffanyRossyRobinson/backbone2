var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');



module.exports = Backbone.View.extend({
  el: $('#listOfMovies'),
  template: _.template( $('#formTmpl').html() ),
  tagName: 'div',
  events: {

  },

  initialize: function (options) {
  },

  render: function () {
    var htmlData = this.template();
    this.$el.html(htmlData);
    return this;
  },
});
