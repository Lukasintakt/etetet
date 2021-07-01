import React, {useEffect} from 'react';
import './App.css';
import { Button } from 'antd';
import maintenanceObjectService from "./api/maintenanceObjectService";

const App = () => {

    maintenanceObjectService.getAllMaintenanceObjects().then(console.log);
    return(
        <>
            <Button type={"primary"}>Hallo Welt</Button>
        </>
    );
}

export default App;