<script setup lang="ts">
import YoutubeIcon from 'vue-material-design-icons/Youtube.vue';
import TelevisionClassicIcon from 'vue-material-design-icons/TelevisionClassic.vue';
import TwitterIcon from 'vue-material-design-icons/Twitter.vue';
</script>

<template>
    <div class="fixed z-10 w-full">
        <div class="navbar bg-base-300 shadow-lg">
            <div class="navbar-start">
                <div class="dropdown dropdown-hover">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>
                    <ul tabindex="0"
                        class="menu menu-compact dropdown-content p-2 shadow-lg border border-slate-900 bg-base-300 rounded-box w-52 divide-y divide-slate-900">
                        <li><router-link class="logo-font" to="/">TOP</router-link></li>
                        <li class="hidden"><router-link class="logo-font" to="/about">ABOUT UBOAR</router-link></li>
                        <li><router-link class="logo-font" to="/albums">ALBUMS</router-link></li>
                        <li><router-link class="logo-font" to="/collection">COLLECTION</router-link></li>
                        <li class="hidden"><a class="logo-font">PLAYLISTS</a></li>
                    </ul>
                </div>
            </div>
            <div class="navbar-center">
                <router-link to="/">
                    <a class="btn btn-ghost text-4xl logo-font-">UBOPAGE</a>
                </router-link>
            </div>
            <div class="navbar-end">
                <div class="tooltip tooltip-bottom" data-tip="Niconico">
                    <a href="https://www.nicovideo.jp/user/21791951" class="btn btn-ghost btn-circle" target="_blank">
                        <TelevisionClassicIcon></TelevisionClassicIcon>
                    </a>
                </div>
                <div class="tooltip tooltip-bottom" data-tip="Youtube">
                    <a href="https://www.youtube.com/channel/UCfvuOsT-WvbAomxhffNAlNg" class="btn btn-ghost btn-circle"
                        target="_blank">
                        <YoutubeIcon></YoutubeIcon>
                    </a>
                </div>
                <div class="tooltip tooltip-bottom mr-4" data-tip="Twitter">
                    <a href="https://twitter.com/_uboar_" class="btn btn-ghost btn-circle" target="_blank">
                        <TwitterIcon></TwitterIcon>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>