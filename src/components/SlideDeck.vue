<script setup lang="ts">
import { reactive, computed, ref } from 'vue';
import ProjectPolaroid from './ProjectPolaroid.vue';
import { projects as projectsList } from '../shared/projects-list';
import { useElementSize } from '@vueuse/core';
import { generateRandomColor } from '../shared/utils';

const emit = defineEmits(['cycleCard']);
const randomDeg = () => `${Math.floor(Math.random() * 10) - 8}deg`;
const randomOffset = () => `${Math.floor(Math.random() * 10) - 20}px`;
const getTextColor = () => generateRandomColor('dark');
const lastIndex = projectsList.length - 1;
const canCycle = ref(true);
const lastCard = ref(null);
const { width } = useElementSize(lastCard);

const projects = reactive(projectsList.map((project, index) => {
  return {
    ...project,
    rotate: randomDeg(),
    offset: randomOffset(),
    order: (projectsList.length - index),
    sendToBack: false,
    color: getTextColor()
  }
}));
const nextButtonHoverColor = generateRandomColor('light');
const firstCardRotation = computed(() => `rotate(${projects[0].rotate})`);
const cardShuffleOffset = computed(() => `${(width.value || 100) * 1.2}px`);

const cycleCard = () => {
  if (!canCycle.value) return;
  canCycle.value = false;
  const lastIndex = projects.length - 1;
  projects[lastIndex].order += projects.length;

  // start a timer to move card to the end of the array. Delay should be slightly shorter than the css transition
  setTimeout(() => {
    const topCard: any = projects.pop();
    // take advantage of the dom stacking order to manage which is on top
    projects.unshift(topCard);
    projects[0].sendToBack = !projects[0].sendToBack;
    canCycle.value = true;
    emit('cycleCard', { id: projects[lastIndex].id })
  }, 850);
  projects[lastIndex].sendToBack = !projects[lastIndex].sendToBack;
}
</script>

<template>
  <div class="deck-container">
    <div class="rotation-wrapper">
      <ProjectPolaroid class="card"
        :style="{transform: `rotate(${project.rotate})`, 
                  marginTop: project.offset, 
                  marginLeft: project.offset
                }"
        @click="cycleCard"
        v-for="project in projects.slice(0, -1)"
        :key="project.title"
        :color="project.color"
        :title="project.title"
        :thumbnail="project.thumbnail"
        :time-range="project.timeRange"
        :class="{ cycle: project.sendToBack }"/>
        <!-- leave last card outside of v-for, for ref binding -->
      <ProjectPolaroid ref="lastCard"
        @click.stop="cycleCard"
        @mouseover.stop=""
        class="card"
        :key="projects[lastIndex].title"
        :title="projects[lastIndex].title"
        :thumbnail="projects[lastIndex].thumbnail"
        :time-range="projects[lastIndex].timeRange"
        :color="projects[lastIndex].color"
        :style="{
          transform: `rotate(${projects[lastIndex].rotate})`, 
          position: 'relative',
          marginTop: projects[lastIndex].offset, 
          marginLeft: projects[lastIndex].offset
        }"
        :class="{ cycle: projects[lastIndex].sendToBack }"/>
    </div>

    <div class="controls">
      <button @click="cycleCard" :style="`--hover-color: ${nextButtonHoverColor}`">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve">
          <path d="M124.396,377h476.322l-186.23-180.625c-48.489-47.396-48.489-117.277,0-164.697c24.264-23.711,56.009-32.068,87.79-32.068
            c31.699,0,63.539,13.551,87.648,37.263l398.11,372.237c48.477,47.444,48.477,124.735,0,172.135l-398.11,407.584
            c-48.396,47.398-127.008,47.529-175.438,0.153c-48.489-47.444-48.489-135.418,0-182.862L600.719,625H124.396
            C55.939,625,0.378,568.059,0.378,501C0.378,433.92,55.939,377,124.396,377z"/>
        </svg>
      Next Project
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.deck-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: clamp(20rem, 25vw, 90vw);
  margin-top: 2rem;
}

.rotation-wrapper {
  transform-style: preserve-3d;
  min-height: clamp(20rem, 25vw, 90vw);
}

button {
  font-family: inherit;
  color: white;
  fill: white;
  background: none;
  border: none;
  margin-top: 2rem;
  transition: all .5s ease;
  &:hover {
    cursor: pointer;
    fill: var(--hover-color);
    color: var(--hover-color);
  }
}
.card {
  // height: clamp(20rem, 30vw, 30rem);
  transform: rotate(8deg) translate3d(0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  transition: all 1s ease;
  cursor: pointer;
  position: absolute;
}

.cycle {
  animation: cycle 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

@keyframes cycle {
  5%  { transform: translate3d(0px, 0, 0)                         v-bind(firstCardRotation) }
  50% { transform: translate3d(v-bind(cardShuffleOffset), 0, 0px) v-bind(firstCardRotation) }
  95% { transform: translate3d(0px, 0, -100px)                    v-bind(firstCardRotation) }
}
</style>
