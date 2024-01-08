import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteBoat, fetchBoats, selectAllBoats } from '../../redux/boats/boatsSlice';
import { selectUser } from '../../redux/usersession/usersessionsSlice';

function DeleteBoat() {
  const dispatch = useDispatch();
  const boats = useSelector(selectAllBoats);
  const currentItems = Array.isArray(boats);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchBoats());
  }, [dispatch]);

  const handleClick = (id) => {
    dispatch(deleteBoat(id));
    Swal.fire({
      title: 'Boat Deleted',
      text: 'You have successfully deleted the boat',
      icon: 'success',
    });
    dispatch(fetchBoats());
  };

  return (
    <section className="h-full lg:pt-28">
      <article className="flex flex-col items-center mx-auto h-full">
        <h2 className="text-center text-2xl font-bold my-4 lg:text-3xl lg:my-10 uppercase">
          Delete Boats
        </h2>
        <h4 className="text-center">
          Please click on Delete button to delete a boat
        </h4>
        <p className="text-gray-300 my-6">********************</p>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
          {currentItems
          && boats.filter((boat) => boat.user_id === user.id).map(({ id, picture, name }) => (
            <div key={id} className="mx-auto col-span-1 p-12 lg:p-4 flex flex-col items-center">
              <img
                src={picture}
                alt={name}
                className="object-contain rounded-md w-full"
              />
              <h3 className="text-center text-xl font-bold my-4">
                {name}
              </h3>
              <button
                type="button"
                onClick={() => handleClick(id)}
                className="bg-red-600 rounded w-20 py-2 text-center text-white font-semibold hover:bg-red-800"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default DeleteBoat;
