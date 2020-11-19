import apiTravel from '../api/apiTravel';
export const state = () => ({
    destinations: []
})

export const getters = {
    destinations: (state) => state.destinations
}

export const actions = {
    getDestinations(state){
        apiTravel.get('/destinations').then((response) => state.commit('setDestinations',response.data))
    }   
}

export const mutations = {
    setDestinations(state, items){        
       state.destinations = items;
    },
   }
