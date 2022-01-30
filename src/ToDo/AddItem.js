import { Button } from 'primereact/button';
import React, {useState} from "react";
import {InputText} from "primereact/inputtext";

export default function AddItem({addToDo}) {

    const [task, setTask] = useState("");

    const addItemfunc =  () =>{
        addToDo(task);
    };

    return(
        <div className="col-12 md:col-4">
            <div className="p-inputgroup">

                <InputText
                    name="task-title"
                    type="text"
                    placeholder="Yapılacak İş Ekle"
                    value={task}
                    onChange={(evt) => setTask(evt.target.value)}
                />
                <Button icon="pi pi-check" className="p-button-success" onClick={addItemfunc} />
            </div>
        </div>
    );


}