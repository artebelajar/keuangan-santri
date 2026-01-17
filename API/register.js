import bcrypt from "bcryptjs";
import { users } from "../db/schema.js";
import { db } from "../db/index.js";

export function registerRouter (app) {
    app.post("/api/register", async (c) => {
      try {
        const { username, password } = await c.req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await db
          .insert(users)
          .values({ username, password: hashedPassword })
          .returning({ id: users.id, username: users.username });
        return c.json({ success: true, data: newUser[0] }, 200);
      } catch (error) {
        return c.json({ success: false, message : "register gagal" }, 400);
      }
    });
}