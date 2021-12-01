<template>
  <div id="login-page" class="bg-gray-900 h-full">
    <div
      class="bg-gray-900 min-h-hscreen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 space-y-1.5"
    >
      <p class="text-2xl text-amber font-bold">Login</p>
      <form action="" class="appearance-none flex flex-col space-y-2">
        <input
          name="email"
          id="email"
          type="email"
          class="w-full appearance-none p-2 rounded-md bg-mirage text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Email"
        />
        <input
          name="password"
          id="password"
          type="password"
          class="w-full appearance-none p-2 rounded-md bg-mirage text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Password"
        />
        <input
          type="submit"
          class="p-1 cursor-pointer rounded-md w-1/2 self-center bg-purple-600"
          value="Login"
        />
      </form>
      <router-link
        class="self-center text-gray-100 hover:text-purple-600"
        to="/forgot"
        >Forgot Password?</router-link
      >
    </div>
  </div>
</template>
