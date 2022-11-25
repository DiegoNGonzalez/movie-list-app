import { useEffect, useState } from "react";
import Movie from "./Movie";
import PageWraper from "./PageWraper";
import Pagination from "./Pagination";

function MovieList() {
    const [actualPage, setaActualPage] = useState(1);
    const [movies, setMovies] = useState([]);
    let moviesXpage = 6;

    useEffect(() => {
        searchMovies();
    }, []);

    const searchMovies = async () => {
        let url = "https://lucasmoy.dev/data/react/peliculas.json";
        let response = await fetch(url, {
            method: "GET",
            hraders: {
                Accept: "application/json",
                Content: "application/json",
            },
        });

        let data = await response.json();
        console.log(data);
        setMovies(data);
    };

    const getTotalPages = () => {
        let totalAmountOfMovies = movies.length;
        return Math.ceil(totalAmountOfMovies / moviesXpage);
    };
    let movieXpage =  movies.slice(
        (actualPage -1) * moviesXpage, actualPage * moviesXpage )
    return (
        <PageWraper>
            {movieXpage.map((movie, index) => (
                <Movie
                    key={index}
                    title={movie.titulo}
                    qualify={movie.calificacion}
                    director={movie.director}
                    actors={movie.actores}
                    duration={movie.duracion}
                    date={movie.fecha}
                    img={movie.img}
                    describe={movie.descripcion}
                />
            ))}
            <Pagination
                page={actualPage}
                total={getTotalPages()}
                onChange={(page) => {
                    setaActualPage(page);
                }}
            />
        </PageWraper>
    );
}

export default MovieList;