import React, { useState, useRef, useEffect } from 'react';
// import "./test.css";

export default function Test() {
  const [isSidebar, setSidebar] = useState(false);

  // const node = useRef()

  // const trackSidebar = (e) => {

  //   setSidebar(false)
  //   // outside scope click
  // }

  // useEffect(() => {
  //   document.addEventListener('mousedown', trackSidebar)
  //   return () => {
  //     document.removeEventListener('mousedown', trackSidebar)
  //   }
  // }, [])

  return (
    <>
      <div>      
          <span
            // ref={node}
            onClick={() => 
              setSidebar(!isSidebar)
            }
          >
        open
          </span>
  

        <div
          // ref={node}
          className="sidebar-block"
          style={{ right: isSidebar ? '0' : '-260px' }}
        >
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Portfolio</a>
          <a href="#">Profile</a>
          <a href="#">Sign out</a>
        </div>
      </div>
    </>
  )
}