<template>
    <CountDown :show="data" @close="data=false"/>
    <MainClone/>
     <Section1/>
     <Section2/>     
</template>

<script>
import CountDown from '../CountDown.vue';
import MainClone from './MainClone.vue';
import Section1 from './Section1.vue';
import Section2 from './Section2.vue';
import TextMorph from './TextMorph.vue';



export default {
    data(){
        return{
            data:true,
        }
    },
    components: {
    MainClone,
    Section1,
    Section2,
    TextMorph,
    CountDown
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
