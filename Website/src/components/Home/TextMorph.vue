<template>
    <h1 >
        {{ fonts[state].text }}
        
    </h1>
</template>
<script>
export default{
    data(){
        return {
            fonts: [
                {
                    text: "Welcome",
                    font: ""
                },
                {
                    text: "Hello World",
                    font: ""
                }
            ],
            state:0,
        }
    },
    mounted()
    {
        const fontInterval=setInterval(() => {
            this.state=(this.state+1)%this.fonts.length
        }, 3000);
    }

}
</script>