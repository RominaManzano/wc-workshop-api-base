'use strict'

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('services/moviesData.json')
const db = low(adapter)
const _ = require('underscore')

exports.getSearch = (options, callback) => {

  // Return filtered movies by search term

  // db._.mixin({
  //   search: function(movies) {
  //     return _.filter(movies, function(movie){ return movie.Title.toLowerCase().includes(search.toLowerCase());});
  //   }
  // })

  // Return all movies
  // Handle error scenario

  return;
}

// Get one movie by imdbID
