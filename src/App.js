import { useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import PageWraper from "./components/PageWraper";
import Pagination from "./components/Pagination";
import moviesJson from './data/movies.json'

function App() {
	const [actualPage, setaActualPage] = useState(1)
    let movies = moviesJson;
	let moviesXpage = 4

	movies  = movies.slice((actualPage -1) * moviesXpage, actualPage * moviesXpage )
    return (
        <PageWraper>
            {movies.map((movie, index) => (
                <Movie
					key={index}
                    title={movie.title}
                    qualify={movie.qualify}
                    director={movie.director}
                    actors={movie.actors}
                    duration={movie.duration}
                    date={movie.date}
                    img={movie.img}
                    clasification={movie.clasification}
                    describe={movie.describe}
                />
            ))}
			<Pagination page={actualPage} total={4} onChange={(page)=> {
				setaActualPage(page)
			}}/>
        </PageWraper>
    );
}

export default App;
