<script setup lang="ts">
import YoutubeIcon from 'vue-material-design-icons/Youtube.vue';
import TwitterIcon from 'vue-material-design-icons/Twitter.vue';
import PostIcon from 'vue-material-design-icons/Post.vue';
import TelevisionClassicIcon from 'vue-material-design-icons/TelevisionClassic.vue';
import soundcloudIcon from 'vue-material-design-icons/Soundcloud.vue';
import alphaKIcon from 'vue-material-design-icons/AlphaKCircle.vue';
import albumIcon from 'vue-material-design-icons/Album.vue';
import accountCircleIcon from 'vue-material-design-icons/AccountCircle.vue';
import fileMusicIcon from 'vue-material-design-icons/FileMusic.vue';
</script>

<template>
    <div class="grid justify-items-center">
        <div class="tooltip tooltip-top w-4/5 m-2" data-tip="ニコメドSNSです。">
            <a class="btn border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-orange-500 btn-circle btn-block btn-outline border-2 shadow"
                href="https://nicomedkey.cc">
                <alpha-k-icon></alpha-k-icon>
                <p class="text-xl ml-2 normal-case">nicomedkey.cc</p>
            </a>
        </div>
        <div class="tooltip tooltip-top w-4/5 m-2" data-tip="ニコニコ動画のユーザーページに移動します。">
            <a class="btn btn-circle btn-block btn-outline border-2 shadow"
                href="https://www.nicovideo.jp/user/21791951">
                <television-classic-icon></television-classic-icon>
                <p class="text-xl ml-2 normal-case">ニコニコ動画</p>
            </a>
        </div>
        <div class="tooltip tooltip-top w-4/5 m-2" data-tip="Youtubeのチャンネルページに移動します。">
            <a class="btn border-red-600 text-red-600 hover:bg-red-600 hover:border-red-600 btn-circle btn-block btn-outline border-2 shadow"
                href="https://www.youtube.com/channel/UCfvuOsT-WvbAomxhffNAlNg">
                <youtube-icon></youtube-icon>
                <p class="text-xl ml-2 normal-case">Youtube</p>
            </a>
        </div>
        <div class="tooltip tooltip-top w-4/5 m-2" data-tip="文字書き所です。放置ぎみ。">
            <a class="btn border-teal-600 text-teal-600 hover:bg-teal-600 hover:border-teal-600 btn-circle btn-block btn-outline border-2 shadow"
                href="https://uboar.hatenablog.com">
                <post-icon></post-icon>
                <p class="text-xl ml-2 normal-case">はてなブログ</p>
            </a>
        </div>
        <div class="tooltip tooltip-top w-4/5 m-2" data-tip="技術系の文字書きをする時に使います。">
            <a class="btn border-blue-800 text-blue-800 hover:bg-blue-800 hover:border-blue-800 btn-circle btn-block btn-outline border-2 shadow"
                href="https://zenn.dev/uboar">
                <post-icon></post-icon>
                <p class="text-xl ml-2 normal-case">Zenn</p>
            </a>
        </div>
        <div class="tooltip tooltip-top w-4/5 m-2" data-tip="Twitterのユーザーページに移動します。">
            <a class="btn border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:border-cyan-400 btn-circle btn-block btn-outline border-2 shadow"
                href="https://twitter.com/_uboar_">
                <twitter-icon></twitter-icon>
                <p class="text-xl ml-2 normal-case">Twitter</p>
            </a>
        </div>
        <div class="tooltip tooltip-top w-4/5 m-2" data-tip="SoundCloudのチャンネルページに移動します。あんまり使ってません。">
            <a class="btn border-orange-400 text-orange-400 hover:bg-orange-400 hover:border-orange-400 btn-circle btn-block btn-outline border-2 shadow"
                href="https://soundcloud.com/user-151411473">
                <soundcloud-icon></soundcloud-icon>
                <p class="text-xl ml-2 normal-case">SOUNDCLOUD</p>
            </a>
        </div>
        <div class="border-b border-t border-base-content border-dashed logo-font text-center px-52 my-2">EMBEDDED
            CONTENTS</div>
        <div class="tooltip tooltip-top w-4/5 m-2 hidden" data-tip="自己紹介です。">
            <router-link class="btn btn-primary btn-square btn-block btn-outline border-2 shadow" to="about">
                <account-circle-icon></account-circle-icon>
                <p class="text-xl ml-2 normal-case">ウボァーについて</p>
            </router-link>
        </div>
        <div class="tooltip tooltip-top w-4/5 m-2" data-tip="作った音楽作品をダウンロード出来ます。">
            <router-link class="btn btn-primary btn-square btn-block btn-outline border-2 shadow" to="albums">
                <album-icon></album-icon>
                <p class="text-xl ml-2 normal-case">アルバム音源配布</p>
            </router-link>
        </div>
        <div class="tooltip tooltip-top w-4/5 m-2" data-tip="今まで作ったものまとめ(一部)です。気が向いたら更新されます。">
            <router-link class="btn btn-primary btn-square btn-block btn-outline border-2 shadow" to="collection">
                <file-music-icon></file-music-icon>
                <p class="text-xl ml-2 normal-case">作品集</p>
            </router-link>
        </div>
    </div>
</template>