<script setup lang="ts">
import { pb } from '@/backend'
import locationIcon from '../icons/locationIcon.vue';
import starIcon from '../icons/starIcon.vue';
import rightIcon from '../icons/rightIcon.vue';
import type { HotelResponse } from '@/pocketbase-types'


const props = defineProps<HotelResponse>()

//@ts-ignore
const img0 = props.preview
const urlImg0 = img0 ? pb.getFileUrl(props, img0, { thumb: '100x250' }) : '/image-not-found.png'




</script>


<template>
    <div class="col-span-1 bg-blanc rounded-2xl shadow-drop2 pb-[10px]">
        <div class="p-[10px]">
            <img class="rounded-lg" :src="urlImg0" alt="Photo de {{ nom }}">
        </div>
        <h3 class="mx-[10px] mb-[2px] font-poppins font-semibold text-xs text-black">{{ nom }}</h3>
        <div class="grid grid-cols-5 mx-[10px] items-center">
            <div class="col-span-3">
                <div class="grid grid-cols-3">
                    <div class="col-span-1">
                        <locationIcon class="h-3 w-3" />
                    </div>
                    <div class="col-span-2 -ml-3">
                        <p class="font-poppins font-normal text-[10px] text-black">{{ localisation.substring(0, 8) }}...</p>
                    </div>
                </div>
            </div>
            <div class="col-span-1 flex items-center">
                <starIcon class="h-[10px] w-[10px]" />
                <p class="font-poppins font-normal text-[10px] text-black">{{ note }}</p>
            </div>
            <div class="col-span-1">
                <RouterLink :to="`/hotelById/${ id }`">
                    <rightIcon class="w-5 h-5 bg-blue rounded-full p-[5px] ml-2" />
                </RouterLink>
            </div>
        </div>
    </div>
</template>