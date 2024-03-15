import Navbar from '../components/Nav/Navbar.jsx'
import CompareCarBox from '../components/CompareCarBox/CompareCarBox.jsx'
import './Home.css'

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <h1 className="car-comparison-h1">Select Two Vehicles to Compare</h1>
            <CompareCarBox />
            <div className="compare-button-container">
                <button className="compare-button">Compare</button>
            </div>
        </div>
    )
}