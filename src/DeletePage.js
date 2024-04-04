import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from "react-router-dom";

function DeletePage() {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const [player, setPlayer] = useState({});
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        (async () => {
            try {
                const res = await fetch(`http://localhost:3001/chess/${id}`);
                const playerData = await res.json();
                setPlayer(playerData);
            } catch (error) {
                console.log(error);
            } finally {
                setPending(false);
            }
        })();
    }, [id]);

    return (
        <div className='p-5 m-auto text-center content bg-lavender'>
            {isPending || !player.id ? (<div className='spinner-border'></div>) : (
                <div>
                    <h2>Delete Chess Player</h2>
                    <div className='card p-3'>
                        <div className='card-body'>
                            <h5 className='card-title'>{player.name}</h5>
                            <p>Birth Date: {player.birth_date}</p>
                            <p>World Championships Won: {player.world_ch_won}</p>
                            <img className='img-fluid rounded'
                                style={{ maxHeight: "500px" }}
                                alt=""
                                src={player.image_url ? player.image_url : "https://via.placeholder.com/400x800"}
                            />
                        </div>
                        <form onSubmit={async (e) => {
                            try {
                                e.preventDefault();
                                await fetch(`http://localhost:3001/chess/${id}`, {
                                    method: "DELETE",
                                });
                                navigate("/");
                            } catch (error) {
                                console.log(error);
                            }
                        }}>
                            <div>
                                <NavLink to={"/"}>
                                    <button className="btn btn-warning rounded">Cancel</button>
                                </NavLink>
                                <button className="btn btn-danger rounded">Delete</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DeletePage;
