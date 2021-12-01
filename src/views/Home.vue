<template>
  <div
    class="py-5 min-h-hscreen h-full space-y-8 flex flex-col items-center w-full bg-gray-900"
  >
    <div
      class="md:mx-9 sm:space-y-5 md:pt-4 items-center flex md:flex-row lg:flex-row sm:flex-col md:space-x-16"
    >
      <div class="uppercase font-bold text-4xl flex flex-col">
        <div class="flex flesx-row space-x-2">
          <p class="text-amber">the first</p>
          <p class="text-gray-100">online</p>
        </div>
        <p class="text-gray-100">streaming movie</p>
        <p class="text-gray-100">search engine</p>
      </div>
      <div class="flex flex-col space-y-3">
        <p class="text-shuttle_gray">
          StreamTV is an online streaming movie search engine with <br />
          filters to find the best movies for you. Use our website to watch
          <br />
          movies online through services such as through the netflix
          <br />catalog. its esay ...
        </p>
        <p class="text-shuttle_gray">
          Sort and filter streaming movies based on release year, IMDB <br />
          and Rotten Tomatoes ratings, and Age/MPAA ratings. Then click<br />
          on the movie to get more details and a direct link to view the <br />
          movie online.
        </p>
      </div>
    </div>
    <from
      action="#"
      method="GET"
      class="flex text-shuttle_gray text-sm space-x-3.5 flex-row justify-items-center sm:flex-wrap"
    >
      <label class="self-center font-mono font-semibold text-gray-200">
        Filter By :
      </label>
      <select
        id="service"
        name="service"
        v-model="service"
        class="appearance-none sm:py-2 text-center sm:px-4 md:py-2 flex flex-row md:px-6 rounded-md bg-mirage text-shuttle_gray"
      >
        <option value="" disabled selected hidden>Streaming Service</option>
        <option value="0">Soosis Studio</option>
        <option value="1">Soosis Studio</option>
      </select>
      <select
        id="type"
        name="type"
        v-model="type"
        class="appearance-none sm:py-2 sm:px-2 text-center md:py-2 md:px-4 rounded-md bg-mirage text-shuttle_gray"
      >
        <option value="" disabled selected hidden>Type</option>
        <option value="0">Movie</option>
        <option value="1">Series</option>
      </select>
      <select
        id="genre"
        name="genre"
        v-model="genre"
        class="appearance-none sm:py-2 sm:px-2 md:py-2 md:px-4 text-center rounded-md bg-mirage text-shuttle_gray"
      >
        <option value="" disabled selected hidden>Genre</option>
        <option value="0">Action</option>
        <option value="1">Comedy</option>
        <option value="2">Political</option>
        <option value="3">Action</option>
        <option value="4">Comedy</option>
      </select>
      <select
        id="year"
        name="year"
        v-model="year"
        class="appearance-none sm:py-2 sm:px-2 md:py-2 text-center md:px-4 rounded-md bg-mirage text-shuttle_gray"
      >
        <option value="0" disabled selected hidden>Year</option>
        <option value="1999">1999</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
        <option value="2003">2003</option>
      </select>
      <button
        @click="submitFilter()"
        type="submit"
        class="sm:py-2 sm:px-2 md:py-2 text-center md:px-8 rounded-md bg-amber text-gray-900 font-semibold"
      >
        Apply
      </button>
    </from>
     <h1 class="place-self-start sm:px-20 md:mx-6 text-white text-xl">Popular Movies</h1>
    <ul
      class="grid lg:grid-cols-7 sm:gap-y-8 sm:px-20 md:grid-cols-4 md:gap-6 md:mx-6"
    >
   
      <div :key="index" v-for="(movie, index) in moviePopularData">
        <movie-card :movie="movie"></movie-card>
      </div>
    </ul>
    <h1 class="place-self-start sm:px-20 md:mx-6 text-white text-xl">Top Rated Movies</h1>
       <ul
      class="grid lg:grid-cols-7 sm:gap-y-8 sm:px-20 md:grid-cols-4 md:gap-6 md:mx-6"
    >
   
      <div :key="index" v-for="(movie, index) in movieTopRatedData">
        <movie-card :movie="movie"></movie-card>
      </div>
    </ul>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";

export default {
  name: "Home",
  components: {
    MovieCard,
  },
  created(){
     this.fetchPopularMovies();
     this.fetchLatestMovies();
  },
  methods: {
    submitFilter() {
      alert("sum filtter");
    },
    fetchPopularMovies(){
      this.$http.get("movie/popular?api_key=47715c426aac874f849510199add8d36").then( res =>  {
         this.moviePopularData= res.data.results;
      } );
    },
       fetchLatestMovies(){
        this.$http.get("movie/top_rated?api_key=47715c426aac874f849510199add8d36").then( res =>  {
          console.log(res);
         this.movieTopRatedData= res.data.results;
      } );
    }
  },
  data() {
    return {
      moviePopularData:[],
      movieTopRatedData:[],
    };
  },
};
</script>
