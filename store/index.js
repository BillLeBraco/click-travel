import apiTravel from '../api/apiTravel';
export const state = () => ({
    destinations: [],
    tickets:[]
})

export const getters = {
    destinations: (state) => state.destinations,
    tickets: (state) => state.tickets
}

export const actions = {
    getDestinations(state){
        apiTravel.get('/destinations').then((response) => state.commit('setDestinations',response.data))
    },   
    getTickets(state,dest){
        apiTravel.get('/tickets?filter={"offset": 0,"limit": 100,"skip": 0,"where": {"to": "'+dest+'"}}').then((response) => state.commit('setTickets',response.data))        
    }
}

export const mutations = {
    setDestinations(state, items){        
       state.destinations = items;
    },
    setTickets(state,items){
        state.tickets = items;
    }
   }
