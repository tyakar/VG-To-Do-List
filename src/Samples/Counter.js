import React, {useState} from 'react';
import {Button} from 'primereact/button';


export default function Counter () {
    const [count,setCount] = useState(0);

    return (
        <div className="text-center">
            <Button label="Click" icon="pi pi-plus" onClick={e => setCount(count + 1)}/>
            <div className="text-2xl text-900 mt-3">{count}</div>
        </div>
    );
}
