<template>

        <section>
            <h1>HeaDer</h1>
        </section>
        <section id="main-slider-container">
            <div id="slider-container" class="slider-container" ref="sliderContainer">
                <div>
                    <h1>old money</h1>
                </div>
                <div>
                    <h1>viNtage porschE</h1>
                </div>
                <div>
                    <h1>cAssette PlayEr</h1>
                </div>
                <div>
                    <h1>vespA</h1>
                </div>
                <div>
                    <h1>carolinAs pepsi</h1>
                </div>
            </div>
        </section>
        <section>
            <h1>FooTer</h1>
        </section>

</template>

<script>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        const imgSlider = this.$refs.sliderContainer;
        const imgSliderMain = document.getElementById('main-slider-container');

        let windowWidth = window.innerWidth;
        let calculateSliderX =
            imgSlider.children.length * imgSlider.children[0].offsetWidth - windowWidth;

        let imgSliderTimeline = gsap.timeline({
            default: {
                ease: 'none',
            },
            scrollTrigger: {
                trigger: imgSliderMain,
                pin: true,
                start: 'top top',
                end: '+=100%',
                scrub: 1,
                invalidateOnRefresh: true,
                markers:true
            },
        });

        imgSliderTimeline.to(imgSlider, {
            x: -calculateSliderX,
        });
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

::-webkit-scrollbar {
    display: none;
}

body {
    font-family: 'Dirtyline 36Daysoftype 2022';
}

section {
    display: flex;
    width: 100%;
    overflow: hidden;
    height: 100vh;
    position: relative;
    background-color: oldlace;
    color: #1a200e ;
}

section>h1 {
    font-size: 200px;
    padding: 50px;
}

.slider-container {
    position: absolute;
    display: flex;
    overflow: hidden;
    height: 50vh;
    min-width: 100%;
    width: fit-content;
    align-items: flex-start;
}

.slider-container>div {
    width: 1000px;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f6d13a;
    border: 1px solid black;
}

.slider-container>div:nth-child(1) {
    background: url(/img1.jpg) no-repeat center center;
    background-size: cover;
}

.slider-container>div:nth-child(2) {
    background: url(/img2.jpg) no-repeat center center;
    background-size: cover;
}

.slider-container>div:nth-child(3) {
    background: url(/img3.jpg) no-repeat center center;
    background-size: cover;
}

.slider-container>div:nth-child(4) {
    background: url(/img4.jpg) no-repeat center center;
    background-size: cover;
}

.slider-container>div:nth-child(5) {
    background: url(/img5.jpg) no-repeat center center;
    background-size: cover;
}

.slider-container>div>h1 {
    font-size: 100px;
    text-align: center;
}</style>
