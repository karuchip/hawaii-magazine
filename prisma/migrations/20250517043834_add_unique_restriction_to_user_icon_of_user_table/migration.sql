/*
  Warnings:

  - Made the column `userIcon` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `userIcon` VARCHAR(191) NOT NULL;
