import Navbar from '../components/Nav/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import CompareCarBox from '../components/CompareCarBox/CompareCarBox.jsx'


export default function Home() {
    return (
        <div>
            <Navbar />
            <h3 className="car-comparison-h3">Car Comparison Tool</h3>
            <CompareCarBox />
            <button className="compare-button">Compare</button>
        </div>
    )
}