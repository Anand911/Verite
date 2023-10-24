<style>

</style>
<template>
    <header class="v-header">
        <div class="v-head-img"></div>
            <div class="logo-group">
                <div class="verteil">
                    <img src="../assets/svg/logo/VERTEIL_LOGO.svg" alt="">
                </div>
                 <div class="v-head">
                    <h2>The Vertil Times</h2>
                </div>
                 <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
           
    </header>
    <main>
        <div class="gl-canvas w-embed"><canvas id="above-canvas"></canvas></div>
       <div class="main-wrapper">
         <div class="letter-wrapper main-sec">
                <div class="letter" id="verite">Vér<div id="rotate-letter" class="flip">i</div>té</div>

                <div class="write-up">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit omnis iusto autem corporis libero vitae enim itaque maiores, eaque minima voluptatum consequuntur laudantium sunt quis veniam accusantium, iste recusandae tempora?
                </div>
            </div>
            <div class="hero-container main-sec">
                <img src="../assets/svg/characters/Asset 4.svg" alt="">
            </div>
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