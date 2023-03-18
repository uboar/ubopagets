import { createStore } from "vuex";

const generalTheme = "aqua"

const store = createStore({
    state() {
        return {
            currentTheme: generalTheme,
        }
    },
    mutations: {
        setTheme(state, text) {
            state.currentTheme = text;
        },
        resetTheme(state) {
            state.currentTheme = generalTheme
        }
    }
})


export default store; 