<script setup lang="ts">
import HeaderComp from '@/components/header.vue';
import FooterComp from '@/components/footer.vue';
import cnxButton from '@/components/cnxButton.vue';
</script>

<template>
    <HeaderComp />

    <main>
        <div v-if="user == null">
            <div class="fixed top-0 left-0 bg-black h-screen w-full -z-10 opacity-90">
                <p class="vingt-med text-blanc text-center mt-80 mb-5">
                    Vous devez être connecté pour utiliser la map !!
                </p>
                <RouterLink to="/connexion">
                    <cnxButton class="mx-auto">
                        Se connecter
                    </cnxButton>
                </RouterLink>
            </div>
        </div>
        <div v-else class="w-full h-[80vh]">
            <iframe class="-z-10 w-full h-full" id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77824502267!2d2.2646342637778925!3d48.85893843503862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1685990460096!5m2!1sfr!2sfr" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </main>

    <FooterComp />
</template>



<script lang="ts">
// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDoc,        // Obtenir un document d'une collection
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy,        // Permet de demander le tri d'une requête query
    where           // Permet de demander un filtrage pour une query
    //@ts-ignore
    } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js'

    // Cloud Storage : import des fonctions
    import { 
        getStorage,             // Obtenir le Cloud Storage
        ref,                    // Pour créer une référence à un fichier à uploader
        getDownloadURL         // Permet de récupérer l'adress complète d'un fichier du Storage
        //@ts-ignore
    } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js'

// Fonction authentification
//@ts-ignore
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js'

export default {
    
    data() { // Les données
        return {
            user:null,                  // User connecté
            listeUsers:[],              // Liste des utilisateurs (Firestore)
            userInfo:null,              // Informations complémentaires du user connecté
            userSelected:null,          // L'utilisateur de la liste sélectionné
            libelle:null,               // Libelle de la nouvelle discussion à créer

            chatFrom:null,              // Les chats de l'utilisataur connecté vers celui sélectionné
            chatTo:null,                // Les chats des autres utilisateurs vers celui connecté                        
            chat:[],                  // Tous les chats utilisateur connecté et sélectionné

            discussion:null,            // chat/discussion sélectionnée

            message:null                // Message courant du chat/discussion

        }
    },




    mounted(){ // Montage de la vue
        // Appel de la liste des users (Firestore)
        this.getUsers(); 
    },

    methods : { // Les fonctions
        // obtenir les utilisateurs de users
        async getUsers(){
            // Obtenir les inofrmations du user connecté
            //@ts-ignore
            await getAuth().onAuthStateChanged(function(user){
                if(user){
                    // Récupération du user connecté
                    //@ts-ignore
                    this.user = user;
                }
            }.bind(this))

            // Informations des users de Firestore
            const firestore = getFirestore();
            // Collection users de Firestore
            const dbUsers = collection(firestore, "users");
            // Users triés sur leur login
            const q = query(dbUsers, orderBy('login', 'asc'));
            // Liste synchronisée
            //@ts-ignore
            await onSnapshot(q, (snapshot) => {
                //@ts-ignore
                this.listeUsers = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
                // Récupération de l'url des avatars
                this.listeUsers.forEach(function(user){
                    // Obtenir le Cloud Storage
                    const storage = getStorage();
                    // Récupérer l'image par son nom de fichier
                    //@ts-ignore
                    const spaceRef = ref(storage, "users/"+user.avatar);
                    // Récupération de l'url
                    getDownloadURL(spaceRef)
                    //@ts-ignore
                    .then((url)=>{
                        // Remplacer le nom du fichier par l'url
                        //@ts-ignore
                        user.avatar = url;
                    })
                    // .catch((error)=>{
                    //     console.log('erreur downloadurl',error);
                    // })
                })

                // Récupérer les infos complémentaires du user connecté
                //@ts-ignore
                this.userInfo = this.listeUsers.filter(user => user.uid == this.user.uid);
//console.log("userInfo", this.userInfo);
                // Suppression du user connecté de la liste
                //@ts-ignore
                this.listeUsers = this.listeUsers.filter(user => user.uid != this.user.uid);
//console.log("ListeUsers", this.listeUsers);

            })
        },
    }
}
</script>