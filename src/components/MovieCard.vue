<template>
  <li
    @click="movieClicked(movie.id)"
    class="group shadow-2xl w-full rounded-md relative hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 bg-gradient-to-b"
  >
    <img
      class="rounded-md pb-5 opacity-100 group-hover:opacity-0"
      :src="`https://image.tmdb.org/t/p/w1280${movie.poster_path}`"
      alt=""
    />
    <p
      class="transition ease-in duration-500 p-3 text-xs h-3/4 overflow-ellipsis overflow-hidden text-center absolute left-0 top-0 opacity-0 group-hover:opacity-100"
    >
      {{ movie.overview }}
    </p>
    <div
      class="group-hover:opacity-0 absolute flex-col h-1/3 rounded-md w-full text-center bottom-0 bg-gradient-to-b from-transparent via-current to-gray-900"
    >
      <div class="absolute w-full sm:mb-16 md:mb-2 text-center bottom-0">
        <p
          :title="movie.title"
          class="text-white mx-4 h-6 truncate font-semibold"
        >
          {{ movie.title }}
        </p>
        <div class="inline-block text-xs">
          <span
            :key="index"
            v-for="(genre, index) in movie.genres_ids"
            class="text-white"
          >
            {{ genre }},
          </span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import router from "../router/index";
export default {
  name: "MovieCard",
  props: ["movie"],
  methods: {
    movieClicked(id) {
      router.push({ name: "Details", params: { id: id } });
    },
  },
};
</script>