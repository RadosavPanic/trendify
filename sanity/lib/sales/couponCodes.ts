export const COUPON_CODES = {
  EASTER25: "EASTER25",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
