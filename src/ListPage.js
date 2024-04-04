import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function ListPage() {
    const [chessPlayers, setChessPlayers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/chess")
            .then(res => {
                setChessPlayers(res.data);
            })
            .catch(error => {
                console.error("Error fetching chess players:", error);
            });
    }, []);

    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            <h1 className="display-4">Chess Players</h1>
           {chessPlayers.map((chessPlayer) => (
               <div key={chessPlayer.id} className='card col-sm-3 d-inline-block m-1 p-2'> 
                    <h5>Name: {chessPlayer.name}</h5>
                    <p>Born: {chessPlayer.birth_date}</p>
                    <p>Championship won: {chessPlayer.world_ch_won}</p>
                   <NavLink to={`/player/${chessPlayer.id}`}>
                    <div className="card-body">
                        <img className="img-fluid"  style={{ maxHeight: 200 }} alt={chessPlayer.name} src={chessPlayer.image_url}/>
                    </div>
                    </NavLink>
                    <p>Wiki link: <a href={chessPlayer.profile_url}>{chessPlayer.profile_url}</a></p>
                    <NavLink key={chessPlayer.id + 1} to={"/modchess/" + chessPlayer.id}>
                                <i className="bi bi-pencil-square mx-1">Módosítás</i>
                            </NavLink>
                            <NavLink key={chessPlayer.id + 2} to={"/deletechess/" + chessPlayer.id} className={"text-danger"}>
                                <i className="bi bi-trash3">Törlés</i>
                            </NavLink>
               </div>
           ))}
        </div>
    );
}

export default ListPage;
