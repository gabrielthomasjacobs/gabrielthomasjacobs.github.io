<script setup lang="ts">
import { Ref, ref } from 'vue';
import ProjectPolaroid from './components/ProjectPolaroid.vue';
import SlideDeck from './components/SlideDeck.vue';
import ProjectSummary from './components/ProjectSummary.vue';
import randomColor from 'randomcolor';

const selectedProjectId: Ref<number | undefined> = ref(undefined);
const updateProjectDescription = (payload: {id: number}) => selectedProjectId.value = payload.id;
const newColor = (luminosity: 'light' | 'dark' = 'light') => randomColor({luminosity});
const linkLabel = ref('');
</script>

<template>
  <div>
    <div class="links">
      <a @mouseenter="linkLabel = 'LinkedIn'"
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/gabriel-jacobs-38764191/"
        target="_blank">
        <svg :style="`--hover-color: ${newColor()}`" alt="LinkedIn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
      <a @mouseenter="linkLabel = 'Github'"
        aria-label="Github"
        href="https://github.com/gabrielthomasjacobs" 
        target="_blank">
        <svg :style="`--hover-color: ${newColor()}`" alt="Github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
      <a @mouseenter="linkLabel = 'Email Me!'"
        aria-label="Email Me!"
        href="mailto:Gabriel.Thomas.Jacobs@gmail.com" 
        target="_blank">
        <svg :style="`--hover-color: ${newColor()}`" alt="Email Me!" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
      </a>
      <a @mouseenter="linkLabel = 'Download My Resume'"
        aria-label="Download My Resume"
        href="https://drive.google.com/drive/folders/1dmNWCXmkOMMCz5VBmfdm0roadIeGLxLq?usp=sharing"
        target="_blank">
        <svg :style="`--hover-color: ${newColor()}`" alt="PDF Download" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.00006 2V2L8.00006 8H10L6 13L2 8H4L4 2H8.00006Z" />
          <path d="M10.5847 16.4004H9.9393V14.8413H10.5942C10.7625 14.8436 10.8967 14.9192 10.9968 15.068C11.0969 15.2145 11.147 15.4125 11.147 15.6621C11.147 15.9025 11.098 16.0856 11 16.2115C10.902 16.3375 10.7636 16.4004 10.5847 16.4004Z" />
          <path d="M13.6645 18.1621V14.8413H14.0064C14.2982 14.8505 14.5048 14.9478 14.6262 15.1332C14.7476 15.3164 14.8083 15.6415 14.8083 16.1085V16.9773C14.8019 17.4123 14.7348 17.7191 14.607 17.8977C14.4792 18.0739 14.2588 18.1621 13.9457 18.1621H13.6645Z" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00006 14.6008L12.0807 7H9.00006L9.00006 2H15C15.0113 2 15.0221 2.0032 15.033 2.00647C15.0424 2.00925 15.0519 2.01208 15.062 2.013C15.151 2.018 15.237 2.036 15.321 2.064C15.331 2.06742 15.3409 2.07056 15.3508 2.07367C15.3727 2.08056 15.3943 2.08736 15.415 2.097C15.521 2.146 15.622 2.207 15.708 2.293L21.708 8.293C21.794 8.379 21.855 8.48 21.904 8.586C21.9132 8.60784 21.9203 8.62967 21.9276 8.65186L21.937 8.68C21.965 8.764 21.982 8.85 21.987 8.938C21.9879 8.94812 21.9907 8.95761 21.9935 8.96694C21.9968 8.9779 22 8.98867 22 9V20C22 21.103 21.103 22 20 22H8C6.897 22 6 21.103 6 20L6.00006 14.6008ZM15 9V4L20 9H15ZM9.9393 19V17.2418H10.5655C11.0447 17.2418 11.4196 17.0998 11.6901 16.8159C11.9606 16.5321 12.0958 16.1451 12.0958 15.6552C12.0958 15.1653 11.9585 14.7669 11.6837 14.4602C11.4111 14.1534 11.0447 14 10.5847 14H9V19H9.9393ZM12.7252 14V19H13.9297C14.4963 19 14.9404 18.8134 15.262 18.4402C15.5857 18.0648 15.7476 17.5485 15.7476 16.8915V16.081C15.7412 15.4354 15.5761 14.9272 15.2524 14.5563C14.9308 14.1854 14.4984 14 13.9553 14H12.7252ZM18.8243 16.9602H17.3642V19H16.4249V14H19V14.8413H17.3642V16.1223H18.8243V16.9602Z" />
        </svg>
      </a>
      <span class="link-label">{{ linkLabel }}</span>
    </div>
    <section
      class="about-me">
      <ProjectPolaroid 
        thumbnail="headshot"
        class="headshot-polaroid"
        title="Gabriel Jacobs"
        :color="newColor('dark')"
        :style="{transform: 'rotate(-2deg)'}"
        tape/>
      <label>
        Welcome!
        <br/>
        My name is Gabriel; I build web apps using modern frameworks such as Vue, React, and Angular.
        <br/>
        Take a look at my past projects below!
      </label>
    </section>
    <SlideDeck @cycle-card="updateProjectDescription"/>
    <ProjectSummary 
      :projectId="selectedProjectId"
      class="summary"/>
  </div>
</template>

<style scoped lang="scss">
.links {
  padding-top: 1rem;
  gap: 1rem;
  display: flex;
  position: relative;
  width: fit-content;
  align-self: flex-end;
  svg {
    height: 3rem;
    width: 3rem;
    fill: white;
    transition: all .5s ease;
    &:hover {
      fill: var(--hover-color);
    }
  }
  .link-label {
    position: absolute;
    margin-left: auto;
    width: 100%;
    bottom: -2rem;
    font-size: 1.5rem;
    color: white;
    transition: all .5s ease;
    opacity: 0;
  }
  &:hover {
    .link-label {
      opacity: 1;
    }
  }
}

.about-me {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;

  label {
    margin-top: 1rem;
    max-width: 50rem;
    text-align: center;
    font-size: 1.75rem;
    margin-left: 4rem;
    margin-right: 1rem;
  }
}

.summary {
  padding-bottom: 5rem;
  margin-left: 2rem;
  margin-right: 2rem;
}

@media screen and (max-width: 1280px) {
  .about-me {
    label {
      margin-left: 1rem;
      margin-right: 1rem;
      margin-top: 5rem;
    }
    .headshot-polaroid {
      margin-left: 10vw;
    }
  }
}

@media screen and (max-width: 800px) {
  .links {
    width: 100vw;
    justify-content: center;
  }
  .about-me {
    flex-direction: column;
    label {
      margin-left: 0;
      margin-right: 0;
      margin-top: 5rem;
    }
    .headshot-polaroid {
      margin-left: 10vw;
    }
  }
}

</style>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
}
</style>