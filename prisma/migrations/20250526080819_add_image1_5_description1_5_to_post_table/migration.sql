/*
  Warnings:

  - You are about to drop the column `image` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `place` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `image`,
    DROP COLUMN `place`,
    ADD COLUMN `description2` VARCHAR(191) NULL,
    ADD COLUMN `description3` VARCHAR(191) NULL,
    ADD COLUMN `description4` VARCHAR(191) NULL,
    ADD COLUMN `description5` VARCHAR(191) NULL,
    ADD COLUMN `googlePlace` VARCHAR(191) NULL,
    ADD COLUMN `image1` VARCHAR(191) NULL,
    ADD COLUMN `image2` VARCHAR(191) NULL,
    ADD COLUMN `image3` VARCHAR(191) NULL,
    ADD COLUMN `image4` VARCHAR(191) NULL,
    ADD COLUMN `image5` VARCHAR(191) NULL,
    ADD COLUMN `location` VARCHAR(191) NULL;
