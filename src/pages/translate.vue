<template>
    <HeaderComp />

    <div class="mt-7 mx-5">
      <div class="grid grid-cols-5 items-center justify-between justify-items-center">
        <div class="col-span-2">
          <select class="appearance-none bg-blanc py-1 px-3 border-[1px] border-black text-center outline-1 outline-blue rounded-3xl font-poppins text-sm font-normal text-black" v-model="sourceLanguage">
            <option v-for="(language, code) in languages" :value="code" :key="code">{{ language }}</option>
          </select>
        </div>
        <div class="col-span-1">
          <arrangeIcon class="h-6 w-6 rotate-90" />
        </div>
        <div class="col-span-2">
          <select class="appearance-none bg-blanc py-1 px-3 border-[1px] border-black text-center outline-1 outline-blue rounded-3xl font-poppins text-sm font-normal text-black" v-model="targetLanguage">
            <option v-for="(language, code) in languages" :value="code" :key="code">{{ language }}</option>
          </select>
        </div>

      </div>

      <div class="mt-6 outline-none shadow-drop2 border-0 appearance-none bg-blanc p-4 rounded-xl font-poppins text-base font-medium text-darkgray">
        <textarea class="w-full " v-model="inputText" placeholder="Entrez le texte à traduire"></textarea>
      </div>

      <div >
        <cnxButton class="mx-auto my-5" @click="translate">Traduire</cnxButton>
      </div>

      <div v-if="translatedText !== ''">
        <div class="mt-6 outline-none shadow-drop2 border-0 appearance-none bg-blanc p-4 rounded-xl font-poppins text-base font-medium text-darkgray">
          <p>{{ translatedText }}</p>
        </div>
      </div>
    </div>
    <FooterComp />
</template>
  

  
<script setup lang="ts">
import FooterComp from '@/components/footer.vue';
import HeaderComp from '@/components/header.vue';
import arrangeIcon from '@/components/icons/arrangeIcon.vue';
import cnxButton from '@/components/cnxButton.vue';
import { ref } from 'vue';
import axios from 'axios';

const inputText = ref('');
const sourceLanguage = ref('fr-FR');
const targetLanguage = ref('en-GB');
const translatedText = ref('');

const languages = {
  "de-DE": "Allemand",
  "en-GB": "Anglais",
  "zh-CN": "Chinois",
  "ko-KR": "Coréen",
  "es-ES": "Espagnol",
  "fr-FR": "Français",
  "el-GR": "Grec",
  "it-IT": "Italien",
  "ja-JP": "Japonais",
};

const translate = async () => {
  try {
    const response = await axios.get('https://api.mymemory.translated.net/get', {
      params: {
        q: inputText.value,
        langpair: `${sourceLanguage.value}|${targetLanguage.value}`,
      },
    });

    if (response.data && response.data.responseData) {
      translatedText.value = response.data.responseData.translatedText;
    } else {
      translatedText.value = 'Erreur lors de la traduction.';
    }
  } catch (error) {
    console.error('Erreur lors de la traduction :', error);
    translatedText.value = 'Erreur lors de la traduction.';
  }
};
</script>