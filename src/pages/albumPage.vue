<script setup lang="ts">
import playIcon from 'vue-material-design-icons/Play.vue'
import pauseIcon from 'vue-material-design-icons/Pause.vue'
import infoIcon from 'vue-material-design-icons/InformationOutline.vue'

import chevronLeft from 'vue-material-design-icons/chevronLeft.vue'

import { marked } from 'marked';
import { nextTick, defineProps, onMounted, ref } from 'vue';

import album from "../interfaces/album"
import albumSong from "../interfaces/albumSong"

import store from '../scripts/store';
import { onBeforeRouteLeave } from 'vue-router';

let audio = new Audio();

interface Props {
    albumData: album
}

const props = defineProps<Props>();

onMounted(() => {
    document.title = `${props.albumData.albumName} - UBOPAGE`;
    if (props.albumData.theme) {
        store.commit('setTheme', props.albumData.theme);
    }
});

onBeforeRouteLeave(() => {
    store.commit('resetTheme');
});

const detailsData = ref<albumSong>({
    songName: "",
});
const movieLoad = ref(false);
const currentPlayingTrack = ref(0);

const play = (item: albumSong, index: number) => {
    audio.pause();
    audio.src = item.songUrl!;
    audio.volume = 0.5;
    currentPlayingTrack.value = index + 1;
    audio.play();
};
const pause = () => {
    audio.pause();
    currentPlayingTrack.value = 0;
}
const details = async (item: albumSong, index: number) => {
    let modalElement = document.getElementById("detailsModal") as HTMLInputElement;
    movieLoad.value = false;
    audio.pause();
    currentPlayingTrack.value = 0;
    detailsData.value = item;
    modalElement.checked = true;
    modalElement.addEventListener("change", (e) => {
        if (modalElement.checked == false) {
            movieLoad.value = false;
        }
    })
    await nextTick();
    movieLoad.value = true;
}

</script>

<template>

    <div class="pt-20 fade">
        <input type="checkbox" id="detailsModal" class="modal-toggle" />
        <label for="detailsModal" class="modal">
            <label class="modal-box max-w-4xl" for="">
                <h3 class="font-bold text-lg">{{ detailsData.songName }}</h3>
                <div class="flex justify-center mt-2 transition duration-500 ease-in-out" v-if="movieLoad">
                    <div class="" v-if="detailsData.nicoId">
                        <component :is="'script'"
                            :src="`https://embed.nicovideo.jp/watch/${detailsData.nicoId}/script?w=640&h=360`">
                        </component>
                    </div>
                    <div class="" v-if="detailsData.youtubeId">
                        <iframe width="640" height="360" :src="`https://www.youtube.com/embed/${detailsData.youtubeId}`"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen loading=lazy></iframe>
                    </div>
                </div>
                <div class="pt-4 whitespace-pre-line detailsDescription" v-html="marked(detailsData.songDescription!)" v-if="detailsData.songDescription">
                </div>
                <div class="modal-action">
                    <label for="detailsModal" class="btn">閉じる</label>
                </div>
            </label>
        </label>
        <div class="mx-8 text-6xl border-b border-base-content text-center">{{ albumData.albumName }}</div>
        <div class="logo-font text-lg text-end mr-12">RELEASE DATE : {{ albumData.releaseDate }}</div>
        <div class="lg:flex flex-row mt-4 mb-8 mx-8">
            <div class="basis-1/3">
                <div class="avatar shadow-lg">
                    <div class="w-full rounded-xl">
                        <img :src="albumData.albumArtUrl" loading=lazy />
                    </div>
                </div>
                <a :class="`btn btn-${albumData.downloadColor} btn-block btn-outline mt-2`"
                    :href="albumData.downloadUrl" target="_blank">アルバムをダウンロード</a>
                <div class="alert mt-2 mb-4 shadow-lg">
                    {{ albumData.albumDescription }}
                </div>
            </div>
            <div class="basis-2/3">
                <div class="card w-full bg-base-300 shadow-xl ml-4">
                    <div class="card-title justify-center logo-font text-xl my-2">
                        TRACK LIST
                    </div>
                    <div class="card-body bg-base-200">
                        <div class="overflow-x-hidden -mt-8">
                            <table class="table table-compact w-full">
                                <thead class="logo-font">
                                    <tr>
                                        <th>#</th>
                                        <th>SONG NAME</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in albumData.songList" :key="item.songName"
                                        :class="(index + 1 == currentPlayingTrack) ? 'active' : ''">
                                        <th>{{ index + 1 }}</th>
                                        <td class="whitespace-normal">{{ item.songName }}</td>
                                        <td>
                                            <div class="tooltip tooltip-top" data-tip="試聴" v-if="!item.hidePlay">
                                                <button @click="pause()" class="btn btn-ghost btn-circle btn-sm"
                                                    v-if="currentPlayingTrack == index + 1">
                                                    <pause-icon></pause-icon>
                                                </button>
                                                <button @click="play(item, index)"
                                                    class="btn btn-ghost btn-circle btn-sm" v-else>
                                                    <play-icon></play-icon>
                                                </button>
                                            </div>
                                            <div class="tooltip tooltip-top ml-4" data-tip="この曲について"
                                                v-if="!item.hideDetails">
                                                <button @click="details(item, index)"
                                                    class="btn btn-ghost btn-circle btn-sm">
                                                    <info-icon></info-icon>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed bottom-4 right-4">
            <div class="tooltip tooltip-left" data-tip="アルバムリストに戻る">
                <router-link class="btn btn-circle btn-primary object-right-bottom" to="/albums">
                    <chevronLeft></chevronLeft>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.detailsDescription ::v-deep(a) {
    @apply border-b border-accent text-accent;
}
</style>