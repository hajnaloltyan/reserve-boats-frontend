import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    dispatch(fetchBoats());
  };

  return (
    <section className="h-full">
      <article className="flex flex-col items-center mx-auto max-w-xs lg:max-w-lg h-full">
        <h2 className="text-center text-2xl font-black my-4 lg:text-4xl lg:my-10 uppercase">
          Delete Boats
        </h2>
        <h4 className="text-center">
          Please click on Delete button to delete a boat
        </h4>
        <p className="text-gray-300 my-6">********************</p>
        <div className="flex flex-col gap-y-2 w-full">
          {currentItems
          && boats.map((boat) => (
            <div
              key={boat.id}
              className="flex justify-between items-center border border-black p-2"
            >
              <h1>{boat.name}</h1>
              {boat.user_id === user.id ? (
                <button
                  type="button"
                  onClick={() => handleClick(boat.id)}
                  className="bg-red-600 py-1 rounded w-16 text-center text-white font-semibold hover:bg-red-800"
                >
                  Delete
                </button>
              ) : (
                <button
                  type="button"
                  disabled
                  title="You can only delete your boats"
                  className="py-1 border border-slate-950 rounded w-16 text-center"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default DeleteBoat;
