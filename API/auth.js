import { getCookie } from "hono/cookie";
import jwt from "jsonwebtoken";

export const authMiddleware = async (c, next) => {
  const token = getCookie(c, "token");

  if (!token) {
    return c.json(
      { success: false, message: "Unauthorized" },
      401
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (typeof decoded !== "object" || !decoded.id) {
      return c.json(
        { success: false, message: "Invalid token" },
        401
      );
    }

    c.set("user", {
      id: decoded.id,
      email: decoded.email,
    });

    await next();
  } catch (error) {
    console.error("Auth error:", error.message);
    return c.json(
      { success: false, message: "Token invalid or expired" },
      401
    );
  }
};
