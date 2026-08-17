import Navbar from './_component/Navbar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="text-white mt-35">{children}</div>
    </>
  );
}

export default layout