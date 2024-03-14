import Navbar from '../components/Nav/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import CompareCarBox from '../components/CompareCarBox/CompareCarBox.jsx'


export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <h3 className="car-comparison-h3">Car Comparison Tool</h3>
            <CompareCarBox />
            <div className="compare-button-container">
                <button className="compare-button">Compare</button>
            </div>
        </div>
    )
}