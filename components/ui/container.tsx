import React, { FC } from 'react'


interface ContainerProps {
  children: React.ReactNode;
}
export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className='mx-auto max-w-7xl'>
      {children}
    </div>
  )
}
