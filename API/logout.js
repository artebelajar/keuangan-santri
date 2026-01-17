import { setCookie } from "hono/cookie";

export function logoutRouter(app) {
    app.post("/api/logout", (c) => {
      setCookie(c, "token", "", { maxAge: -1 });
      return c.json({ success: true, message: "logout berhasil" });
    });
}