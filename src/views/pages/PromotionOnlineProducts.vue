<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <div class="card mb-0">
        <h1>{{ route.name }}</h1>
    </div>
</template>
