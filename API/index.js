import { setCookie, getCookie } from "hono/cookie";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export function checkAuth(app){
    app.get("/api/me", (c) => {
      const token = getCookie(c, "token");
      if (!token) return c.json({ success: false, message: "Unauthorized" }, 401);
    
      try {
        const user = jwt.verify(token, SECRET);
        return c.json({ success: true, data: user });
      } catch (error) {
        return c.json({ success: false, message: "token tidak valid" }, 404);
      }
    });
}