<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  title: String,
  thumbnail: String,
  timeRange: String,
  tape: Boolean,
  color: String
});

const randomTapeClass = computed(() => `tape tape--${Math.floor(Math.random() * 3) + 1}`);
const imageUrl = (type: 'png' | 'webp') => {
  if(!props.thumbnail) return '';
  return new URL(`/src/assets/img/${props.thumbnail}.${type}`, import.meta.url).href;
};
</script>

<template>
  <div class="photo" :class="tape ? randomTapeClass : ''">
    <section class="thumbnail">
      <picture>
        <source type="image/webp" :srcset="imageUrl('webp')">
        <img :src="imageUrl('png') || ''" alt="thumbnail">
      </picture>
    </section>
    <section class="image-label" :style="{color: props.color}">
      <h1>{{props.title}}</h1>
      <h2>{{props.timeRange}}</h2>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import  "../styles.scss";
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

.photo {
  background-color: rgb(243, 243, 243);
  height: clamp(20rem,32rem,90vh);
  width: clamp(20rem, 20vw, 90vw);
  min-width: 20rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  place-items: center;
  padding: .75rem;
  border-radius: .25rem;
  background-image: repeating-linear-gradient(45deg, rgba(161, 161, 161, 0.25), rgba(158, 158, 158, 0.25) 1px, transparent 1px, transparent 6px);
  background-size: 8px 8px;
  cursor: default;
}

.thumbnail {
  display: flex;
  justify-content: center;
  max-height: 80%;
  height: 80%;
  width: 100%;
  background-color: black;
  margin-bottom: .5rem;
  flex-shrink: 1;
  picture {
    display: contents;
  }
  img {
    object-fit: contain;
    max-height: 100%;
    max-width: 100%;
    clip-path: inset(2px 1px 2px 1px);
    aspect-ratio: auto 4/3;
    width: 800px;
    height: 600px;
  }
}

.image-label {
  height: 20%;
  display: flex;
  flex-direction: column;
  flex-grow:1;
  justify-content: center;
  align-items: center;
  color: #000;
  font-weight: bold;
  text-align: center;
  font-family: 'Permanent Marker', cursive;
  max-width: 100%;
  word-wrap: break-word;
  h1 {
    font-size: 1.75rem;
    margin: 0 0 .75rem 0;
    line-height: 100%;
  }
  h2 {
    font-size: 1.25rem;
    margin: 0px;
  }
}

.tape {
  position: relative;
  text-align: center;
  display: inline-block;
  margin: 20px auto 10px;
  
  &:before,
  &:after {
    background: rgba(255,255,235,.6);
    box-shadow: 0 1px 3px rgba(0,0,0,.4);
    z-index: 1;
    content: "";
    display: block;
    height: 30px;
    position: absolute;
    margin: auto;
    width: 100px;
  }

  img {
    background: black;
    border: 1px solid #ddd;
    box-shadow: 0 1px 3px rgba(0,0,0,.4);
    display: inline-block;
    height: auto;
    margin: 0 20px;
    max-width: 100%;
    text-align: center;
    vertical-align: top;
  }
}

.tape--1 {
  // top-left and bottom-right
  &:before {
    left: -30px;
    top: 10px;
    transform: rotate(-45deg);
  }
  &:after {
    right: -30px;
    bottom: 0px;
    transform: rotate(-45deg);
  }
}

.tape--2 {
  // top-left and top-right
  &:before {
    left: -30px;
    top: 10px;
    transform: rotate(-45deg);
  }
  &:after {
    right: -30px;
    top: 10px;
    transform: rotate(45deg);
  }
}

.tape--3 {
  // top-right and bottom-left
  &:before {
    right: -30px;
    top: 10px;
    transform: rotate(45deg);
  }
  &:after {
    left: -30px;
    bottom: 0px;
    transform: rotate(45deg);
  }
}

</style>