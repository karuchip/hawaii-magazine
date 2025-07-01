import { PrismaClient as MySQLClient } from '../app/generated/mysql'
import { PrismaClient as PostgresClient } from '../app/generated/postgres'

const mysql = new MySQLClient()
const pg = new PostgresClient()

async function migrateUsers() {
  const users = await mysql.user.findMany()

  for (const user of users) {
    await pg.user.create({
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        password: user.password,
        userIcon: user.userIcon,
        userProfile: user.userProfile ?? null
      },
    })
  }
  console.log(`ユーザー${users.length}件を移行完了`)
}

async function migratePosts() {
  const posts = await mysql.post.findMany()

  for (const post of posts){
    await pg.post.create({
      data: {
        id: post.id,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        title: post.title,
        image1: post.image1,
        description1: post.image1,
        image2: post.image2,
        description2: post.image2,
        image3: post.image3,
        description3: post.image3,
        image4: post.image4,
        description4: post.image4,
        image5: post.image5,
        description5: post.image5,
        likeCount: post.likeCount,
        location: post.location,
        googlePlace: post.googlePlace,
        lat: post.lat,
        lon: post.lon,
        category: post.category,
        published: post.published,
        authorId: post.authorId,
      }
    })
  }
  console.log(`投稿${posts.length}件を移行完了`)
}

async function migratePostLikes() {
  const postLikes = await mysql.postLikes.findMany()

  for (const like of postLikes) {
    await pg.postLikes.create({
      data: {
        id: like.id,
        postId: like.postId,
        userId: like.userId,
        createdAt: like.createdAt
      }
    })
  }
  console.log(`ライクカウント${postLikes.length}件を移行完了`)
}

async function migratePostComments() {
  const postComments = await mysql.postComments.findMany()

  for (const comment of postComments) {
    await pg.postComments.create({
      data: {
        commentId: comment.commentId,
        comment: comment.comment,
        postId: comment.postId,
        userId: comment.userId,
        createdAt: comment.createdAt
      }
    })
  }
  console.log(`コメント${postComments.length}件を移行完了`)
}


async function main() {
  // try {
  //   await migrateUsers()
  // } catch(error) {
  //   console.error("migrateUsersでエラー:", error)
  // }
  try {
    await migratePosts()
  } catch(error) {
    console.error("migratePostsでエラー:", error)
  }
  try {
    await migratePostLikes()
  } catch(error) {
    console.error("migratePostLikesでエラー:", error)
  }
  try {
    await migratePostComments()
  } catch(error) {
    console.error("migratePostCommentsでエラー:", error)
  }
}

main()
  .then(()=> {
    console.log("データ移行完了")
    mysql.$disconnect()
    pg.$disconnect()
  })
  .catch((error) => {
    console.error("エラー:", error)
  })
