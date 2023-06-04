<template>
    <div>
      <h1>Google Traduction</h1>
      <div>
        <textarea v-model="inputText" placeholder="Entrez le texte à traduire"></textarea>
      </div>
      <div>
        <label>Langue source:</label>
        <select v-model="sourceLanguage">
          <option v-for="(language, code) in languages" :value="code" :key="code">{{ language }}</option>
        </select>
      </div>
      <div>
        <label>Langue cible:</label>
        <select v-model="targetLanguage">
          <option v-for="(language, code) in languages" :value="code" :key="code">{{ language }}</option>
        </select>
      </div>
      <div>
        <button @click="translate">Traduire</button>
      </div>
      <div>
        <h2>Résultat:</h2>
        <p>{{ translatedText }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
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
  
      return {
        inputText,
        sourceLanguage,
        targetLanguage,
        translatedText,
        languages,
        translate,
      };
    },
  };
  </script>
  