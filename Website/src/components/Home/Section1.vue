<template>

        <section class="section1 sec-loc">
            
            <div class="location">
               
                <div class="about-sec">
                     <div class="about-wrapper">
                        <div class="flex flex-col">
                            <div class="sub-head flex flex-col">
                                <span>Lake Side</span>
                                <span>Bolgatty Palace</span>
                            </div>
                            
                            <div class="mt-[10px]">
                                <span class="text-lg">
                                    <p>Mulavukad, Ernakulam, <br>Kerala, India</p>
                                </span>
                            </div>

                            <div class="direct mt-[20px]">
                                <button class="btn">
                                    GET DIRECTIONS
                                </button>
                            </div>
                            
                            <div class="flex mt-[100px] items-center">
                                <span class="text-3xl mr-[20px]">PIN</span> 
                                <span class="pin">6</span>
                                <span class="pin">8</span>
                                <span class="pin">2</span>
                                <span class="pin">5</span>
                                <span class="pin">0</span>
                                <span class="pin">4</span>

                            </div> 
                        </div>
                    </div>
                    <div class=" border-r-[1px] border-black"></div>
                    <div class="about-wrapper">
                        <div class="head w-50 flex justify-start flex-col space-y-1 ">
                        <div class="flex justify-start">
                            <h1 class=" !text-[8vw] about mr-2">LET'S</h1>
                            <div>
                                <img class="h-[11vw]" src="../../assets/img/stamp.png" alt="" srcset="">
                            </div>
                        </div>
                            <h1 class="about !text-[8vw]">CELEBRATE</h1>
                        </div>
                    </div>
                  
                </div>
            </div>
        </section>
        <section class="section1" id="main-slider-container">
            <div id="slider-container" class="slider-container" ref="sliderContainer">
                <div class="banner-text flex flex-col !items-start p-10">
                    <div class="flex flex-col w-2/5">
                        <div class="button-74 !bg-[#fec5fb] w-40 z-10 small-btn">
                            Embrace
                        </div>
                         <div class="button-74 !bg-[#ff8709] !text-[35px] ml-10">
                                the Vintage Aura
                            </div>
                    </div>
                    <div class="text-[2.5vw] w-3/4 mt-5">
                        A Retro Ride to the Past, Where Memories Unfold.
                    </div>
                </div>
                <div class="!w-[300vw] banner-text">
                    <img src="../../assets/img/mango-bite.png" alt="aaaa" srcset="" ref="candy">
                    <h1 class="about !bg-transparent">Dive into the timeless enchantment of <span class="button-74 small-btn !bg-[#0ae448] !text-[4vw] !text-black rotate-[6.5deg] !p-5" ref="verite">Verité</span> where <span class="button-74 small-btn !p-5 gradient-btn-1 !text-[4vw] relative bottom-10">cherished</span><span class="button-74 small-btn !p-5 gradient-btn-2 !text-[4vw] !shadow-none rotate-[15deg] relative right-5 z-[-1]">memories</span> and vibrant echoes of yesteryears</h1>
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

</template>

<script>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        const candy=this.$refs.candy;
        const imgSlider = this.$refs.sliderContainer;
        const imgSliderMain = document.getElementById('main-slider-container');

        let windowWidth = window.innerWidth;
        let calculateSliderX =
            imgSlider.children[0].offsetWidth*3 + imgSlider.children[1].offsetWidth - windowWidth;

        let imgSliderTimeline = gsap.timeline({
            default: {
                ease: 'none',
            },
            scrollTrigger: {
                trigger: imgSliderMain,
                pin: true,
                start: 'top top',
                end: '+200%',
                scrub: 1,
                invalidateOnRefresh: true,

            },
        });

        imgSliderTimeline.to(imgSlider, {
            x: -calculateSliderX,
            duration: 3,
            ease: "none",
        });
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".banner-text",
                start: "top+=450px ",
                end: "+=450px",
                markers:true,
                // scrub: true,
                toggleActions: "play none none none"
            }
        });
        const verite=this.$refs.verite;
        tl.to(verite, {
            duration: 0.65,
            rotation: 45,
            ease: "power2.out"
        }).from(verite, {
            rotation: 90,
            duration: 0.65,
            delay: -0.65,
            ease: "power2.out"
        });
    
         // Candy animation to come from top
         gsap.fromTo(
            candy,
            {
                y: "100%",
                opacity: 0,
            },
            {
                y: "0%",
                opacity: 1,
                duration: 0.5,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: imgSliderMain,
                    start: "top 30%",
                    end: "bottom bottom",
                    scrub: true,
                },
            }
        );
        const candyAnimation = gsap.to(candy, {
            scrollTrigger: {
                trigger: imgSliderMain,
                start: 'top top',
                end: 'bottom 30%',
                scrub: true,
            },
            x: 0.9*imgSliderMain.offsetWidth,
            duration: 5,
            ease: 'power1.inOut',
            y: (index) => (index % 2 === 0 ? 50 : -50),
            rotation: (index) => (index % 2 === 0 ? 360 : -360),
        });

        const getRandomPosition = () => Math.random() * imgSliderMain.offsetWidth;

        
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

/* ::-webkit-scrollbar {
    display: none;
} */

body {
    font-family: 'Canopee, sans-serif';
}

.section1 {
    display: flex;
    width: 100%;
    overflow: hidden;
    height: 100vh;
    position: relative;
    color: black ;
}

section>h1 {
    font-size: 200px;
    padding: 50px;
}
#main-slider-container{
    overflow-x: none;
}
.slider-container {
    background-color: black;
    position: absolute;
    display: flex;
    overflow: hidden;
    height: 50vh;
    min-width: 100%;
    width: fit-content;
    align-items: flex-start;
    border: 2px solid black;
}
.slider-container::before {
    content: "";
     background-image: url("src/assets/img/texture-bg.jpg") !important;
   /* Adjust the alpha value to set the opacity */
   position: fixed;
   opacity: 0.2;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 0;
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



.slider-container>div>h1 {
    font-size: 100px;
    text-align: center;
}</style>
