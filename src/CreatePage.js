import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePage() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                name: e.target.elements.name.value,
                birth_date: e.target.elements.birth_date.value,
                world_ch_won: e.target.elements.world_ch_won.value,
                profile_url: e.target.elements.profile_url.value,
                image_url: e.target.elements.image_url.value,
            };

            await axios.post("http://localhost:3001/chess", formData);
            navigate("/");
        } catch (error) {
            console.error("Error creating chess player:", error);
        }
    };

    return (
        <div className='p-5 content bg-whitesmoke text-center'>
            <h2>Add new chess player</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group row pb-3'>
                    <label htmlFor="name" className='col-sm-3 col-form-label'> Name: </label>
                    <div>
                        <input type="text" id="name" name="name" className="form-control" autoComplete='name' />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="birth_date" className='col-sm-3 col-form-label'> Birth Date: </label>
                    <div>
                        <input type="date" id="birth_date" name="birth_date" className="form-control" autoComplete='birth_date' />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="world_ch_won" className='col-sm-3 col-form-label'> World Championships Won: </label>
                    <div>
                        <input type="number" id="world_ch_won" name="world_ch_won" className="form-control" autoComplete='world_ch_won' />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="profile_url" className='col-sm-3 col-form-label'> Profile URL: </label>
                    <div>
                        <input type="text" id="profile_url" name="profile_url" className="form-control" autoComplete='profile_url' />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="image_url" className='col-sm-3 col-form-label'> Image URL: </label>
                    <div>
                        <input type="text" id="image_url" name="image_url" className="form-control" autoComplete='image_url' />
                    </div>
                </div>
                <button type="submit" className='btn btn-success'>Submit</button>
            </form>
        </div>
    );
}

export default CreatePage;
