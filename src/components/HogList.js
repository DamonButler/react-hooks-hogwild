import Filter from "./Filter";
import HogTile from "./HogTiles";

import hogs from "../porkers_data";
import {useState} from "react";

function HogList() {
    const [showingGreasedHogs, setShowingGreasedHogs] = useState(true)


    const filteredHogs = hogs.filter((hog) => {
        if(showingGreasedHogs) {
        return hog.greased
        } else {
            return true
        }
    })



    const hogTiles = filteredHogs.map((hog) => {
        return <HogTile key={hog.name} hog={hog}/>
    });

    function handleGreasedHogsFilter() {
        setShowingGreasedHogs(!showingGreasedHogs)
    }
    return (
        <div>
            <Filter showingGreasedHogs={showingGreasedHogs}
            updateGreasedFilter={handleGreasedHogsFilter}
            />
            {hogTiles}
        </div>
);
}

export default HogList;