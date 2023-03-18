<script setup lang="ts">
import collectionData from "../assets/collection.json"
import windowCloseIcon from 'vue-material-design-icons/WindowClose.vue'
import collectionDetailVue from "../components/collectionDetail.vue";

import { marked } from 'marked';
import { nextTick, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import collection from "../interfaces/collection";

onMounted(() => {
    document.title = `COLLECTION - UBOPAGE`;
    const route = useRoute();
    if (route.query.id) {
        const index = collectionData.findIndex((elem) => {
            return elem.queryId === route.query.id
        })
        if (index >= 0) {
            details(collectionData[index] as collection);
        }
    }
});

const collectionFilteredData = ref<Array<collection>>(collectionData as Array<collection>);
const movieLoad = ref(false);
const searchText = ref("");
const detailsData = ref({
    name: "",
    description: "",
});
const searchTags = ref([
    "音楽",
    "ニコニコメドレー",
    "NEUTRINO",
    "Remix",
    "合作",
    "オリジナル曲",
]);

const details = async (item: collection) => {
    let modalElement = document.getElementById("detailsModal") as HTMLInputElement;
    movieLoad.value = false;
    detailsData.value = item;
    modalElement.checked = true;
    modalElement.addEventListener("change", (e) => {
        if (modalElement.checked == false) {
            movieLoad.value = false;
        }
    });
    await nextTick();
    movieLoad.value = true;
}

const search = () => {
    collectionFilteredData.value = collectionData.filter((elem) => {
        if (RegExp(searchText.value, "i").test(elem.name)) {
            return true;
        } else {
            return (elem.tag.indexOf(searchText.value) >= 0);
        }
    }) as Array<collection>;
}
</script>

<template>
    <div class="pt-24">
        <collectionDetailVue :detailsData="(detailsData as collection)" :movieLoad="movieLoad"></collectionDetailVue>
        <div class="mx-8 text-6xl border-b border-base-content text-center logo-font">COLLECTION</div>
        <div class="fade flex justify-center">
            <div class="lg:basis-2/3">
                <div class="card shadow-lg bg-base-200 m-8">
                    <div class="card-body">
                        <div class="flex">
                            <input type="text" placeholder="検索(作品名・タグ名)" class="input input-bordered w-full"
                                v-model="searchText" @input="search" />
                            <div class="btn mx-2 btn-circle btn-outline"
                                :class="searchText === '' ? 'btn-disabled' : ''" @click="searchText = ''; search();">
                                <window-close-icon></window-close-icon>
                            </div>
                        </div>
                        <div class="divide-y"></div>
                        <div class="flex flex-row flex-wrap mt-8">
                            <div class="btn btn-accent btn-outline mx-2 btn-xs" v-for="item in searchTags" :key="item"
                                @click="searchText = item; search();">
                                {{ item }}</div>
                        </div>
                    </div>
                </div>
                <div class="card shadow-lg card-bordered bg-base-300">
                    <div class="card-body">
                        <div class="card-title">一覧 / 検索結果</div>
                        <table class="table">
                            <thead>
                                <tr class="logo-font">
                                    <th>NAME</th>
                                    <th>DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="hover" v-for="item in collectionFilteredData" :key="item.name"
                                    style="cursor: pointer" @click="details(item)">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.date }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.detailsDescription ::v-deep(a) {
    @apply border-b border-accent text-accent;
}
</style>