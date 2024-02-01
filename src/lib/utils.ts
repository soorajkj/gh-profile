import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...cn: ClassValue[]) => {
  return twMerge(clsx(cn));
};
