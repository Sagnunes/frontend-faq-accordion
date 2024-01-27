<script>

import Accordion from "./components/Accordion.vue";

export default {
  components: {Accordion},
  data() {
    return {
      data: [
        {
          id: 1,
          question: " What is Frontend Mentor, and how will it help me?",
          answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        },
        {
          id: 2,
          question: "Is Frontend Mentor free?",
          answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
        },
        {
          id: 3,
          question: "Can I use Frontend Mentor projects in my portfolio?",
          answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
        },
        {
          id: 4,
          question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
          answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
        },
      ]
    }
  }
}
</script>

<template>
  <main class="absolute grid h-full w-full place-items-center p-4">
    <section class="max-w-[800px] rounded-2xl bg-white p-10">
      <div class="mb-8 flex items-center gap-x-6">
        <img src="./assets/images/icon-star.svg" alt="Purple Icon">
        <h1 class="text-2.5xl font-bold text-purple-dark lg:text-4xl">
          FAQs
        </h1>
      </div>
      <Accordion v-for="item in data" :id="item.id" :key="item.id"
                 :answer="item.answer" :question="item.question" />
    </section>
  </main>
</template>

<style scoped>

</style>
