export const ShiftListItem = (props) => {
    const { empName, start, end } = props;
    
    const endInMinutes = end.split(':');
    const totalEndMinutes =
        Number(endInMinutes[0]) * 60 + Number(endInMinutes[1]);
    const startInMinutes = start.split(':');
    const totalStartMinutes =
        Number(startInMinutes[0]) * 60 + Number(startInMinutes[1]);
    const workingMinutes = totalEndMinutes - totalStartMinutes;
    const hours = Math.floor(workingMinutes / 60);
    const minutes = workingMinutes % 60;

    const total = hours + ' hours ' + minutes + ' mins';

    return (
        <>
            <ul className="display-emp-info">
                <li>{empName.toUpperCase()}</li>
                <li>{start}</li>
                <li>{end}</li>
                <li>{total}</li>
                <li>{(150 * workingMinutes) / 60} kr</li>
            </ul>
        </>
    );
};
