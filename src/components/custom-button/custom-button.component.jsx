import React from 'react'

const CustomButton = ({ children, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)

export default CustomButton
