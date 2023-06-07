<script setup lang="ts">
import HeaderComp from '@/components/header.vue';
import FooterComp from '@/components/footer.vue';
import searchIcon from '@/components/icons/searchIcon.vue';
import locationIcon from '@/components/icons/locationIcon.vue';
import tickIcon from '@/components/icons/tickIcon.vue';
import dangerIcon from '@/components/icons/dangerIcon.vue';
import securityIcon from '@/components/icons/securityIcon.vue';
import peopleIcon from '@/components/icons/peopleIcon.vue';
import { infoID } from '@/backend';

const uneInfoParis = await infoID('td54q4ij9nm0yjk')
const uneInfoLondres = await infoID('pdo5kbtbjpwv39a')
</script>

<template>
    
    <HeaderComp />
    
    <main>
        <div class="bg-blanc mt-7 py-4 mx-5 px-4 shadow-drop2 rounded-xl">
            <h1 class="text-center vingt-med text-black">
                Convertisseur de devise
            </h1>
            <hr class="border-lightgray mt-2 mb-4">
            <form
                class=""
                @submit.prevent="submit"
            >
                <div class="">
                    <label for="base_currency_input" class="hidden">Base currency:</label>
                    <select v-model="params.base_currency" class="text-darkgray focus:outline-darkblue focus:text-darkblue font-poppins font-semibold text-base py-2 px-3 outline outline-2 rounded-xl" name="currency_choice" id="currency_choice">
                        <option value="EUR">Allemagne</option>
                        <option value="GBP">Angleterre</option>
                        <option value="CAD">Canada</option>
                        <option value="CNY">Chine</option>
                        <option value="KRW">Corée du Sud</option>
                        <option value="EUR">Espagne</option>
                        <option value="USD">États-Unis</option>
                        <option value="EUR">France</option>
                        <option value="EUR">Grèce</option>
                        <option value="EUR">Italie</option>
                        <option value="JPY">Japon</option>
                        <option value="MAD">Maroc</option>
                    </select>
                </div>
                <div class="flex mt-4 ml-3 mr-7 items-center justify-between">
                    <div class="">
                        <label for="multiplier" class="hidden">Multiplicateur :</label>
                        <input v-model="multiplier" type="number" class="w-48 text-blue font-poppins font-normal text-5xl outline-none" />
                    </div>
                    <div>
                        <p class="quatorze-norm text-black">{{ params.base_currency }}</p>
                    </div>
                </div>
                <div class="text-center">
                    <button
                        type="submit"
                        class="shadow-drop-shadow degrade font-poppins py-2 px-6 mx-auto mt-3 mb-6 rounded-3xl text-base font-medium text-center text-blanc"
                    >Convertir
                    </button>
                </div>
                <div class="">
                    <label for="currencies" class="hidden">Target currencies:</label>
                    <select v-model="params.currencies" class="text-darkgray focus:outline-darkblue focus:text-darkblue font-poppins font-semibold text-base py-2 px-3 outline outline-2 rounded-xl" name="currencies_choice" id="currencies_choice">
                        <option value="EUR">Allemagne</option>
                        <option value="GBP">Angleterre</option>
                        <option value="CAD">Canada</option>
                        <option value="CNY">Chine</option>
                        <option value="KRW">Corée du Sud</option>
                        <option value="EUR">Espagne</option>
                        <option value="USD">États-Unis</option>
                        <option value="EUR">France</option>
                        <option value="EUR">Grèce</option>
                        <option value="EUR">Italie</option>
                        <option value="JPY">Japon</option>
                        <option value="MAD">Maroc</option>
                    </select>
                </div>
                <div
                    v-for="result of results"
                    :key="result.code"
                    class="flex mt-4 ml-3 mr-7 items-center justify-between"
                >
                <p class="pt-2 w-48 text-blue font-poppins font-normal text-5xl">{{ multiplyResult(result.value) }}</p>
                <p class="pt-2 quatorze-norm text-black">{{ result.code }}</p>
                </div>
                <div v-for="result of results"
                    :key="result.code" class="text-center">
                    <hr class="mt-5 border-0 bg-lightgray h-[1px]">
                    <p class="quatorze-norm text-black mt-3">1 {{ params.base_currency }} = {{ result.value }} {{ result.code }}</p>
                </div>
            </form>
        
                <!-- <div
                    v-for="result of results"
                    :key="result.code"
                    class="flex justify-between"
                >
                    <strong>{{ result.code }}</strong>
                    <span>{{ result.value }}</span>
                    <span >{{ multiplyResult(result.value) }}</span>
                </div> -->
        
        
        </div>
        <div class="mt-10 pt-4 bg-blanc rounded-xl mx-5 shadow-drop2">
            <div class="">
                <h2 class="text-center font-medium font-poppins text-lg text-black">Météo</h2>
                <hr class="mt-3 mb-4 border-0 bg-lightgray h-[1px]">
                <div class="flex justify-between items-center mx-5">
                    <div class="flex items-center justify-center space-x-2">
                        <locationIcon class="h-5 w-5" />
                        <input class="w-full outline-none text-darkgray font-normal font-poppins text-xl " type="" placeholder="Entrer la ville ou le pays" v-model="city">
                    </div>
                    <button class="" @click="searchWeather">
                        <searchIcon class="h-5 w-5" />
                    </button>
                </div>
            </div>
            <div class="" v-show="error404">
            <img class="mx-auto my-8" src="/src/assets/img/weather/404.png">
            <p class="text-center vingt-quatre-semi text-black pb-12">Le lieu est invalide</p>
            </div>
            <div class="px-16" v-show="!error404">
            <img class="mx-auto mb-6" :src="weatherImage">
            <p class="text-center vingt-quatre-semi text-black pb-12">{{ weatherTemperature }}°C</p>
            <!-- <p class="description">{{ weatherDescription }}</p> -->
            </div>
            <!-- <div class="weather-details" v-show="!error404">
            <div class="humidity">
        
                <div class="">
                <span>{{ humidity }}%</span>
                <p>Humidity</p>
                </div>
            </div>
            <div class="wind">
        
                <div class="">
                <span>{{ windSpeed }}Km/h</span>
                <p>Wind Speed</p>
                </div>
            </div>
            </div> -->
        </div>
        <div class="mt-14 mb-24 mx-5">
            <h1 class="vingt-med text-black text-center mb-4">Avoir les informations de :</h1>
            <div class="bg-blanc rounded-[34px] p-6 flex items-center justify-center space-x-4 shadow-drop2">
                <select class="outline-none appearance-none bg-blanc font-medium text-black font-poppins text-3xl " v-model="choixville.choisie">
                    <option value="Paris">Paris</option>
                    <option value="Londres">Londres</option>
                </select>
                <tickIcon />
            </div>
        
            <div v-if="choixville.choisie === 'Paris'" class="mt-9">
                <div class="flex flex-col gap-[10px]">
                    <div class="mb-8">
                        <div class="flex items-center justify-between mb-3">
                            <h2 class="font-medium font-poppins text-2xl text-black">{{ uneInfoParis.p1_titre }}</h2>
                            <dangerIcon class="h-6 w-6" />
                        </div>
                        <p class="font-normal font-poppins text-sm text-black mr-6">{{ uneInfoParis.p1_desc }}</p>
                    </div>
                    <div class="mb-8">
                        <div class="flex items-center justify-between mb-3">
                            <h2 class="font-medium font-poppins text-2xl text-black">{{ uneInfoParis.p2_titre }}</h2>
                            <securityIcon class="h-6 w-6" />
                        </div>
                        <p class="font-normal font-poppins text-sm text-black mr-6">{{ uneInfoParis.p2_desc }}</p>
                    </div>
                    <div class="mb-8">
                        <div class="flex items-center justify-between mb-3">
                            <h2 class="font-medium font-poppins text-2xl text-black">{{ uneInfoParis.p3_titre }}</h2>
                            <peopleIcon class="h-6 w-6" />
                        </div>
                        <p class="font-normal font-poppins text-sm text-black mr-6">{{ uneInfoParis.p3_desc }}</p>
                    </div>
                </div>
            </div>
            <div v-else-if="choixville.choisie === 'Londres'" class="mt-9">
                <div class="flex flex-col gap-[10px]">
                    <div class="mb-8">
                        <div class="flex items-center justify-between mb-3">
                            <h2 class="font-medium font-poppins text-2xl text-black">{{ uneInfoLondres.p1_titre }}</h2>
                            <dangerIcon class="h-6 w-6" />
                        </div>
                        <p class="font-normal font-poppins text-sm text-black mr-6">{{ uneInfoLondres.p1_desc }}</p>
                    </div>
                    <div class="mb-8">
                        <div class="flex items-center justify-between mb-3">
                            <h2 class="font-medium font-poppins text-2xl text-black">{{ uneInfoLondres.p2_titre }}</h2>
                            <securityIcon class="h-6 w-6" />
                        </div>
                        <p class="font-normal font-poppins text-sm text-black mr-6">{{ uneInfoLondres.p2_desc }}</p>
                    </div>
                    <div class="mb-8">
                        <div class="flex items-center justify-between mb-3">
                            <h2 class="font-medium font-poppins text-2xl text-black">{{ uneInfoLondres.p3_titre }}</h2>
                            <peopleIcon class="h-6 w-6" />
                        </div>
                        <p class="font-normal font-poppins text-sm text-black mr-6">{{ uneInfoLondres.p3_desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- <div :key="index" v-for="(unpays, index) in pays" >
        <img :src="unpays.flags.png" />
    </div> -->

    <!-- <div v-for="(unpays, index) in pays" :key="index">
        <div v-if="index===90">
            <img :src="unpays.flags.png" />
        </div>
        {{ unpays.name }}
    </div> -->


    <FooterComp />
    
</template>




<script lang="ts">
import CurrencyAPI from '@everapi/currencyapi-js';
import axios from 'axios';

export default {
    name: 'CurrencyConverter',
    data () {
        return {
            params: {
                base_currency: 'JPY',
                currencies: 'USD'
            },
            results: null,
            currencyApi: new CurrencyAPI('45ORre8htUcRSe3R7G770MVE6R0JmUHbq3id6j4U'),
            multiplier: 1,

            city: '',
            weatherData: null,
            error404: false,

            pays: null,

            choixville: {
                choisie: 'Paris',
            },
        }
    },
    mounted() {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then((reponse) => {
            this.pays = reponse.data;
            // console.log(this.pays);
            });
        },
    computed: {
    weatherImage(): string {
      if (!this.weatherData) return '';
      switch (this.weatherData.weather[0].main) {
        case 'Clear':
          return '/src/assets/img/weather/clear.png';
        case 'Rain':
          return '/src/assets/img/weather/rain.png';
        case 'Snow':
          return '/src/assets/img/weather/snow.png';
        case 'Clouds':
          return '/src/assets/img/weather/cloud.png';
        case 'Haze':
          return '/src/assets/img/weather/mist.png';
        default:
          return '';
      }
    },
    weatherTemperature(): string {
      if (!this.weatherData) return '';
      return `${parseInt(this.weatherData.main.temp)}`;
    },
    weatherDescription(): string {
      if (!this.weatherData) return '';
      return this.weatherData.weather[0].description;
    },
    humidity(): string {
      if (!this.weatherData) return '';
      return `${this.weatherData.main.humidity}`;
    },
    windSpeed(): string {
      if (!this.weatherData) return '';
      return `${parseInt(this.weatherData.wind.speed)}`;
    }
  },
  
    methods: {
        submit () {
            this.results = null;
            this.currencyApi.latest(this.params).then(response => {
                if (response.data) {
                    this.results = response.data;
                }
            });
        },
        multiplyResult(value) {
        const multiplierValue = parseFloat(this.multiplier);
        if (!isNaN(multiplierValue)) {
            return Math.round((value * multiplierValue) * 100) / 100;
        } else {
            return value;
        }
        },
        searchWeather(): void {
      const APIKey = 'b2b671f8d17baa44517a1757407646d8';
      if (this.city === '') return;

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
          if (json.cod === '404') {
            this.error404 = true;
            return;
          }

          this.weatherData = json;
          this.error404 = false;
        });
    }
    },};
</script>
