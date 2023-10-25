<template>
        <Main/>
     <Section1/>
     <Section2/>
</template>

<script>
import Main from './Main.vue';
import Section1 from './Section1.vue';
import Section2 from './Section2.vue';



export default {
    components: {
    Main,
    Section1,
    Section2,

},
    beforeRouteLeave(to, from, next) {
        // Reset your component's state here
        console.log(to);
        //this.resetState();
      next();
    },
};
</script>

<style>

</style>
