import { db } from "../db/index.js";
import { transactions } from "../db/schema.js";
import { eq } from "drizzle-orm";

const getOneTransactionRouter = async (c) => {
    const { id } = c.req.param();

    try {
        const transaction = await db.query.transactions.findFirst({
            where: eq(transactions.id, id)
        });

        if (!transaction) {
            return c.json({ 
                success: false, 
                message: "Transaction not found" 
            }, 404);
        }

        // BUNGKUS DALAM success: true dan data: ...
        return c.json({
            success: true,
            data: transaction
        });
    } catch (error) {
        console.error("Error fetching transaction:", error);
        return c.json({ 
            success: false, 
            message: "Failed to fetch transaction" 
        }, 500);
    }
};

export default getOneTransactionRouter;