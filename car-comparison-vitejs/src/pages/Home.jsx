import Navbar from '../components/Nav/Navbar.jsx'
import CompareCarBox from '../components/CompareCar/CompareCarBox.jsx'

export default function Home() {
    return (
        <>
            <Navbar />
            <h1 className="car-comparison-h1">Select Two Vehicles to Compare</h1>
            <CompareCarBox />
        </>
    )
}