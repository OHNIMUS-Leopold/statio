<script setup lang="ts">
import { pb } from '@/backend'
import type { TransportResponse } from '@/pocketbase-types'


const props = defineProps<TransportResponse>()

const img0 = props.preview
const urlImg0 = img0 ? pb.getFileUrl(props, img0, { thumb: '100x250' }) : '/image-not-found.png'



</script>


<template>
    <div class="grid grid-cols-4 px-4 py-3 shadow-drop2 items-center rounded-2xl">
        <div>
            <img class="rounded-xl" :src="urlImg0" alt="photo de {{ nom }}">
        </div>
        <div class="col-span-2">
            <h3 class="ml-2 mr-4 mt-1 font-semibold text-black font-poppins text-sm">{{ nom }}</h3>
        </div>
        <div>
            <RouterLink :to="`/transportById/${ id }`" class="grid justify-items-center font-poppins text-[10px] font-semibold text-blanc bg-blue rounded-3xl py-2 px-3">
                Voir plus
            </RouterLink>
        </div>
    </div>
</template>