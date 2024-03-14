import { useState } from 'react'
import ReactDOM from 'react-dom'

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
        <form onSubmit={handleSubmit}>
            <label>
            Test
            <select value={myCar} onChange = {handleChange}>
                <option value = "Select" selected>Select</option>
                <option value = "Ford">Ford</option>
            </select>
            </label>
            <input type ="submit" value="Submit" />
        </form>
    )
}


export default CompareForm;

