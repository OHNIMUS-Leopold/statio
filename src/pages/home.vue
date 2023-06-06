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














































<!-- <template>
    <HeaderComp />


    <div >
       <h1 >
         connectez-vous
       </h1>
       <form @submit.prevent="onCnx()" >
         <input style="filter:drop-shadow(0px 10px 10px gray)"  type="email" id="email" name="email" placeholder="Adresse e-mail" v-model="user.email" required>
   
         <input style="filter:drop-shadow(0px 10px 10px gray)"  id="password" type="password" name="password" placeholder="Mot de passe" v-model="user.password" required>
   
         <input type="submit" value="SE CONNECTER">
       
       <div class="flex justify-center">
         <p class="text-white font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Pas de compte ? Commandez votre billet et inscrivez-vous</p>
         <RouterLink to="/inscription"><p class="text-deep-blue font-Poppins font-normal text-[15px] leading-[26px] tracking-normal"> ici !</p></RouterLink>
       </div>
       <div class="flex justify-center mb-[22px]">
         <button @click="onDcnx()" class="text-deep-blue font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Se déconnecter</button>
       </div>
       <div class="alert alert-warning flex justify-center text-black font-Poppins font-normal text-[15px] leading-[26px] tracking-normal mb-[22px]" v-if="message!=null" >
         {{ message }}
       </div>
       <div v-if="valeur!=null" class="flex justify-center pb-12">
         <RouterLink to="/profil"><button class="text-black">Accéder à ma page de profil</button></RouterLink>
       </div>
       </form>
     </div>

     <FooterComp />

   </template> -->
   
   <!-- <script lang="ts">
   
   
   
   import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js'
   
   import {
       getFirestore,
       collection,
       doc,
       getDocs,
       addDoc,
       updateDoc,
       deleteDoc,
       onSnapshot } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js'
   
       export default {
           data(){
               return{
                   user:{
                       email:null,
                       password:null
                   },
                   message:null,
                   valeur:null,
               }
           },
   
           mounted(){
               let user = getAuth().currentUser;
               if (user){
                   this.user = user;
                   this.message = "Utilisateur déjà connecté";
                   this.valeur = 1;
               }else{
                   this.message = "Utilisateur non connecté";
                   this.valeur = null;
               }
           },
   
           methods:{
               onCnx(){
                   signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
                   .then((response)=>{
                       console.log('Utilisateur connecté', response.user);
                       this.user = response.user;
                       this.message = "Utilisateur connecté";
                       this.valeur = 1;
                       this.$router.replace('profil');
                   })
                   .catch((error)=>{
                       console.log("Erreur connexion", error);
                       this.message = "Erreur d'authentification";
                       this.valeur = null;
                      
                   })
               },
               onDcnx(){
                   signOut(getAuth())
                   .then((response) =>{
                       this.user = getAuth().currentUser;
                       this.user = {
                           email:null,
                           password:null
                       };
                       console.log("Utilisateur deconnecté ", this.user);
                       this.message = "Utilisateur non connecté";
                       this.valeur = null;
                       this.$router.replace('connexion');
                   })
                   .catch((error)=>{
                       console.log("Erreur deconnexion", error);
                   })
               },
           
           },
   
     
   
       }
   
   
   </script> -->