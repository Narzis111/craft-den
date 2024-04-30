
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function DetailCat() {
  const { id } = useParams();
  console.log(id);
  const [categoryData, setCategoryData] = useState([]);
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/detailcat/${id}`)
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

      <div>
        <h2 className='text-5xl font-bold'>Category:</h2>
        {categoryData.map(category => (
          <div key={category._id}>
            <img src={category.image} alt={category.item_name} />
            <p>Name: {category.item_name}</p>
            <p className='text-xl font-semibold'>Category: {category.subcategory}</p>
            <Link to={`/item/${id}`}><button>View Detail</button></Link> 
          </div>
        ))}
      </div>

     
      <div>
        <h2 className='text-5xl font-bold'>Items</h2>
        {itemData.map(item => (
          <div key={item._id}>
            <img src={item.image} alt={item.item_name} />
            <p>Name: {item.item_name}</p>
            <p className='text-xl font-semibold'>Category: {item.subcategory}</p>
          <Link to={`/item/${id}`}> <button>View Detail</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailCat;

