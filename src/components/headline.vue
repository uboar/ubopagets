<script setup lang="ts">
import headLineData from '../assets/headline.json'
import YoutubeIcon from 'vue-material-design-icons/Youtube.vue';
import TelevisionClassicIcon from 'vue-material-design-icons/TelevisionClassic.vue';
</script>

<template>
    <div>
        <div class="card bg-base-300 shadow-xl">
            <div class="card-title justify-center logo-font text-xl my-2">
                HEADLINE
            </div>
            <div class="card-body bg-base-200">
                <div class="-m-4 flex justify-center">
                    <component :is="'script'" v-if="headLineData.nicoId"
                        :src="`https://embed.nicovideo.jp/watch/${headLineData.nicoId}/script?w=640&h=360`">
                    </component>
                </div>
            </div>
            <div class="card-actions justify-center">
                <div class="grid grid-cols-2 w-full">
                    <div class="justify-start p-4 bg-base-200">
                        <div class="logo-font text-sm border-b border-base-content">
                            <div class="-mb-1">LATEST</div>
                        </div>
                        <div class="text-lg">
                            {{ headLineData.title }}
                        </div>
                        <div class="flex justify-center">
                            <div class="tooltip tooltip-top" data-tip="niconicoで見る" v-if="headLineData.nicoLink">
                                <a :href="headLineData.nicoLink" target="_blank"
                                    class="btn btn-ghost btn-circle btn-sm">
                                    <television-classic-icon></television-classic-icon>
                                </a>
                            </div>
                            <div class="tooltip tooltip-top" data-tip="Youtubeで見る" v-if="headLineData.youtubeLink">
                                <a :href="headLineData.youtubeLink" target="_blank"
                                    class="btn btn-ghost btn-circle btn-sm">
                                    <youtube-icon></youtube-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="justify-start p-4">
                        <div class="logo-font text-sm border-b border-base-content">
                            <div class="-mb-1">UPDATE INFORMATION</div>
                        </div>
                        <div class="text-right logo-font text-xs -mt-0.5">DATE : {{ headLineData.infoDate }}</div>
                        <div>
                            {{ headLineData.info }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>