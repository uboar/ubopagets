<script setup lang="ts">
import playIcon from 'vue-material-design-icons/Play.vue'
import pauseIcon from 'vue-material-design-icons/Pause.vue'
import downloadIcon from 'vue-material-design-icons/Download.vue'

import { marked } from 'marked';
import collection from '../interfaces/collection'
import { defineProps } from 'vue';
import { ref } from 'vue';

let audio = new Audio();


interface Props {
    detailsData: collection
    movieLoad: boolean
}
const props = defineProps<Props>();

const track = ref(0);

const play = (item: any, index: number) => {
    audio.pause();
    audio.src = item.songUrl;
    audio.volume = 0.5;
    track.value = index + 1;
    audio.play();
}

const pause = () => {
    track.value = 0;
    audio.pause();
}

</script>

<template>
    <input type="checkbox" id="detailsModal" class="modal-toggle" />
    <label for="detailsModal" class="modal">
        <label class="modal-box max-w-6xl" for="">
            <h2 class="font-bold text-lg -mt-1">{{ detailsData.name }}</h2>

            <div class="flex justify-center mt-4 transition duration-500 ease-in-out" v-if="movieLoad">
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

            <div class="flex flex-row flex-wrap mt-8">
                <div class="badge badge-outline badge-accent mx-2" v-for="item in detailsData.tag" :key="item">
                    {{ item }}</div>
            </div>

            <div class="pt-4 whitespace-pre-line detailsDescription" v-html="marked(detailsData.description)">
            </div>

            <div class="alert alert-sm detailsDescription" v-if="detailsData.comment"
                v-html="marked(detailsData.comment)"></div>

            <div class="card bg-base-200 mt-4" v-if="detailsData.contents">
                <div class="card-title logo-font ml-4 mt-1">CONTENTS</div>
                <div class="card-body -mt-6 -mb-3">
                    <table class="table">
                        <tbody>
                            <tr class="hover" v-for="item, index in detailsData.contents" :key="item.songName">
                                <td class="whitespace-normal w-4/5">
                                    {{ item.songName }}
                                </td>
                                <td>
                                    <div class="tooltip tooltip-top" data-tip="試聴" v-if="item.songUrl">
                                        <button @click="pause()" class="btn btn-ghost btn-circle btn-sm"
                                            v-show="track === index + 1">
                                            <pause-icon></pause-icon>
                                        </button>
                                        <button @click="play(item, index)" class="btn btn-ghost btn-circle btn-sm"
                                            v-show="track !== index + 1">
                                            <play-icon></play-icon>
                                        </button>
                                    </div>
                                    <div class="tooltip tooltip-top ml-4" data-tip="ダウンロード" v-if="item.download">
                                        <a class="btn btn-ghost btn-circle btn-sm" :href="item.download">
                                            <download-icon></download-icon>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="modal-action">
                <label for="detailsModal" class="btn -my-2" @click="track = 0;">閉じる</label>
            </div>
        </label>
    </label>
</template>

<style scoped>
.detailsDescription ::v-deep(a) {
    @apply border-b border-accent text-accent;
}
</style>