import React, { useEffect, useState }  from 'react';
import {Link, useLoaderData} from 'react-router-dom';
const ProductItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() =>{
       fetch('/data/items.json')
       .then(res => res.json())
       .then(data =>setItems(data))
    },[])
   // const itemsData = useLoaderData();
    return (
        <div>
            {
           items.map(item =><div><Link to={`/items/${item.id}`} ><button className='bg-gradient-to-tr to-purple-200 from-cyan-200 w-40 h-10 rounded-lg shadow-2xl my-4 ml-10'>{item.name}</button></Link></div>)
         }
        </div>
    );
};

export default ProductItems;