import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function convertAmountToMiliunits(amount) {
  return Math.round(amount * 1000);
}

export function convertAmountTFromMiliunits(amount) {
  return amount / 1000;
}

export function formatCurrency(value) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}
