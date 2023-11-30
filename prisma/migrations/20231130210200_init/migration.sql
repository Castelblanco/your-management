/*
  Warnings:

  - A unique constraint covering the columns `[status_id]` on the table `Department` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Department_status_id_key" ON "Department"("status_id");
