import React, {useState, useEffect} from 'react';
import { RadioButton } from 'primereact/radiobutton';

export default function ToDoItem({setFilter}) {

    const [status, setStatus] = useState('all');

    useEffect(() => {
        setFilter(status);
    }, [status]);

    return (
        <>
            <div className="field-radiobutton">
                <RadioButton inputId="todolist1" name="todolist" value="all" onChange={(e) => setStatus(e.value)} checked={status === 'all'} />
                <label htmlFor="todolist1">Hepsi</label>
            </div>
            <div className="field-radiobutton">
                <RadioButton inputId="todolist2" name="todolist" value="open" onChange={(e) => setStatus(e.value)} checked={status === 'open'} />
                <label htmlFor="todolist2">Açık</label>
            </div>
            <div className="field-radiobutton">
                <RadioButton inputId="todolist3" name="todolist" value="closed" onChange={(e) => setStatus(e.value)} checked={status === 'closed'} />
                <label htmlFor="todolist3">Kapalı</label>
            </div>
        </>
    );
}
