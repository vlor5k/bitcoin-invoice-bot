/*
  Warnings:

  - Added the required column `address` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "derivation" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "label" TEXT,
    "amount_sats" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "txid" TEXT
);
INSERT INTO "new_Transaction" ("amount_sats", "created", "derivation", "id", "label", "status", "txid") SELECT "amount_sats", "created", "derivation", "id", "label", "status", "txid" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
CREATE UNIQUE INDEX "Transaction_derivation_key" ON "Transaction"("derivation");
CREATE UNIQUE INDEX "Transaction_address_key" ON "Transaction"("address");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
