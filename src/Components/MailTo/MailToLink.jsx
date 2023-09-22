import React from 'react';
import { Link } from 'react-router-dom';

const MailToLink = ({mailto, label}) => {

  return (
    <Link to='#'
    onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
    }}
    >
    {label}
    </Link>
  )
}

export default MailToLink