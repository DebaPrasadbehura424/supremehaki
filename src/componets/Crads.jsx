import React from 'react'

function Crads({ data }) {
    return (

        <div className="card bg-base-100 w-80  shadow-xl  px-5 border-2 border-white  " >
            <figure>
                <img
                    src={data.image}
                    alt={data.image}   className='mt-3 rounded-lg'/>
            </figure>
            <div className="card-body " >
                <h2 className="card-title">
                    {data.name}
                    <div className="badge badge-secondary">{data.category}</div>
                </h2>
                <p>{data.title}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{data.price}</div>
                    <div className="badge badge-outline">Buy now</div>
                </div>
            </div>
        </div>
    );
  
}

export default Crads