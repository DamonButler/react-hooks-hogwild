function Filter( { showingGreasedHogs, updateGreasedFilter, sortBy }) {
    return (
        <div>
            <label>
                Greasy?
                <input type="checkbox"
                checked={showingGreasedHogs}
                onChange={() => updateGreasedFilter()}
                />
            </label>
            <select>
                <option value="name">Sort by Name</option>
                <option value="weight">Sort by Weight</option>
            </select>
        </div>
    );
}

export default Filter;