import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { logoutUser } from '../redux/usersession/usersessionsSlice';

const Logout = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    setIsOpen(false);
    navigate('/boats');
    Swal.fire({
      title: 'Logout Successful',
      text: 'You have successfully logged out',
      icon: 'success',
    });
  };

  return (
    <button type="button" onClick={handleLogout} className="uppercase">
      Logout
    </button>
  );
};

Logout.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Logout;
