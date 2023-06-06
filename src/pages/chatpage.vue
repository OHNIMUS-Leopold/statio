<script setup lang="ts">
import HeaderComp from '@/components/header.vue';
import FooterComp from '@/components/footer.vue';
import cnxButton from '@/components/cnxButton.vue';
import newmessageIcon from '@/components/icons/newmessageIcon.vue';
import trashIcon from '@/components/icons/trashIcon.vue'
import sendIcon from '@/components/icons/sendIcon.vue';
</script>

<template>
    <HeaderComp />

        <main>
            <div v-if="user == null">
                <div class="fixed top-0 left-0 bg-black h-screen w-full -z-10 opacity-90">
                    <p class="vingt-med text-blanc text-center mt-80 mb-5">
                        Vous devez être connecté pour utiliser le chat !!
                    </p>
                    <RouterLink to="/connexion">
                        <cnxButton class="mx-auto">
                            Se connecter
                        </cnxButton>
                    </RouterLink>
                </div>
            </div>
            <div v-else>
                <div class="my-6 flex items-center justify-center space-x-2">
                    <div>
                        <p class="seize-norm text-black">Parler avec :</p>
                    </div>
                    <select class="p-3 border-2 outline-black focus:outline-blue border-black rounded-lg seize-norm text-black" v-model="userSelected" @change="selectUser">
                        <option
                            v-for="util in listeUsers" :key="util.uid"
                            :value="util"
                        >
                        {{util.login}}
                        </option>
                    </select>
                </div>
                <div v-if="userSelected != null" class="bg-blanc rounded-t-[30px] shadow-drop-shadow pt-8 px-5 pb-32">
                    <form @submit.prevent="createDisc()">
                        <div>
                            <div class="mb-1">
                                <p class="seize-norm text-black">Nouvelle discussion avec {{userSelected.login}}</p>
                            </div>
                            <div class="flex items-center space-x-2">
                                <input type="text" class="p-2 w-full outline-black focus:outline-blue border-black border-2 rounded-md quatorze-norm text-black" v-model="libelle" required />
                                <button type="submit" title="Création">
                                    <newmessageIcon class="h-9 w-9" />
                                </button>
                            </div>
                        </div>
                    </form>
                    <div v-if="chat.length > 0">
                        <div class="">
                            <div>
                                <div v-for="disc in chat" :key="disc.uid">
                                <div class="">
                                    <div>
                                        <div class="grid grid-cols-6 items-center my-4">
                                            <button class="col-span-1" type="button" @click="viewFil(disc)" title="Voir ce fil">
                                                <img class="rounded-full" :src="userSelected.avatar" alt="Photo de profil">
                                            </button>
                                            <div class="col-span-3 ml-5">
                                                <p class="font-bold text-black font-poppins text-base">
                                                    {{disc.libelle}}
                                                </p>
                                            </div>
                                            <div class="col-span-2 ml-5">
                                                <p class="text-right douze-norm text-darkgray">
                                                    Le {{dateFr(disc.creation)}}
                                                </p>
                                                <button class="col-span-1 mt-2 float-right" type="button" @click="deleteFil(disc)" title="Supprimer ce fil">
                                                    <trashIcon />
                                                </button>
                                            </div>
                                        </div>
                                        <hr class="border-0 bg-lightgray h-[2px]">
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p class="mt-5">Aucun fil de discussion avec {{userSelected.login}}</p>
                    </div>
                    <div v-if="discussion != null">
                        <div class="flex my-3 mx-5 justify-center items-center">
                            <textarea class="font-poppins font-normal text-black text-base bg-blanc border-black border-[1px] outline-blue rounded-xl px-4 py-2 w-full" 
                                placeholder="Message"
                                v-model="message"
                            ></textarea>
                            <div class="input-group-prepend ">
                                <button class="ml-2" @click="sendMsg()">
                                    <sendIcon />
                                </button>
                            </div>
                        </div>
                        <div v-for="disc in chat" :key="disc.id">
                            <div class="" v-if="disc.id == discussion.id">
                                <div class="mx-4" v-for="msg in sortMsgByDate(disc.msg)" :key="msg.date">
                                    <div class="row mb-8" v-if="msg.by == user.uid">
                                        <div class="col-4" >
                                            <div class="flex items-center justify-end">
                                                <h3>
                                                    {{userInfo[0].login}}  - {{dateFr(msg.date)}}
                                                </h3>
                                                <img  class="h-10 rounded-full ml-3" :src="userInfo[0].avatar" />
                                            </div>
                                        </div>
                                        <div class="col-8 text-center mb-1 mx-2 grid grid-cols-2">
                                            <div></div>
                                            <div class="bg-lightgreen rounded-xl p-3 my-3">
                                                <p class="font-poppins font-normal text-black text-base">{{msg.contenu}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-8" v-if="msg.by == userSelected.uid">
            
                                        <div class="col-4">
                                            <div class="flex items-center">
                                                    <img  class="h-10 rounded-full mr-3" :src="userSelected.avatar"/>
                                                    <h3>
                                                        {{userSelected.login}} - {{dateFr(msg.date)}}
                                                    </h3>
                                                </div>
                                        </div>
                                        <div class="col-8 text-center mb-1 mx-2 grid grid-cols-2">
                                            <div class="w-70 bg-lightgray rounded-xl col-start-1 p-3  my-3" >
                                                <p class="font-poppins font-normal text-black text-base">{{msg.contenu}}</p>
                                            </div>
                                        </div>
                                    </div>
            
                                </div>
            
            
                            </div>
                        </div>
                    </div>
                </div>
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
    } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js'

    // Cloud Storage : import des fonctions
    import { 
        getStorage,             // Obtenir le Cloud Storage
        ref,                    // Pour créer une référence à un fichier à uploader
        getDownloadURL         // Permet de récupérer l'adress complète d'un fichier du Storage
    } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js'

