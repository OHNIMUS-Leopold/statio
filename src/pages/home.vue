<script setup lang="ts">
import { pb } from '@/backend';
import HeaderComp from '@/components/header.vue';
import FooterComp from '@/components/footer.vue';
import previewVille from '@/components/preview/previewVille.vue';
import previewActivite from '@/components/preview/previewActivite.vue';
import previewTransport from '@/components/preview/previewTransport.vue';
import previewHotel from '@/components/preview/previewHotel.vue';
import tickIcon from '@/components/icons/tickIcon.vue';
import type { VilleResponse, VilleRecord, BaseSystemFields } from '@/pocketbase-types';
import type { ActiviteResponse, TransportResponse, HotelResponse } from '@/pocketbase-types';
import { allVilles } from '@/backend';
import { allActivitesByVilleId, allTransportsByVilleId, allHotelsByVilleId } from '@/backend';

const ListeVilles = await allVilles();

const ActivitesParis = await allActivitesByVilleId('4z5kd1ocz8z0kc1')
const LesActivitesDeParis:ActiviteResponse[] =  ActivitesParis.expand['activite']

const ActivitesLondres = await allActivitesByVilleId('bb1fa1srm8wu67w')
const LesActivitesDeLondres:ActiviteResponse[] =  ActivitesLondres.expand['activite']

const TransportsParis = await allTransportsByVilleId('4z5kd1ocz8z0kc1')
const LesTransportsDeParis:TransportResponse[] =  TransportsParis.expand['transport']

const TransportsLondres = await allTransportsByVilleId('bb1fa1srm8wu67w')
const LesTransportsDeLondres:TransportResponse[] =  TransportsLondres.expand['transport']

const HotelsParis = await allHotelsByVilleId('4z5kd1ocz8z0kc1')
const LesHotelsDeParis:HotelResponse[] =  HotelsParis.expand['hotel']

const HotelsLondres = await allHotelsByVilleId('bb1fa1srm8wu67w')
const LesHotelsDeLondres:HotelResponse[] =  HotelsLondres.expand['hotel']
</script>

<template>
    <HeaderComp />
    
    <main class="mb-28">
        <div class="mt-7">
            <h1 class="vingt-med text-black ml-7 mb-5">Destinations populaires</h1>
            <div class="flex overflow-x-scroll scroll-smooth snap-mandatory snap-x overflow-hidden mx-3">
                <previewVille v-for="ville in ListeVilles" :key="ville.id" v-bind="{ ...ville}" />
            </div>
        </div>

        <div class="mt-14 mx-5">
            <h1 class="vingt-med text-black ml-7 mb-4">Paramétrez votre voyage</h1>
            <div class="bg-blanc rounded-[34px] p-6 flex items-center justify-center space-x-4 shadow-drop2">
                <select class="outline-none appearance-none bg-blanc font-medium text-black font-poppins text-3xl " v-model="choixville.choisie">
                    <option value="Paris">Paris</option>
                    <option value="Londres">Londres</option>
                </select>
                <tickIcon />
            </div>


            
            <div v-if="choixville.choisie === 'Paris'" class="mt-9">
                <h2 class="seize-norm text-center text-black mb-5">Les activités sur Paris</h2>
                <div class="grid grid-cols-2 gap-[10px]">
                    <previewActivite v-for="activite in LesActivitesDeParis" :key="activite.id" v-bind="{ ...activite}" />
                </div>
                <h2 class="seize-norm text-center text-black mb-5 mt-9">Les transports sur Paris</h2>
                <div class="flex flex-col gap-[10px]">
                    <previewTransport v-for="transport in LesTransportsDeParis" :key="transport.id" v-bind="{ ...transport}" />
                </div>
                <h2 class="seize-norm text-center text-black mb-5 mt-9">Les hôtels sur Paris</h2>
                <div class="grid grid-cols-2 gap-[10px]">
                    <previewHotel v-for="hotel in LesHotelsDeParis" :key="hotel.id" v-bind="{ ...hotel}" />
                </div>
            </div>

            <div v-else-if="choixville.choisie === 'Londres'" class="mt-9">
                <h2 class="seize-norm text-center text-black mb-5">Les activités sur Londres</h2>
                <div class="grid grid-cols-2 gap-[10px]">
                    <previewActivite v-for="activiteL in LesActivitesDeLondres" :key="activiteL.id" v-bind="{ ...activiteL}" />
                </div>
                <h2 class="seize-norm text-center text-black mb-5 mt-9">Les transports sur Londres</h2>
                <div class="flex flex-col gap-[10px]">
                    <previewTransport v-for="transport in LesTransportsDeLondres" :key="transport.id" v-bind="{ ...transport}" />
                </div>
                <h2 class="seize-norm text-center text-black mb-5 mt-9">Les hôtels sur Londres</h2>
                <div class="grid grid-cols-2 gap-[10px]">
                    <previewHotel v-for="hotel in LesHotelsDeLondres" :key="hotel.id" v-bind="{ ...hotel}" />
                </div>
            </div>
        </div>
    </main>

    <FooterComp />
</template>



<script lang="ts">

export default {
    data () {
        return {
            choixville: {
                choisie: 'Paris',
            },
        }
    }
}

</script>