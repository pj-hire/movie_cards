'use strict'

Vue.component('component-one', {
  props: ['genres'],
  data: function() {
    return {
      movie: {
        title: '',
        director: '',
        year: '',
        genre: '',
      }
    }
  },
  template: `
  <div class="box">
    <h2>Add Movie</h2>
    <p>Title: <input type="text" v-model="movie.title"></p>
    <p>Director: <input type="text" v-model="movie.director"></p>
    <p>Year: <input type="text" v-model="movie.year"></p>
    <p>Genre:
      <select v-model="movie.genre">
        <option v-for="genre of genres">{{ genre }}</option>
      </select>
    </p>
    <button
      v-on:click="$emit('change',
        movie
      )">Add</button>
  </div>
  `
})

Vue.component('component-two', {
  props:['movieInfo'],
  data: function() {
    return {
      movie: this.movieInfo
    }
  },
  template: `
  <div class="box">
    <button class="justify-right"
      v-on:click="$emit('change',
        movie
      )">X</button>
    <p>Title: {{ movie.title }} </p>
    <p>Director: {{ movie.director }} </p>
    <p>Year: {{ movie.year }} </p>
    <p>Genre: {{ movie.genre }} </p>
    <p>Watched: <input type="checkbox" v-model="movie.watched"></p>
  </div>
  `
})

Vue.component('component-three', {
  props:['movieInfo', 'index'],
  data: function() {
    return {
      movie: this.movieInfo
    }
  },
  template: `
  <div class="box">
    <button class="justify-right"
      v-on:click="$emit('change',
        index
      )">X</button>
    <p>Title: {{ movie.title }} </p>
    <p>Director: {{ movie.director }} </p>
    <p>Year: {{ movie.year }} </p>
    <p>Genre: {{ movie.genre }} </p>
    <p>Watched: <input type="checkbox" v-model="movie.watched"></p>
    <p>Favorite: <input type="checkbox" v-model="movie.favorite"></p>
  </div>
  `
})

// Vue.component('component-one', {
//   // props:[''],
//   template: `
//   <h2>My List</h2>
//   `
// })
//
// Vue.component('component-one', {
//   // props:[''],
//   template: `
//   <h2>Watched</h2>
//   `
// })

let app = new Vue({
  el: '#app',
  data: {
    genres: [
      'Anime',
      'Action',
      'Comedy',
      'Drama',
      'Romance',
      'Thriller',
    ],
    movies: [
      {
        title: 'Jaws',
        director: 'Steven Spielberg',
        year: '1975',
        genre: 'Thriller',
        watched: true,
        favorite: true,
        backgroundColor: '#80b3ff'
      },
      {
        title: 'The Graduate',
        director: 'Mike Nichols',
        year: '1967',
        genre: 'Drama',
        watched: true,
        favorite: false,
        backgroundColor: '#8ebdb3'
      },
      {
        title: 'Parasite',
        director: 'Bong Joon-ho',
        year: '2019',
        genre: 'Comedy-thriller',
        watched: false,
        favorite: false,
        backgroundColor: '#a3d69a'
      },
      {
        title: 'Talladega Nights',
        director: 'Adam McKay',
        year: '2006',
        genre: 'Comedy',
        watched: true,
        favorite: false,
        backgroundColor: '#ffcd61'
      },
      {
        title: 'SE7EN',
        director: 'David Fincher',
        year: '1995',
        genre: 'Thriller',
        watched: true,
        favorite: false,
        backgroundColor: '#ff714a'
      },
    ]
  },
  methods: {
    add: function(data) {
      let newMovie = {
        title: data.title,
        director: data.director,
        year: data.year,
        genre: data.genre,
        watched: '',
        favorite: '',
        backgroundColor: ''
      };
      this.movies.push(newMovie)
    },
    remove: function(data) {
      // this.movies.splice(data, 1);
      // console.log(data);
    }
  }
})
