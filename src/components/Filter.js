function Filter( { showingGreasedHogs, updateGreasedFilter }) {
    return (
        <div>
            <label>
                Greasy?
                <input type="checkbox"
                checked={showingGreasedHogs}
                onChange={() => updateGreasedFilter()}
                />
            </label>
        </div>
    );
}

export default Filter;