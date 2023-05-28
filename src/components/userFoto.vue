<script setup lang="ts">
defineProps<{
  imgPath: string
}>()
</script>

<template>
    <div class="w-10 h-10 relative">
        <img class="absolute left-[-1px] top-[-1px]" :src="imgPath" alt="photo de profil" />
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute left-[30.5px] top-[-1.5px]"
            preserveAspectRatio="xMidYMid meet"
            >
            <circle cx="6" cy="6" r="5" fill="#FF8383" stroke="#F9F9FB" stroke-width="2"></circle>
        </svg>
    </div>
</template>