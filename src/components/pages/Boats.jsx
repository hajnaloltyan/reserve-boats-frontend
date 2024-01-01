import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaGooglePlus } from 'react-icons/fa';
import {
  fetchBoats,
  selectAllBoats,
} from '../../redux/boats/boatsSlice';

const Boats = () => {
  const dispatch = useDispatch();
  const boats = useSelector(selectAllBoats);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    dispatch(fetchBoats());
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(boats)
    ? [...boats].reverse().slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="my-8 flex flex-col items-center lg:my-[6%]">
      <h2 className="text-center text-2xl font-black my-4 lg:text-3xl lg:my-10 uppercase">
        All Boat Models
      </h2>

      <h4 className="text-center">Please select one to Reserve</h4>

      <p className="text-gray-300 my-6">********************</p>

      {boats.length === 0 && (
        <>
          <h1 className="font-semibold text-lg lg:text-2xl text-center">
            There are no boats yet. Please create one.
          </h1>
        </>
      )}

      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-11">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          type="button"
          className="font-bold text-2xl bg-lime-500 pl-10 pr-10 py-2 rounded-r-3xl text-white hidden lg:block lg:h-14 lg:self-center lg:col-span-1"
        >
          {'<'}
        </button>

        {boats.length > 0
          && currentItems.map(({
            id, name, picture, description,
          }) => (
            <div key={id} className="max-w-md mx-auto lg:col-span-3 p-12 lg:p-4">
              <Link to={`/boats/${id}`} className="block">
                <img
                  src={picture}
                  alt={name}
                  className="object-contain rounded-md w-full"
                />
              </Link>
              <h3 className="text-center text-xl font-bold my-4">
                {name}
              </h3>
              <p className="text-gray-300 mb-4 text-center">
                ********************
              </p>
              <p className="text-center mb-6">{description}</p>
              <div className="flex justify-center gap-10">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://plus.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Plus"
                >
                  <FaGooglePlus />
                </a>
              </div>
            </div>
          ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(boats.length / itemsPerPage)}
          type="button"
          className="font-bold text-2xl bg-lime-500 pr-10 pl-4 py-2 rounded-l-3xl text-white hidden lg:block lg:h-14 lg:self-center lg:col-start-11"
        >
          {'>'}
        </button>
        <div className="flex justify-between lg:hidden">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            type="button"
            className="font-bold text-2xl bg-lime-500 pl-10 pr-4 py-2 rounded-r-3xl text-white"
          >
            {'<'}
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(boats.length / itemsPerPage)}
            type="button"
            className="font-bold text-2xl bg-lime-500 pr-10 pl-4 py-2 rounded-l-3xl text-white"
          >
            {'>'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Boats;
