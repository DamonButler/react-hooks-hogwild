import Filter from "./Filter";
import HogTile from "./HogTiles";

import hogs from "../porkers_data";
import {useState} from "react";

function HogList() {
    const [showingGreasedHogs, setShowingGreasedHogs] = useState(true)
    const [sortBy, setSortBy] = useState("name")

    const filteredHogs = hogs.filter((hog) => {
        if(showingGreasedHogs) {
        return hog.greased
        } else {
            return true
        }
    })

    function handleGreasedHogsFilter() {
        setShowingGreasedHogs(!showingGreasedHogs)
    }
    
    const sortedHogs = filteredHogs.sort((hogA, hogB) => {
        if(sortBy === "name") {
            return hogA.name.localeCompare(hogB.name)
        } else {
            return hogA.weight - hogB.weight
        }
        
    })
    
    
    const hogTiles = sortedHogs.map((hog) => {
        return <HogTile key={hog.name} hog={hog}/>
    });
    
    return (
        <div>
            <Filter showingGreasedHogs={showingGreasedHogs}
            updateGreasedFilter={handleGreasedHogsFilter}
            sortBy={sortBy}
            />
            {hogTiles}
        </div>
);
}

export default HogList;