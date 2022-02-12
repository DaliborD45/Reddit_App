/*
  Warnings:

  - You are about to drop the column `username` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `communityId` on the `user` table. All the data in the column will be lost.
  - Added the required column `authorName` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorProfilePic` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profilePic` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_communityId_fkey`;

-- AlterTable
ALTER TABLE `comment` DROP COLUMN `username`,
    ADD COLUMN `authorName` VARCHAR(191) NOT NULL,
    ADD COLUMN `authorProfilePic` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `post` ADD COLUMN `profilePic` VARCHAR(191) NOT NULL,
    MODIFY `title` VARCHAR(255) NOT NULL DEFAULT '',
    MODIFY `content` TEXT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `user` DROP COLUMN `communityId`,
    ADD COLUMN `ProfilePic` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `CommunityUser` (
    `userId` INTEGER NOT NULL,
    `communityId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`userId`, `communityId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CommunityUser` ADD CONSTRAINT `CommunityUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CommunityUser` ADD CONSTRAINT `CommunityUser_communityId_fkey` FOREIGN KEY (`communityId`) REFERENCES `Community`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_profilePic_authorName_fkey` FOREIGN KEY (`authorId`, `profilePic`, `authorName`) REFERENCES `User`(`id`, `ProfilePic`, `name`) ON DELETE CASCADE ON UPDATE CASCADE;
