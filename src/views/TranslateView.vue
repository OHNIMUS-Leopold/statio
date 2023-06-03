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
      const sourceLanguage = ref('en');
      const targetLanguage = ref('fr');
      const translatedText = ref('');
  
      const languages = {
        "am-ET": "Amharic",
        "ar-SA": "Arabic",
        "be-BY": "Bielarus",
        "bem-ZM": "Bemba",
        "bi-VU": "Bislama",
        "bjs-BB": "Bajan",
        "bn-IN": "Bengali",
        "bo-CN": "Tibetan",
        "br-FR": "Breton",
        "bs-BA": "Bosnian",
        "ca-ES": "Catalan",
        "cop-EG": "Coptic",
        "cs-CZ": "Czech",
        "cy-GB": "Welsh",
        "da-DK": "Danish",
        "dz-BT": "Dzongkha",
        "de-DE": "German",
        "dv-MV": "Maldivian",
        "el-GR": "Greek",
        "en-GB": "English",
        "es-ES": "Spanish",
        "et-EE": "Estonian",
        "eu-ES": "Basque",
        "fa-IR": "Persian",
        "fi-FI": "Finnish",
        "fn-FNG": "Fanagalo",
        "fo-FO": "Faroese",
        "fr-FR": "French",
        "gl-ES": "Galician",
        "gu-IN": "Gujarati",
        "ha-NE": "Hausa",
        "he-IL": "Hebrew",
        "hi-IN": "Hindi",
        "hr-HR": "Croatian",
        "hu-HU": "Hungarian",
        "id-ID": "Indonesian",
        "is-IS": "Icelandic",
        "it-IT": "Italian",
        "ja-JP": "Japanese",
        "kk-KZ": "Kazakh",
        "km-KM": "Khmer",
        "kn-IN": "Kannada",
        "ko-KR": "Korean",
        "ku-TR": "Kurdish",
        "ky-KG": "Kyrgyz",
        "la-VA": "Latin",
        "lo-LA": "Lao",
        "lv-LV": "Latvian",
        "men-SL": "Mende",
        "mg-MG": "Malagasy",
        "mi-NZ": "Maori",
        "ms-MY": "Malay",
        "mt-MT": "Maltese",
        "my-MM": "Burmese",
        "ne-NP": "Nepali",
        "niu-NU": "Niuean",
        "nl-NL": "Dutch",
        "no-NO": "Norwegian",
        "ny-MW": "Nyanja",
        "ur-PK": "Pakistani",
        "pau-PW": "Palauan",
        "pa-IN": "Panjabi",
        "ps-PK": "Pashto",
        "pis-SB": "Pijin",
        "pl-PL": "Polish",
        "pt-PT": "Portuguese",
        "rn-BI": "Kirundi",
        "ro-RO": "Romanian",
        "ru-RU": "Russian",
        "sg-CF": "Sango",
        "si-LK": "Sinhala",
        "sk-SK": "Slovak",
        "sm-WS": "Samoan",
        "sn-ZW": "Shona",
        "so-SO": "Somali",
        "sq-AL": "Albanian",
        "sr-RS": "Serbian",
        "sv-SE": "Swedish",
        "sw-SZ": "Swahili",
        "ta-LK": "Tamil",
        "te-IN": "Telugu",
        "tet-TL": "Tetum",
        "tg-TJ": "Tajik",
        "th-TH": "Thai",
        "ti-TI": "Tigrinya",
        "tk-TM": "Turkmen",
        "tl-PH": "Tagalog",
        "tn-BW": "Tswana",
        "to-TO": "Tongan",
        "tr-TR": "Turkish",
        "uk-UA": "Ukrainian",
        "uz-UZ": "Uzbek",
        "vi-VN": "Vietnamese",
        "wo-SN": "Wolof",
        "xh-ZA": "Xhosa",
        "yi-YD": "Yiddish",
        "zu-ZA": "Zulu"
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
  