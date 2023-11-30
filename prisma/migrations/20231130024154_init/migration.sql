-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "document_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "point_sale_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Point_Sales" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "status_id" TEXT NOT NULL,
    "city_code_id" TEXT NOT NULL,

    CONSTRAINT "Point_Sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status_id" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Citys" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Citys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Status_Code" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Status_Code_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Point_Sales_id_key" ON "Point_Sales"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Department_id_key" ON "Department"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Citys_id_key" ON "Citys"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Status_Code_id_key" ON "Status_Code"("id");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_point_sale_id_fkey" FOREIGN KEY ("point_sale_id") REFERENCES "Point_Sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Point_Sales" ADD CONSTRAINT "Point_Sales_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "Status_Code"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Point_Sales" ADD CONSTRAINT "Point_Sales_city_code_id_fkey" FOREIGN KEY ("city_code_id") REFERENCES "Citys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "Status_Code"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Citys" ADD CONSTRAINT "Citys_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
