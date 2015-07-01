var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');


module.exports = Backbone.View.extend({
  template: _.template($('#movieTmpl').html()),
  tagName: 'article',
  events: {
    'click .link': 'deleteButton',
    'click .edit': 'editButton',
    'click .editCancel': 'cancelEdit',
    'click .editSubmit': 'submitEdit',
    'click .detailButton': 'navDetails'
  },

  initialize: function (options) {

  },

  render: function () {
    var modelData = this.model.toJSON();
    var htmlData = this.template(modelData);
    this.$el.html(htmlData);
    return this;
  },

  navDetails: function(event){
    console.log(this.model.id);
    window.location = "/#movie/" + this.model.id;
  },

  deleteButton: function (event) {
    event.preventDefault();
    this.remove();
    this.model.destroy();
  },

  editButton: function (event){
    event.preventDefault();
    this.$('.movieDetails').addClass('hide');
    this.$('.editMovie').removeClass('hide');
  },

  submitEdit: function(event){
    event.preventDefault();
    var obj = {
      title: $('.etitle').val() || 'Movie Title',
      releaseYear: $('.eyear').val() || '2080',
      CoverImage: $('.eimage').val() || "https://discussions.apple.com/___sbsstatic___/migration-images/194/19494496-1.gif",
      plot: $('.eplot').val() || "This is a movie about the world",
      rating: $('.estars').val() || 5
    };

    this.$('.movieDetails').removeClass('hide');
    this.$('.editMovie').addClass('hide');
    this.model.save(obj);
    this.render();
  },

  cancelEdit: function(event){
  event.preventDefault();
  this.$('.movieDetails').removeClass('hide');
  this.$('.editMovie').addClass('hide');
}

});
