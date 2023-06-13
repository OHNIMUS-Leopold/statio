<template>
    <div class="w-10 h-10 relative" v-if="userInfo !== null">
        <img class="absolute rounded-full left-[-1px] top-[-1px]" :src="//@ts-ignore
        userInfo[0].avatar" alt="" />
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute left-[30.5px] top-[-1.5px]"
            preserveAspectRatio="xMidYMid meet"
            >
            <circle cx="6" cy="6" r="5" fill="#FF8383" stroke="#F9F9FB" stroke-width="2"></circle>
        </svg>
    </div>
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