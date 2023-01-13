const {createApp} = Vue

createApp({ 
    data(){
        return{
        eventos: undefined, //todos los datos
        parametros: undefined, 
        id: undefined,
        evento: undefined,
        urlparam: ""
        }
    },
    created(){
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json() ) 
    .then(data => {
        this.eventos = data.events,
        this.parametros = new URLSearchParams(location.search),
        this.id = this.parametros.get("idUrl"),
        this.evento = this.eventos.find(evento => evento._id == this.id)

    })
    .catch(err => console.log(err))
}
}).mount("#app")


