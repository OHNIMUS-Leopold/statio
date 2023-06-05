<script setup lang="ts">

</script>

<template>
    <div class="bg-image pt-24">
        <div class="grid grid-cols-1 mx-auto w-10/12 bg-blanc rounded-3xl">
            <div class="mt-12 mx-6 mb-12">
                <h1 class="text-center mb-6 vingt-quatre-semi text-black">
                    Voyager plus facilement avec Statio
                </h1>
                <p class="text-center mb-5 douze-norm text-darkgray">
                    Du départ à l'arrivée, nous avons tout ce dont vous avez besoin pour un voyage réussi
                </p>
                <RouterLink to="/connexion" class="fond grid grid-cols-1 mx-10 rounded-xl py-3 px-9 text-blanc font-poppins text-base font-semibold text-center">
                    C'est parti !
                </RouterLink>
            </div>
        </div>
    </div>
</template>
  


<style>
  .bg-image {
    background-image: url('../assets/img/template/wallpaperlanding.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh; /* Utilise la hauteur de l'écran */
  }
</style>