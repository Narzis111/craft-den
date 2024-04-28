// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DetailCat = () => {
    const catItems = useLoaderData();
    const { catID } = useParams();
    console.log(catItems);

    return (
        <div>
        <h1>Category ID: {catID}</h1>
        <h1>Category length: {catItems.length}</h1>
  
       
        {/* {catItems.map((item) => (
            <div key={item._id}>
                <img src={item.image} alt="" />
                <h3>{item.item_name}</h3>
                <p>{item.category}</p>
            </div>
        ))} */}
    </div>
      
    );
};

export default DetailCat;
