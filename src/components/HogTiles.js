function HogTile({ hog })
{
    return (
        <div>
            <h2>{hog.name}</h2>
            <img src={hog.image} alt={hog.name} />
        </div>
    );
}
export default HogTile;