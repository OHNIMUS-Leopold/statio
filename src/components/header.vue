<script setup lang="ts">
import userFoto from '@/components/userFoto.vue';
</script>

<template>
    <header class="sticky top-0 shadow-drop2">
        <div class="flex px-5 pt-12 pb-3 justify-between items-center bg-blancbody">
            <p class="logo">
                Statio
            </p>
            <userFoto imgPath="./src/assets/img/template/user.png" />
        </div>
    </header>
</template>