import React from 'react'
import { IoMdClose } from "react-icons/io";

interface IProps {
  children: React.ReactNode;
  onModalClose: () => void;
  width?: number;
}

function Modal({ children, onModalClose }: IProps) {
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-black/70'>
      <div className="py-10 px-5 max-w-screen-sm mx-auto h-full" >
        <div className="flex flex-col justify-center h-full ">
          <div className="bg-white px-5 py-10 relative overflow-y-auto" ref={contentRef}>
            {children}

            <div className='absolute top-3 right-3 cursor-pointer' onClick={onModalClose}>
              <IoMdClose className='hover:opacity-60' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal 