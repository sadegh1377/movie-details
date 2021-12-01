<template>
  <div class="bg-gray-900 min-h-hscreen flex flex-col items-center">
    <div class="h-3/6 w-full px-1">
      <vue-core-video-player
        :title="movieObject.title"
        :cover="`https://image.tmdb.org/t/p/w1280${movieObject.backdrop_path}`"
        :src="movie.videoSource"
      ></vue-core-video-player>
    </div>
    <h1 class="px-8 pt-4 text-white text-xl self-start">{{ movieObject.title }}</h1>
    <h1 class="px-8 text-gray-400 text-sm self-start">
      {{ moment(movieObject.release_date).format("MMM D, YYYY") }}
    </h1>
    <div class="h-0.5 my-2 w-11/12 rounded-md px-4 bg-gray-600"></div>
    <h1 class="px-8 text-white">{{ movieObject.overview }}</h1>
    <div class="h-0.5 my-2 w-11/12 rounded-md px-4 bg-gray-600"></div>
    <div class="grid grid-cols-1">
      <div
        :key="index"
        v-for="(review, index) in movieReviewsArray"
        class="text-white flex flex-row"
      >
        <p>{{ review.author }}</p>
        <br>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Details",
  created(){
      this.fetchMovie();
      this.fetchMovieReviews();
  },
  methods:{
    fetchMovie(){
      var movieId = this.$route.params.id;
      this.$http.get("movie/"+ movieId + "?api_key=47715c426aac874f849510199add8d36").then( res => {
        console.log(res);
          this.movieObject = res.data;
      });
    },
      fetchMovieReviews(){
      var movieId = this.$route.params.id;
      this.$http.get("movie/"+ movieId + "/reviews"+ "?api_key=47715c426aac874f849510199add8d36").then( res => {
          console.log(res);
          this.movieReviewsArray = res.data.results;
      });
    }
  },
  data() {
    return {
      movieObject:{},
      movieReviewsArray:[],
      movie: {
        id: "299537",
        title: "Captain Marvel",
        poster:
          "https://image.tmdb.org/t/p/w1280/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
        overview:
          "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
        release_date: 1551830400,
        genres: ["Action", "Adventure", "Science Fiction"],
        videoSource: [
          {
            src:
              "https://aspb27.cdn.asset.aparat.com/aparat-video/aa19c6d21302cb71945c428d8c8fee2d30600277-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjA2ZjYyNTJiMzZhNDliYzg2MDA3Y2U0YmYxODZjMmZjIiwiZXhwIjoxNjE1MzExNDQ5LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.Dg68V647nXRpptFhhv2mmeSQfyGaAl8HZx9fJsiEIkw",
            resolution: "360p",
          },
          {
            src:
              "https://aspb27.cdn.asset.aparat.com/aparat-video/aa19c6d21302cb71945c428d8c8fee2d30600277-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjA2ZjYyNTJiMzZhNDliYzg2MDA3Y2U0YmYxODZjMmZjIiwiZXhwIjoxNjE1MzExNDQ5LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.Dg68V647nXRpptFhhv2mmeSQfyGaAl8HZx9fJsiEIkw",
            resolution: "720p",
          },
          {
            src:
              "https://aspb27.cdn.asset.aparat.com/aparat-video/aa19c6d21302cb71945c428d8c8fee2d30600277-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjA2ZjYyNTJiMzZhNDliYzg2MDA3Y2U0YmYxODZjMmZjIiwiZXhwIjoxNjE1MzExNDQ5LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.Dg68V647nXRpptFhhv2mmeSQfyGaAl8HZx9fJsiEIkw",
            resolution: "1080p",
          },
        ],
        comments: [
          { user_id: 1, body: "comment" },
          { user_id: 1, body: "comment" },
          { user_id: 1, body: "comment" },
          { user_id: 1, body: "comment" },
          { user_id: 1, body: "comment" },
          { user_id: 1, body: "comment" },
          { user_id: 1, body: "comment" },
          { user_id: 1, body: "comment" },
          { user_id: 1, body: "comment" },
        ],
      },
    };
  },
};
</script>