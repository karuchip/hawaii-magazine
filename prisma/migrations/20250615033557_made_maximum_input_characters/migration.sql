/*
  Warnings:

  - You are about to alter the column `location` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE `Post` MODIFY `content` VARCHAR(300) NULL,
    MODIFY `description2` VARCHAR(300) NULL,
    MODIFY `description3` VARCHAR(300) NULL,
    MODIFY `description4` VARCHAR(300) NULL,
    MODIFY `description5` VARCHAR(300) NULL,
    MODIFY `googlePlace` VARCHAR(300) NULL,
    MODIFY `location` VARCHAR(100) NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `name` VARCHAR(50) NOT NULL,
    MODIFY `password` VARCHAR(100) NOT NULL;
