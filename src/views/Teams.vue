<template>
    <h1>Teams</h1>
        <div class="count">
            {{ storeCounter.count }}
        </div>
        <div class="buttons">
            <button @click="storeCounter.decreaseCount" id="btR">-</button>
            <button @click="storeCounter.increaseCount">+</button>
        </div>
</template>

<script setup>

import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()

</script>

<style>
.count{
    margin-left: 30px;
}

.buttons{
    margin-left: 20px;
}

#btR{
    margin-right: 20px;
}
</style>