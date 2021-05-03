import React from 'react';
import { object } from 'prop-types';

import './InfoDetails.scss';

const propTypes = {
  representative: object
}

const defaultProps = {
  representative: {
    name: '',
    district: '',
    phone: '',
    office: '',
  }
}

const InfoDetails = ({ representative: { name, district, phone, office } }) => {
  const firstName = name.split(' ')[0]
  const lastName = name.split(' ')[1]

  return (
    <div className='details-wrapper'>
      <div className='details-body'>
        <h3>
          {firstName}
        </h3>

        <h3>
          {lastName}
        </h3>
        <h3>
          {district}
        </h3>
        <h3>
          {phone}
        </h3>
        <h3>
          {office}
        </h3>
      </div>
    </div>
  )
}

InfoDetails.propTypes = propTypes
InfoDetails.defaultProps = defaultProps

export default InfoDetails;