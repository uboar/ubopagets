<script setup lang="ts">
import Headline from '../components/headline.vue';
import Links from '../components/links.vue';

import chevronDown from 'vue-material-design-icons/ChevronDown.vue'

import { onMounted, ref } from 'vue';

onMounted(() => {
    document.title = `UBOPAGE`;
});
const chevronDownPushed = ref(false);

const jumpToLinks = () => {
    chevronDownPushed.value = true;
    location.href = "#links";
}

</script>

<template>
    <div class="pt-24 lg:pt-0 lg:grid grid-row content-center h-screen">
        <div class="lg:flex flex-row justify-center">
            <div class="basis-1/2 mx-4 mb-8 mt-2 fade">
                <headline></headline>
            </div>
            <div class="basis-1/2 mx-4 fade" id="links">
                <p class="logo-font text-xl text-center border-b mb-8 mx-16 border-base-content">LINK TREE</p>
                <links></links>
            </div>
        </div>
        <div class="fixed bottom-4 right-4 lg:hidden" v-if="!chevronDownPushed">
            <div class="tooltip tooltip-left" data-tip="リンク集までスクロール">
                <button class="btn btn-circle btn-primary object-right-bottom" @click="jumpToLinks">
                    <chevronDown></chevronDown>
                </button>
            </div>
        </div>
    </div>
</template>