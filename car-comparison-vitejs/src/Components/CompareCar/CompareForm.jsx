import { useState } from 'react'
import './CompareCar.css'

function CompareForm() {
    const [myCar, setMyCar] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('The you entered was: ' + myCar)
    }

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <form className="car-selector-form" onSubmit={handleSubmit}>
            <label>
            <select value={myCar} onChange = {handleChange}>
                <option defaultValue="Make">Make</option>
                <option value = "Ford">Ford</option>
            </select>
            </label>
            <label>
            <select>
                <option defaultValue="Model">Model</option>
                <option value = "Focus">Focus</option>
            </select>
            </label>
            <label>
            <select>
                <option defaultValue="Year">Year</option>
                <option value = "1999">1999</option>
            </select>
            </label>

        </form>
    )
}


export default CompareForm;

