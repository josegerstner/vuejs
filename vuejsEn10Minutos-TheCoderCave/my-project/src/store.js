import { createStore } from 'vuex';

export default createStore({
    state: {
        message: 'Hello World with Vuex'
    },
    mutations: {
        setMessage(state, newMessage) {
            state.message = newMessage;
        }
    }
});