'use client'

import { useState } from 'react';

interface PopoverProps {
  content: React.ReactNode;
  children: React.ReactElement
}


export const DepartmentsPopover: React.FC<PopoverProps> = ({ content, children }) => {
  const [showPopover, setShowPopover] = useState(false);

  const handlePopoverHover = () => {
    setShowPopover(true);
  };

  const handlePopoverLeave = () => {
    setShowPopover(false);
  };

  return (
    <div
      onMouseEnter={handlePopoverHover}
      onMouseLeave={handlePopoverLeave}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      {showPopover && (
        <div
          style={{
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            zIndex: 9999,
          }}
          className='max-w-[1150px] w-full p-2 border-[2px] rounded absolute min-h-[200px] h-full'
        >
          {content}
        </div>
      )}
    </div>
  );
};