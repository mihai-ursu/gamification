import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]): string => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return twMerge(clsx(inputs));
};
