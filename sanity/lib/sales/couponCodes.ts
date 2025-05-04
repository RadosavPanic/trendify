export const COUPON_CODES = {
  EASTER25: "EASTER25",
  SPRING2025: "SPRING2025",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
