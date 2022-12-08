
const express= require('express')
const app=express()
const axios= require('axios')
const { response, query } = require('express')
var api_key="71cc9ed6a1ac290502582aa7857b6426";


//Listando Filmes Populares
app.get('/filme/populares',function(req,res){  
    var query="https://api.themoviedb.org/3/movie/popular?api_key="+api_key+"&language=en-US&page=1";
    axios.get(query).then((resp)=>{
        return res.json(resp.data);
    });
          
})


//Buscando Filme
app.get('/filme/buscar/:nome',function(req,res){
    var query = "https://api.themoviedb.org/3/search/movie?api_key="+api_key+"&language=en-US&query="+req.params.nome+"&page=1&include_adult=false";    
    axios.get(query).then((resp)=>{
        return res.json(resp.data);
    });
})

//Buscando Filmes por Genero
app.get('/filme/genero/:id',function(req,res){
    var query = "https://api.themoviedb.org/3/discover/movie?api_key="+api_key+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+req.params.id+"&with_watch_monetization_types=flatrate";    
    axios.get(query).then((resp)=>{
        return res.json(resp.data);
    });
})

//Detalhando Filme
app.get('/filme/detalhe/:id',function(req,res){
    var query= "https://api.themoviedb.org/3/movie/"+req.params.id+"?api_key="+api_key+"&language=en-US";
    axios.get(query).then((resp)=>{
        return res.json(resp.data);
    });
})

//Recomendação de Filme
app.get('/filme/recomendar/:id',function(req,res){
    var query= "https://api.themoviedb.org/3/movie/"+req.params.id+"/similar?api_key="+api_key+"&language=en-US&page=1";
    axios.get(query).then((resp)=>{
        return res.json(resp.data);
    });
})


//Requerir Token de Filme
app.post('/autenticar/usuario',function(req,res){
    response={
        username: req.username,
        password: req.password,
        request_token: req.request_token
    };

})

//Autenticar usurio no site TMDB
app.get('/account/autenticar',function(req,res){
    var query= "https://www.themoviedb.org/authenticate/2d775029e08e608ce38dec65eb3ba2ab399e2c4a";
    axios.get(query).then((resp)=>{
        print(resp.data);
        return res.json(resp.data);
    });
})

//Criar Playlist
async function CreatePlayList() {

    const config = {
        method: 'post',
        url: 'http://webcode.me',
        headers: { 'Content-Type': 'application/json' }
    }

    let res = await axios(config)

    console.log(res.request._header);
}


app.listen('8080')