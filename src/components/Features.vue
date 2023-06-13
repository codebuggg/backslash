<template>
    <div class="relative px-6 pb-10 pt-8 lg:px-8 lg:pb-12 lg:pt-16 ">
      <div class="absolute inset-0">
        <div class="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div class="relative mx-auto max-w-7xl">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What we do</h2>
          <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">We are here to help your business.</p>
        </div>
        <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          <div v-for="post in posts" :key="post.title" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="flex-shrink-0">
              <img class="h-64 w-full object-cover" :src="post.imageUrl" alt="" />
            </div>
            <div class="flex flex-1 flex-col justify-between bg-white p-6">
              <div class="flex-1">
                <a :href="post.href" class="mt-2 block">
                  <p class="flex text-xl font-semibold text-gray-900 align-center justify-center">{{ post.title }}</p>
                  <p class="mt-3 text-base text-gray-500 flex justify-center text-center">{{ post.description }}</p>
                </a>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const posts = [
    {
      title: 'Software Development',
      href: '#',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      imageUrl:
      "/images/web-design.jpg",
    },
    {
      title: 'MobileApp Development',
      href: '#',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      imageUrl:
      "/images/mobile-design.jpg",
    },
    {
      title: 'UI / UX ',
      href: '#',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      imageUrl:
      "/images/graphic-design.jpg",
    },
  ]
  </script>