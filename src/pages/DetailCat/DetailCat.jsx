
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';

function DetailCat() {
  const { id } = useParams();
  console.log(id);
  const [categoryData, setCategoryData] = useState([]);
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    fetch(`https://y-ten-woad.vercel.app/detailcat/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.category);
        console.log(data.item);
        setCategoryData(data.category);
        setItemData(data.item);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div>
      <Helmet>
        <title>CraftDEN | Category</title>
      </Helmet>

      <div>
        
        {categoryData.map(category => (
          <div key={category._id} className='mb-4 border-2 border-slate-300 flex'>
            
            <div className='h-[300px] w-[500px] p-4'>
            <img className='h-full w-full object-cover' src={category.image} alt={category.item_name} />
              </div>
            <div className='ml-6 p-5'>
              <p className='text-2xl font-bold'>Name: {category.item_name}</p>
              <p className='font-bold text-xl'>Products of: Category</p>
            <p className='text-md font-semibold'>Category: {category.subcategory}</p>
            <p className='text-xl'>Price: $ {category.price}</p>
            <p className='text-xl'>Rating: {category.rating}</p>
            <p className='text-xl'>Details: {category.shortDescription}</p>
            <p className='text-xl'>Processing Time: {category.processing_time} days</p>
            <Link to={`/item/${category._id}`}><button className='mt-3 bg-purple-600 px-4 py-3 text-white rounded-full'>View Detail</button></Link> 
            </div>
          </div>
        ))}
      </div>
    

     
      <div>
        
        {itemData.map(item => (
          <div key={item._id} className='mb-4 border-2 border-slate-300 flex'>
            <div className='h-[300px] w-[500px] p-4'>
            <img className='h-full w-full object-cover' src={item.image} alt={item.item_name} />
            </div>
            <div className='ml-6 p-5'>
            <p className='font-bold text-2xl'>Name: {item.item_name}</p>
            <p className='font-bold text-xl'>Products of: Item</p>
            <p className='text-md font-semibold'>Category: {item.subcategory}</p>
            <p className='text-xl'>Price: $ {item.price}</p>
            <p className='text-xl'>Rating: {item.rating}</p>
            <p className='text-xl'>Details: {item.shortDescription}</p>
            <p className='text-xl'>Processing Time: {item.processing_time} days</p>
          <Link to={`/item/${item._id}`}> <button className='mt-3 bg-purple-600 text-white px-4 py-3 rounded-full'>View Detail</button></Link>
          </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default DetailCat;

