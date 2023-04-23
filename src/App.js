import { useEffect } from "react";

const API = "https://api.postman.com/collections/24582109-37d97559-22b0-42e0-b592-7fd8b90b8e01?access_key=PMAT-01GXAEX88FNRZN45AWACQ2V20F";


const App = () => {
    
    const fetchUsers = async(url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        }catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {fetchUsers(API)}, [])
    return <>
        <h1>React table</h1>
    </>
    
     
};
export default App;
