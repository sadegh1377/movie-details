<template>
  <div id="app" class="border-amber border-solid border-4">
    <div
      id="nav"
      class="p-5 relative w-full flex bg-gray-900 text-sm flex-row items-stretch"
    >
      <div class="flex flex-row space-x-5">
        <router-link class="flex flex-row items-center" to="/">
          <p class="pl-2 text-2xl text-amber font-bold uppercase font-mono">
            streamtv
          </p>
          <p class="text-gray-300 uppercase font-bold">.com</p>
        </router-link>
        <form action="" class="w-96 appearance-none">
          <input
            type="text"
            class="w-full appearance-none p-2 rounded-md bg-mirage text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Search for Movies, Tv Series, Celebrities & more"
          />
        </form>
      </div>
      <div
        class="flex md:text-gray-400 self-center flex-row space-x-5 absolute right-10 sm:text-white"
      >
        <router-link class="hover:text-purple-600" to="/login"
          >Login</router-link
        >
        <router-link class="hover:text-purple-600" to="/register"
          >Register</router-link
        >
      </div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <div class="flex flex-col justify-between">
      <footer class="h-32 items-center flex flex-col bg-mirage sm:flex-wrap">
        <router-link
          class="p-4 flex flex-row justify-items-center items-center group-hover:scale-50"
          to="/"
        >
          <p class="pl-2 text-2xl text-amber font-bold uppercase font-mono">
            streamtv
          </p>
          <p class="text-gray-300 uppercase font-bold">.com</p>
        </router-link>
        <div
          class="flex text-shuttle_gray text-sm space-x-8 flex-row justify-items-stretch"
        >
          <p>Contact</p>
          <p>FAQ</p>
          <p>Term and Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 0.1s ease-in;
  transition: background 0.1s ease-in;
}

.fade-leave-active {
  transition: opacity 0.1s ease-out;
  transition: background 0.1s ease-out;
}

.fade-enter,
.fade-leave-to {
  --tw-bg-opacity: 0.9;
  background-color: rgba(17, 24, 39, var(--tw-bg-opacity));
}
</style>