<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Work</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
        <div class= "flex justify-evenly pt-8 py-2">
          <button :class="{'bg-blue-950 text-white': activeFilter === 'all'}" @click="setActiveFilter('all')" class="px-6 py-2 rounded-full hover:bg-blue-950 hover:text-white"> All </button>
          <button :class="{'bg-blue-950 text-white': activeFilter === 'web'}" @click="setActiveFilter('web')" class="px-6 rounded-full hover:bg-blue-950 hover:text-white"> Web Design </button>
          <button :class="{'bg-blue-950 text-white': activeFilter === 'mobile'}" @click="setActiveFilter('mobile')" class="px-6 rounded-full hover:bg-blue-950 hover:text-white"> Mobile Design </button>
          <button :class="{'bg-blue-950 text-white': activeFilter === 'uiux'}" @click="setActiveFilter('uiux')" class="px-6 rounded-full hover:bg-blue-950 hover:text-white"> UI/UX </button>
        </div>

      </div>
      <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div v-for="image in filteredImages" :key="image.id" class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
          <img :src="image.url" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
          <!-- <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" /> -->
          <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-blue-950/10" />
<!-- 
          <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
            <div class="-ml-4 flex items-center gap-x-4">
              <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div class="flex gap-x-2.5">
                <img :src="post.author.imageUrl" alt="" class="h-6 w-6 flex-none rounded-full bg-white/10" />
                {{ post.author.name }}
              </div>
            </div>
          </div> -->
          <!-- <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
            <a :href="post.href">
              <span class="absolute inset-0" />
              {{ post.title }}
            </a>
          </h3> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeFilter: 'all',
      images: [
        { id: 1, url: "/images/web.jpg", category: 'web' },
        { id: 2, url: "/images/chempe.png", category: 'web' },
        { id: 3, url: "/images/mobile.jpg", category: 'mobile' },
        { id: 4, url: "/images/ui.jpg", category: 'uiux' },

      ]
    };
  },
  computed: {
    filteredImages() {
      if (this.activeFilter === 'all') {
        return this.images;
      } else {
        return this.images.filter(image => image.category === this.activeFilter);
      }
    }
  },
  methods: {
    setActiveFilter(filter) {
      this.activeFilter = filter;
    }
  }
};
</script>

<!-- <style scoped>
button {
  padding: 0.5rem 1rem;
  border: 2px solid #000;
  background-color: #fff;
  cursor: pointer;
}

.btn-active {
  background-color: #000;
  color: #fff;
}
</style> -->
