import { useState } from "react";

function HogTile({ hog }) {
    const [showingDetails, setShowingDetails] = useState (false)
    return (
        <div>
            <h2>{hog.name}</h2>
            <img src={hog.image} alt={hog.name} />
            {showingDetails ? (
                <div>
                    <p>speciality: {hog.specialty}</p>
                    <p>greased: {hog.greased ? "yes" : "no"}</p>
                    <p>weight: {hog.weight}</p>
                    <p>medal: {hog["highest medal achieved"]}</p>
                </div>
            ) : null }
        </div>
    );
}
export default HogTile;