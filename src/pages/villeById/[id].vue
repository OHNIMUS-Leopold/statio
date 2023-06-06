<script setup lang="ts">
import { pb } from '@/backend';
import { ref } from 'vue';
import locationIcon from '@/components/icons/locationIcon.vue';
import starIcon from '@/components/icons/starIcon.vue';
import btnDetails from '@/components/btnDetails.vue';
import { allVillesById } from '@/backend';
import type { VilleResponse } from '@/pocketbase-types';


import { onBeforeUnmount } from 'vue';
document.body.style.overflow = 'hidden';
// Unlock the scroll of the page
onBeforeUnmount(() => {
  document.body.style.overflow = 'auto';
});


const props = defineProps<{ id: string }>()


// const oeuvresParArtisteListe = await allOeuvresByArtisteId(props.id)

const uneVilleListe = await allVillesById(props.id)

const img0 = uneVilleListe.photo
const urlImg0 = img0 ? pb.getFileUrl(uneVilleListe, img0, { thumb: '100x250' }) : '/image-not-found.png'

const img1 = uneVilleListe.avis_photo
const urlImg1 = img1 ? pb.getFileUrl(uneVilleListe, img1, { thumb: '100x250' }) : '/image-not-found.png'

// @ts-ignore
// const lesOeuvresDeLArtiste:OeuvreResponse[] =  oeuvresParArtisteListe.expand['oeuvre(artiste)']
</script>

<template>
    <div class="">
        <div class="h-96" :style="{ backgroundImage: `url(${urlImg0})` }">
        </div>
        <!-- <img class="h" :src="urlImg0" alt="erreur"> -->
        <div class="bg-blanc -mt-14 pt-7 rounded-3xl pb-[500px] px-5"> 
            <h1 class="trente-bold text-black">{{ uneVilleListe.nom }}</h1>
            <div class="flex items-center space-x-2 pt-1">
                <locationIcon class="h-4 w-4" />
                <h2 class="quatorze-norm text-darkgray">
                    {{ uneVilleListe.localisation }}
                </h2>
            </div>
            <div class="grid grid-cols-5 items-center mt-6 mb-3">
                <div class="col-span-1 flex">
                    <starIcon />
                    <starIcon />
                    <starIcon />
                    <starIcon />
                    <starIcon />
                </div>
                <div class="col-span-4 ml-2">
                    <p class="text-black text-sm font-bold">{{ uneVilleListe.note }}</p>
                </div>
            </div>
            <div class="grid grid-cols-6 items-center mb-7">
                <div class="col-span-1">
                    <img class="rounded-full" :src="urlImg1" alt="photo avis">
                </div>
                <div class="col-span-5">
                    <p class="-mb-[2px] font-bold text-black font-poppins text-base">{{ uneVilleListe.avis_nom }}</p>
                    <p class="font-medium text-black font-poppins text-xs">{{ uneVilleListe.avis_avis }}</p>
                </div>
            </div>
            <div class="mb-8">
                <p class="vingt-med text-black mb-3">Description</p>
                <p class="quatorze-norm text-black">{{ uneVilleListe.description }}</p>
            </div>
            <div class="flex justify-center">
                <btnDetails />
            </div>
        </div>

    </div>
</template>