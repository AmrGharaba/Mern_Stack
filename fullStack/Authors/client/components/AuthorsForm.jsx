import React from "react";
import { Link } from "react-router-dom";

function AuthorsForm(props) {
    const { onSubmitProp, name, setName, errors } = props;
    
    return (
        <form >
            <div className="mb-3">
                <label htmlFor="PtoductTitle" className="form-label">Author's name</label>
                <input type="text"
                    className="form-control"
                    id="AuthorName"
                    aria-describedby="nameHelp"
                    onChange={(e) => setName(e.target.value)}
                    value={name} />
                {errors.map((err, index) => <small id="nameHelp" className="form-text text-danger " key={index}>{err}</small>)}
            </div>
            <Link to={`/authors`}><button type="button" className="btn btn-sm btn-warning me-2" >Cancell</button></Link>
            <button type="submit" onClick={onSubmitProp} className="btn btn-sm btn-primary">Submit</button>
        </form>
    )
}
export default AuthorsForm
