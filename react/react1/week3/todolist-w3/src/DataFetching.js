import { useEffect } from 'react';

const API_URL =
    'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw';
const DataFetching = (props) => {
    const { setData } = props;
    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((result) => {
              if(setData){
                const value = result.map((info) => ({
                    id: info.id,
                    description: info.description,
                    date: info.deadline,
                }));
                setData((prevTodo) => {
                    return [...prevTodo, ...value];
                });
              }
            });
    }, [setData]);
    return null;
};
// in todolist <DataFetching setData={setTodoData}/>
export default DataFetching;
