-- CreateTable
CREATE TABLE "PostViews" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "viewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip" TEXT,
    "userAgent" TEXT,

    CONSTRAINT "PostViews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserViews" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "viewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip" TEXT,
    "userAgent" TEXT,

    CONSTRAINT "UserViews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PostViews_postId_viewedAt_idx" ON "PostViews"("postId", "viewedAt");

-- CreateIndex
CREATE INDEX "UserViews_userId_viewedAt_idx" ON "UserViews"("userId", "viewedAt");

-- AddForeignKey
ALTER TABLE "PostViews" ADD CONSTRAINT "PostViews_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserViews" ADD CONSTRAINT "UserViews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
