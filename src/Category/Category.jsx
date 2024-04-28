import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/category`)
      .then((res) => res.json())
      .then((data) => {
        setAllCategory(data);
      });
  }, []);

  return (
    <div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 
        {allCategory.slice(0, 6).map((aCat) => (
          <div key={aCat._id}>
            <Link to={`/category/${aCat.catID}`}>
            <div className="card bg-base-100 w-96  shadow-xl border-2 border-slate-300 hover:border-secondary">
            <div className="h-[400px] p-4">
            <img className='w-full h-full object-fit hover:scale-105' src={aCat.image} alt="Item" />
            </div>
            <div className="flex justify-between w-full p-4">
                <div className='space-y-2'>
                    <h2 className="card-title hover:underline">Name: {aCat.item_name}</h2>
                    <div className="badge bg-purple-300 hover:bg-purple-600">Category: {aCat.category}</div>
                    <h2 className="card-title hover:underline"></h2>
                    <p>Price: <span className='font-bold'>$ {aCat.price}</span></p>
                    <p>Availability: {aCat.stockStatus}</p>
                    <p>Rating: {aCat.rating}</p>
                    {/* <Link to={`/item/${aCat._id}`}><button className="btn mt-2 bg-purple-600">View Details</button> */}
          
                </div>
            
            </div>
        </div>



            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;


