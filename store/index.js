import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = () => ({
    
})

const getters = {
    Tours: state => state.tours,
}

const mutations = {
    ChangeItem(state, param) {
        
    },
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
