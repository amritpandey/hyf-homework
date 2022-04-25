export const SearchShift = ({ setSearchName }) => {
    return (
        <div>
            <h2>Shift Overview</h2>
            <input
                type="text"
                className="search-input"
                placeholder="Search for employee..."
                onChange={(event) => setSearchName(event.target.value)}
            />
        </div>
    );
};
