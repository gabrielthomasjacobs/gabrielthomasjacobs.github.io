<script setup lang="ts">
import { ref, watch } from 'vue';
import { projects } from '../shared/projects-list';
import { generateRandomColor } from '../shared/utils';

const props = defineProps({
  projectId: Number
});

const project = ref(projects[projects.length]);

watch(() => props.projectId, () => {
  const searchId = props.projectId || projects.length;
  const newProject = projects.find(project => project.id === searchId);
  if (newProject) {
    project.value = newProject;
  }
}, { immediate: true })
</script>

<template>
  <div v-if="project" class="summary-container">
    <div v-if="project.stack">
      <span
      class="section-label"
      :style="{color: generateRandomColor('light')}">Stack: </span>
      {{ project.stack?.join(', ') }}
    </div>
    <div>
      <span class="section-label"
      :style="{color: generateRandomColor('light')}">Project Description: </span>
      {{ project.description }}
    </div>
    <div>
      <span class="section-label"
      :style="{color: generateRandomColor('light')}">Contribution: </span>
      {{ project.expandedSummary.contribution }}
    </div>
    <div>
      <span class="section-label"
      :style="{color: generateRandomColor('light')}">Challenges: </span>
      {{ project.expandedSummary.challenges }}
    </div>
    <div v-if="project.expandedSummary.state">
      <span class="section-label"
      :style="{color: generateRandomColor('light')}">State: </span>
      {{ project.expandedSummary.state }}
    </div>
    <div  v-if="project.expandedSummary.final">
      <span class="section-label"
      :style="{color: generateRandomColor('light')}">Extra: </span>
      {{ project.expandedSummary.final }}
    </div>
    <div v-if="project.link && project.link !== ''">
      <a :href="project.link || ''"
        class="section-label"
        :style="{color: generateRandomColor('light')}"
        :aria-label="project.linkText"
        target="_blank">
        {{project.linkText}}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.thumbnail {
  background-color: red;
}
.section-label {
  font-size: 1.75rem;
  text-align: left;
}
a:visited {
  color: default;
}
.summary-container {
  text-align: left;
  min-height: min(80vh, 64rem);
  div {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}
</style>