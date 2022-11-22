import React from "react";

const Movie = (props) => {
    return (
        <>
            <div className="movie-item-style-2">
                <img src={props.img} alt="" />
                <div className="mv-item-infor">
                    <h6>
                        <a href="moviesingle.html">
                            {props.title}
                        </a>
                    </h6>
                    <p className="rate">
                        <i className="ion-android-star"></i>
                        <span>{props.qualify}</span> /10
                    </p>
                    <p className="describe">{props.describe}</p>
                    <p className="run-time">
                    Run Time: {props.duration}
                        <span>MMPA: {props.clasification}</span> .
                        <span>Release: {props.date}</span>
                    </p>
                    <p>
                        Director: <a href="#">{props.director}</a>
                    </p>
                    <p>
                        Stars: <a href="#">{props.actors}</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Movie;
