<template>
     <header class="v-header">
        
            <div class="gl-canvas w-embed"><canvas id="above-canvas"></canvas></div>
            <Menu/>
                <div class="top-nav w-screen">
                    <div class="logo-group">
                        <div class="verteil">
                            <img src="../../assets/svg/logo/VERTEIL_LOGO.svg" alt="">
                        </div>
                         <div class="v-head">
                            <h2>The Verteil Times</h2>
                        </div>
                         <div class="hamburger">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                    </div>
                </div>
           
        </header>
</template>
<script>
import Menu from './Menu.vue';
export default{
    components:{Menu},
    beforeRouteLeave(to, from, next) {
        // Reset your component's state here
        console.log(to);
        this.resetState();
        next();
    },
}
</script>