<template>
    <div class="head-card">
       <div class="img-container">
         <img :src="image" alt="" srcset="">
       </div>
        <h3 class="flex items-center">{{heading}} <span class="new-marker">NEW</span></h3>
        <p class="paper-desc">
            {{ description }}
        </p>
    </div>
</template>

<script>
export default{
    props:['image','heading','description']
}
</script>