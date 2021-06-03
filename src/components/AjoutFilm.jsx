import Axios from 'axios';
import React, { useState } from 'react';


export default function MoviesList() {
    //const [moviesList, setMoviesList] = useState([]);
    const [movieForm, setMovieForm] = useState({title:'', director: '', year:'', color: '', duration:'' });
  

    const handleSubmit = () => {
      Axios.post(`http://localhost:8000/api/movies/post`, {
        title : movieForm.title,
        director: movieForm.director,
        year: movieForm.year,
        color: movieForm.color,
        duration: movieForm.duration

      })
  
      .then((res) => {

      });
    } 

    return (
    <div>
        <div>Ajout d'un nouveau film</div>
        <form onSubmit={handleSubmit}>
            <div className="">
                <label htmlFor="titre">titre</label><br/>
                <input className="" type="text" name="title" value={movieForm.title}
                        onChange={(e) => setMovieForm(movieForm => ({...movieForm, title: e.target.value}))}/>
            </div>
            <div className="">
                <label htmlFor="director">Producteur</label><br/>
                <input className="" type="text" name="" value={movieForm.director}
                        onChange={(e) => setMovieForm(movieForm => ({...movieForm, director : e.target.value}))}/>
            </div>
            <div className="">
                <label htmlFor="year">année</label><br/>
                <input className="" type="text" name="year" value={movieForm.year}
                        onChange={(e) => setMovieForm(movieForm => ({...movieForm, year : e.target.value}))}/>
            </div>
            <div className="">
                <label htmlFor="color">Couleur ?</label><br/>
                <input className="" type="text" name="color" value={movieForm.color}
                        onChange={(e) => setMovieForm(movieForm => ({...movieForm, color : e.target.value}))}/>
            </div>
            <div className="">
                <label htmlFor="duration">Durée</label><br/>
                <input className="" type="text" name="duration" value={movieForm.duration}
                        onChange={(e) => setMovieForm(movieForm => ({...movieForm, duration :  e.target.value}))}/>
            </div>
            
            <input className="" type="submit" value="Enregistrer"/>
        </form>
    </div>
  );
}



