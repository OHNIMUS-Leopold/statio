<script setup lang="ts">
import mailIcon from '@/components/icons/mailIcon.vue';
import lockIcon from '@/components/icons/lockIcon.vue';
import eyeslashIcon from '@/components/icons/eyeslashIcon.vue';
import cnxButton from '@/components/cnxButton.vue';
</script>

<template>

    <main>
        <div class="bg-cnx pt-12 pb-20">
            <p class="ml-6 logo">
                Statio
            </p>
            <p class="mt-6 mx-8 font-poppins font-semibold text-blanc text-center text-xl">
                Connectez-vous et obtenez les fonctionnalités suivantes : Map et Chat
            </p>
        </div>

        <div class="bg-blanc rounded-t-3xl -mt-10 px-6 pt-14 h-screen">
            <form @submit.prevent="onCnx()" class="flex flex-col">
                <div class="flex items-center bg-gray rounded-2xl py-3 px-4 space-x-5">
                    <mailIcon class="h-6 w-6" />
                    <input class="w-[70%] bg-gray outline-none font-poppins text-base font-medium text-black" type="email" id="email" name="email" placeholder="E-mail" v-model="user.email" required>
                </div>
                <div class="mt-10 flex items-center bg-gray rounded-2xl py-3 px-4 space-x-5">
                    <lockIcon class="h-6 w-6" />
                    <input class="w-[70%] bg-gray outline-none font-poppins text-base font-medium text-black" id="password" type="password" name="password" placeholder="Mot de passe" v-model="user.password" required>
                    <button type="button" @click="togglePasswordVisibility()">
                        <eyeslashIcon class="h-6 w-6" />
                    </button>
                </div>
                
                <cnxButton class="mt-12 mb-3 mx-20" type="submit">
                    Se connecter
                </cnxButton>

                <div class="flex mx-auto space-x-3 mb-11">
                    <p class="quatorze-norm text-black">Pas de compte</p>
                    <RouterLink to="#" class="quatorze-norm text-blue">S'inscrire !</RouterLink>
                </div>

                <div class="flex items-center justify-center space-x-3 mb-7">
                    <span class="bg-black w-1/4 h-[2px]"></span>
                    <p class="font-poppins text-black font-medium text-sm">Se connecter avec</p>
                    <span class="bg-black w-1/4 h-[2px]"></span>
                </div>

                <div class="grid grid-cols-3">
                    <a class="p-2 rounded-full shadow-drop-shadow mx-auto" href="#">
                        <img src="../assets/iconsImg/meta-logo.png" alt="Meta">
                    </a>
                    <a class="p-2 rounded-full shadow-drop-shadow mx-auto" href="#">
                        <img src="../assets/iconsImg/GoogleLogo.png" alt="Google">
                    </a>
                    <a class="p-2 rounded-full shadow-drop-shadow mx-auto" href="#">
                        <img src="../assets/iconsImg/Twitter-logo.png" alt="Twitter">
                    </a>
                </div>
            
                <cnxButton class="mx-20 mt-32" type="button" @click="onDcnx()">
                    Se déconnecter
                </cnxButton>
            </form>
        </div>
    </main>
</template>
   

<script lang="ts">
//@ts-ignore
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js'

import {
    getFirestore,
    collection,
    doc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    //@ts-ignore
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js'


    function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    //@ts-ignore
    if (passwordInput.type === "password") {
        //@ts-ignore
        passwordInput.type = "text";
    } else {
        //@ts-ignore
        passwordInput.type = "password";
    }
}

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
                //@ts-ignore
                this.message = "Utilisateur déjà connecté";
                //@ts-ignore
                this.valeur = 1;
            }else{
                //@ts-ignore
                this.message = "Utilisateur non connecté";
                this.valeur = null;
            }
        },

        methods:{
            onCnx(){
                signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
                //@ts-ignore
                .then((response)=>{
                    console.log('Utilisateur connecté', response.user);
                    this.user = response.user;
                    //@ts-ignore
                    this.message = "Utilisateur connecté";
                    //@ts-ignore
                    this.valeur = 1;
                    this.$router.replace('home');
                })
                //@ts-ignore
                .catch((error)=>{
                    console.log("Erreur connexion", error);
                    //@ts-ignore
                    this.message = "Erreur d'authentification";
                    this.valeur = null;
                    
                })
            },
            onDcnx(){
                signOut(getAuth())
                //@ts-ignore
                .then((response) =>{
                    this.user = getAuth().currentUser;
                    this.user = {
                        email:null,
                        password:null
                    };
                    console.log("Utilisateur deconnecté ", this.user);
                    //@ts-ignore
                    this.message = "Utilisateur non connecté";
                    this.valeur = null;
                    this.$router.replace('connexion');
                })
                //@ts-ignore
                .catch((error)=>{
                    console.log("Erreur deconnexion", error);
                })
            },
            
            
        },
        
    }
</script>