// Fonction authentification
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
            await getAuth().onAuthStateChanged(function(user){
                if(user){
                    // Récupération du user connecté
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
            await onSnapshot(q, (snapshot) => {
                this.listeUsers = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
                // Récupération de l'url des avatars
                this.listeUsers.forEach(function(user){
                    // Obtenir le Cloud Storage
                    const storage = getStorage();
                    // Récupérer l'image par son nom de fichier
                    const spaceRef = ref(storage, "users/"+user.avatar);
                    // Récupération de l'url
                    getDownloadURL(spaceRef)
                    .then((url)=>{
                        // Remplacer le nom du fichier par l'url
                        user.avatar = url;
                    })
                    // .catch((error)=>{
                    //     console.log('erreur downloadurl',error);
                    // })
                })

                // Récupérer les infos complémentaires du user connecté
                this.userInfo = this.listeUsers.filter(user => user.uid == this.user.uid);
//console.log("userInfo", this.userInfo);
                // Suppression du user connecté de la liste
                this.listeUsers = this.listeUsers.filter(user => user.uid != this.user.uid);
//console.log("ListeUsers", this.listeUsers);

            })
        },

        async selectUser(){
            this.message = null;
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données concernée
            const dbChat = collection(firestore, "chat");
            // Liste des users emetteur vers recepteur
            let list1 = [this.user.uid, this.userSelected.uid];
            // Requête
            let q1 = query(dbChat, where("fil", "==", list1));
            // Liste synchronisée
            
            await onSnapshot(q1, (snapshot) => {
                this.chatFrom = snapshot.docs.map(doc => (
                    {id: doc.id, ...doc.data()}
                ))
            
                // Liste des users selectionne / connecté
                let list2 = [this.userSelected.uid, this.user.uid ];
                // Requête
                let q2 = query(dbChat, where("fil", "==", list2));
                // Liste synchronisée                
                onSnapshot(q2, (snapshot) => {
                    this.chatTo = snapshot.docs.map(doc => (
                        {id: doc.id, ...doc.data()}
                    ))

                    // Fusion des 2 chats from et to dans le chat
                    this.chat = this.chatFrom.concat(this.chatTo);
//console.log("chat", this.chat);                

                })
            
            
            
            
            
            })

        },

        // Création d'une nouvelle discussion
        createDisc(){
            // Au moins un message pour initialisation de la discussion
            let msg = {
                by: this.user.uid,                      // Créateur du message
                contenu: "Création du fil : "+this.dateSql(),     // Message + Date du jour
                date : this.dateSql()                   // Date de création
            };

            let discussion = {
                creation: this.dateSql(),                   // Date création de la discussion
                fil:[this.user.uid, this.userSelected.uid], // De qui vers qui : 0 : emetteur - 1: recepteur
                libelle : this.libelle,                     // Libelle de la discussion
                msg:[msg]
            };
            // Mise à jour de la collection chat
            addDoc(collection(getFirestore(), 'chat'), discussion);
        },

        // Mise en forme de la date du jour
        // en format SQL : yyyy-mm-dd HH:mm:ss
        dateSql(){
            let today = new Date();
            // Transformer en format local
            // format : dd/mm/yyyy, HH:mm:ss
            today = today.toLocaleString();
            // Mise en forme en format yyyy-mm-dd HH:mm:ss
            let tab = today.split(',');
            // récupérer seulement la partie date
            let d = tab[0];
            // récupération du jour, mois, année
            let dt = d.split('/');
            let jour = dt[0];
            let mois = dt[1];
            let annee = dt[2];
            // date en format bdd
            today = annee+"-"+mois+"-"+jour;
            return today;
        },

        // Mise en forme d'un date
        // d'un format : yyyy-mm-dd HH:mm:ss
        // en format : dd/mm/yyyy à HH:mm
        dateFr(date){
            // découpage de la date
            let d = date.split(' ');
            // Récupérer la partie jour, mois, année
            let dt = d[0].split('-');
            // let jour = dt[2];
            // let mois = dt[1];
            let annee = dt[0];
            // récuperer la partie H:mm:ss
            let ht = d[1].split(':');
            let pt = d[1].split(':');
            let zt = pt[2].split('-');
            // date en format français
            let dateMsg = zt[2] + "/" + zt[1] +"/"+annee+" à "+ht[0]+":"+ht[1];
            return dateMsg;
        },


        viewFil(disc){
            this.discussion = disc;
        },

        deleteFil(disc){
            deleteDoc(
                doc(getFirestore(), 'chat', disc.id)
            );
        },

        async sendMsg(){
            let msg = {
                by: this.user.uid,                      // Créateur du message
                contenu: this.message,                  // Message rédigé
                date : this.dateSql()                   // Date de création
            };

            // Rechargement de la discussion
            // Pour avoir tous les messages
            // surtout le dernier
            const firestore = getFirestore();
            const docRef = doc(firestore, "chat", this.discussion.id);
            let refDisc = await getDoc(docRef);
            let tabMsg = refDisc.data().msg;
            tabMsg.push(msg);
            // Mise à jour de la discussion
            updateDoc(
                doc(firestore, "chat", this.discussion.id),
                {
                    msg:tabMsg
                }
            );

        },

        sortMsgByDate(tabMsg){
            return tabMsg.sort(function(a,b){
                // Si la date du message a est avant celle du message b on retourne 1
                if(a.date < b.date) return 1;
                // Si la date du message a est après celle du message b on retourne -1
                if(a.date > b.date) return -1;
                // Sinon ni avant ni après on retourne 0
                return 0;
            })
        }


    }
}
</script>