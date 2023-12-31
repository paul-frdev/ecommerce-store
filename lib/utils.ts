import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formattedPrice = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const calculateDiscountedPrice = (
  price: number,
  discount: number
): number => {
  const discountAmount = (price - discount) / 100;
  return price - discountAmount;
};
