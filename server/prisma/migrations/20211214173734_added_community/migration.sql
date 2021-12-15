/*
  Warnings:

  - Added the required column `postId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorName` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `communityId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- AlterTable
ALTER TABLE `comment` ADD COLUMN `postId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `like` ADD COLUMN `type` VARCHAR(191) NOT NULL,
    ADD COLUMN `value` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `post` ADD COLUMN `authorName` VARCHAR(191) NOT NULL,
    ADD COLUMN `communityId` INTEGER NOT NULL,
    ADD COLUMN `imageId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_communityId_fkey` FOREIGN KEY (`communityId`) REFERENCES `Community`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
