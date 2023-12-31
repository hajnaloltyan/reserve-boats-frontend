import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBoatDetails } from '../../redux/boatDetails/boatDetailsSlice';
import { selectUser } from '../../redux/usersession/usersessionsSlice';

const BoatDetails = () => {
  const boatDetailsState = useSelector((state) => state.boatDetails);
  const dispatch = useDispatch();
  const idBoat = useParams();
  const user = useSelector(selectUser);

  const {
    name, picture, description, color, rent_price: rentPrice, price,
  } = boatDetailsState.boatDetails;

  useEffect(() => {
    dispatch(getBoatDetails(idBoat.id));
  }, [dispatch, idBoat.id]);

  return (
    <section className="flex flex-col justify-between lg:h-screen lg:py-6">
      <div className="flex p-5 justify-center lg:justify-end">
        <h2 className="text-3xl my-4 font-bold text-black uppercase">
          {name}
        </h2>
      </div>
      <div className="md:w-[70%] md:mx-auto lg:flex lg:w-[98%]">
        <div className="w-full p-6 flex justify-center">
          <img
            className="flex justify-center object-contain rounded-lg w-[80%]"
            src={picture}
            alt="boat"
          />
        </div>
        <div className="p-6 bg-white rounded-lg">
          {/* Description */}
          <div className="justify-between items-center mb-4 bg-gray-100 p-4 rounded">
            <h3 className="text-lg text-center font-bold text-gray-600">
              Description
            </h3>
            <p className="mt-2">{description}</p>
          </div>

          {/* Color */}
          <div className="flex justify-between items-center mb-4 bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-bold text-gray-600">
              Colour
            </h3>
            <p>{color}</p>
          </div>

          {/* Rent per day */}
          <div className="flex justify-between items-center mb-4 bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-bold text-gray-600">
              Rent per day
            </h3>
            <p>
              $
              {Math.round(rentPrice)}
            </p>
          </div>

          {/* Full Purchase Price */}
          <div className="flex justify-between items-center mb-4 bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-bold text-gray-600">
              Full Purchase Price
            </h3>
            <p>
              $
              {Math.round(price)}
            </p>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-between mb-10">
        <a
          type="button"
          href="/boats"
          className="font-bold w-20 text-2xl bg-lime-500 pl-10 pr-4 py-3 rounded-r-3xl text-white"
        >
          {'<'}
        </a>

        {/* Reserve Now button */}
        {user && (
          <a
            href="/reserve"
            className="font-bold px-6 py-3 text-2xl bg-lime-500 rounded-l-3xl text-white"
          >
            <span>
              Reserve
              {' '}
              {'>'}
            </span>
          </a>
        )}
      </div>
    </section>
  );
};

export default BoatDetails;
