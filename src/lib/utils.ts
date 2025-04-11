import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const timeAgo = (timestamp: Date) => {
  const now = new Date();

  const diffInSeconds = Math.floor(
    (now.getTime() - new Date(timestamp).getTime()) / 1000
  );

  const intervals = [
    { label: "year", value: 60 * 60 * 24 * 365 },
    { label: "month", value: 60 * 60 * 24 * 30 },
    { label: "days", value: 60 * 60 * 24 },
    { label: "hours", value: 60 * 60 },
    { label: "mins", value: 60 },
    { label: "sec", value: 1 },
  ];

  for (let i=0; i < intervals.length; i++){
    const interval =intervals[i]
    const count = Math.floor(diffInSeconds/interval.value)

    if (count>=1) {
      return `${count} ${interval.label} ago`
    }
  }
  return 'just now'
};


export function formatPriceToString(price: number): string {
  if (price >= 10000000) {
    return `${(price / 10000000).toFixed(2).replace(/\.00$/, '')}Cr`;
  } else if (price >= 100000) {
    return `${(price / 100000).toFixed(2).replace(/\.00$/, '')}L`;
  } else {
    return price.toLocaleString('en-IN'); // fallback, like 95000
  }
}

export function parsePriceToNumber(priceStr: string): number {
  const trimmed = priceStr.trim().toUpperCase();

  if (trimmed.endsWith('CR')) {
    const value = parseFloat(trimmed.replace('CR', ''));
    return value * 10000000; // 1 Cr = 1 crore = 1,00,00,000
  }

  if (trimmed.endsWith('L')) {
    const value = parseFloat(trimmed.replace('L', ''));
    return value * 100000; // 1 Lakh = 1,00,000
  }

  // fallback to number if already in digits
  const value = parseFloat(trimmed.replace(/[^0-9.]/g, ''));
  return isNaN(value) ? 0 : value;
}