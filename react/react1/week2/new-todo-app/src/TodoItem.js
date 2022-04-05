export function TodoItem(props) {
    const { id, description, checked, handleChange, handleDelete } = props;

    const handleCheckboxChangeControl = () => {
        if (checked) return null;
        handleChange(id);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={checked}
                className={'line'}
                onChange={() => handleCheckboxChangeControl()}
            />
            <span className={checked ? 'strike' : null}>{description}</span>
            <button
                type="button"
                className={'line'}
                onClick={() => handleDelete(id)}
            >
                Delete
            </button>
        </div>
    );
}
