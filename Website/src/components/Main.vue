<style>

</style>
<template>
    <header class="v-header">
            <div class="logo-group">
                <div class="verteil">
                    <img src="../assets/svg/logo/VERTEIL_LOGO.svg" alt="">
                </div>
                <div class="verite">
                    <img src="../assets/svg/logo/verite.svg" alt="">
                </div>
            </div>
    </header>
    <main>
        
        <div class="letter-wrapper">
            <div class="letter" id="verite">VéR<div id="rotate-letter" class="flip">i</div>Té</div>
        </div>
    </main>
</template>
<script>
import {gsap} from 'gsap';
export default{
    props:[],
    mounted(){
        this.init();
    },
    methods:{
        init()
        {
            this.veriteAnimation()
        },
        veriteAnimation()
        {
            gsap.from("#verite", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.5
        });

        gsap.fromTo("#rotate-letter", {
            rotateX: "0deg"
        }, {
            rotateX: "180deg",
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            transformOrigin: "50% 50%",
            repeatDelay: 0.5
        });
        }
    }
}
</script>