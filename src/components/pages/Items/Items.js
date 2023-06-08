import React, {useState, useEffect} from 'react';
import './Items.css';
import { useLoaderData } from 'react-router-dom';
const Items = () => {
    // const itemsData = useLoaderData();
    // console.log(itemsData)

    const [items, setItems] = useState([]);
    useEffect(()=>{
         fetch('/data/items.json')
         .then(res => res.json())
         .then(data => setItems(data))
    },[])
    
    return (
        <div className="bg-gradient-to-tr to-purple-100 from-cyan-100">
            <div className=' bg-gradient-to-tr to-purple-200 from-cyan-200 w-5/6 mx-auto shadow-2xl'>
                <h1 className="text-3xl pt-14 font-bold text-center ">Items</h1>

                <div className='item-container'>
                    <div>
                        {/* left side */}
                        {
                            items.map(item => <div
                                key={item.category}
                                item={item}
                            ><button className='bg-purple-200 '>{item.name}</button></div>)
                        }
                    </div>

                    <div>2</div>
                </div>
            </div>
        </div>
    );
};

export default Items;