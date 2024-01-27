import { Link } from "react-router-dom"

export default function Home() {


    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1055611488/photo/legs-of-couple-with-shopping-bags-after-shopping-in-city.jpg?s=612x612&w=0&k=20&c=JbowHB04RMeaEC655V2ihhcVuqWnvcJ-exBfBg4LVIQ=)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Ascend Into The Hole</h1>
                    <p className="mb-5">Dig deeply, consumer. Burrow into your depths to ascend from the everyday.</p>
                    <Link to="shop">
                        <button className="btn btn-accent text-base-100">Consume</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}