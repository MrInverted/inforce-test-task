import React from "react";
import Header from "./Header";

interface IProps {
  children: React.ReactNode
}



function Layout({ children }: IProps) {
  return (
    <div className='w-full h-full max-w-screen-md mx-auto p-5'>
      <Header />
      {children}
    </div>
  )
}

export default Layout