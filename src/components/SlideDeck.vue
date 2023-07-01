<script setup lang="ts">
import { reactive, computed, ref } from 'vue';
import ProjectPolaroid from './ProjectPolaroid.vue';
import { projects as projectsList } from '../shared/projects-list';
import { useElementSize } from '@vueuse/core';
import randomColor from 'randomcolor';

const emit = defineEmits(['cycleCard']);
const randomDeg = () => `${Math.floor(Math.random() * 10) - 8}deg`;
const randomOffset = () => `${Math.floor(Math.random() * 10) - 20}px`;
const getTextColor = () => randomColor({ luminosity: 'dark' });
const lastIndex = projectsList.length - 1;
const canCycle = ref(true);
const lastCard = ref(null);
const { width } = useElementSize(lastCard);
const hasShuffled = ref(false);

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

const firstCardRotation = computed(() => `rotate(${projects[0].rotate})`);
const cardShuffleOffset = computed(() => `${(width.value || 100) * 1.2}px`);
const shuffleMessage = computed(() => {
  if(hasShuffled.value) return ""
  const maxTouchPoints = navigator?.maxTouchPoints || 0;
  return maxTouchPoints > 0 && maxTouchPoints !== 256 ? 'Tap to see the next project! ⤴' : 'Click to see the next project! ⤴'
});

const cycleCard = () => {
  if (!canCycle.value) return;
  hasShuffled.value = true;
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
  }, 900);
  projects[lastIndex].sendToBack = !projects[lastIndex].sendToBack;
}
</script>

<template>
  <div class="deck-container"
    :data-shuffle-message="shuffleMessage">
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
</template>

<style scoped lang="scss">
.deck-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 8rem;
  margin-bottom: 5rem;
  transform-style: preserve-3d;
  &:after {
    content: attr(data-shuffle-message);
    min-height: 1rem;
    position: relative;
    top: 2.5rem;
    font-size: 1.5rem;
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
