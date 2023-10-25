<template>
    
        <MainClone/>
        <TextMorph/>
     <Section1/>
     <Section2/>
     
</template>

<script>
import Main from './Main.vue';
import MainClone from './MainClone.vue';
import Section1 from './Section1.vue';
import Section2 from './Section2.vue';
import TextMorph from './TextMorph.vue';



export default {
    components: {
    Main,
    Section1,
    Section2,
    TextMorph,
    MainClone
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
