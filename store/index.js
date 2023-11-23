import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = () => ({
    Courses: [
        {
            title: 'ChertNodes',
            discription: 'Minecraft servers hosting ',
            stack: [
                {
                    title: 'HTML'
                },
                {
                    title: 'SCSS'
                },
                {
                    title: 'Python'
                },
                {
                    title: 'Flask'
                },
            ]
        }
    ]
})

const getters = {
    Courses: state => state.Courses,
}

const mutations = {
    // ChangeItem(state, param) {
        
    // },
}


const actions = {
}

const modules = {
}

export default {
    state,
    getters,
    actions,
    mutations,
    modules
}
