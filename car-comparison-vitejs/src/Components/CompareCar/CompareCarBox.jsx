import './CompareCar.css';
import CarBox from './CarBox.jsx'
import CompareCarButton from './CompareCarButton.jsx'

export default function CompareCarBox()
{
    return(
        <div className="car-comparison-container">
            <div className="car-box-container">
                <CarBox />
                <CarBox />
            </div>
            <CompareCarButton />
        </div>
    )
}