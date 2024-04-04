import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";

function SinglePage() {
    const { id } = useParams();
    const [player, setPlayer] = useState({});

    useEffect(() => {
        async function fetchPlayer() {
            try {
                const response = await axios.get(`http://localhost:3001/chess/${id}`);
                setPlayer(response.data);
            } catch (error) {
                console.error("Error fetching player data:", error);
            }
        }
        fetchPlayer();
    }, [id]);

    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            <h1 className="display-4">{player.name}</h1>
            <div className="card col-sm-6 m-auto p-3">
                <img className="img-fluid" style={{ maxHeight: 400 }} alt={player.name} src={player.image_url} />
                <div className="card-body">
                    <p><strong>Birth Date:</strong> {player.birth_date}</p>
                    <p><strong>World Championships Won:</strong> {player.world_ch_won}</p>
                    <p>Wiki link: <a href={player.profile_url}>{player.profile_url}</a></p>
                </div>
            </div>
            <NavLink to="/" className="btn btn-primary mt-3">Back to Players List</NavLink>
        </div>
    );
}

export default SinglePage;
