var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var mes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
var d = new Date();
document.getElementById("dia").innerHTML = semana[d.getDay()]+" "+d.getDate()+" de "+mes[d.getMonth()]+" de "+d.getFullYear();
//Vue
var app = new Vue({
    el:'#app',
    data: {
        quantidade: 10,
        dia: document.getElementById("dia").innerHTML,
        dia_da_semana: "",
        paginasRevisadas: [],
        pag1: [],
        observacoesSalvas: [null],
        semana: ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado","Domingo"],
        segR: [],
        segO: [],
        terR: [],
        terO: [],
        quaR: [],
        quaO: [],
        quiR: [],
        quiO: [],
        sexR: [],
        sexO: [],
        sabR: [],
        sabO: [],
        domR: [],
        domO: []
    },
    methods: {
        selecionar(){
            console.log("selecionou")
            if (this.dia_da_semana == "Segunda-Feira") {
                this.paginasRevisadas = this.segR
                this.observacoesSalvas = this.segO
            }
            else if (this.dia_da_semana == "Terça-Feira") {
                this.paginasRevisadas = this.terR
                this.observacoesSalvas = this.terO
            }
            else if (this.dia_da_semana == "Quarta-Feira") {
                this.paginasRevisadas = this.quaR
                this.observacoesSalvas = this.quaO
            }
            else if (this.dia_da_semana == "Quinta-Feira") {
                this.paginasRevisadas = this.quiR
                this.observacoesSalvas = this.quiO
            }
            else if (this.dia_da_semana == "Sexta-Feira") {
                this.paginasRevisadas = this.sexR
                this.observacoesSalvas = this.sexO
            }
            else if (this.dia_da_semana == "Sábado") {
                this.paginasRevisadas = this.sabR
                this.observacoesSalvas = this.sabO
            }
            else if (this.dia_da_semana == "Domingo") {
                this.paginasRevisadas = this.domR
                this.observacoesSalvas = this.domO
            }
        }
    },
    computed: {
        salvarAutomatico(){
            let rev = this.paginasRevisadas
            let obs = this.observacoesSalvas
            let dia = this.dia_da_semana
            if (dia == "Segunda-Feira") {
                this.segR = rev
                this.segO = obs
            }
            else if (dia == "Terça-Feira") {
                this.terR = rev
                this.terO = obs
            }
            else if (dia == "Quarta-Feira") {
                this.terR = rev
                this.terO = obs
            }
            else if (dia == "Quinta-Feira") {
                this.quiR = rev
                this.quiO = obs
            }
            else if (dia == "Sexta-Feira") {
                this.sexR = rev
                this.sexO = obs
            }
            else if (dia == "Sábado") {
                this.sabR = rev
                this.sabO = obs
            }
            else if (dia == "Domingo") {
                this.domR = rev
                this.domO = obs
            }
            //conectar a pagina atualizar
            let data = {
                segR = this.segR,
                segO = this.segO,
                terR = this.terR,
                terO = this.terO,
                quaR = this.quaR,
                quaO = this.quaO,
                quiR = this.quiR,
                quiO = this.quiO,
                sexR = this.sexR,
                sexO = this.sexO,
                sabR = this.sabR,
                sabO = this.sabO,
                domR = this.domR,
                domO = this.domO
            }
            axios.post("localhost:8080/atualizar", data
            ).then((res) =>{
                console.log("atualizado com sucesso!")
            }).catch((err)=>{
            })
        }
    },
    created() {
        this.dia_da_semana = semana[d.getDay()+1]
    }
})