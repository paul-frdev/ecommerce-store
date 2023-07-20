import { cn } from '@/lib/utils';
import React, { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn(`mx-auto max-w-7xl`, className)}>{children}</div>;
};
