import Navbar from '../components/Nav/Navbar.jsx'
import CompareCarBox from '../components/CompareCar/CompareCarBox.jsx'
import CompareCarButton from '../components/CompareCar/CompareCarButton.jsx'

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <h1 className="car-comparison-h1">Select Two Vehicles to Compare</h1>
            <CompareCarBox />
            <CompareCarButton />
        </div>
    )
}