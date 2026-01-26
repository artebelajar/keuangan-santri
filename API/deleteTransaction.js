import { db } from "../db/index.js";
import { transactions } from "../db/schema.js";
import { eq } from "drizzle-orm";

const deleteTransaction = async (c) => {
  const { id } = c.req.param();
  const user = c.get("user");

  try {
    const transaction = await db.query.transactions.findFirst({
      where: eq(transactions.id, Number(id)),
    });
    if (!transaction || transaction.userId !== user.id) {
      return c.json(
        { success: false, message: "Transaksi tidak ditemukan" },
        404,
      );
    }
    await db.delete(transactions).where(eq(transactions.id, Number(id)));
    return c.json(
      { success: true, message: "Transaksi berhasil dihapus" },
      200,
    );
  } catch (error) {
    console.error("Error deleting transaction:", error);
    return c.json(
      { success: false, message: "Gagal menghapus transaksi" },
      500,
    );
  }
};

export default deleteTransaction;
