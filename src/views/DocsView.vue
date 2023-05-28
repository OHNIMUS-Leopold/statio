<script setup lang="ts">
import HeaderComp from '@/components/header.vue';
</script>

<template>
    
    <HeaderComp />
    
    <div class="bg-blanc mt-7 py-4 mx-5 px-4 shadow-drop2 rounded-xl">
        <h1 class="text-center h4-mobile">
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
                    <option value="CAD">Canada</option>
                    <option value="GBP">England</option>
                    <option value="EUR">France</option>
                    <option value="JPY">Japan</option>
                    <option value="KRW">South Korea</option>
                    <option value="USD">United States</option>
                </select>
            </div>
            <div class="flex mt-4 ml-3 mr-7 items-center justify-between">
                <div class="">
                    <label for="multiplier" class="hidden">Multiplicateur :</label>
                    <input v-model="multiplier" type="number" class="w-48 text-blue font-poppins font-normal text-5xl outline-none" />
                </div>
                <div>
                    <p class="text">{{ params.base_currency }}</p>
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
                    <option value="CAD">Canada</option>
                    <option value="GBP">England</option>
                    <option value="EUR">France</option>
                    <option value="JPY">Japan</option>
                    <option value="KRW">South Korea</option>
                    <option value="USD">United States</option>
                </select>
            </div>
            <div
                v-for="result of results"
                :key="result.code"
                class="flex mt-4 ml-3 mr-7 items-center justify-between"
            >
            <p class="pt-2 w-48 text-blue font-poppins font-normal text-5xl">{{ multiplyResult(result.value) }}</p>
            <p class="pt-2 text">{{ result.code }}</p>
                
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
</template>




<script lang="ts">
import CurrencyAPI from '@everapi/currencyapi-js';

export default {
    name: 'CurrencyConverter',
    data () {
        return {
            params: {
                base_currency: 'EUR',
                currencies: 'USD'
            },
            results: null,
            currencyApi: new CurrencyAPI('API-KEY'),
            multiplier: 1,
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
    }
}
</script>
