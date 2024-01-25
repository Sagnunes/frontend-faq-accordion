<script>
import PlusIcon from "./PlusIcon.vue";
import MinorIcon from "./MinorIcon.vue";

export default {
  props: ['id', "answer", "question"],
  components: {MinorIcon, PlusIcon},
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    identification() {
      return 'accordion-' + this.id
    },
  },
}
</script>

<template>
  <section :class="isOpen ? 'h-32' : 'h-20'" class="gap-y-6">
    <div role="button" data-collapse="animated-collapse-3" :aria-controls="identification" :aria-expanded="isOpen"
         class="flex w-full cursor-pointer items-center justify-between gap-x-6" @click="toggleAccordion">
      <h2 class="text-lg font-semibold text-purple-dark transition-colors group-hover:text-pinkish">
        {{ this.question }}
      </h2>
      <plus-icon v-if="!isOpen"/>
      <minor-icon v-else/>
    </div>
    <footer class="flex">
      <p :id="identification" :class="!isOpen ? 'mt-0 h-0 overflow-hidden' : 'm-2'"
         class="text-sm font-normal leading-normal text-purple-grayish transition-all lg:text-lg h-0 ">
        {{ this.answer }}
      </p>
    </footer>
  </section>
</template>

<style scoped>

</style>