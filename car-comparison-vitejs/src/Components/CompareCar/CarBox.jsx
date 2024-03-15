import './CompareCar.css';
import CompareForm from './CompareForm.jsx'

export default function CarBox()
{
    return (
        <div className="car-box">
            <img src="/adobe-car.png" width="180px" height="126px"></img>
            <CompareForm />
        </div>
    )
}