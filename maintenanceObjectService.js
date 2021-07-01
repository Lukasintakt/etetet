import fetch from "unfetch";

const maintenanceObjectService = {
    getAllMaintenanceObjects: () => {
        fetch("api/v1/maintenance")
            .then(res => {
                if(res.ok){
                    return res;
                }

                const err = new Error(res.statusText);
                err.response = res;
                return Promise.reject(err);
            })
    }
}

export default maintenanceObjectService;