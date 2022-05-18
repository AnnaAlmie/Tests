export const state = () => ({
    gamesPaid: 0,
    gameStatus: false
  })

export const getters = {
    getGames: (state) => {
        return state.gamesPaid
    },
    getChest: (state) => {
        return state.gameStatus
    } 

}

export const mutations = {
    SET_GAMES(state, payload) {
        state.gamesPaid = state.gamesPaid + payload;
    }, 
    OPEN_CHEST(state, payload) {
        if(payload) {
            state.gamesPaid--;
        }
        state.gameStatus = payload;
    }
} 

export const actions = {

}