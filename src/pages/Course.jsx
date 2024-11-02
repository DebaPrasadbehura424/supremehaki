import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import list from "../../public/list.json";
import Crads from '../componets/Crads';

import { useNavigate } from 'react-router-dom';

function Course() {
  const navigate = useNavigate();
  const [book, setBook] = useState([]);

  const filterdata = book.filter((data) => data.category === "paid");
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);

      } catch (error) {
        console.log(error);

      }
    }
    getBook();
  }, [])

  return (
    <>
      <div className="mb-5 text-center bg-blue-100 p-5 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-2 text-blue-800">Unlock Your Potential!</h1>
        <p className="text-lg text-gray-700">
          Explore our paid courses and take the next step towards achieving your goals. Learning is a journey, and we’re here to guide you every step of the way!
        </p>
        <button onClick={() => navigate(-1)}>Back</button> {/* Wrapped in a function */}
      </div>
      <div className='w-full grid md:grid-cols-4 gap-3'>
        {
          filterdata.map((data) => (
            <Crads data={data} key={data.id} />

          ))
        }
      </div>
    </>
  );
}

export default Course;
