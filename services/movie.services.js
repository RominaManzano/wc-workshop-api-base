'use strict'

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('services/moviesData.json')
const db = low(adapter)
const _ = require('underscore')

exports.getSearch = (options, callback) => {
  /*
    Get the "search" term from the "options". If a search term exists, use it to get the
    matching movies (with the provided mixin). If it doesn't exist, just get all the movies
  */

  /*
    db._.mixin({
      search: function(movies) {
        return _.filter(movies, function(movie){ return movie.Title.toLowerCase().includes(search.toLowerCase());});
      }
    })

    movies = db.get('movies').search().value()
  */

  return;
}

// Get one movie by imdbID

/*
  Create a function "getOne" that receives an "id" and a "callback".
  Find the movie by the given id and return it
*/
