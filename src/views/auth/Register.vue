<template>
  <div
    class="bg-gray-900 min-h-hscreen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <form action="#" method="GET" class="text-white flex flex-col space-y-3">
      <div class="">
        <div class="items-center flex">
          <div class="">
            <label class="" for="signup-username">Username</label>
          </div>
        </div>
        <div data-a-target="signup-username-input" class="tw-relative">
          <input
            aria-label="Create a username"
            type="text"
            class="w-full appearance-none p-2 rounded-md bg-mirage text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            autocapitalize="none"
            autocorrect="off"
            data-a-target="tw-input"
            id="signup-username"
            value=""
          />
        </div>
        <div aria-live="polite" class="form-group-auth__animated-text">
          <div data-a-target="tw-animation-target" class=""></div>
        </div>
      </div>

      <div class="">
        <div class="">
          <label class="" for="password-input">Password</label>
        </div>

        <div class="">
          <div data-a-target="signup-password-input" class="">
            <input
              aria-label="Create a secure password"
              type="password"
              class="w-full appearance-none p-2 rounded-md bg-mirage text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              autocapitalize="none"
              autocorrect="off"
              autocomplete="current-password"
              data-a-target="tw-input"
              id="password-input"
              value=""
            />
          </div>
          <div class="">
            <button
              class=""
              tabindex="-1"
              aria-label="Toggle password visibility"
            ></button>
          </div>
        </div>

        <div class="">
          <label class="" for="password-input-confirmation"
            >Confirm Password</label
          >
        </div>
        <div class="">
          <div
            data-a-target="signup-password-confirmation-input"
            class="tw-relative"
          >
            <input
              aria-label="Confirm your password"
              type="password"
              class="w-full appearance-none p-2 rounded-md bg-mirage text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              autocapitalize="none"
              autocorrect="off"
              autocomplete="current-password"
              data-a-target="tw-input"
              id="password-input-confirmation"
              value=""
            />
          </div>
          <div class="">
            <button
              class=""
              tabindex="-1"
              aria-label="Toggle password visibility"
            ></button>
          </div>
        </div>
      </div>
      <div class="">
        <div class="">
          <div class="">
            <div class="">
              <label class="" for="">Date of Birth</label>
            </div>
          </div>
          <div class="flex flex-row space-x-4">
            <div class="tw-full-width">
              <select
                class="appearance-none sm:py-2 sm:px-2 md:py-2 text-center md:px-4 rounded-md bg-mirage text-shuttle_gray"
                aria-label="Select your birthday month"
                data-a-target="birthday-month-select"
              >
                <option value="0" disabled="">Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div class="">
              <div data-a-target="birthday-date-input" class="">
                <input
                  aria-label="Enter the day of your birth"
                  type="text"
                  class="w-full appearance-none p-2 rounded-md bg-mirage text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Day"
                  autocapitalize="none"
                  autocorrect="off"
                  data-a-target="tw-input"
                  maxlength="2"
                  value=""
                />
              </div>
            </div>
            <div class="">
              <div data-a-target="birthday-year-input" class="">
                <input
                  aria-label="Enter the year of your birth"
                  type="text"
                  class="w-full appearance-none p-2 rounded-md bg-mirage text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Year"
                  autocapitalize="none"
                  autocorrect="off"
                  data-a-target="tw-input"
                  maxlength="4"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <div class="">
          <div class="">
            <label class="" for="email-input">Email</label>
          </div>
        </div>
        <div data-a-target="signup-email-input" class="tw-relative">
          <input
            aria-label="Enter your email address"
            type="email"
            class="w-full appearance-none p-2 rounded-md bg-mirage text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            autocapitalize="none"
            autocorrect="off"
            data-a-target="tw-input"
            id="email-input"
            value=""
          />
        </div>
      </div>

      <input
        type="submit"
        class="p-2 text-black cursor-pointer rounded-md self-center bg-purple-600"
        value="SignUp"
      />
    </form>
  </div>
</template>