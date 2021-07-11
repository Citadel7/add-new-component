// JavaScript source code

const app = {
    data() {
        return {
            singers: [
                { id: 1, name: 'Kylie' },
                { id: 2, name: 'Cher' },
                { id: 3, name: 'Madonna' }
            ],
            newItem: ''
        }
    },
    methods: {
        addNewItem() {
            return this.singers.push({ name: this.newItem })
        }
    }
}

const littleApp = Vue.createApp(app)


littleApp.component('add-singer', {
    props: ['name'],
    template: `<li>{{ name }}</li>`
})

littleApp.mount('#root')