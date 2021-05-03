import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import HomePage from '../index'

it('should match snapshot', () => {
  const { asFragment } = render(
    <HomePage />
  )
  expect(asFragment()).toMatchSnapshot()
})