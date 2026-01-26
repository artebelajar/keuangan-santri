import { db } from "../db/index.js";
import { transactions } from "../db/schema.js";
import { eq } from "drizzle-orm";

const updateTransactionRouter = async  (c) => {
    const { id } = c.req.param();
    const { transaction_date, description, nominal, status } = await c.req.json();

    try {
      const transaction = await db.query.transactions.findFirst({
        where: eq(transactions.id, Number(id)),
      });
        if (!transaction) {
          return c.json(
            { success: false, message: "Transaksi tidak ditemukan" },
            404,
          );
        }
        await db
          .update(transactions)
          .set({ transaction_date, description, nominal, status })
          .where(eq(transactions.id, Number(id)));
        return c.json({
          success: true,
          message: "Transaksi berhasil diperbarui",
        });
    } catch (error) {
      return c.json(
        { success: false, message: "Gagal memperbarui transaksi" },
        500,
      );
    }
  };

export default updateTransactionRouter;