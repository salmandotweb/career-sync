import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return date.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });
}

export function formatDateAsDate(date: Date) {
  return new Date(formatDate(date));
}
