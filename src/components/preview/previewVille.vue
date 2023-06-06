<script setup lang="ts">
import { pb } from '@/backend';
import type { VilleResponse, VilleRecord, BaseSystemFields } from '@/pocketbase-types';

const props = defineProps<VilleResponse>()

const img0 = props.preview
const urlImg0 = img0 ? pb.getFileUrl(props, img0, { thumb: '100x250' }) : '/image-not-found.png'
</script>

<template>
    <img :src="urlImg0" :alt="nom" class="w-[260px]">
</template>