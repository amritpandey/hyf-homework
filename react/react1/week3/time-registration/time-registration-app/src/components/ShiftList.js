import React, { useState } from 'react';
import { FancyBorder } from './FancyBorder';
import { ShiftListItem } from './ShiftListItem';

const employee = [
    { id: 1, name: 'John Lenon', start: '14:14', end: '18:18' },
    { id: 2, name: 'Paul McCartney', start: '14:17', end: '18:10' },
];

export const ShiftList = () => {
    const [name, setName] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [shifts, setShifts] = useState(employee);

    //couldn't able to implement because it has date and time both
    /*  useEffect(()=>{
      fetch("https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw")
       .then(res=>res.json())
       .then(data=>setShifts(data))
       
     },[]) */

    const saveShiftList = () => {
        const newId = new Date().getTime();
        const addedShift = [...shifts, { newId, name, start, end }];
        setShifts(addedShift);
    };

    const display = shifts.map((shift) => (
        <ShiftListItem
            empName={shift.name}
            start={shift.start}
            end={shift.end}
            key={shift.newId}
        />
    ));

    const searchEmployee = (e) => {
        const value = e.target.value.toLowerCase();
        const searchName = shifts.filter((shift) =>
            shift.name.toLowerCase().includes(value),
        );
        setShifts(searchName);
    };

    return (
        <div>
            <FancyBorder>
                <label>
                    Employee Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Start time{' '}
                    <input
                        type="time"
                        name="start"
                        value={start}
                        onChange={(e) => setStart(e.target.value)}
                    />
                </label>
                <label>
                    End time
                    <input
                        type="time"
                        name="end"
                        value={end}
                        onChange={(e) => setEnd(e.target.value)}
                    />
                </label>
                <button type="submit" onClick={saveShiftList}>
                    Save Shift
                </button>
            </FancyBorder>

            <FancyBorder>
                <h2>Shift Overview</h2>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for employee..."
                    onChange={searchEmployee}
                />
                {display}
            </FancyBorder>
        </div>
    );
};
