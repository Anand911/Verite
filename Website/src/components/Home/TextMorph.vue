<template>
    <h1 ref="font">
        {{ fonts[state].text }}
        
    </h1>
</template>
<script>
import { ref } from 'vue';



export default{
    data(){
        return {
            fonts: [
                {
                    text: "Coming Soon...",
                    font: ""
                },
                {
                    text: "बने रहें...",
                    font: ""
                },
                {
                    text: "...دیکھتے رہنا",
                    font: ""
                },
                {
                    text: "காத்திருங்கள்...",
                    font: ""
                },
                {
                    text: "చూస్తూనే ఉండండి...",
                    font: ""
                },
                {
                    text: "ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ...",
                    font: ""
                },
                {
                    text: "ഉടൻ വരുന്നു...",
                    font: ""
                }
            ],
            state:0,
        }
    },
    mounted()
    {
        const font =  ref(null);
        const fontInterval=setInterval(() => {
            this.state=(this.state+1)%this.fonts.length;
            font.style.backgroundColor = "#F00";
        }, 3000);
    }

}
</script>