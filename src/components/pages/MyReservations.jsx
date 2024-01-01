import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations, selectReservations } from '../../redux/reservations/reservationsSlice';
import { fetchBoats } from '../../redux/boats/boatsSlice';

function MyReservations() {
  const reservationData = useSelector(selectReservations);
  const reservations = reservationData.data;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
    dispatch(fetchBoats());
  }, [dispatch]);

  return (
    <section className="my-6 lg:my-16">
      <article className="flex flex-col gap-y-3 mx-auto">
        <h2 className="text-center text-2xl font-black lg:text-3xl uppercase">
          My reservations
        </h2>
        <p className="text-center">Here you can see all your reservations.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center pt-6">
          {reservations && reservations.length > 0 ? (
            reservations.map(({
              id, username, boat_name: boatName, date, city,
            }) => (
              <div key={id} className="flex flex-col gap-2 border border-slate-800 p-2 bg-slate-100 w-[300px] md:w-[80%] lg:col-span-1 lg:h-full">
                <span className="font-bold">
                  Reservation #
                  {id}
                </span>
                <h2 className="text-slate-600 font-bold">
                  Hello
                  {' '}
                  {username}
                  !
                </h2>
                <h2 className="text-slate-700 font-bold">
                  You reserved:
                  {' '}
                  {boatName}
                </h2>
                <p className="text-lg font-semibold">
                  Reservation details
                </p>
                <p>
                  Date:
                  {' '}
                  {date}
                </p>
                <p>
                  City:
                  {' '}
                  {city}
                </p>
              </div>
            ))
          ) : (
            <p className="text-lg font-semibold">
              You don&apos;t have any reservations yet.
            </p>

          )}
        </div>
      </article>
    </section>
  );
}

export default MyReservations;
