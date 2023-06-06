<script setup lang="ts">
// import { allOeuvresByArtisteId } from "@/backend";
// import templateOeuvresArtiste from "@/components/templateOeuvresArtiste.vue";
import { allVillesById } from '@/backend';
// import type { OeuvreResponse } from "@/pocketbase-types";

const props = defineProps<{ id: string }>()


// const oeuvresParArtisteListe = await allOeuvresByArtisteId(props.id)

const unArtisteListe = await allVillesById(props.id)

// @ts-ignore
// const lesOeuvresDeLArtiste:OeuvreResponse[] =  oeuvresParArtisteListe.expand['oeuvre(artiste)']

</script>

<template>

    {{ unArtisteListe.id }}

  <!-- <div class="">
    <div>
        <h1 class="">{{ unArtisteListe.nom }}</h1>
    </div> -->
    <!-- <div>
        <img :src="unArtisteListe.photo" alt="err">
        <h2 class="h2 mb-4">Sa vie</h2>
        <h3 class="h3 mb-[5px] lg:mb-[10px]">Ses débuts</h3>
        <p class="body">
            {{ unArtisteListe.debuts }}
        </p>
        <h3 class="h3 mt-[30px] lg:mt-10 mb-[5px] lg:mb-[10px]">Son autre profession</h3>
        <p class="body">
            {{ unArtisteListe.profession }}
        </p>
        <h3 class="h3 mt-[30px] lg:mt-10 mb-[5px] lg:mb-[10px]">La critique</h3>
        <p class="body">
            {{ unArtisteListe.critique }}
        </p>
    </div> -->

    <!-- <div class="xl:mx-[-120px]">
        <h2 class="mt-11 lg:mt-[60px] mb-4 h2">Ses œuvres exposées</h2>
        <div class="xl:grid xl:grid-cols-2 gap-24">
            <templateOeuvresArtiste v-for="oeuvre in lesOeuvresDeLArtiste" :key="oeuvre.id" v-bind="{ ...oeuvre}" />
        </div>
    </div> -->


</template>
