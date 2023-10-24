<template>
    <div class="nav" ref="menu">
        <div class="menu" >
            <div class="flex flex-col w-1/2 text-center">
                
                <a href="/" class="nav-item" ref="navItem1">
                    <h1 class="menu-title">HOME</h1>
                </a>
                <a href="/games" class="nav-item" ref="navItem2">
                    <h1 class="menu-title">GAMES</h1>
                </a>
                <a href="/" class="nav-item" ref="navItem3">
                    <h1 class="menu-title">LEADERBOARD</h1>
                </a>
                <a href="/" class="nav-item" ref="navItem4">
                    <h1 class="menu-title">SCHEDULE</h1>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { gsap } from 'gsap';

export default {
    beforeRouteLeave(href, from, next) {
        // Reset your component's state here
        console.log(href);
        next();
    },
}
</script>

<style>
@import url("../../assets/css/menu.scss");
</style>
