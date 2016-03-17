import React from 'react';

export default function({src, ...rest}) {
  return <img src={src} {...rest}  />
};
