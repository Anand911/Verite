<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.card {
    background-color: rgb(46, 46, 46);
    width: 80%;
    margin: 10px;
}
</style>

<template>
    <div class="container">
        <card class="card"
        v-for="(game, index) in games"
        :key="index"
        :game="game"
        />
    </div>    
</template>

<script>
import Card from './Card.vue'
import games from '../../utils/games.json'

export default {
    components: {
        Card,
    },
    data() {
        return {
            games: games,
        };
    }
};
</script>