<script setup lang="ts">
import { pb } from '@/backend';
import { ref } from 'vue';
import locationIcon from '@/components/icons/locationIcon.vue';
import starIcon from '@/components/icons/starIcon.vue';
import btnDetails from '@/components/btnDetails.vue';
import backIcon from '@/components/icons/backIcon.vue';
import { allTransportsById } from '@/backend';


import { onBeforeUnmount } from 'vue';
document.body.style.overflow = 'hidden';
// Unlock the scroll of the page
onBeforeUnmount(() => {
  document.body.style.overflow = 'auto';
});


const props = defineProps<{ id: string }>()


// const oeuvresParArtisteListe = await allOeuvresByArtisteId(props.id)

const unTransportListe = await allTransportsById(props.id)

const img0 = unTransportListe.photo
const urlImg0 = img0 ? pb.getFileUrl(unTransportListe, img0, { thumb: '100x250' }) : '/image-not-found.png'

const img1 = unTransportListe.avis_photo
const urlImg1 = img1 ? pb.getFileUrl(unTransportListe, img1, { thumb: '100x250' }) : '/image-not-found.png'

// @ts-ignore
// const lesOeuvresDeLArtiste:OeuvreResponse[] =  oeuvresParArtisteListe.expand['oeuvre(artiste)']
</script>

<template>
    <div class="">
        <div class="h-96" :style="{ backgroundImage: `url(${urlImg0})` }">
            <div class="pt-5 pl-5">
                <RouterLink to="/home">
                    <backIcon />
                </RouterLink>
            </div>
        </div>
        <!-- <img class="h" :src="urlImg0" alt="erreur"> -->
        <div class="bg-blanc -mt-14 pt-7 rounded-3xl pb-[500px] px-5"> 
            <h1 class="trente-bold text-black">{{ unTransportListe.nom }}</h1>
            <div class="flex items-center space-x-2 pt-1">
                <locationIcon class="h-4 w-4" />
                <h2 class="quatorze-norm text-darkgray">
                    {{ unTransportListe.localisation }}
                </h2>
            </div>
            <div class="flex items-center mt-6 mb-3 justify-between">
                <div class="flex items-center">
                    <div class="flex">
                        <starIcon />
                        <starIcon />
                        <starIcon />
                        <starIcon />
                        <starIcon />
                    </div>
                    <div class="ml-2">
                        <p class="text-black text-sm font-bold">{{ unTransportListe.note }}</p>
                    </div>
                </div>
                <div class="bg-blue rounded-md px-2">
                    <p class="font-bold font-poppins text-sm text-blanc">{{ unTransportListe.prix }}€</p>
                </div>
            </div>
            <div class="grid grid-cols-6 items-center mb-7">
                <div class="col-span-1">
                    <img class="rounded-full" :src="urlImg1" alt="photo avis">
                </div>
                <div class="col-span-5">
                    <p class="-mb-[2px] font-bold text-black font-poppins text-base">{{ unTransportListe.avis_nom }}</p>
                    <p class="font-medium text-black font-poppins text-xs">{{ unTransportListe.avis_avis }}</p>
                </div>
            </div>
            <div class="mb-8">
                <p class="vingt-med text-black mb-3">Description</p>
                <p class="quatorze-norm text-black">{{ unTransportListe.description }}</p>
            </div>
            <div class="flex justify-center">
                <btnDetails />
            </div>
        </div>

    </div>
</template>