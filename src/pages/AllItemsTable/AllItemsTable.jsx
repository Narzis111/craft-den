import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllItemsTable = () => {

    const loadedItems = useLoaderData();
    const [item, setItem] = useState(loadedItems);

    console.log(item);

    return (
        <div className="card card-side bg-base-100">
            <h1 className="">loader: {loadedItems.length}</h1>
            <div className="overflow-x-auto mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name of item</th>
                            <th>Subcategory</th>
                            <th>Price</th>
                            <th>Action Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item.map((i, index) => <tr key={i._id}>
                                <th>{index + 1}</th>
                                <td>{i.item_name}</td>
                                <td>{i.subcategory}</td>
                                <td>{i.price}</td>
                                <td>
                                    <Link to={`/item/${i._id}`}><button className="btn">View Details</button>
                                    </Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllItemsTable;
