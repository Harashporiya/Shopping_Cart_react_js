import React, { useEffect, useState } from 'react';
import { Shop } from './component/Shop.jsx';
import './index.css';
import {Navbar} from './component/Navbar.jsx';
import {Footer} from './component/Footer.jsx';
import Loader from './component/Loader.jsx';
export function App() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true)
       
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const result = await response.json();
            console.log(result);
            setData(result);
            setLoader(false)
        };
        fetchData();
    }, []);

    return (
        
        <>
        {loader ? <Loader /> : null}
        <Navbar />
            <div id="cart1"  >

                {data.map((item) => (
                    <Shop
                    
                        key={item.id}
                        itemId={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                        ratingCount={item.rating.count}  
                        ratingRate={item.rating.rate} 
                    
                    />
                ))}
            </div>
            <Footer />
        </>
    );
}




