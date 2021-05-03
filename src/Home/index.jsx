import React, { useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import './HomePage.scss';

import Search from '../Components/Search';
import ListDetails from '../Components/ListDetails/index';
import InfoDetails from '../Components/InfoDetails/Index';

import findRepresentative from '../Assets/api';

const toastList = new Set();
const MAX_TOAST = 3;

const notify = () => {
  let toastIdToDismiss = null;
  if (toastList.size === MAX_TOAST) {
    const arr = Array.from(toastList);
    const toastId = arr[0];
    if (toastId) {
      toastIdToDismiss = toastId;
    }
  }

  const id = toast.warn('No search results found try again...', {
    onClose: () => toastList.delete(id),
    onOpen: () => {
      if (toastIdToDismiss !== null) {
        setTimeout(() => {
          toast.dismiss(toastIdToDismiss);
        }, 1000);
      }
    }
  });
  toastList.add(id);
}

const HomePage = () => {

  const [displayPosition, setDisplayPosition] = useState('')
  const [representative, setRepresentative] = useState()
  const [detailedRepresentative, setDetailedRepresentative] = useState()
  const [showDetailInfo, setShowDetailInfo] = useState(false)

  const onSubmit = async (type, state) => {
    try {
      const { data: { results } } = await findRepresentative(type, state)
      if (!results) notify()

      setRepresentative(results)
      setShowDetailInfo(false)
      setDisplayPosition(type)
    }
    catch (error) {
      console.log(error)
    }
  }

  const representativeInfo = (rep) => {
    setDetailedRepresentative(rep)
    setShowDetailInfo(true)
  }

  return (
    <div>
      <h1 className="home-title">Who's My Representative?</h1>
      <div>
        <Search
          onSubmit={onSubmit}
        />
      </div>
      <div className='component-wrapper'>
        {representative &&
          <div className='list-wrapper'>
            <span className='list-title'>
              <h3>List /</h3>
              <h3 className='list-position-type'>{displayPosition} </h3>
            </span>
            <ListDetails
              representatives={representative}
              representativeInfo={representativeInfo}
            />
          </div>
        }
        {showDetailInfo &&
          <div className='details-component-wrapper'>
            <h3>Info</h3>
            <InfoDetails
              representative={detailedRepresentative}
            />
          </div>
        }
      </div>
    </div>
  )
}

export default HomePage;