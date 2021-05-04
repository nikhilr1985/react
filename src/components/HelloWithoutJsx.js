import React from 'react';

const HelloWithoutJsx = () => {
  return (
    React.createElement("div", null, React.createElement('h1', null, "Hello Nikhil Without JSX"))
  )
}
export default HelloWithoutJsx