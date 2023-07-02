import { CookieOptions } from "express";

const getCookieName = (): string => process.env.JWT_COOKIE_NAME;
const getCookieOptions = (): CookieOptions => ({
  httpOnly: true,
  sameSite: "strict",
  maxAge: parseInt(process.env.JWT_EXPIRES_IN) * 1000,
  secure: process.env.NODE_ENV === "prod"
} as CookieOptions);

export const cookieUtils = {
  getCookieName,
  getCookieOptions
};
