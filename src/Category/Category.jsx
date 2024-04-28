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
    <div className="border-2 border-blue-500">
      <h1>Categories</h1>
      <div>
        {allCategory.map((aCat) => (
          <div key={aCat._id}>
            <Link to={`/category/${aCat.catID}`}>{aCat.catID}{aCat.item_name}: {aCat.category}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;




// import { useEffect, useState } from "react";
// import { Link, useLoaderData } from "react-router-dom";

// const Category = () => {
//     const [allCategory, setAllCategory] = useState([]);
   
  
//     useEffect(() => {
//         fetch(`http://localhost:5000/category`)
//         .then((res) => res.json())
//         .then((data) => {
//             setAllCategory(data);
//         });
//     }, []);


// console.log(allCategory);

//   return (
//     <div className="border-2 border-blue-500">
//       <h1>Categories</h1>
     
//      <div>
        
//         {allCategory.map((aCat) => (
          
//           <div key={aCat._id}><Link to={`/category/${aCat._id}`}>{aCat._id} : {aCat.item_name} : 
        
//           </Link>
//           </div>
         
//         ))}
     
//     </div>
//     </div>
//   );
// };

// export default Category;
