
<!-- best viewed in Chrome -->
<style>

</style>
<template>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
    </head>
    <div class="nixie-container"></div>
</template>
<script>
    export default{
        props:[],
        data(){
            return{
                eventDate:null,
            }
        
        },
        mounted()
        {
            this.init();
        },
        methods:
        {
            init()
            {
                var MAX_DIGITS = 8;
                var countdownDate = new Date();
                countdownDate.setDate(countdownDate.getDate() + 7); // Set the countdown date to 7 days from now
                setInterval(function () {
                    var html = '';
                    var now = new Date().getTime();
                    var distance = countdownDate - now;

                    if (distance > 0) {
                        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                        var digits = [Math.floor(days / 10), days % 10, Math.floor(hours / 10), hours % 10, Math.floor(minutes / 10), minutes % 10, Math.floor(seconds / 10), seconds % 10];

                        $('.nixie-container').html('');

                        for (var i = 0; i < MAX_DIGITS; i++) {      if(i%2==0 && i!=0)
                        html+=`</div>`
                        if(i%2==0)
                            html+=`<div class="seperate">`
                        var digit = new Digit(digits[i]);
                        html += digit.render();
                        }

                        $('.nixie-container').html(html);
                        
                    } else {
                        $('.nixie-container').html('<span class="tube">Time is up!</span>');
                    }
                    }, 1000);
                    
            },
            

            //Other methods
        }
    }
    Digit.prototype.render = function () {
                    var html = '<span class="tube">';
                    for (var i = 0; i < 10; i++) {
                        html += '<span class="digit ' + (i === this.number ? 'active' : '') + '">' + i + '</span>';
                    }
                    html += '</span>';
                    return html;
                    };


                    function Digit(number) {
                    this.number = number || 0;
                    }

</script>

