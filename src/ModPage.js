import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ModPage() {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const [, setPlayerData] = useState({});
    const [modName, setModName] = useState("");
    const [modBirthDate, setModBirthDate] = useState("");
    const [modWorldChWon, setModWorldChWon] = useState(0);
    const [modProfileUrl, setModProfileUrl] = useState("");
    const [modImageUrl, setModImageUrl] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:3001/chess/${id}`);
                setPlayerData(response.data);
                setModName(response.data.name);
                setModBirthDate(response.data.birth_date);
                setModWorldChWon(response.data.world_ch_won);
                setModProfileUrl(response.data.profile_url);
                setModImageUrl(response.data.image_url);
            } catch (error) {
                console.error("Error fetching player data:", error);
            }
        })();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/chess/${id}`, {
                name: modName,
                birth_date: modBirthDate,
                world_ch_won: modWorldChWon,
                profile_url: modProfileUrl,
                image_url: modImageUrl,
            });
            navigate("/");
        } catch (error) {
            console.error("Error modifying chess player:", error);
        }
    };

    return (
        <div className='p-5 content bg-whitesmoke text-center'>
            <h2>Modify chess player</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group row pb-3'>
                    <label htmlFor="name" className='col-sm-3 col-form-label'> Name: </label>
                    <div>
                        <input type="text" id="name" name="name" className="form-control" value={modName} onChange={(e) => setModName(e.target.value)} autoComplete='name' />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="birth_date" className='col-sm-3 col-form-label'> Birth Date: </label>
                    <div>
                        <input type="date" id="birth_date" name="birth_date" className="form-control" value={modBirthDate} onChange={(e) => setModBirthDate(e.target.value)} autoComplete='birth_date' />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="world_ch_won" className='col-sm-3 col-form-label'> World Championships Won: </label>
                    <div>
                        <input type="number" id="world_ch_won" name="world_ch_won" className="form-control" value={modWorldChWon} onChange={(e) => setModWorldChWon(e.target.value)} autoComplete='world_ch_won' />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="profile_url" className='col-sm-3 col-form-label'> Profile URL: </label>
                    <div>
                        <input type="text" id="profile_url" name="profile_url" className="form-control" value={modProfileUrl} onChange={(e) => setModProfileUrl(e.target.value)} autoComplete='profile_url' />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="image_url" className='col-sm-3 col-form-label'> Image URL: </label>
                    <div>
                        <input type="text" id="image_url" name="image_url" className="form-control" value={modImageUrl} onChange={(e) => setModImageUrl(e.target.value)} autoComplete='image_url' />
                    </div>
                </div>
                <button type="submit" className='btn btn-success'>Submit</button>
            </form>
        </div>
    );
}

export default ModPage;
