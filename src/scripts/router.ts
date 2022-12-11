import { createRouter, createWebHistory } from 'vue-router'
import skut from "../assets/albums/skut.json"
import ubomez from "../assets/albums/ubomez.json"
import nicodo from "../assets/albums/nicodo.json"
import nicogazer from "../assets/albums/nicogazer.json"
import whileontile from "../assets/albums/whileontile.json"
import periodley from "../assets/albums/periodley.json"
import allforyou from "../assets/albums/allforyou.json"
import amx40 from "../assets/albums/amx40.json"
import flywheel from "../assets/albums/flywheel.json"
import chebyshev from "../assets/albums/chebyshev.json"
import astable from "../assets/albums/astable.json"
import hysteresis from "../assets/albums/hysteresis.json"
import schmitttrigger from "../assets/albums/schmitttrigger.json"
import pushpull from "../assets/albums/pushpull.json"
import fieldeffect from "../assets/albums/fieldeffect.json"

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            name: "index",
            path: "/",
            component: () => import("../pages/index.vue"),
        },
        {
            name: "about",
            path: "/about",
            component: () => import("../pages/about.vue")
        },
        {
            name: "albums",
            path: "/albums",
            component: () => import("../pages/albums.vue")
        },
        {
            name: "collection",
            path: "/collection",
            component: () => import("../pages/collection.vue")
        },
        {
            name: "fieldeffect",
            path: "/albums/fieldeffect",
            props: { albumData: fieldeffect },
            component: () => import("../pages/albumPage.vue")
        },
        {
            name: "pushpull",
            path: "/albums/pushpull",
            props: { albumData: pushpull },
            component: () => import("../pages/albumPage.vue")
        },
        {
            name: "schmitttrigger",
            path: "/albums/schmitttrigger",
            props: { albumData: schmitttrigger },
            component: () => import("../pages/albumPage.vue")
        },
        {
            name: "hysteresis",
            path: "/albums/hysteresis",
            props: { albumData: hysteresis },
            component: () => import("../pages/albumPage.vue")
        },
        {
            name: "astable",
            path: "/albums/astable",
            props: { albumData: astable },
            component: () => import("../pages/albumPage.vue")
        },
        {
            name: "chebyshev",
            path: "/albums/chebyshev",
            props: { albumData: chebyshev },
            component: () => import("../pages/albumPage.vue")
        },
        {
            name: "flywheel",
            path: "/albums/flywheel",
            props: { albumData: flywheel },
            component: () => import("../pages/albumPage.vue")
        },
        {
            name: "amx40",
            path: "/albums/amx40",
            props: { albumData: amx40 },
            component: () => import("../pages/albumPage.vue")
        },
        {
            name: "allforyou",
            path: "/albums/allforyou",
            props: { albumData: allforyou },
            component: () => import("../pages/albumPage.vue")
        },
        {
            name: "periodley",
            path: "/albums/periodley",
            props: { albumData: periodley },
            component: () => import("../pages/albumPage.vue")
        },
        {
            name: "whileontile",
            path: "/albums/whileontile",
            props: { albumData: whileontile },
            component: () => import("../pages/albumPage.vue")
        },
        {
            name: "nicogazer",
            path: "/albums/nicogazer",
            props: { albumData: nicogazer },
            component: () => import("../pages/albumPage.vue")
        },
        {
            name: "nicodo",
            path: "/albums/nicodo",
            props: { albumData: nicodo },
            component: () => import("../pages/albumPage.vue")
        },
        {
            name: "ubomez",
            path: "/albums/ubomez",
            props: { albumData: ubomez },
            component: () => import("../pages/albumPage.vue")
        },
        {
            name: "skut",
            path: "/albums/skut",
            props: { albumData: skut },
            component: () => import("../pages/albumPage.vue")
        }
    ]
});

export default router;