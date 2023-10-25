<template>
     <header class="v-header">
        
            <div class="gl-canvas w-embed"><canvas id="above-canvas"></canvas></div>
            <Menu/>
                <div class="top-nav w-screen">
                    <div class="logo-group pl-[7%] pr-[7%] select-none">
                        <div class="w-[3%] pointer-events-none">
                            <img src="../../assets/svg/logo/VERTEIL_LOGO.svg" alt=""/>
                        </div>
                         <div class="v-head">
                            <h2 class="text-2xl">The Verteil Times</h2>
                        </div>
                         <div class="hamburger" style="margin-right: 0;">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                    </div>
                </div>
           
        </header>
</template>
<script>
import Menu from './menu.vue';

export default{
    components:{ Menu, Menu },
    beforeRouteLeave(to, from, next) {
        // Reset your component's state here
        console.log(to);
        this.resetState();
        next();
    },
}
</script>