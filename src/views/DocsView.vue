<script setup lang="ts">
import HeaderComp from '@/components/header.vue';
</script>

<template>
    
    <HeaderComp />
    
    <div class="bg-blanc py-4 mx-5 px-4 shadow-drop2">
        <h1 class="text-center h4-mobile">
            Convertisseur de devise
        </h1>
        <form
            class="mx-auto w-full max-w-sm bg-white shadow rounded-md p-5 space-y-3 text-sm"
            @submit.prevent="submit"
        >
            <div class="flex items-center justify-between space-x-5">
                <label for="base_currency_input">Base currency:</label>
                <select v-model="params.base_currency" name="currency_choice" id="currency_choice">
                    <option value="CAD">Canada</option>
                    <option value="GBP">England</option>
                    <option value="EUR">France</option>
                    <option value="JPY">Japan</option>
                    <option value="KRW">South Korea</option>
                    <option value="USD">United States</option>
                </select>
            </div>
            <div class="flex items-center justify-between space-x-5">
                <label for="currencies">Target currencies:</label>
                <input
                    v-model="params.currencies"
                    type="text"
                    class="border-slate-300 border rounded-md py-2 px-4 text-sm"
                />
            </div>
            <div class="flex items-center justify-between space-x-5">
                <label for="multiplier">Multiplicateur :</label>
                <input v-model="multiplier" type="number" class="border border-gray-300 rounded-md py-2 px-4 text-sm" />
            </div>
            <button
                type="submit"
                class="bg-slate-800 text-white rounded-md py-2 px-4 mx-auto relative block"
            >Get Latest Rates</button>
        </form>        
            <div
                v-for="result of results"
                :key="result.code"
                class="flex justify-between"
            >
                <strong>{{ result.code }}</strong>
                <span>{{ result.value }}</span>
                <span >{{ multiplyResult(result.value) }}</span>
            </div>
        

        
    </div>
</template>




<script lang="ts">
import CurrencyAPI from '@everapi/currencyapi-js';

export default {
    name: 'CurrencyConverter',
    data () {
        return {
            params: {
                base_currency: 'USD',
                currencies: 'EUR,CAD'
            },
            results: null,
            currencyApi: new CurrencyAPI('45ORre8htUcRSe3R7G770MVE6R0JmUHbq3id6j4U'),
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
            return value * multiplierValue;
        } else {
            return value;
        }
        },
    }
}
</script>
