import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { createBoat } from '../../redux/boats/boatsSlice';
import { selectUser } from '../../redux/usersession/usersessionsSlice';

const AddBoat = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const [boatData, setBoatData] = useState({
    name: '',
    description: '',
    price: 0,
    color: '',
    rent_price: 0,
    user_id: user?.id,
    picture: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoatData({ ...boatData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBoat(boatData));
    setBoatData({
      name: '',
      description: '',
      price: 0,
      color: '',
      rent_price: 0,
      user_id: user.id,
      picture: '',
    });

    Swal.fire({
      icon: 'success',
      title: 'Boat Added Successfully',
      text: 'Your boat has been successfully created.',
    });
    navigate('/boats');
  };

  return (
    <div className="max-w-2xl mx-auto my-6 px-6 lg:pt-28 text-center">
      <h2 className="text-2xl font-bold py-10 flex justify-center">
        Add Boat
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="addboat-label"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={boatData.name}
            onChange={handleChange}
            className="addboat-form"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="addboat-label"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={boatData.description}
            onChange={handleChange}
            className="addboat-form"
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="addboat-label"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={boatData.price}
            onChange={handleChange}
            className="addboat-form"
          />
        </div>
        <div>
          <label
            htmlFor="color"
            className="addboat-label"
          >
            Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            value={boatData.color}
            onChange={handleChange}
            className="addboat-form"
          />
        </div>
        <div>
          <label
            htmlFor="rent_price"
            className="addboat-label"
          >
            Rent Price
          </label>
          <input
            type="number"
            id="rent_price"
            name="rent_price"
            value={boatData.rent_price}
            onChange={handleChange}
            className="addboat-form"
          />
        </div>
        <div>
          <label
            htmlFor="input-picture"
            className="addboat-label"
          >
            Picture
          </label>
          <input
            id="picture"
            type="text"
            name="picture"
            value={boatData.picture}
            onChange={handleChange}
            className="addboat-form"
          />
        </div>
        <div className="flex justify-center pt-8">
          <button
            type="submit"
            className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Add Boat
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBoat;
