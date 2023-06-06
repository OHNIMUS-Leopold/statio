<script setup lang="ts">
import { pb } from '@/backend';
import type { VilleResponse, VilleRecord, BaseSystemFields } from '@/pocketbase-types';

const props = defineProps<VilleResponse>()

const img0 = props.preview
const urlImg0 = img0 ? pb.getFileUrl(props, img0, { thumb: '100x250' }) : '/image-not-found.png'
</script>

<template>
        <div class="snap-center mx-2">
            <div class="flex justify-center">
                <img :src="urlImg0" :alt="nom" class="w-[135px] rounded-2xl">            
            </div>
            <div class="-my-12 w-[135px] h-[100px] mx-auto">
                <p class="text-center vingt-med text-lightgray">{{ nom }}</p>
            </div>
        </div>

</template>