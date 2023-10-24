<template>
    <div id="home">
        <Main />
        <Section1 />
    </div>
</template>

<script>
import Main from "./Main.vue";
import Section1 from "./Section1.vue";

export default {
    components: {
        Main,
        Section1,
    },
};
</script>

<style>
#home {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
