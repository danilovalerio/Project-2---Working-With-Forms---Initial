members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Violão'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Guitarra'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            //novo membro com seus atributos nulos
            newMember: {}
        }
    },

    methods: {
        addMember: function(){
            if (this.newMember.fname && this.newMember.lname && this.newMember.instrument) {
                this.members.push(this.newMember);
                this.newMember = {}
            } else {
                alert("Todos os campos devem ser preenchidos!")
            }
        }
    },

};

Vue.createApp(handlingForms).mount('#app');
