import ProductTable from "./Components/ProductTable";
import { useState ,useEffect } from "react";

const API = "https://api.postman.com/collections/24582109-37d97559-22b0-42e0-b592-7fd8b90b8e01?access_key=PMAT-01GXAEX88FNRZN45AWACQ2V20F";


const App = () => {
    const [products, setProducts] = useState([]);
    const fetchUsers = async(url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setProducts(data);
            }
            console.log(data);
        }catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {fetchUsers(API)}, [])
    return <>
        <table>
            <thead>
                <tr>
                <th>Product Title</th>
                <th>Product Price</th>
                <th>Product Description</th>
                <th>Product Category</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <ProductTable products={products} />
            </tbody>
        </table>
    </>
    
     
};
export default App;
