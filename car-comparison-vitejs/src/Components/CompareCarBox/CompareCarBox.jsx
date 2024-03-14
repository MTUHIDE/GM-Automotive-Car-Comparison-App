import './CompareCarBox.css';
import CarBox from './CarBox.jsx'

export default function CompareCarBox()
{
    return(
        <div className="car-box-container">
            <CarBox />
            <CarBox />
        </div>
    )
}