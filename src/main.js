import Vue from 'vue'
import App from './App.vue'
//import router from './router'

Vue.config.productionTip = false,
    Vue.prototype.a = '123';


const errors = Vue.observable({ errors: {} })

Object.defineProperty(Vue.prototype, '$errors', {
    get() {
        return errors.errors
    },

    set(value) {
        errors.errors = value
    }
})


new Vue({
    //router,
    render: h => h(App),
    watch: {
        $errors() {
            console.log('$errors has changed')
        }
    }
}).$mount('#app')