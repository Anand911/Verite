
<script>
import Countdown from './components/Countdown.vue';
import FlipCountdown from './components/FlipCountdown.vue';
import Main from './components/Main.vue'
import Section1 from './components/Section1.vue';
import Modal from './components/modal.vue';
export default {
  components: {
    Main,
    Section1
},
  data() {
    return {
      showModal: true
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
      console.log(this.showModal);
    }
  }
};
</script>
<style>
@import './assets/css/index.css';
@import './assets/css/index.scss';
</style>
<template>
  <Main/>
  <Section1/>

</template>


