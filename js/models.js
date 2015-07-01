var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;


module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/trossyMovies',
  idAttribute: '_id',
  defaults: function () {
    return {
            title: "Some Movie In The Future",
            releaseYear: "2060",
            CoverImage: "http://www.howarddavidjohnson.com/Battle%20of%20%20the%20Damned.jpg",
            plot: "It's the year 2080...  a plague has transformed almost every human into vampires. Two American college students on a walking tour of Britain are attacked by a werewolf that none of the locals will admit exists. Vampire warrior Selene and the new werewolf Michael hunt for clues to reveal the history of their races and the war between them.",
            rating: 10
    };
  },
  initialize: function () {

  }
});
