import React from 'react';
import { useState } from 'react';
import './App.css';

export const TodoItem = (props) => {
    const [checked, setChecked] = useState('unchecked');
    const [editing, setEditing] = useState(false);
    const [updatingDescription, setUpdatingDescription] = useState('');

    const { id, description, deadline, handleDelete, updateDescription } =
        props;

    const handleThisHere = () => {
        handleDelete(id);
    };

    const handleEdit = () => {
        setEditing(true);
        setUpdatingDescription(description);
    };

    const handleUpdateDescription = (e) => {
        const value = e.target.value;
        setUpdatingDescription(value);
    };

    //update function
    const updateDescByNewValue = () => {
        setEditing(false);
        updateDescription(id, updatingDescription);
    };

    const handleCheckBox = () => {
        setChecked((p) => {
            if (p === 'unchecked') {
                return 'checked';
            } else {
                return 'unchecked';
            }
        });
    };
    return (
        <div className='todo-item'>
            <label htmlFor="strike" className={checked}>
                {editing ? (
                    <input
                        type="text"
                        value={updatingDescription}
                        onChange={handleUpdateDescription}
                    />
                ) : (
                    description
                )}{' '}
                | {deadline}
            </label>

            <input id="strike" type="checkbox" onChange={handleCheckBox} />
            <button onClick={handleThisHere}>Delete</button>
            {editing ? (
                <button onClick={updateDescByNewValue}>Update</button>
            ) : (
                <button onClick={handleEdit}>Edit</button>
            )}
        </div>
    );
};
