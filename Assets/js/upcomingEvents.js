const {createApp} = Vue
//cartas
//check
//filtro

createApp({ //lo q voy a usar
    data(){ //uso en html ((objeto))
        return{
        eventos: null,
        categorias: null,
        valueBusqueda: "",
        checked: [],
        eventosFiltrados: []
        }
    },
    created(){
    fetch("https://mindhub-xj03.onrender.com/api/amazing")  //promesa ((json= metodo response))
    .then(response => response.json() )  //promesa
    .then(data => {
        
        this.eventos = data.events.filter(evento => evento.date > data.currentDate)
        this.eventosFiltrados = [... this.eventos],
        this.categorias = [... new Set(this.eventos.map(evento => evento.category) ) ]
        
        console.log(data.events)

    })
    .catch(err => console.log(err)) //x si falla
},
methods:{
    
    filtroCruzado: function(){
        let filterPerFind = this.eventos.filter( event => event.name.toLowerCase().includes( this.valueBusqueda.toLowerCase()))
        if( this.checked.length === 0 ){
            this.eventosFiltrados = filterPerFind
        }else{
            let filterPerCheck = filterPerFind.filter( event => this.checked.includes( event.category ))
            this.eventosFiltrados = filterPerCheck 
    } 
    }

}
}).mount("#app") //donde va ((# xq es id))
