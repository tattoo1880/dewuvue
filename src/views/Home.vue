<script setup>
import Header from "@/components/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
    <div>
        <Header />
    </div>

    <div>
        <hr>
    </div>

    <div>
        <RouterView />
    </div>
</template>