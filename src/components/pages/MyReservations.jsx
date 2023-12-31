import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../../redux/reservations/reservationsSlice';
import { selectUser } from '../../redux/usersession/usersessionsSlice';
import { fetchBoats, selectAllBoats } from '../../redux/boats/boatsSlice';

function MyReservations() {
  const { reservations } = useSelector((state) => state.reservations);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const userReservations = Array.isArray(reservations)
    ? reservations.filter((e) => e.username === user?.name)
    : [];
  const boats = useSelector(selectAllBoats);

  useEffect(() => {
    dispatch(getReservations());
    dispatch(fetchBoats());
  }, [dispatch]);

  return (
    <section className="my-6">
      <article className="flex flex-col gap-y-3 mx-auto max-w-sm lg:max-w-4xl">
        <h2 className="text-center text-2xl font-black lg:text-3xl uppercase">
          My reservations
        </h2>
        <p className="text-center">Here you can see all your reservations.</p>
        <div className="flex flex-wrap gap-x-2 gap-y-2 my-4 justify-center items-center">
          {userReservations.map((re) => (
            <div key={re.id} className="flex flex-col gap-2 border border-slate-800 p-2 bg-slate-100">
              <span className="font-bold">
                Reservation #
                {re.id}
              </span>
              <h2 className="text-slate-600 font-bold">
                Hello
                {' '}
                {re.username}
                !
                You reserved
                {' '}
                {boats.find(({ id }) => id === re.boat_id).name}
                .
              </h2>
              <p className="text-lg font-semibold">
                Reservation details
              </p>
              <p>
                Date:
                {' '}
                {re.date}
                .
              </p>
              <p>
                City:
                {' '}
                {re.city}
                .
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default MyReservations;
