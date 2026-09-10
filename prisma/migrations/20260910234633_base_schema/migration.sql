-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "derivation" INTEGER NOT NULL,
    "label" TEXT,
    "amount_sats" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "txid" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_derivation_key" ON "Transaction"("derivation");
