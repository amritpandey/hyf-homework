import { useEffect } from 'react';
export const FetchApiUsers = ({ setShifts }) => {
    useEffect(() => {
        const Api =
            'https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw';
        fetch(Api)
            .then((res) => res.json())
            .then((data) => {
                const fetchMap = data.map((data) => ({
                    name: data.name,
                    start: data.start.split('T')[1],
                    end: data.end.split('T')[1],
                }));
                setShifts(fetchMap);
            });
    }, [setShifts]);
};
