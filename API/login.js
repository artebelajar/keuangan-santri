import "dotenv/config"
import bcrypt from "bcryptjs";
import { users } from "../db/schema.js";
import { eq } from "drizzle-orm";
import { db } from "../db/index.js";
import jwt from "jsonwebtoken";
import { setCookie } from "hono/cookie";

const SECRET = process.env.JWT_SECRET;

export function loginRouter(app){
    app.post("/api/login", async (c) => {
      const { username, password } = await c.req.json();
      const user = await db.query.users.findFirst({
        where: eq(users.username, username),
      });
    
      if (!user)
        return c.json({ success: false, message: "username atau password salah" });
    
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) return c.json({success: false, message: 'Username atau password salah' }, 401)
      const token = jwt.sign({ id: user.id, username: user.username }, SECRET, {
        expiresIn: "1d",
      });
      setCookie(c, "token", token, {
        httpOnly: true,
        sameSite: "Lax",
        maxAge: 86400,
      });
    
      return c.json({ success: true, message: "login berhasil" });
    });
}