<template>
  <div>
    <Gallery />

    <card class="container mx-auto text-white flex flex-col justify-center">
      <span class="mb-4 text-center">
        <heading>When choosing your herald</heading>

        <paragraph class="mt-4">As soon as you enter a game,</paragraph>
        <paragraph>You will need to choose a Herald to play.</paragraph>
      </span>

      <img
        class="bg-white-smoke opacity-75 shadow-lg rounded-md max-w-6xl max-h-full"
        src="/football-team.png"
        alt="Team of Heralds"
      />

      <action-button class="mt-4 self-center" link="/heralds">
        View all Heralds
      </action-button>
    </card>

    <card class="flex flex-col justify-center mt-4 text-white">
      <heading class="mb-4 self-center">Playing your Herald</heading>

      <ul
        class="grid grid-cols-1 gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      >
        <li
          class="col-span-1 flex flex-col text-center bg-glass rounded-lg shadow"
        >
          <div class="flex-1 flex flex-col p-8">
            <img
              class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
              src="/roles/tank.png"
              alt="Tank Icon"
            />
            <h3 class="mt-6 text-white text-sm leading-5 font-medium">
              Tank
            </h3>
            <dl class="mt-1 flex-grow flex flex-col justify-between">
              <dt class="sr-only">Role</dt>
              <dd class="text-gray-400 text-sm leading-5">
                <paragraph>As a tank, you're the wall of your team.</paragraph>
                <paragraph
                  >You will be responsible for guarding your team mates by
                  soaking damage.</paragraph
                >
              </dd>
            </dl>
          </div>
          <div class="border-t border-gray-300">
            <div class="-mt-px flex">
              <div class="w-0 flex-1 flex">
                <a
                  href="#"
                  class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                >
                  <svg
                    class="w-5 h-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span class="ml-3 text-white">Read more</span>
                </a>
              </div>
            </div>
          </div>
        </li>

        <li
          class="col-span-1 flex flex-col text-center bg-glass rounded-lg shadow"
        >
          <div class="flex-1 flex flex-col p-8">
            <img
              class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
              src="/roles/dps.png"
              alt="DPS Icon"
            />
            <h3 class="mt-6 text-white text-sm leading-5 font-medium">
              Damage
            </h3>
            <dl class="mt-1 flex-grow flex flex-col justify-between">
              <dt class="sr-only">Role</dt>
              <dd class="text-gray-400 text-sm leading-5">
                <paragraph>You're a damage dealer.</paragraph>
                <paragraph>You make lazors go pew pew.</paragraph>
              </dd>
            </dl>
          </div>
          <div class="border-t border-gray-300">
            <div class="-mt-px flex">
              <div class="w-0 flex-1 flex">
                <a
                  href="#"
                  class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                >
                  <svg
                    class="w-5 h-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span class="ml-3 text-white">Read more</span>
                </a>
              </div>
            </div>
          </div>
        </li>

        <li
          class="col-span-1 flex flex-col text-center bg-glass rounded-lg shadow"
        >
          <div class="flex-1 flex flex-col p-8">
            <img
              class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
              src="/roles/support.png"
              alt="Support Icon"
            />
            <h3 class="mt-6 text-white text-sm leading-5 font-medium">
              Support
            </h3>
            <dl class="mt-1 flex-grow flex flex-col justify-between">
              <dt class="sr-only">Role</dt>
              <dd class="text-gray-400 text-sm leading-5">
                <paragraph
                  >As a support, you'll mostly want to find yourself at the
                  backline of your team.</paragraph
                >
                <paragraph
                  >You'll be in charge of keeping your team mates healthy and
                  assist where needed.</paragraph
                >
              </dd>
            </dl>
          </div>
          <div class="border-t border-gray-300">
            <div class="-mt-px flex">
              <div class="w-0 flex-1 flex">
                <a
                  href="#"
                  class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                >
                  <svg
                    class="w-5 h-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span class="ml-3 text-white">Read more</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </card>
  </div>
</template>

<script>
import Gallery from '~/components/Gallery'
import Card from '~/components/Card'
import Heading from '~/components/Typography/Heading'
import Paragraph from '~/components/Typography/Paragraph'
import ActionButton from '~/components/ActionButton'

export default {
  components: {
    Gallery,
    Card,
    Heading,
    Paragraph,
    ActionButton,
  },
}
</script>
