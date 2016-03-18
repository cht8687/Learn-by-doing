import React from 'react';

export default function({clsn, ...rest}) {
  return <button className={clsn} {...rest} />
};
