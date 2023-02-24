import Filter from "./Filter";
import HogTile from "./HogTiles";

import hogs from "../porkers_data";

function HogList() {
    const hogTiles = hogs.map((hog) => {
        return <HogTile key={hog.name} hog={hog}/>
    })
    return (
        <div>
            <Filter />
            {hogTiles}
        </div>
);
}

export default HogList;