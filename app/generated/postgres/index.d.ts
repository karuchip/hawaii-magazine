
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PostLikes
 * 
 */
export type PostLikes = $Result.DefaultSelection<Prisma.$PostLikesPayload>
/**
 * Model PostComments
 * 
 */
export type PostComments = $Result.DefaultSelection<Prisma.$PostCommentsPayload>
/**
 * Model PostViews
 * 
 */
export type PostViews = $Result.DefaultSelection<Prisma.$PostViewsPayload>
/**
 * Model UserViews
 * 
 */
export type UserViews = $Result.DefaultSelection<Prisma.$UserViewsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postLikes`: Exposes CRUD operations for the **PostLikes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostLikes
    * const postLikes = await prisma.postLikes.findMany()
    * ```
    */
  get postLikes(): Prisma.PostLikesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postComments`: Exposes CRUD operations for the **PostComments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostComments
    * const postComments = await prisma.postComments.findMany()
    * ```
    */
  get postComments(): Prisma.PostCommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postViews`: Exposes CRUD operations for the **PostViews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostViews
    * const postViews = await prisma.postViews.findMany()
    * ```
    */
  get postViews(): Prisma.PostViewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userViews`: Exposes CRUD operations for the **UserViews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserViews
    * const userViews = await prisma.userViews.findMany()
    * ```
    */
  get userViews(): Prisma.UserViewsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Post: 'Post',
    PostLikes: 'PostLikes',
    PostComments: 'PostComments',
    PostViews: 'PostViews',
    UserViews: 'UserViews'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "post" | "postLikes" | "postComments" | "postViews" | "userViews"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostLikes: {
        payload: Prisma.$PostLikesPayload<ExtArgs>
        fields: Prisma.PostLikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostLikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostLikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          findFirst: {
            args: Prisma.PostLikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostLikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          findMany: {
            args: Prisma.PostLikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>[]
          }
          create: {
            args: Prisma.PostLikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          createMany: {
            args: Prisma.PostLikesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostLikesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>[]
          }
          delete: {
            args: Prisma.PostLikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          update: {
            args: Prisma.PostLikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          deleteMany: {
            args: Prisma.PostLikesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostLikesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostLikesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>[]
          }
          upsert: {
            args: Prisma.PostLikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          aggregate: {
            args: Prisma.PostLikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostLikes>
          }
          groupBy: {
            args: Prisma.PostLikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostLikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostLikesCountArgs<ExtArgs>
            result: $Utils.Optional<PostLikesCountAggregateOutputType> | number
          }
        }
      }
      PostComments: {
        payload: Prisma.$PostCommentsPayload<ExtArgs>
        fields: Prisma.PostCommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostCommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostCommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          findFirst: {
            args: Prisma.PostCommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostCommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          findMany: {
            args: Prisma.PostCommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>[]
          }
          create: {
            args: Prisma.PostCommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          createMany: {
            args: Prisma.PostCommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>[]
          }
          delete: {
            args: Prisma.PostCommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          update: {
            args: Prisma.PostCommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          deleteMany: {
            args: Prisma.PostCommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostCommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostCommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>[]
          }
          upsert: {
            args: Prisma.PostCommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          aggregate: {
            args: Prisma.PostCommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostComments>
          }
          groupBy: {
            args: Prisma.PostCommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostCommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCommentsCountArgs<ExtArgs>
            result: $Utils.Optional<PostCommentsCountAggregateOutputType> | number
          }
        }
      }
      PostViews: {
        payload: Prisma.$PostViewsPayload<ExtArgs>
        fields: Prisma.PostViewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostViewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostViewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewsPayload>
          }
          findFirst: {
            args: Prisma.PostViewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostViewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewsPayload>
          }
          findMany: {
            args: Prisma.PostViewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewsPayload>[]
          }
          create: {
            args: Prisma.PostViewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewsPayload>
          }
          createMany: {
            args: Prisma.PostViewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostViewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewsPayload>[]
          }
          delete: {
            args: Prisma.PostViewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewsPayload>
          }
          update: {
            args: Prisma.PostViewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewsPayload>
          }
          deleteMany: {
            args: Prisma.PostViewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostViewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostViewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewsPayload>[]
          }
          upsert: {
            args: Prisma.PostViewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewsPayload>
          }
          aggregate: {
            args: Prisma.PostViewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostViews>
          }
          groupBy: {
            args: Prisma.PostViewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostViewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostViewsCountArgs<ExtArgs>
            result: $Utils.Optional<PostViewsCountAggregateOutputType> | number
          }
        }
      }
      UserViews: {
        payload: Prisma.$UserViewsPayload<ExtArgs>
        fields: Prisma.UserViewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserViewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserViewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewsPayload>
          }
          findFirst: {
            args: Prisma.UserViewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserViewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewsPayload>
          }
          findMany: {
            args: Prisma.UserViewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewsPayload>[]
          }
          create: {
            args: Prisma.UserViewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewsPayload>
          }
          createMany: {
            args: Prisma.UserViewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserViewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewsPayload>[]
          }
          delete: {
            args: Prisma.UserViewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewsPayload>
          }
          update: {
            args: Prisma.UserViewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewsPayload>
          }
          deleteMany: {
            args: Prisma.UserViewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserViewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserViewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewsPayload>[]
          }
          upsert: {
            args: Prisma.UserViewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewsPayload>
          }
          aggregate: {
            args: Prisma.UserViewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserViews>
          }
          groupBy: {
            args: Prisma.UserViewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserViewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserViewsCountArgs<ExtArgs>
            result: $Utils.Optional<UserViewsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    post?: PostOmit
    postLikes?: PostLikesOmit
    postComments?: PostCommentsOmit
    postViews?: PostViewsOmit
    userViews?: UserViewsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    postComments: number
    postLikes: number
    profileViews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    postComments?: boolean | UserCountOutputTypeCountPostCommentsArgs
    postLikes?: boolean | UserCountOutputTypeCountPostLikesArgs
    profileViews?: boolean | UserCountOutputTypeCountProfileViewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfileViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserViewsWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    comments: number
    likes: number
    views: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
    likes?: boolean | PostCountOutputTypeCountLikesArgs
    views?: boolean | PostCountOutputTypeCountViewsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentsWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikesWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostViewsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    userIcon: string | null
    userProfile: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    userIcon: string | null
    userProfile: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    userIcon: number
    userProfile: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    userIcon?: true
    userProfile?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    userIcon?: true
    userProfile?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    userIcon?: true
    userProfile?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    password: string
    userIcon: string
    userProfile: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    userIcon?: boolean
    userProfile?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    postComments?: boolean | User$postCommentsArgs<ExtArgs>
    postLikes?: boolean | User$postLikesArgs<ExtArgs>
    profileViews?: boolean | User$profileViewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    userIcon?: boolean
    userProfile?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    userIcon?: boolean
    userProfile?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    userIcon?: boolean
    userProfile?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "userIcon" | "userProfile", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    postComments?: boolean | User$postCommentsArgs<ExtArgs>
    postLikes?: boolean | User$postLikesArgs<ExtArgs>
    profileViews?: boolean | User$profileViewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      postComments: Prisma.$PostCommentsPayload<ExtArgs>[]
      postLikes: Prisma.$PostLikesPayload<ExtArgs>[]
      profileViews: Prisma.$UserViewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      password: string
      userIcon: string
      userProfile: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postComments<T extends User$postCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$postCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postLikes<T extends User$postLikesArgs<ExtArgs> = {}>(args?: Subset<T, User$postLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profileViews<T extends User$profileViewsArgs<ExtArgs> = {}>(args?: Subset<T, User$profileViewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly userIcon: FieldRef<"User", 'String'>
    readonly userProfile: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.postComments
   */
  export type User$postCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    where?: PostCommentsWhereInput
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    cursor?: PostCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCommentsScalarFieldEnum | PostCommentsScalarFieldEnum[]
  }

  /**
   * User.postLikes
   */
  export type User$postLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    where?: PostLikesWhereInput
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    cursor?: PostLikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[]
  }

  /**
   * User.profileViews
   */
  export type User$profileViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViews
     */
    select?: UserViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViews
     */
    omit?: UserViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewsInclude<ExtArgs> | null
    where?: UserViewsWhereInput
    orderBy?: UserViewsOrderByWithRelationInput | UserViewsOrderByWithRelationInput[]
    cursor?: UserViewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserViewsScalarFieldEnum | UserViewsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    likeCount: number | null
    lat: number | null
    lon: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    likeCount: number | null
    lat: number | null
    lon: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    image1: string | null
    description1: string | null
    image2: string | null
    description2: string | null
    image3: string | null
    description3: string | null
    image4: string | null
    description4: string | null
    image5: string | null
    description5: string | null
    likeCount: number | null
    location: string | null
    googlePlace: string | null
    lat: number | null
    lon: number | null
    category: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    image1: string | null
    description1: string | null
    image2: string | null
    description2: string | null
    image3: string | null
    description3: string | null
    image4: string | null
    description4: string | null
    image5: string | null
    description5: string | null
    likeCount: number | null
    location: string | null
    googlePlace: string | null
    lat: number | null
    lon: number | null
    category: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    image1: number
    description1: number
    image2: number
    description2: number
    image3: number
    description3: number
    image4: number
    description4: number
    image5: number
    description5: number
    likeCount: number
    location: number
    googlePlace: number
    lat: number
    lon: number
    category: number
    published: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    likeCount?: true
    lat?: true
    lon?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    likeCount?: true
    lat?: true
    lon?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    image1?: true
    description1?: true
    image2?: true
    description2?: true
    image3?: true
    description3?: true
    image4?: true
    description4?: true
    image5?: true
    description5?: true
    likeCount?: true
    location?: true
    googlePlace?: true
    lat?: true
    lon?: true
    category?: true
    published?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    image1?: true
    description1?: true
    image2?: true
    description2?: true
    image3?: true
    description3?: true
    image4?: true
    description4?: true
    image5?: true
    description5?: true
    likeCount?: true
    location?: true
    googlePlace?: true
    lat?: true
    lon?: true
    category?: true
    published?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    image1?: true
    description1?: true
    image2?: true
    description2?: true
    image3?: true
    description3?: true
    image4?: true
    description4?: true
    image5?: true
    description5?: true
    likeCount?: true
    location?: true
    googlePlace?: true
    lat?: true
    lon?: true
    category?: true
    published?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    image1: string | null
    description1: string | null
    image2: string | null
    description2: string | null
    image3: string | null
    description3: string | null
    image4: string | null
    description4: string | null
    image5: string | null
    description5: string | null
    likeCount: number
    location: string | null
    googlePlace: string | null
    lat: number | null
    lon: number | null
    category: string
    published: boolean
    authorId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    image1?: boolean
    description1?: boolean
    image2?: boolean
    description2?: boolean
    image3?: boolean
    description3?: boolean
    image4?: boolean
    description4?: boolean
    image5?: boolean
    description5?: boolean
    likeCount?: boolean
    location?: boolean
    googlePlace?: boolean
    lat?: boolean
    lon?: boolean
    category?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    likes?: boolean | Post$likesArgs<ExtArgs>
    views?: boolean | Post$viewsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    image1?: boolean
    description1?: boolean
    image2?: boolean
    description2?: boolean
    image3?: boolean
    description3?: boolean
    image4?: boolean
    description4?: boolean
    image5?: boolean
    description5?: boolean
    likeCount?: boolean
    location?: boolean
    googlePlace?: boolean
    lat?: boolean
    lon?: boolean
    category?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    image1?: boolean
    description1?: boolean
    image2?: boolean
    description2?: boolean
    image3?: boolean
    description3?: boolean
    image4?: boolean
    description4?: boolean
    image5?: boolean
    description5?: boolean
    likeCount?: boolean
    location?: boolean
    googlePlace?: boolean
    lat?: boolean
    lon?: boolean
    category?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    image1?: boolean
    description1?: boolean
    image2?: boolean
    description2?: boolean
    image3?: boolean
    description3?: boolean
    image4?: boolean
    description4?: boolean
    image5?: boolean
    description5?: boolean
    likeCount?: boolean
    location?: boolean
    googlePlace?: boolean
    lat?: boolean
    lon?: boolean
    category?: boolean
    published?: boolean
    authorId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "image1" | "description1" | "image2" | "description2" | "image3" | "description3" | "image4" | "description4" | "image5" | "description5" | "likeCount" | "location" | "googlePlace" | "lat" | "lon" | "category" | "published" | "authorId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    likes?: boolean | Post$likesArgs<ExtArgs>
    views?: boolean | Post$viewsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$PostCommentsPayload<ExtArgs>[]
      likes: Prisma.$PostLikesPayload<ExtArgs>[]
      views: Prisma.$PostViewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      title: string
      image1: string | null
      description1: string | null
      image2: string | null
      description2: string | null
      image3: string | null
      description3: string | null
      image4: string | null
      description4: string | null
      image5: string | null
      description5: string | null
      likeCount: number
      location: string | null
      googlePlace: string | null
      lat: number | null
      lon: number | null
      category: string
      published: boolean
      authorId: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Post$likesArgs<ExtArgs> = {}>(args?: Subset<T, Post$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends Post$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Post$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly title: FieldRef<"Post", 'String'>
    readonly image1: FieldRef<"Post", 'String'>
    readonly description1: FieldRef<"Post", 'String'>
    readonly image2: FieldRef<"Post", 'String'>
    readonly description2: FieldRef<"Post", 'String'>
    readonly image3: FieldRef<"Post", 'String'>
    readonly description3: FieldRef<"Post", 'String'>
    readonly image4: FieldRef<"Post", 'String'>
    readonly description4: FieldRef<"Post", 'String'>
    readonly image5: FieldRef<"Post", 'String'>
    readonly description5: FieldRef<"Post", 'String'>
    readonly likeCount: FieldRef<"Post", 'Int'>
    readonly location: FieldRef<"Post", 'String'>
    readonly googlePlace: FieldRef<"Post", 'String'>
    readonly lat: FieldRef<"Post", 'Float'>
    readonly lon: FieldRef<"Post", 'Float'>
    readonly category: FieldRef<"Post", 'String'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly authorId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    where?: PostCommentsWhereInput
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    cursor?: PostCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCommentsScalarFieldEnum | PostCommentsScalarFieldEnum[]
  }

  /**
   * Post.likes
   */
  export type Post$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    where?: PostLikesWhereInput
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    cursor?: PostLikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[]
  }

  /**
   * Post.views
   */
  export type Post$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViews
     */
    select?: PostViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViews
     */
    omit?: PostViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewsInclude<ExtArgs> | null
    where?: PostViewsWhereInput
    orderBy?: PostViewsOrderByWithRelationInput | PostViewsOrderByWithRelationInput[]
    cursor?: PostViewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostViewsScalarFieldEnum | PostViewsScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model PostLikes
   */

  export type AggregatePostLikes = {
    _count: PostLikesCountAggregateOutputType | null
    _avg: PostLikesAvgAggregateOutputType | null
    _sum: PostLikesSumAggregateOutputType | null
    _min: PostLikesMinAggregateOutputType | null
    _max: PostLikesMaxAggregateOutputType | null
  }

  export type PostLikesAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
  }

  export type PostLikesSumAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
  }

  export type PostLikesMinAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type PostLikesMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type PostLikesCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type PostLikesAvgAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type PostLikesSumAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type PostLikesMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
  }

  export type PostLikesMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
  }

  export type PostLikesCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type PostLikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLikes to aggregate.
     */
    where?: PostLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostLikes
    **/
    _count?: true | PostLikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostLikesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostLikesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostLikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostLikesMaxAggregateInputType
  }

  export type GetPostLikesAggregateType<T extends PostLikesAggregateArgs> = {
        [P in keyof T & keyof AggregatePostLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostLikes[P]>
      : GetScalarType<T[P], AggregatePostLikes[P]>
  }




  export type PostLikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikesWhereInput
    orderBy?: PostLikesOrderByWithAggregationInput | PostLikesOrderByWithAggregationInput[]
    by: PostLikesScalarFieldEnum[] | PostLikesScalarFieldEnum
    having?: PostLikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostLikesCountAggregateInputType | true
    _avg?: PostLikesAvgAggregateInputType
    _sum?: PostLikesSumAggregateInputType
    _min?: PostLikesMinAggregateInputType
    _max?: PostLikesMaxAggregateInputType
  }

  export type PostLikesGroupByOutputType = {
    id: number
    postId: number
    userId: number
    createdAt: Date
    _count: PostLikesCountAggregateOutputType | null
    _avg: PostLikesAvgAggregateOutputType | null
    _sum: PostLikesSumAggregateOutputType | null
    _min: PostLikesMinAggregateOutputType | null
    _max: PostLikesMaxAggregateOutputType | null
  }

  type GetPostLikesGroupByPayload<T extends PostLikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostLikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostLikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostLikesGroupByOutputType[P]>
            : GetScalarType<T[P], PostLikesGroupByOutputType[P]>
        }
      >
    >


  export type PostLikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLikes"]>

  export type PostLikesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLikes"]>

  export type PostLikesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLikes"]>

  export type PostLikesSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type PostLikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "createdAt", ExtArgs["result"]["postLikes"]>
  export type PostLikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostLikesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostLikesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostLikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostLikes"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postId: number
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["postLikes"]>
    composites: {}
  }

  type PostLikesGetPayload<S extends boolean | null | undefined | PostLikesDefaultArgs> = $Result.GetResult<Prisma.$PostLikesPayload, S>

  type PostLikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostLikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostLikesCountAggregateInputType | true
    }

  export interface PostLikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostLikes'], meta: { name: 'PostLikes' } }
    /**
     * Find zero or one PostLikes that matches the filter.
     * @param {PostLikesFindUniqueArgs} args - Arguments to find a PostLikes
     * @example
     * // Get one PostLikes
     * const postLikes = await prisma.postLikes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostLikesFindUniqueArgs>(args: SelectSubset<T, PostLikesFindUniqueArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostLikes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostLikesFindUniqueOrThrowArgs} args - Arguments to find a PostLikes
     * @example
     * // Get one PostLikes
     * const postLikes = await prisma.postLikes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostLikesFindUniqueOrThrowArgs>(args: SelectSubset<T, PostLikesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesFindFirstArgs} args - Arguments to find a PostLikes
     * @example
     * // Get one PostLikes
     * const postLikes = await prisma.postLikes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostLikesFindFirstArgs>(args?: SelectSubset<T, PostLikesFindFirstArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostLikes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesFindFirstOrThrowArgs} args - Arguments to find a PostLikes
     * @example
     * // Get one PostLikes
     * const postLikes = await prisma.postLikes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostLikesFindFirstOrThrowArgs>(args?: SelectSubset<T, PostLikesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostLikes
     * const postLikes = await prisma.postLikes.findMany()
     * 
     * // Get first 10 PostLikes
     * const postLikes = await prisma.postLikes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postLikesWithIdOnly = await prisma.postLikes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostLikesFindManyArgs>(args?: SelectSubset<T, PostLikesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostLikes.
     * @param {PostLikesCreateArgs} args - Arguments to create a PostLikes.
     * @example
     * // Create one PostLikes
     * const PostLikes = await prisma.postLikes.create({
     *   data: {
     *     // ... data to create a PostLikes
     *   }
     * })
     * 
     */
    create<T extends PostLikesCreateArgs>(args: SelectSubset<T, PostLikesCreateArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostLikes.
     * @param {PostLikesCreateManyArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLikes = await prisma.postLikes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostLikesCreateManyArgs>(args?: SelectSubset<T, PostLikesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostLikes and returns the data saved in the database.
     * @param {PostLikesCreateManyAndReturnArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLikes = await prisma.postLikes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostLikes and only return the `id`
     * const postLikesWithIdOnly = await prisma.postLikes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostLikesCreateManyAndReturnArgs>(args?: SelectSubset<T, PostLikesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostLikes.
     * @param {PostLikesDeleteArgs} args - Arguments to delete one PostLikes.
     * @example
     * // Delete one PostLikes
     * const PostLikes = await prisma.postLikes.delete({
     *   where: {
     *     // ... filter to delete one PostLikes
     *   }
     * })
     * 
     */
    delete<T extends PostLikesDeleteArgs>(args: SelectSubset<T, PostLikesDeleteArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostLikes.
     * @param {PostLikesUpdateArgs} args - Arguments to update one PostLikes.
     * @example
     * // Update one PostLikes
     * const postLikes = await prisma.postLikes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostLikesUpdateArgs>(args: SelectSubset<T, PostLikesUpdateArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostLikes.
     * @param {PostLikesDeleteManyArgs} args - Arguments to filter PostLikes to delete.
     * @example
     * // Delete a few PostLikes
     * const { count } = await prisma.postLikes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostLikesDeleteManyArgs>(args?: SelectSubset<T, PostLikesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostLikes
     * const postLikes = await prisma.postLikes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostLikesUpdateManyArgs>(args: SelectSubset<T, PostLikesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLikes and returns the data updated in the database.
     * @param {PostLikesUpdateManyAndReturnArgs} args - Arguments to update many PostLikes.
     * @example
     * // Update many PostLikes
     * const postLikes = await prisma.postLikes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostLikes and only return the `id`
     * const postLikesWithIdOnly = await prisma.postLikes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostLikesUpdateManyAndReturnArgs>(args: SelectSubset<T, PostLikesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostLikes.
     * @param {PostLikesUpsertArgs} args - Arguments to update or create a PostLikes.
     * @example
     * // Update or create a PostLikes
     * const postLikes = await prisma.postLikes.upsert({
     *   create: {
     *     // ... data to create a PostLikes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostLikes we want to update
     *   }
     * })
     */
    upsert<T extends PostLikesUpsertArgs>(args: SelectSubset<T, PostLikesUpsertArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesCountArgs} args - Arguments to filter PostLikes to count.
     * @example
     * // Count the number of PostLikes
     * const count = await prisma.postLikes.count({
     *   where: {
     *     // ... the filter for the PostLikes we want to count
     *   }
     * })
    **/
    count<T extends PostLikesCountArgs>(
      args?: Subset<T, PostLikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostLikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostLikesAggregateArgs>(args: Subset<T, PostLikesAggregateArgs>): Prisma.PrismaPromise<GetPostLikesAggregateType<T>>

    /**
     * Group by PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostLikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostLikesGroupByArgs['orderBy'] }
        : { orderBy?: PostLikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostLikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostLikes model
   */
  readonly fields: PostLikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostLikes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostLikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostLikes model
   */
  interface PostLikesFieldRefs {
    readonly id: FieldRef<"PostLikes", 'Int'>
    readonly postId: FieldRef<"PostLikes", 'Int'>
    readonly userId: FieldRef<"PostLikes", 'Int'>
    readonly createdAt: FieldRef<"PostLikes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostLikes findUnique
   */
  export type PostLikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where: PostLikesWhereUniqueInput
  }

  /**
   * PostLikes findUniqueOrThrow
   */
  export type PostLikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where: PostLikesWhereUniqueInput
  }

  /**
   * PostLikes findFirst
   */
  export type PostLikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[]
  }

  /**
   * PostLikes findFirstOrThrow
   */
  export type PostLikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[]
  }

  /**
   * PostLikes findMany
   */
  export type PostLikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostLikes.
     */
    cursor?: PostLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[]
  }

  /**
   * PostLikes create
   */
  export type PostLikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * The data needed to create a PostLikes.
     */
    data: XOR<PostLikesCreateInput, PostLikesUncheckedCreateInput>
  }

  /**
   * PostLikes createMany
   */
  export type PostLikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikesCreateManyInput | PostLikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostLikes createManyAndReturn
   */
  export type PostLikesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikesCreateManyInput | PostLikesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostLikes update
   */
  export type PostLikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * The data needed to update a PostLikes.
     */
    data: XOR<PostLikesUpdateInput, PostLikesUncheckedUpdateInput>
    /**
     * Choose, which PostLikes to update.
     */
    where: PostLikesWhereUniqueInput
  }

  /**
   * PostLikes updateMany
   */
  export type PostLikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostLikes.
     */
    data: XOR<PostLikesUpdateManyMutationInput, PostLikesUncheckedUpdateManyInput>
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikesWhereInput
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number
  }

  /**
   * PostLikes updateManyAndReturn
   */
  export type PostLikesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * The data used to update PostLikes.
     */
    data: XOR<PostLikesUpdateManyMutationInput, PostLikesUncheckedUpdateManyInput>
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikesWhereInput
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostLikes upsert
   */
  export type PostLikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * The filter to search for the PostLikes to update in case it exists.
     */
    where: PostLikesWhereUniqueInput
    /**
     * In case the PostLikes found by the `where` argument doesn't exist, create a new PostLikes with this data.
     */
    create: XOR<PostLikesCreateInput, PostLikesUncheckedCreateInput>
    /**
     * In case the PostLikes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostLikesUpdateInput, PostLikesUncheckedUpdateInput>
  }

  /**
   * PostLikes delete
   */
  export type PostLikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter which PostLikes to delete.
     */
    where: PostLikesWhereUniqueInput
  }

  /**
   * PostLikes deleteMany
   */
  export type PostLikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLikes to delete
     */
    where?: PostLikesWhereInput
    /**
     * Limit how many PostLikes to delete.
     */
    limit?: number
  }

  /**
   * PostLikes without action
   */
  export type PostLikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
  }


  /**
   * Model PostComments
   */

  export type AggregatePostComments = {
    _count: PostCommentsCountAggregateOutputType | null
    _avg: PostCommentsAvgAggregateOutputType | null
    _sum: PostCommentsSumAggregateOutputType | null
    _min: PostCommentsMinAggregateOutputType | null
    _max: PostCommentsMaxAggregateOutputType | null
  }

  export type PostCommentsAvgAggregateOutputType = {
    commentId: number | null
    postId: number | null
    userId: number | null
  }

  export type PostCommentsSumAggregateOutputType = {
    commentId: number | null
    postId: number | null
    userId: number | null
  }

  export type PostCommentsMinAggregateOutputType = {
    commentId: number | null
    comment: string | null
    postId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type PostCommentsMaxAggregateOutputType = {
    commentId: number | null
    comment: string | null
    postId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type PostCommentsCountAggregateOutputType = {
    commentId: number
    comment: number
    postId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type PostCommentsAvgAggregateInputType = {
    commentId?: true
    postId?: true
    userId?: true
  }

  export type PostCommentsSumAggregateInputType = {
    commentId?: true
    postId?: true
    userId?: true
  }

  export type PostCommentsMinAggregateInputType = {
    commentId?: true
    comment?: true
    postId?: true
    userId?: true
    createdAt?: true
  }

  export type PostCommentsMaxAggregateInputType = {
    commentId?: true
    comment?: true
    postId?: true
    userId?: true
    createdAt?: true
  }

  export type PostCommentsCountAggregateInputType = {
    commentId?: true
    comment?: true
    postId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type PostCommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostComments to aggregate.
     */
    where?: PostCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostComments
    **/
    _count?: true | PostCommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostCommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostCommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostCommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostCommentsMaxAggregateInputType
  }

  export type GetPostCommentsAggregateType<T extends PostCommentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePostComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostComments[P]>
      : GetScalarType<T[P], AggregatePostComments[P]>
  }




  export type PostCommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentsWhereInput
    orderBy?: PostCommentsOrderByWithAggregationInput | PostCommentsOrderByWithAggregationInput[]
    by: PostCommentsScalarFieldEnum[] | PostCommentsScalarFieldEnum
    having?: PostCommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCommentsCountAggregateInputType | true
    _avg?: PostCommentsAvgAggregateInputType
    _sum?: PostCommentsSumAggregateInputType
    _min?: PostCommentsMinAggregateInputType
    _max?: PostCommentsMaxAggregateInputType
  }

  export type PostCommentsGroupByOutputType = {
    commentId: number
    comment: string
    postId: number
    userId: number
    createdAt: Date
    _count: PostCommentsCountAggregateOutputType | null
    _avg: PostCommentsAvgAggregateOutputType | null
    _sum: PostCommentsSumAggregateOutputType | null
    _min: PostCommentsMinAggregateOutputType | null
    _max: PostCommentsMaxAggregateOutputType | null
  }

  type GetPostCommentsGroupByPayload<T extends PostCommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostCommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostCommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostCommentsGroupByOutputType[P]>
            : GetScalarType<T[P], PostCommentsGroupByOutputType[P]>
        }
      >
    >


  export type PostCommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    commentId?: boolean
    comment?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComments"]>

  export type PostCommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    commentId?: boolean
    comment?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComments"]>

  export type PostCommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    commentId?: boolean
    comment?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComments"]>

  export type PostCommentsSelectScalar = {
    commentId?: boolean
    comment?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type PostCommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"commentId" | "comment" | "postId" | "userId" | "createdAt", ExtArgs["result"]["postComments"]>
  export type PostCommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostCommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostCommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostCommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostComments"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      commentId: number
      comment: string
      postId: number
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["postComments"]>
    composites: {}
  }

  type PostCommentsGetPayload<S extends boolean | null | undefined | PostCommentsDefaultArgs> = $Result.GetResult<Prisma.$PostCommentsPayload, S>

  type PostCommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostCommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCommentsCountAggregateInputType | true
    }

  export interface PostCommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostComments'], meta: { name: 'PostComments' } }
    /**
     * Find zero or one PostComments that matches the filter.
     * @param {PostCommentsFindUniqueArgs} args - Arguments to find a PostComments
     * @example
     * // Get one PostComments
     * const postComments = await prisma.postComments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostCommentsFindUniqueArgs>(args: SelectSubset<T, PostCommentsFindUniqueArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostComments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostCommentsFindUniqueOrThrowArgs} args - Arguments to find a PostComments
     * @example
     * // Get one PostComments
     * const postComments = await prisma.postComments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostCommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostCommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsFindFirstArgs} args - Arguments to find a PostComments
     * @example
     * // Get one PostComments
     * const postComments = await prisma.postComments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostCommentsFindFirstArgs>(args?: SelectSubset<T, PostCommentsFindFirstArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostComments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsFindFirstOrThrowArgs} args - Arguments to find a PostComments
     * @example
     * // Get one PostComments
     * const postComments = await prisma.postComments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostCommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostCommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostComments
     * const postComments = await prisma.postComments.findMany()
     * 
     * // Get first 10 PostComments
     * const postComments = await prisma.postComments.findMany({ take: 10 })
     * 
     * // Only select the `commentId`
     * const postCommentsWithCommentIdOnly = await prisma.postComments.findMany({ select: { commentId: true } })
     * 
     */
    findMany<T extends PostCommentsFindManyArgs>(args?: SelectSubset<T, PostCommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostComments.
     * @param {PostCommentsCreateArgs} args - Arguments to create a PostComments.
     * @example
     * // Create one PostComments
     * const PostComments = await prisma.postComments.create({
     *   data: {
     *     // ... data to create a PostComments
     *   }
     * })
     * 
     */
    create<T extends PostCommentsCreateArgs>(args: SelectSubset<T, PostCommentsCreateArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostComments.
     * @param {PostCommentsCreateManyArgs} args - Arguments to create many PostComments.
     * @example
     * // Create many PostComments
     * const postComments = await prisma.postComments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCommentsCreateManyArgs>(args?: SelectSubset<T, PostCommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostComments and returns the data saved in the database.
     * @param {PostCommentsCreateManyAndReturnArgs} args - Arguments to create many PostComments.
     * @example
     * // Create many PostComments
     * const postComments = await prisma.postComments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostComments and only return the `commentId`
     * const postCommentsWithCommentIdOnly = await prisma.postComments.createManyAndReturn({
     *   select: { commentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostComments.
     * @param {PostCommentsDeleteArgs} args - Arguments to delete one PostComments.
     * @example
     * // Delete one PostComments
     * const PostComments = await prisma.postComments.delete({
     *   where: {
     *     // ... filter to delete one PostComments
     *   }
     * })
     * 
     */
    delete<T extends PostCommentsDeleteArgs>(args: SelectSubset<T, PostCommentsDeleteArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostComments.
     * @param {PostCommentsUpdateArgs} args - Arguments to update one PostComments.
     * @example
     * // Update one PostComments
     * const postComments = await prisma.postComments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostCommentsUpdateArgs>(args: SelectSubset<T, PostCommentsUpdateArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostComments.
     * @param {PostCommentsDeleteManyArgs} args - Arguments to filter PostComments to delete.
     * @example
     * // Delete a few PostComments
     * const { count } = await prisma.postComments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostCommentsDeleteManyArgs>(args?: SelectSubset<T, PostCommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostComments
     * const postComments = await prisma.postComments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostCommentsUpdateManyArgs>(args: SelectSubset<T, PostCommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostComments and returns the data updated in the database.
     * @param {PostCommentsUpdateManyAndReturnArgs} args - Arguments to update many PostComments.
     * @example
     * // Update many PostComments
     * const postComments = await prisma.postComments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostComments and only return the `commentId`
     * const postCommentsWithCommentIdOnly = await prisma.postComments.updateManyAndReturn({
     *   select: { commentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostCommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostCommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostComments.
     * @param {PostCommentsUpsertArgs} args - Arguments to update or create a PostComments.
     * @example
     * // Update or create a PostComments
     * const postComments = await prisma.postComments.upsert({
     *   create: {
     *     // ... data to create a PostComments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostComments we want to update
     *   }
     * })
     */
    upsert<T extends PostCommentsUpsertArgs>(args: SelectSubset<T, PostCommentsUpsertArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsCountArgs} args - Arguments to filter PostComments to count.
     * @example
     * // Count the number of PostComments
     * const count = await prisma.postComments.count({
     *   where: {
     *     // ... the filter for the PostComments we want to count
     *   }
     * })
    **/
    count<T extends PostCommentsCountArgs>(
      args?: Subset<T, PostCommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostCommentsAggregateArgs>(args: Subset<T, PostCommentsAggregateArgs>): Prisma.PrismaPromise<GetPostCommentsAggregateType<T>>

    /**
     * Group by PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostCommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostCommentsGroupByArgs['orderBy'] }
        : { orderBy?: PostCommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostCommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostComments model
   */
  readonly fields: PostCommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostComments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostCommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostComments model
   */
  interface PostCommentsFieldRefs {
    readonly commentId: FieldRef<"PostComments", 'Int'>
    readonly comment: FieldRef<"PostComments", 'String'>
    readonly postId: FieldRef<"PostComments", 'Int'>
    readonly userId: FieldRef<"PostComments", 'Int'>
    readonly createdAt: FieldRef<"PostComments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostComments findUnique
   */
  export type PostCommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where: PostCommentsWhereUniqueInput
  }

  /**
   * PostComments findUniqueOrThrow
   */
  export type PostCommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where: PostCommentsWhereUniqueInput
  }

  /**
   * PostComments findFirst
   */
  export type PostCommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where?: PostCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostComments.
     */
    cursor?: PostCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostComments.
     */
    distinct?: PostCommentsScalarFieldEnum | PostCommentsScalarFieldEnum[]
  }

  /**
   * PostComments findFirstOrThrow
   */
  export type PostCommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where?: PostCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostComments.
     */
    cursor?: PostCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostComments.
     */
    distinct?: PostCommentsScalarFieldEnum | PostCommentsScalarFieldEnum[]
  }

  /**
   * PostComments findMany
   */
  export type PostCommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where?: PostCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostComments.
     */
    cursor?: PostCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    distinct?: PostCommentsScalarFieldEnum | PostCommentsScalarFieldEnum[]
  }

  /**
   * PostComments create
   */
  export type PostCommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a PostComments.
     */
    data: XOR<PostCommentsCreateInput, PostCommentsUncheckedCreateInput>
  }

  /**
   * PostComments createMany
   */
  export type PostCommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostComments.
     */
    data: PostCommentsCreateManyInput | PostCommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostComments createManyAndReturn
   */
  export type PostCommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * The data used to create many PostComments.
     */
    data: PostCommentsCreateManyInput | PostCommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostComments update
   */
  export type PostCommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a PostComments.
     */
    data: XOR<PostCommentsUpdateInput, PostCommentsUncheckedUpdateInput>
    /**
     * Choose, which PostComments to update.
     */
    where: PostCommentsWhereUniqueInput
  }

  /**
   * PostComments updateMany
   */
  export type PostCommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostComments.
     */
    data: XOR<PostCommentsUpdateManyMutationInput, PostCommentsUncheckedUpdateManyInput>
    /**
     * Filter which PostComments to update
     */
    where?: PostCommentsWhereInput
    /**
     * Limit how many PostComments to update.
     */
    limit?: number
  }

  /**
   * PostComments updateManyAndReturn
   */
  export type PostCommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * The data used to update PostComments.
     */
    data: XOR<PostCommentsUpdateManyMutationInput, PostCommentsUncheckedUpdateManyInput>
    /**
     * Filter which PostComments to update
     */
    where?: PostCommentsWhereInput
    /**
     * Limit how many PostComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostComments upsert
   */
  export type PostCommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the PostComments to update in case it exists.
     */
    where: PostCommentsWhereUniqueInput
    /**
     * In case the PostComments found by the `where` argument doesn't exist, create a new PostComments with this data.
     */
    create: XOR<PostCommentsCreateInput, PostCommentsUncheckedCreateInput>
    /**
     * In case the PostComments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostCommentsUpdateInput, PostCommentsUncheckedUpdateInput>
  }

  /**
   * PostComments delete
   */
  export type PostCommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter which PostComments to delete.
     */
    where: PostCommentsWhereUniqueInput
  }

  /**
   * PostComments deleteMany
   */
  export type PostCommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostComments to delete
     */
    where?: PostCommentsWhereInput
    /**
     * Limit how many PostComments to delete.
     */
    limit?: number
  }

  /**
   * PostComments without action
   */
  export type PostCommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
  }


  /**
   * Model PostViews
   */

  export type AggregatePostViews = {
    _count: PostViewsCountAggregateOutputType | null
    _avg: PostViewsAvgAggregateOutputType | null
    _sum: PostViewsSumAggregateOutputType | null
    _min: PostViewsMinAggregateOutputType | null
    _max: PostViewsMaxAggregateOutputType | null
  }

  export type PostViewsAvgAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type PostViewsSumAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type PostViewsMinAggregateOutputType = {
    id: number | null
    postId: number | null
    viewedAt: Date | null
    ip: string | null
    userAgent: string | null
  }

  export type PostViewsMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    viewedAt: Date | null
    ip: string | null
    userAgent: string | null
  }

  export type PostViewsCountAggregateOutputType = {
    id: number
    postId: number
    viewedAt: number
    ip: number
    userAgent: number
    _all: number
  }


  export type PostViewsAvgAggregateInputType = {
    id?: true
    postId?: true
  }

  export type PostViewsSumAggregateInputType = {
    id?: true
    postId?: true
  }

  export type PostViewsMinAggregateInputType = {
    id?: true
    postId?: true
    viewedAt?: true
    ip?: true
    userAgent?: true
  }

  export type PostViewsMaxAggregateInputType = {
    id?: true
    postId?: true
    viewedAt?: true
    ip?: true
    userAgent?: true
  }

  export type PostViewsCountAggregateInputType = {
    id?: true
    postId?: true
    viewedAt?: true
    ip?: true
    userAgent?: true
    _all?: true
  }

  export type PostViewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostViews to aggregate.
     */
    where?: PostViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViews to fetch.
     */
    orderBy?: PostViewsOrderByWithRelationInput | PostViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostViews
    **/
    _count?: true | PostViewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostViewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostViewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostViewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostViewsMaxAggregateInputType
  }

  export type GetPostViewsAggregateType<T extends PostViewsAggregateArgs> = {
        [P in keyof T & keyof AggregatePostViews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostViews[P]>
      : GetScalarType<T[P], AggregatePostViews[P]>
  }




  export type PostViewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostViewsWhereInput
    orderBy?: PostViewsOrderByWithAggregationInput | PostViewsOrderByWithAggregationInput[]
    by: PostViewsScalarFieldEnum[] | PostViewsScalarFieldEnum
    having?: PostViewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostViewsCountAggregateInputType | true
    _avg?: PostViewsAvgAggregateInputType
    _sum?: PostViewsSumAggregateInputType
    _min?: PostViewsMinAggregateInputType
    _max?: PostViewsMaxAggregateInputType
  }

  export type PostViewsGroupByOutputType = {
    id: number
    postId: number
    viewedAt: Date
    ip: string | null
    userAgent: string | null
    _count: PostViewsCountAggregateOutputType | null
    _avg: PostViewsAvgAggregateOutputType | null
    _sum: PostViewsSumAggregateOutputType | null
    _min: PostViewsMinAggregateOutputType | null
    _max: PostViewsMaxAggregateOutputType | null
  }

  type GetPostViewsGroupByPayload<T extends PostViewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostViewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostViewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostViewsGroupByOutputType[P]>
            : GetScalarType<T[P], PostViewsGroupByOutputType[P]>
        }
      >
    >


  export type PostViewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    viewedAt?: boolean
    ip?: boolean
    userAgent?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postViews"]>

  export type PostViewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    viewedAt?: boolean
    ip?: boolean
    userAgent?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postViews"]>

  export type PostViewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    viewedAt?: boolean
    ip?: boolean
    userAgent?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postViews"]>

  export type PostViewsSelectScalar = {
    id?: boolean
    postId?: boolean
    viewedAt?: boolean
    ip?: boolean
    userAgent?: boolean
  }

  export type PostViewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "viewedAt" | "ip" | "userAgent", ExtArgs["result"]["postViews"]>
  export type PostViewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostViewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostViewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostViewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostViews"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postId: number
      viewedAt: Date
      ip: string | null
      userAgent: string | null
    }, ExtArgs["result"]["postViews"]>
    composites: {}
  }

  type PostViewsGetPayload<S extends boolean | null | undefined | PostViewsDefaultArgs> = $Result.GetResult<Prisma.$PostViewsPayload, S>

  type PostViewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostViewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostViewsCountAggregateInputType | true
    }

  export interface PostViewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostViews'], meta: { name: 'PostViews' } }
    /**
     * Find zero or one PostViews that matches the filter.
     * @param {PostViewsFindUniqueArgs} args - Arguments to find a PostViews
     * @example
     * // Get one PostViews
     * const postViews = await prisma.postViews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostViewsFindUniqueArgs>(args: SelectSubset<T, PostViewsFindUniqueArgs<ExtArgs>>): Prisma__PostViewsClient<$Result.GetResult<Prisma.$PostViewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostViews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostViewsFindUniqueOrThrowArgs} args - Arguments to find a PostViews
     * @example
     * // Get one PostViews
     * const postViews = await prisma.postViews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostViewsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostViewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostViewsClient<$Result.GetResult<Prisma.$PostViewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewsFindFirstArgs} args - Arguments to find a PostViews
     * @example
     * // Get one PostViews
     * const postViews = await prisma.postViews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostViewsFindFirstArgs>(args?: SelectSubset<T, PostViewsFindFirstArgs<ExtArgs>>): Prisma__PostViewsClient<$Result.GetResult<Prisma.$PostViewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostViews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewsFindFirstOrThrowArgs} args - Arguments to find a PostViews
     * @example
     * // Get one PostViews
     * const postViews = await prisma.postViews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostViewsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostViewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostViewsClient<$Result.GetResult<Prisma.$PostViewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostViews
     * const postViews = await prisma.postViews.findMany()
     * 
     * // Get first 10 PostViews
     * const postViews = await prisma.postViews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postViewsWithIdOnly = await prisma.postViews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostViewsFindManyArgs>(args?: SelectSubset<T, PostViewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostViews.
     * @param {PostViewsCreateArgs} args - Arguments to create a PostViews.
     * @example
     * // Create one PostViews
     * const PostViews = await prisma.postViews.create({
     *   data: {
     *     // ... data to create a PostViews
     *   }
     * })
     * 
     */
    create<T extends PostViewsCreateArgs>(args: SelectSubset<T, PostViewsCreateArgs<ExtArgs>>): Prisma__PostViewsClient<$Result.GetResult<Prisma.$PostViewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostViews.
     * @param {PostViewsCreateManyArgs} args - Arguments to create many PostViews.
     * @example
     * // Create many PostViews
     * const postViews = await prisma.postViews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostViewsCreateManyArgs>(args?: SelectSubset<T, PostViewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostViews and returns the data saved in the database.
     * @param {PostViewsCreateManyAndReturnArgs} args - Arguments to create many PostViews.
     * @example
     * // Create many PostViews
     * const postViews = await prisma.postViews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostViews and only return the `id`
     * const postViewsWithIdOnly = await prisma.postViews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostViewsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostViewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostViewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostViews.
     * @param {PostViewsDeleteArgs} args - Arguments to delete one PostViews.
     * @example
     * // Delete one PostViews
     * const PostViews = await prisma.postViews.delete({
     *   where: {
     *     // ... filter to delete one PostViews
     *   }
     * })
     * 
     */
    delete<T extends PostViewsDeleteArgs>(args: SelectSubset<T, PostViewsDeleteArgs<ExtArgs>>): Prisma__PostViewsClient<$Result.GetResult<Prisma.$PostViewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostViews.
     * @param {PostViewsUpdateArgs} args - Arguments to update one PostViews.
     * @example
     * // Update one PostViews
     * const postViews = await prisma.postViews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostViewsUpdateArgs>(args: SelectSubset<T, PostViewsUpdateArgs<ExtArgs>>): Prisma__PostViewsClient<$Result.GetResult<Prisma.$PostViewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostViews.
     * @param {PostViewsDeleteManyArgs} args - Arguments to filter PostViews to delete.
     * @example
     * // Delete a few PostViews
     * const { count } = await prisma.postViews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostViewsDeleteManyArgs>(args?: SelectSubset<T, PostViewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostViews
     * const postViews = await prisma.postViews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostViewsUpdateManyArgs>(args: SelectSubset<T, PostViewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostViews and returns the data updated in the database.
     * @param {PostViewsUpdateManyAndReturnArgs} args - Arguments to update many PostViews.
     * @example
     * // Update many PostViews
     * const postViews = await prisma.postViews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostViews and only return the `id`
     * const postViewsWithIdOnly = await prisma.postViews.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostViewsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostViewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostViewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostViews.
     * @param {PostViewsUpsertArgs} args - Arguments to update or create a PostViews.
     * @example
     * // Update or create a PostViews
     * const postViews = await prisma.postViews.upsert({
     *   create: {
     *     // ... data to create a PostViews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostViews we want to update
     *   }
     * })
     */
    upsert<T extends PostViewsUpsertArgs>(args: SelectSubset<T, PostViewsUpsertArgs<ExtArgs>>): Prisma__PostViewsClient<$Result.GetResult<Prisma.$PostViewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewsCountArgs} args - Arguments to filter PostViews to count.
     * @example
     * // Count the number of PostViews
     * const count = await prisma.postViews.count({
     *   where: {
     *     // ... the filter for the PostViews we want to count
     *   }
     * })
    **/
    count<T extends PostViewsCountArgs>(
      args?: Subset<T, PostViewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostViewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostViewsAggregateArgs>(args: Subset<T, PostViewsAggregateArgs>): Prisma.PrismaPromise<GetPostViewsAggregateType<T>>

    /**
     * Group by PostViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostViewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostViewsGroupByArgs['orderBy'] }
        : { orderBy?: PostViewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostViewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostViewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostViews model
   */
  readonly fields: PostViewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostViews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostViewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostViews model
   */
  interface PostViewsFieldRefs {
    readonly id: FieldRef<"PostViews", 'Int'>
    readonly postId: FieldRef<"PostViews", 'Int'>
    readonly viewedAt: FieldRef<"PostViews", 'DateTime'>
    readonly ip: FieldRef<"PostViews", 'String'>
    readonly userAgent: FieldRef<"PostViews", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostViews findUnique
   */
  export type PostViewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViews
     */
    select?: PostViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViews
     */
    omit?: PostViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewsInclude<ExtArgs> | null
    /**
     * Filter, which PostViews to fetch.
     */
    where: PostViewsWhereUniqueInput
  }

  /**
   * PostViews findUniqueOrThrow
   */
  export type PostViewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViews
     */
    select?: PostViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViews
     */
    omit?: PostViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewsInclude<ExtArgs> | null
    /**
     * Filter, which PostViews to fetch.
     */
    where: PostViewsWhereUniqueInput
  }

  /**
   * PostViews findFirst
   */
  export type PostViewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViews
     */
    select?: PostViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViews
     */
    omit?: PostViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewsInclude<ExtArgs> | null
    /**
     * Filter, which PostViews to fetch.
     */
    where?: PostViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViews to fetch.
     */
    orderBy?: PostViewsOrderByWithRelationInput | PostViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostViews.
     */
    cursor?: PostViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostViews.
     */
    distinct?: PostViewsScalarFieldEnum | PostViewsScalarFieldEnum[]
  }

  /**
   * PostViews findFirstOrThrow
   */
  export type PostViewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViews
     */
    select?: PostViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViews
     */
    omit?: PostViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewsInclude<ExtArgs> | null
    /**
     * Filter, which PostViews to fetch.
     */
    where?: PostViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViews to fetch.
     */
    orderBy?: PostViewsOrderByWithRelationInput | PostViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostViews.
     */
    cursor?: PostViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostViews.
     */
    distinct?: PostViewsScalarFieldEnum | PostViewsScalarFieldEnum[]
  }

  /**
   * PostViews findMany
   */
  export type PostViewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViews
     */
    select?: PostViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViews
     */
    omit?: PostViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewsInclude<ExtArgs> | null
    /**
     * Filter, which PostViews to fetch.
     */
    where?: PostViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViews to fetch.
     */
    orderBy?: PostViewsOrderByWithRelationInput | PostViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostViews.
     */
    cursor?: PostViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViews.
     */
    skip?: number
    distinct?: PostViewsScalarFieldEnum | PostViewsScalarFieldEnum[]
  }

  /**
   * PostViews create
   */
  export type PostViewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViews
     */
    select?: PostViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViews
     */
    omit?: PostViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewsInclude<ExtArgs> | null
    /**
     * The data needed to create a PostViews.
     */
    data: XOR<PostViewsCreateInput, PostViewsUncheckedCreateInput>
  }

  /**
   * PostViews createMany
   */
  export type PostViewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostViews.
     */
    data: PostViewsCreateManyInput | PostViewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostViews createManyAndReturn
   */
  export type PostViewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViews
     */
    select?: PostViewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostViews
     */
    omit?: PostViewsOmit<ExtArgs> | null
    /**
     * The data used to create many PostViews.
     */
    data: PostViewsCreateManyInput | PostViewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostViews update
   */
  export type PostViewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViews
     */
    select?: PostViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViews
     */
    omit?: PostViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewsInclude<ExtArgs> | null
    /**
     * The data needed to update a PostViews.
     */
    data: XOR<PostViewsUpdateInput, PostViewsUncheckedUpdateInput>
    /**
     * Choose, which PostViews to update.
     */
    where: PostViewsWhereUniqueInput
  }

  /**
   * PostViews updateMany
   */
  export type PostViewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostViews.
     */
    data: XOR<PostViewsUpdateManyMutationInput, PostViewsUncheckedUpdateManyInput>
    /**
     * Filter which PostViews to update
     */
    where?: PostViewsWhereInput
    /**
     * Limit how many PostViews to update.
     */
    limit?: number
  }

  /**
   * PostViews updateManyAndReturn
   */
  export type PostViewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViews
     */
    select?: PostViewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostViews
     */
    omit?: PostViewsOmit<ExtArgs> | null
    /**
     * The data used to update PostViews.
     */
    data: XOR<PostViewsUpdateManyMutationInput, PostViewsUncheckedUpdateManyInput>
    /**
     * Filter which PostViews to update
     */
    where?: PostViewsWhereInput
    /**
     * Limit how many PostViews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostViews upsert
   */
  export type PostViewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViews
     */
    select?: PostViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViews
     */
    omit?: PostViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewsInclude<ExtArgs> | null
    /**
     * The filter to search for the PostViews to update in case it exists.
     */
    where: PostViewsWhereUniqueInput
    /**
     * In case the PostViews found by the `where` argument doesn't exist, create a new PostViews with this data.
     */
    create: XOR<PostViewsCreateInput, PostViewsUncheckedCreateInput>
    /**
     * In case the PostViews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostViewsUpdateInput, PostViewsUncheckedUpdateInput>
  }

  /**
   * PostViews delete
   */
  export type PostViewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViews
     */
    select?: PostViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViews
     */
    omit?: PostViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewsInclude<ExtArgs> | null
    /**
     * Filter which PostViews to delete.
     */
    where: PostViewsWhereUniqueInput
  }

  /**
   * PostViews deleteMany
   */
  export type PostViewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostViews to delete
     */
    where?: PostViewsWhereInput
    /**
     * Limit how many PostViews to delete.
     */
    limit?: number
  }

  /**
   * PostViews without action
   */
  export type PostViewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViews
     */
    select?: PostViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViews
     */
    omit?: PostViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewsInclude<ExtArgs> | null
  }


  /**
   * Model UserViews
   */

  export type AggregateUserViews = {
    _count: UserViewsCountAggregateOutputType | null
    _avg: UserViewsAvgAggregateOutputType | null
    _sum: UserViewsSumAggregateOutputType | null
    _min: UserViewsMinAggregateOutputType | null
    _max: UserViewsMaxAggregateOutputType | null
  }

  export type UserViewsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserViewsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserViewsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    viewedAt: Date | null
    ip: string | null
    userAgent: string | null
  }

  export type UserViewsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    viewedAt: Date | null
    ip: string | null
    userAgent: string | null
  }

  export type UserViewsCountAggregateOutputType = {
    id: number
    userId: number
    viewedAt: number
    ip: number
    userAgent: number
    _all: number
  }


  export type UserViewsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserViewsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserViewsMinAggregateInputType = {
    id?: true
    userId?: true
    viewedAt?: true
    ip?: true
    userAgent?: true
  }

  export type UserViewsMaxAggregateInputType = {
    id?: true
    userId?: true
    viewedAt?: true
    ip?: true
    userAgent?: true
  }

  export type UserViewsCountAggregateInputType = {
    id?: true
    userId?: true
    viewedAt?: true
    ip?: true
    userAgent?: true
    _all?: true
  }

  export type UserViewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserViews to aggregate.
     */
    where?: UserViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserViews to fetch.
     */
    orderBy?: UserViewsOrderByWithRelationInput | UserViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserViews
    **/
    _count?: true | UserViewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserViewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserViewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserViewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserViewsMaxAggregateInputType
  }

  export type GetUserViewsAggregateType<T extends UserViewsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserViews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserViews[P]>
      : GetScalarType<T[P], AggregateUserViews[P]>
  }




  export type UserViewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserViewsWhereInput
    orderBy?: UserViewsOrderByWithAggregationInput | UserViewsOrderByWithAggregationInput[]
    by: UserViewsScalarFieldEnum[] | UserViewsScalarFieldEnum
    having?: UserViewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserViewsCountAggregateInputType | true
    _avg?: UserViewsAvgAggregateInputType
    _sum?: UserViewsSumAggregateInputType
    _min?: UserViewsMinAggregateInputType
    _max?: UserViewsMaxAggregateInputType
  }

  export type UserViewsGroupByOutputType = {
    id: number
    userId: number
    viewedAt: Date
    ip: string | null
    userAgent: string | null
    _count: UserViewsCountAggregateOutputType | null
    _avg: UserViewsAvgAggregateOutputType | null
    _sum: UserViewsSumAggregateOutputType | null
    _min: UserViewsMinAggregateOutputType | null
    _max: UserViewsMaxAggregateOutputType | null
  }

  type GetUserViewsGroupByPayload<T extends UserViewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserViewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserViewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserViewsGroupByOutputType[P]>
            : GetScalarType<T[P], UserViewsGroupByOutputType[P]>
        }
      >
    >


  export type UserViewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    viewedAt?: boolean
    ip?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userViews"]>

  export type UserViewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    viewedAt?: boolean
    ip?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userViews"]>

  export type UserViewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    viewedAt?: boolean
    ip?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userViews"]>

  export type UserViewsSelectScalar = {
    id?: boolean
    userId?: boolean
    viewedAt?: boolean
    ip?: boolean
    userAgent?: boolean
  }

  export type UserViewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "viewedAt" | "ip" | "userAgent", ExtArgs["result"]["userViews"]>
  export type UserViewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserViewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserViewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserViewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserViews"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      viewedAt: Date
      ip: string | null
      userAgent: string | null
    }, ExtArgs["result"]["userViews"]>
    composites: {}
  }

  type UserViewsGetPayload<S extends boolean | null | undefined | UserViewsDefaultArgs> = $Result.GetResult<Prisma.$UserViewsPayload, S>

  type UserViewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserViewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserViewsCountAggregateInputType | true
    }

  export interface UserViewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserViews'], meta: { name: 'UserViews' } }
    /**
     * Find zero or one UserViews that matches the filter.
     * @param {UserViewsFindUniqueArgs} args - Arguments to find a UserViews
     * @example
     * // Get one UserViews
     * const userViews = await prisma.userViews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserViewsFindUniqueArgs>(args: SelectSubset<T, UserViewsFindUniqueArgs<ExtArgs>>): Prisma__UserViewsClient<$Result.GetResult<Prisma.$UserViewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserViews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserViewsFindUniqueOrThrowArgs} args - Arguments to find a UserViews
     * @example
     * // Get one UserViews
     * const userViews = await prisma.userViews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserViewsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserViewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserViewsClient<$Result.GetResult<Prisma.$UserViewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewsFindFirstArgs} args - Arguments to find a UserViews
     * @example
     * // Get one UserViews
     * const userViews = await prisma.userViews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserViewsFindFirstArgs>(args?: SelectSubset<T, UserViewsFindFirstArgs<ExtArgs>>): Prisma__UserViewsClient<$Result.GetResult<Prisma.$UserViewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserViews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewsFindFirstOrThrowArgs} args - Arguments to find a UserViews
     * @example
     * // Get one UserViews
     * const userViews = await prisma.userViews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserViewsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserViewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserViewsClient<$Result.GetResult<Prisma.$UserViewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserViews
     * const userViews = await prisma.userViews.findMany()
     * 
     * // Get first 10 UserViews
     * const userViews = await prisma.userViews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userViewsWithIdOnly = await prisma.userViews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserViewsFindManyArgs>(args?: SelectSubset<T, UserViewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserViews.
     * @param {UserViewsCreateArgs} args - Arguments to create a UserViews.
     * @example
     * // Create one UserViews
     * const UserViews = await prisma.userViews.create({
     *   data: {
     *     // ... data to create a UserViews
     *   }
     * })
     * 
     */
    create<T extends UserViewsCreateArgs>(args: SelectSubset<T, UserViewsCreateArgs<ExtArgs>>): Prisma__UserViewsClient<$Result.GetResult<Prisma.$UserViewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserViews.
     * @param {UserViewsCreateManyArgs} args - Arguments to create many UserViews.
     * @example
     * // Create many UserViews
     * const userViews = await prisma.userViews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserViewsCreateManyArgs>(args?: SelectSubset<T, UserViewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserViews and returns the data saved in the database.
     * @param {UserViewsCreateManyAndReturnArgs} args - Arguments to create many UserViews.
     * @example
     * // Create many UserViews
     * const userViews = await prisma.userViews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserViews and only return the `id`
     * const userViewsWithIdOnly = await prisma.userViews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserViewsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserViewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserViewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserViews.
     * @param {UserViewsDeleteArgs} args - Arguments to delete one UserViews.
     * @example
     * // Delete one UserViews
     * const UserViews = await prisma.userViews.delete({
     *   where: {
     *     // ... filter to delete one UserViews
     *   }
     * })
     * 
     */
    delete<T extends UserViewsDeleteArgs>(args: SelectSubset<T, UserViewsDeleteArgs<ExtArgs>>): Prisma__UserViewsClient<$Result.GetResult<Prisma.$UserViewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserViews.
     * @param {UserViewsUpdateArgs} args - Arguments to update one UserViews.
     * @example
     * // Update one UserViews
     * const userViews = await prisma.userViews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserViewsUpdateArgs>(args: SelectSubset<T, UserViewsUpdateArgs<ExtArgs>>): Prisma__UserViewsClient<$Result.GetResult<Prisma.$UserViewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserViews.
     * @param {UserViewsDeleteManyArgs} args - Arguments to filter UserViews to delete.
     * @example
     * // Delete a few UserViews
     * const { count } = await prisma.userViews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserViewsDeleteManyArgs>(args?: SelectSubset<T, UserViewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserViews
     * const userViews = await prisma.userViews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserViewsUpdateManyArgs>(args: SelectSubset<T, UserViewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserViews and returns the data updated in the database.
     * @param {UserViewsUpdateManyAndReturnArgs} args - Arguments to update many UserViews.
     * @example
     * // Update many UserViews
     * const userViews = await prisma.userViews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserViews and only return the `id`
     * const userViewsWithIdOnly = await prisma.userViews.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserViewsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserViewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserViewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserViews.
     * @param {UserViewsUpsertArgs} args - Arguments to update or create a UserViews.
     * @example
     * // Update or create a UserViews
     * const userViews = await prisma.userViews.upsert({
     *   create: {
     *     // ... data to create a UserViews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserViews we want to update
     *   }
     * })
     */
    upsert<T extends UserViewsUpsertArgs>(args: SelectSubset<T, UserViewsUpsertArgs<ExtArgs>>): Prisma__UserViewsClient<$Result.GetResult<Prisma.$UserViewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewsCountArgs} args - Arguments to filter UserViews to count.
     * @example
     * // Count the number of UserViews
     * const count = await prisma.userViews.count({
     *   where: {
     *     // ... the filter for the UserViews we want to count
     *   }
     * })
    **/
    count<T extends UserViewsCountArgs>(
      args?: Subset<T, UserViewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserViewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserViewsAggregateArgs>(args: Subset<T, UserViewsAggregateArgs>): Prisma.PrismaPromise<GetUserViewsAggregateType<T>>

    /**
     * Group by UserViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserViewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserViewsGroupByArgs['orderBy'] }
        : { orderBy?: UserViewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserViewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserViewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserViews model
   */
  readonly fields: UserViewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserViews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserViewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserViews model
   */
  interface UserViewsFieldRefs {
    readonly id: FieldRef<"UserViews", 'Int'>
    readonly userId: FieldRef<"UserViews", 'Int'>
    readonly viewedAt: FieldRef<"UserViews", 'DateTime'>
    readonly ip: FieldRef<"UserViews", 'String'>
    readonly userAgent: FieldRef<"UserViews", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserViews findUnique
   */
  export type UserViewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViews
     */
    select?: UserViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViews
     */
    omit?: UserViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewsInclude<ExtArgs> | null
    /**
     * Filter, which UserViews to fetch.
     */
    where: UserViewsWhereUniqueInput
  }

  /**
   * UserViews findUniqueOrThrow
   */
  export type UserViewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViews
     */
    select?: UserViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViews
     */
    omit?: UserViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewsInclude<ExtArgs> | null
    /**
     * Filter, which UserViews to fetch.
     */
    where: UserViewsWhereUniqueInput
  }

  /**
   * UserViews findFirst
   */
  export type UserViewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViews
     */
    select?: UserViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViews
     */
    omit?: UserViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewsInclude<ExtArgs> | null
    /**
     * Filter, which UserViews to fetch.
     */
    where?: UserViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserViews to fetch.
     */
    orderBy?: UserViewsOrderByWithRelationInput | UserViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserViews.
     */
    cursor?: UserViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserViews.
     */
    distinct?: UserViewsScalarFieldEnum | UserViewsScalarFieldEnum[]
  }

  /**
   * UserViews findFirstOrThrow
   */
  export type UserViewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViews
     */
    select?: UserViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViews
     */
    omit?: UserViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewsInclude<ExtArgs> | null
    /**
     * Filter, which UserViews to fetch.
     */
    where?: UserViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserViews to fetch.
     */
    orderBy?: UserViewsOrderByWithRelationInput | UserViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserViews.
     */
    cursor?: UserViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserViews.
     */
    distinct?: UserViewsScalarFieldEnum | UserViewsScalarFieldEnum[]
  }

  /**
   * UserViews findMany
   */
  export type UserViewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViews
     */
    select?: UserViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViews
     */
    omit?: UserViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewsInclude<ExtArgs> | null
    /**
     * Filter, which UserViews to fetch.
     */
    where?: UserViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserViews to fetch.
     */
    orderBy?: UserViewsOrderByWithRelationInput | UserViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserViews.
     */
    cursor?: UserViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserViews.
     */
    skip?: number
    distinct?: UserViewsScalarFieldEnum | UserViewsScalarFieldEnum[]
  }

  /**
   * UserViews create
   */
  export type UserViewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViews
     */
    select?: UserViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViews
     */
    omit?: UserViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserViews.
     */
    data: XOR<UserViewsCreateInput, UserViewsUncheckedCreateInput>
  }

  /**
   * UserViews createMany
   */
  export type UserViewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserViews.
     */
    data: UserViewsCreateManyInput | UserViewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserViews createManyAndReturn
   */
  export type UserViewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViews
     */
    select?: UserViewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserViews
     */
    omit?: UserViewsOmit<ExtArgs> | null
    /**
     * The data used to create many UserViews.
     */
    data: UserViewsCreateManyInput | UserViewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserViews update
   */
  export type UserViewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViews
     */
    select?: UserViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViews
     */
    omit?: UserViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserViews.
     */
    data: XOR<UserViewsUpdateInput, UserViewsUncheckedUpdateInput>
    /**
     * Choose, which UserViews to update.
     */
    where: UserViewsWhereUniqueInput
  }

  /**
   * UserViews updateMany
   */
  export type UserViewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserViews.
     */
    data: XOR<UserViewsUpdateManyMutationInput, UserViewsUncheckedUpdateManyInput>
    /**
     * Filter which UserViews to update
     */
    where?: UserViewsWhereInput
    /**
     * Limit how many UserViews to update.
     */
    limit?: number
  }

  /**
   * UserViews updateManyAndReturn
   */
  export type UserViewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViews
     */
    select?: UserViewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserViews
     */
    omit?: UserViewsOmit<ExtArgs> | null
    /**
     * The data used to update UserViews.
     */
    data: XOR<UserViewsUpdateManyMutationInput, UserViewsUncheckedUpdateManyInput>
    /**
     * Filter which UserViews to update
     */
    where?: UserViewsWhereInput
    /**
     * Limit how many UserViews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserViews upsert
   */
  export type UserViewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViews
     */
    select?: UserViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViews
     */
    omit?: UserViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserViews to update in case it exists.
     */
    where: UserViewsWhereUniqueInput
    /**
     * In case the UserViews found by the `where` argument doesn't exist, create a new UserViews with this data.
     */
    create: XOR<UserViewsCreateInput, UserViewsUncheckedCreateInput>
    /**
     * In case the UserViews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserViewsUpdateInput, UserViewsUncheckedUpdateInput>
  }

  /**
   * UserViews delete
   */
  export type UserViewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViews
     */
    select?: UserViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViews
     */
    omit?: UserViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewsInclude<ExtArgs> | null
    /**
     * Filter which UserViews to delete.
     */
    where: UserViewsWhereUniqueInput
  }

  /**
   * UserViews deleteMany
   */
  export type UserViewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserViews to delete
     */
    where?: UserViewsWhereInput
    /**
     * Limit how many UserViews to delete.
     */
    limit?: number
  }

  /**
   * UserViews without action
   */
  export type UserViewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViews
     */
    select?: UserViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViews
     */
    omit?: UserViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    userIcon: 'userIcon',
    userProfile: 'userProfile'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    image1: 'image1',
    description1: 'description1',
    image2: 'image2',
    description2: 'description2',
    image3: 'image3',
    description3: 'description3',
    image4: 'image4',
    description4: 'description4',
    image5: 'image5',
    description5: 'description5',
    likeCount: 'likeCount',
    location: 'location',
    googlePlace: 'googlePlace',
    lat: 'lat',
    lon: 'lon',
    category: 'category',
    published: 'published',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostLikesScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type PostLikesScalarFieldEnum = (typeof PostLikesScalarFieldEnum)[keyof typeof PostLikesScalarFieldEnum]


  export const PostCommentsScalarFieldEnum: {
    commentId: 'commentId',
    comment: 'comment',
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type PostCommentsScalarFieldEnum = (typeof PostCommentsScalarFieldEnum)[keyof typeof PostCommentsScalarFieldEnum]


  export const PostViewsScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    viewedAt: 'viewedAt',
    ip: 'ip',
    userAgent: 'userAgent'
  };

  export type PostViewsScalarFieldEnum = (typeof PostViewsScalarFieldEnum)[keyof typeof PostViewsScalarFieldEnum]


  export const UserViewsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    viewedAt: 'viewedAt',
    ip: 'ip',
    userAgent: 'userAgent'
  };

  export type UserViewsScalarFieldEnum = (typeof UserViewsScalarFieldEnum)[keyof typeof UserViewsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    userIcon?: StringFilter<"User"> | string
    userProfile?: StringNullableFilter<"User"> | string | null
    posts?: PostListRelationFilter
    postComments?: PostCommentsListRelationFilter
    postLikes?: PostLikesListRelationFilter
    profileViews?: UserViewsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    userIcon?: SortOrder
    userProfile?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
    postComments?: PostCommentsOrderByRelationAggregateInput
    postLikes?: PostLikesOrderByRelationAggregateInput
    profileViews?: UserViewsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    userIcon?: StringFilter<"User"> | string
    userProfile?: StringNullableFilter<"User"> | string | null
    posts?: PostListRelationFilter
    postComments?: PostCommentsListRelationFilter
    postLikes?: PostLikesListRelationFilter
    profileViews?: UserViewsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    userIcon?: SortOrder
    userProfile?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    userIcon?: StringWithAggregatesFilter<"User"> | string
    userProfile?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    title?: StringFilter<"Post"> | string
    image1?: StringNullableFilter<"Post"> | string | null
    description1?: StringNullableFilter<"Post"> | string | null
    image2?: StringNullableFilter<"Post"> | string | null
    description2?: StringNullableFilter<"Post"> | string | null
    image3?: StringNullableFilter<"Post"> | string | null
    description3?: StringNullableFilter<"Post"> | string | null
    image4?: StringNullableFilter<"Post"> | string | null
    description4?: StringNullableFilter<"Post"> | string | null
    image5?: StringNullableFilter<"Post"> | string | null
    description5?: StringNullableFilter<"Post"> | string | null
    likeCount?: IntFilter<"Post"> | number
    location?: StringNullableFilter<"Post"> | string | null
    googlePlace?: StringNullableFilter<"Post"> | string | null
    lat?: FloatNullableFilter<"Post"> | number | null
    lon?: FloatNullableFilter<"Post"> | number | null
    category?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntFilter<"Post"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: PostCommentsListRelationFilter
    likes?: PostLikesListRelationFilter
    views?: PostViewsListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    image1?: SortOrderInput | SortOrder
    description1?: SortOrderInput | SortOrder
    image2?: SortOrderInput | SortOrder
    description2?: SortOrderInput | SortOrder
    image3?: SortOrderInput | SortOrder
    description3?: SortOrderInput | SortOrder
    image4?: SortOrderInput | SortOrder
    description4?: SortOrderInput | SortOrder
    image5?: SortOrderInput | SortOrder
    description5?: SortOrderInput | SortOrder
    likeCount?: SortOrder
    location?: SortOrderInput | SortOrder
    googlePlace?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lon?: SortOrderInput | SortOrder
    category?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
    comments?: PostCommentsOrderByRelationAggregateInput
    likes?: PostLikesOrderByRelationAggregateInput
    views?: PostViewsOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    title?: StringFilter<"Post"> | string
    image1?: StringNullableFilter<"Post"> | string | null
    description1?: StringNullableFilter<"Post"> | string | null
    image2?: StringNullableFilter<"Post"> | string | null
    description2?: StringNullableFilter<"Post"> | string | null
    image3?: StringNullableFilter<"Post"> | string | null
    description3?: StringNullableFilter<"Post"> | string | null
    image4?: StringNullableFilter<"Post"> | string | null
    description4?: StringNullableFilter<"Post"> | string | null
    image5?: StringNullableFilter<"Post"> | string | null
    description5?: StringNullableFilter<"Post"> | string | null
    likeCount?: IntFilter<"Post"> | number
    location?: StringNullableFilter<"Post"> | string | null
    googlePlace?: StringNullableFilter<"Post"> | string | null
    lat?: FloatNullableFilter<"Post"> | number | null
    lon?: FloatNullableFilter<"Post"> | number | null
    category?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntFilter<"Post"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: PostCommentsListRelationFilter
    likes?: PostLikesListRelationFilter
    views?: PostViewsListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    image1?: SortOrderInput | SortOrder
    description1?: SortOrderInput | SortOrder
    image2?: SortOrderInput | SortOrder
    description2?: SortOrderInput | SortOrder
    image3?: SortOrderInput | SortOrder
    description3?: SortOrderInput | SortOrder
    image4?: SortOrderInput | SortOrder
    description4?: SortOrderInput | SortOrder
    image5?: SortOrderInput | SortOrder
    description5?: SortOrderInput | SortOrder
    likeCount?: SortOrder
    location?: SortOrderInput | SortOrder
    googlePlace?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lon?: SortOrderInput | SortOrder
    category?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    title?: StringWithAggregatesFilter<"Post"> | string
    image1?: StringNullableWithAggregatesFilter<"Post"> | string | null
    description1?: StringNullableWithAggregatesFilter<"Post"> | string | null
    image2?: StringNullableWithAggregatesFilter<"Post"> | string | null
    description2?: StringNullableWithAggregatesFilter<"Post"> | string | null
    image3?: StringNullableWithAggregatesFilter<"Post"> | string | null
    description3?: StringNullableWithAggregatesFilter<"Post"> | string | null
    image4?: StringNullableWithAggregatesFilter<"Post"> | string | null
    description4?: StringNullableWithAggregatesFilter<"Post"> | string | null
    image5?: StringNullableWithAggregatesFilter<"Post"> | string | null
    description5?: StringNullableWithAggregatesFilter<"Post"> | string | null
    likeCount?: IntWithAggregatesFilter<"Post"> | number
    location?: StringNullableWithAggregatesFilter<"Post"> | string | null
    googlePlace?: StringNullableWithAggregatesFilter<"Post"> | string | null
    lat?: FloatNullableWithAggregatesFilter<"Post"> | number | null
    lon?: FloatNullableWithAggregatesFilter<"Post"> | number | null
    category?: StringWithAggregatesFilter<"Post"> | string
    published?: BoolWithAggregatesFilter<"Post"> | boolean
    authorId?: IntWithAggregatesFilter<"Post"> | number
  }

  export type PostLikesWhereInput = {
    AND?: PostLikesWhereInput | PostLikesWhereInput[]
    OR?: PostLikesWhereInput[]
    NOT?: PostLikesWhereInput | PostLikesWhereInput[]
    id?: IntFilter<"PostLikes"> | number
    postId?: IntFilter<"PostLikes"> | number
    userId?: IntFilter<"PostLikes"> | number
    createdAt?: DateTimeFilter<"PostLikes"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostLikesOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PostLikesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    postId_userId?: PostLikesPostIdUserIdCompoundUniqueInput
    AND?: PostLikesWhereInput | PostLikesWhereInput[]
    OR?: PostLikesWhereInput[]
    NOT?: PostLikesWhereInput | PostLikesWhereInput[]
    postId?: IntFilter<"PostLikes"> | number
    userId?: IntFilter<"PostLikes"> | number
    createdAt?: DateTimeFilter<"PostLikes"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "postId_userId">

  export type PostLikesOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: PostLikesCountOrderByAggregateInput
    _avg?: PostLikesAvgOrderByAggregateInput
    _max?: PostLikesMaxOrderByAggregateInput
    _min?: PostLikesMinOrderByAggregateInput
    _sum?: PostLikesSumOrderByAggregateInput
  }

  export type PostLikesScalarWhereWithAggregatesInput = {
    AND?: PostLikesScalarWhereWithAggregatesInput | PostLikesScalarWhereWithAggregatesInput[]
    OR?: PostLikesScalarWhereWithAggregatesInput[]
    NOT?: PostLikesScalarWhereWithAggregatesInput | PostLikesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostLikes"> | number
    postId?: IntWithAggregatesFilter<"PostLikes"> | number
    userId?: IntWithAggregatesFilter<"PostLikes"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PostLikes"> | Date | string
  }

  export type PostCommentsWhereInput = {
    AND?: PostCommentsWhereInput | PostCommentsWhereInput[]
    OR?: PostCommentsWhereInput[]
    NOT?: PostCommentsWhereInput | PostCommentsWhereInput[]
    commentId?: IntFilter<"PostComments"> | number
    comment?: StringFilter<"PostComments"> | string
    postId?: IntFilter<"PostComments"> | number
    userId?: IntFilter<"PostComments"> | number
    createdAt?: DateTimeFilter<"PostComments"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostCommentsOrderByWithRelationInput = {
    commentId?: SortOrder
    comment?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PostCommentsWhereUniqueInput = Prisma.AtLeast<{
    commentId?: number
    AND?: PostCommentsWhereInput | PostCommentsWhereInput[]
    OR?: PostCommentsWhereInput[]
    NOT?: PostCommentsWhereInput | PostCommentsWhereInput[]
    comment?: StringFilter<"PostComments"> | string
    postId?: IntFilter<"PostComments"> | number
    userId?: IntFilter<"PostComments"> | number
    createdAt?: DateTimeFilter<"PostComments"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "commentId">

  export type PostCommentsOrderByWithAggregationInput = {
    commentId?: SortOrder
    comment?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: PostCommentsCountOrderByAggregateInput
    _avg?: PostCommentsAvgOrderByAggregateInput
    _max?: PostCommentsMaxOrderByAggregateInput
    _min?: PostCommentsMinOrderByAggregateInput
    _sum?: PostCommentsSumOrderByAggregateInput
  }

  export type PostCommentsScalarWhereWithAggregatesInput = {
    AND?: PostCommentsScalarWhereWithAggregatesInput | PostCommentsScalarWhereWithAggregatesInput[]
    OR?: PostCommentsScalarWhereWithAggregatesInput[]
    NOT?: PostCommentsScalarWhereWithAggregatesInput | PostCommentsScalarWhereWithAggregatesInput[]
    commentId?: IntWithAggregatesFilter<"PostComments"> | number
    comment?: StringWithAggregatesFilter<"PostComments"> | string
    postId?: IntWithAggregatesFilter<"PostComments"> | number
    userId?: IntWithAggregatesFilter<"PostComments"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PostComments"> | Date | string
  }

  export type PostViewsWhereInput = {
    AND?: PostViewsWhereInput | PostViewsWhereInput[]
    OR?: PostViewsWhereInput[]
    NOT?: PostViewsWhereInput | PostViewsWhereInput[]
    id?: IntFilter<"PostViews"> | number
    postId?: IntFilter<"PostViews"> | number
    viewedAt?: DateTimeFilter<"PostViews"> | Date | string
    ip?: StringNullableFilter<"PostViews"> | string | null
    userAgent?: StringNullableFilter<"PostViews"> | string | null
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostViewsOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    viewedAt?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type PostViewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostViewsWhereInput | PostViewsWhereInput[]
    OR?: PostViewsWhereInput[]
    NOT?: PostViewsWhereInput | PostViewsWhereInput[]
    postId?: IntFilter<"PostViews"> | number
    viewedAt?: DateTimeFilter<"PostViews"> | Date | string
    ip?: StringNullableFilter<"PostViews"> | string | null
    userAgent?: StringNullableFilter<"PostViews"> | string | null
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type PostViewsOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    viewedAt?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    _count?: PostViewsCountOrderByAggregateInput
    _avg?: PostViewsAvgOrderByAggregateInput
    _max?: PostViewsMaxOrderByAggregateInput
    _min?: PostViewsMinOrderByAggregateInput
    _sum?: PostViewsSumOrderByAggregateInput
  }

  export type PostViewsScalarWhereWithAggregatesInput = {
    AND?: PostViewsScalarWhereWithAggregatesInput | PostViewsScalarWhereWithAggregatesInput[]
    OR?: PostViewsScalarWhereWithAggregatesInput[]
    NOT?: PostViewsScalarWhereWithAggregatesInput | PostViewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostViews"> | number
    postId?: IntWithAggregatesFilter<"PostViews"> | number
    viewedAt?: DateTimeWithAggregatesFilter<"PostViews"> | Date | string
    ip?: StringNullableWithAggregatesFilter<"PostViews"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"PostViews"> | string | null
  }

  export type UserViewsWhereInput = {
    AND?: UserViewsWhereInput | UserViewsWhereInput[]
    OR?: UserViewsWhereInput[]
    NOT?: UserViewsWhereInput | UserViewsWhereInput[]
    id?: IntFilter<"UserViews"> | number
    userId?: IntFilter<"UserViews"> | number
    viewedAt?: DateTimeFilter<"UserViews"> | Date | string
    ip?: StringNullableFilter<"UserViews"> | string | null
    userAgent?: StringNullableFilter<"UserViews"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserViewsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserViewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserViewsWhereInput | UserViewsWhereInput[]
    OR?: UserViewsWhereInput[]
    NOT?: UserViewsWhereInput | UserViewsWhereInput[]
    userId?: IntFilter<"UserViews"> | number
    viewedAt?: DateTimeFilter<"UserViews"> | Date | string
    ip?: StringNullableFilter<"UserViews"> | string | null
    userAgent?: StringNullableFilter<"UserViews"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserViewsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    _count?: UserViewsCountOrderByAggregateInput
    _avg?: UserViewsAvgOrderByAggregateInput
    _max?: UserViewsMaxOrderByAggregateInput
    _min?: UserViewsMinOrderByAggregateInput
    _sum?: UserViewsSumOrderByAggregateInput
  }

  export type UserViewsScalarWhereWithAggregatesInput = {
    AND?: UserViewsScalarWhereWithAggregatesInput | UserViewsScalarWhereWithAggregatesInput[]
    OR?: UserViewsScalarWhereWithAggregatesInput[]
    NOT?: UserViewsScalarWhereWithAggregatesInput | UserViewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserViews"> | number
    userId?: IntWithAggregatesFilter<"UserViews"> | number
    viewedAt?: DateTimeWithAggregatesFilter<"UserViews"> | Date | string
    ip?: StringNullableWithAggregatesFilter<"UserViews"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"UserViews"> | string | null
  }

  export type UserCreateInput = {
    email: string
    name: string
    password: string
    userIcon: string
    userProfile?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
    postComments?: PostCommentsCreateNestedManyWithoutUserInput
    postLikes?: PostLikesCreateNestedManyWithoutUserInput
    profileViews?: UserViewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    password: string
    userIcon: string
    userProfile?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    postComments?: PostCommentsUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput
    profileViews?: UserViewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userIcon?: StringFieldUpdateOperationsInput | string
    userProfile?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
    postComments?: PostCommentsUpdateManyWithoutUserNestedInput
    postLikes?: PostLikesUpdateManyWithoutUserNestedInput
    profileViews?: UserViewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userIcon?: StringFieldUpdateOperationsInput | string
    userProfile?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    postComments?: PostCommentsUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput
    profileViews?: UserViewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    password: string
    userIcon: string
    userProfile?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userIcon?: StringFieldUpdateOperationsInput | string
    userProfile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userIcon?: StringFieldUpdateOperationsInput | string
    userProfile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image1?: string | null
    description1?: string | null
    image2?: string | null
    description2?: string | null
    image3?: string | null
    description3?: string | null
    image4?: string | null
    description4?: string | null
    image5?: string | null
    description5?: string | null
    likeCount?: number
    location?: string | null
    googlePlace?: string | null
    lat?: number | null
    lon?: number | null
    category?: string
    published?: boolean
    author: UserCreateNestedOneWithoutPostsInput
    comments?: PostCommentsCreateNestedManyWithoutPostInput
    likes?: PostLikesCreateNestedManyWithoutPostInput
    views?: PostViewsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image1?: string | null
    description1?: string | null
    image2?: string | null
    description2?: string | null
    image3?: string | null
    description3?: string | null
    image4?: string | null
    description4?: string | null
    image5?: string | null
    description5?: string | null
    likeCount?: number
    location?: string | null
    googlePlace?: string | null
    lat?: number | null
    lon?: number | null
    category?: string
    published?: boolean
    authorId: number
    comments?: PostCommentsUncheckedCreateNestedManyWithoutPostInput
    likes?: PostLikesUncheckedCreateNestedManyWithoutPostInput
    views?: PostViewsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    description1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    description4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    description5?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googlePlace?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: PostCommentsUpdateManyWithoutPostNestedInput
    likes?: PostLikesUpdateManyWithoutPostNestedInput
    views?: PostViewsUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    description1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    description4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    description5?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googlePlace?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    comments?: PostCommentsUncheckedUpdateManyWithoutPostNestedInput
    likes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput
    views?: PostViewsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image1?: string | null
    description1?: string | null
    image2?: string | null
    description2?: string | null
    image3?: string | null
    description3?: string | null
    image4?: string | null
    description4?: string | null
    image5?: string | null
    description5?: string | null
    likeCount?: number
    location?: string | null
    googlePlace?: string | null
    lat?: number | null
    lon?: number | null
    category?: string
    published?: boolean
    authorId: number
  }

  export type PostUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    description1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    description4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    description5?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googlePlace?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    description1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    description4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    description5?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googlePlace?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type PostLikesCreateInput = {
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutPostLikesInput
  }

  export type PostLikesUncheckedCreateInput = {
    id?: number
    postId: number
    userId: number
    createdAt?: Date | string
  }

  export type PostLikesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutPostLikesNestedInput
  }

  export type PostLikesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesCreateManyInput = {
    id?: number
    postId: number
    userId: number
    createdAt?: Date | string
  }

  export type PostLikesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsCreateInput = {
    comment: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutPostCommentsInput
  }

  export type PostCommentsUncheckedCreateInput = {
    commentId?: number
    comment: string
    postId: number
    userId: number
    createdAt?: Date | string
  }

  export type PostCommentsUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutPostCommentsNestedInput
  }

  export type PostCommentsUncheckedUpdateInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsCreateManyInput = {
    commentId?: number
    comment: string
    postId: number
    userId: number
    createdAt?: Date | string
  }

  export type PostCommentsUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsUncheckedUpdateManyInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostViewsCreateInput = {
    viewedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
    post: PostCreateNestedOneWithoutViewsInput
  }

  export type PostViewsUncheckedCreateInput = {
    id?: number
    postId: number
    viewedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type PostViewsUpdateInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    post?: PostUpdateOneRequiredWithoutViewsNestedInput
  }

  export type PostViewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostViewsCreateManyInput = {
    id?: number
    postId: number
    viewedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type PostViewsUpdateManyMutationInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostViewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserViewsCreateInput = {
    viewedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutProfileViewsInput
  }

  export type UserViewsUncheckedCreateInput = {
    id?: number
    userId: number
    viewedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type UserViewsUpdateInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileViewsNestedInput
  }

  export type UserViewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserViewsCreateManyInput = {
    id?: number
    userId: number
    viewedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type UserViewsUpdateManyMutationInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserViewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostCommentsListRelationFilter = {
    every?: PostCommentsWhereInput
    some?: PostCommentsWhereInput
    none?: PostCommentsWhereInput
  }

  export type PostLikesListRelationFilter = {
    every?: PostLikesWhereInput
    some?: PostLikesWhereInput
    none?: PostLikesWhereInput
  }

  export type UserViewsListRelationFilter = {
    every?: UserViewsWhereInput
    some?: UserViewsWhereInput
    none?: UserViewsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostLikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserViewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    userIcon?: SortOrder
    userProfile?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    userIcon?: SortOrder
    userProfile?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    userIcon?: SortOrder
    userProfile?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostViewsListRelationFilter = {
    every?: PostViewsWhereInput
    some?: PostViewsWhereInput
    none?: PostViewsWhereInput
  }

  export type PostViewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    image1?: SortOrder
    description1?: SortOrder
    image2?: SortOrder
    description2?: SortOrder
    image3?: SortOrder
    description3?: SortOrder
    image4?: SortOrder
    description4?: SortOrder
    image5?: SortOrder
    description5?: SortOrder
    likeCount?: SortOrder
    location?: SortOrder
    googlePlace?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    category?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    likeCount?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    image1?: SortOrder
    description1?: SortOrder
    image2?: SortOrder
    description2?: SortOrder
    image3?: SortOrder
    description3?: SortOrder
    image4?: SortOrder
    description4?: SortOrder
    image5?: SortOrder
    description5?: SortOrder
    likeCount?: SortOrder
    location?: SortOrder
    googlePlace?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    category?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    image1?: SortOrder
    description1?: SortOrder
    image2?: SortOrder
    description2?: SortOrder
    image3?: SortOrder
    description3?: SortOrder
    image4?: SortOrder
    description4?: SortOrder
    image5?: SortOrder
    description5?: SortOrder
    likeCount?: SortOrder
    location?: SortOrder
    googlePlace?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    category?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    likeCount?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    authorId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostLikesPostIdUserIdCompoundUniqueInput = {
    postId: number
    userId: number
  }

  export type PostLikesCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostLikesAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostLikesMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostLikesMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostLikesSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostCommentsCountOrderByAggregateInput = {
    commentId?: SortOrder
    comment?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostCommentsAvgOrderByAggregateInput = {
    commentId?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostCommentsMaxOrderByAggregateInput = {
    commentId?: SortOrder
    comment?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostCommentsMinOrderByAggregateInput = {
    commentId?: SortOrder
    comment?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostCommentsSumOrderByAggregateInput = {
    commentId?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostViewsCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    viewedAt?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type PostViewsAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type PostViewsMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    viewedAt?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type PostViewsMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    viewedAt?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type PostViewsSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type UserViewsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type UserViewsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserViewsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type UserViewsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type UserViewsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostCommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCommentsCreateWithoutUserInput, PostCommentsUncheckedCreateWithoutUserInput> | PostCommentsCreateWithoutUserInput[] | PostCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutUserInput | PostCommentsCreateOrConnectWithoutUserInput[]
    createMany?: PostCommentsCreateManyUserInputEnvelope
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
  }

  export type PostLikesCreateNestedManyWithoutUserInput = {
    create?: XOR<PostLikesCreateWithoutUserInput, PostLikesUncheckedCreateWithoutUserInput> | PostLikesCreateWithoutUserInput[] | PostLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutUserInput | PostLikesCreateOrConnectWithoutUserInput[]
    createMany?: PostLikesCreateManyUserInputEnvelope
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
  }

  export type UserViewsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserViewsCreateWithoutUserInput, UserViewsUncheckedCreateWithoutUserInput> | UserViewsCreateWithoutUserInput[] | UserViewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserViewsCreateOrConnectWithoutUserInput | UserViewsCreateOrConnectWithoutUserInput[]
    createMany?: UserViewsCreateManyUserInputEnvelope
    connect?: UserViewsWhereUniqueInput | UserViewsWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostCommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCommentsCreateWithoutUserInput, PostCommentsUncheckedCreateWithoutUserInput> | PostCommentsCreateWithoutUserInput[] | PostCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutUserInput | PostCommentsCreateOrConnectWithoutUserInput[]
    createMany?: PostCommentsCreateManyUserInputEnvelope
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
  }

  export type PostLikesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostLikesCreateWithoutUserInput, PostLikesUncheckedCreateWithoutUserInput> | PostLikesCreateWithoutUserInput[] | PostLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutUserInput | PostLikesCreateOrConnectWithoutUserInput[]
    createMany?: PostLikesCreateManyUserInputEnvelope
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
  }

  export type UserViewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserViewsCreateWithoutUserInput, UserViewsUncheckedCreateWithoutUserInput> | UserViewsCreateWithoutUserInput[] | UserViewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserViewsCreateOrConnectWithoutUserInput | UserViewsCreateOrConnectWithoutUserInput[]
    createMany?: UserViewsCreateManyUserInputEnvelope
    connect?: UserViewsWhereUniqueInput | UserViewsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostCommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCommentsCreateWithoutUserInput, PostCommentsUncheckedCreateWithoutUserInput> | PostCommentsCreateWithoutUserInput[] | PostCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutUserInput | PostCommentsCreateOrConnectWithoutUserInput[]
    upsert?: PostCommentsUpsertWithWhereUniqueWithoutUserInput | PostCommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCommentsCreateManyUserInputEnvelope
    set?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    disconnect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    delete?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    update?: PostCommentsUpdateWithWhereUniqueWithoutUserInput | PostCommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostCommentsUpdateManyWithWhereWithoutUserInput | PostCommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
  }

  export type PostLikesUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostLikesCreateWithoutUserInput, PostLikesUncheckedCreateWithoutUserInput> | PostLikesCreateWithoutUserInput[] | PostLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutUserInput | PostLikesCreateOrConnectWithoutUserInput[]
    upsert?: PostLikesUpsertWithWhereUniqueWithoutUserInput | PostLikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostLikesCreateManyUserInputEnvelope
    set?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    disconnect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    delete?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    update?: PostLikesUpdateWithWhereUniqueWithoutUserInput | PostLikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostLikesUpdateManyWithWhereWithoutUserInput | PostLikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[]
  }

  export type UserViewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserViewsCreateWithoutUserInput, UserViewsUncheckedCreateWithoutUserInput> | UserViewsCreateWithoutUserInput[] | UserViewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserViewsCreateOrConnectWithoutUserInput | UserViewsCreateOrConnectWithoutUserInput[]
    upsert?: UserViewsUpsertWithWhereUniqueWithoutUserInput | UserViewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserViewsCreateManyUserInputEnvelope
    set?: UserViewsWhereUniqueInput | UserViewsWhereUniqueInput[]
    disconnect?: UserViewsWhereUniqueInput | UserViewsWhereUniqueInput[]
    delete?: UserViewsWhereUniqueInput | UserViewsWhereUniqueInput[]
    connect?: UserViewsWhereUniqueInput | UserViewsWhereUniqueInput[]
    update?: UserViewsUpdateWithWhereUniqueWithoutUserInput | UserViewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserViewsUpdateManyWithWhereWithoutUserInput | UserViewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserViewsScalarWhereInput | UserViewsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostCommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCommentsCreateWithoutUserInput, PostCommentsUncheckedCreateWithoutUserInput> | PostCommentsCreateWithoutUserInput[] | PostCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutUserInput | PostCommentsCreateOrConnectWithoutUserInput[]
    upsert?: PostCommentsUpsertWithWhereUniqueWithoutUserInput | PostCommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCommentsCreateManyUserInputEnvelope
    set?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    disconnect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    delete?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    update?: PostCommentsUpdateWithWhereUniqueWithoutUserInput | PostCommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostCommentsUpdateManyWithWhereWithoutUserInput | PostCommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
  }

  export type PostLikesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostLikesCreateWithoutUserInput, PostLikesUncheckedCreateWithoutUserInput> | PostLikesCreateWithoutUserInput[] | PostLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutUserInput | PostLikesCreateOrConnectWithoutUserInput[]
    upsert?: PostLikesUpsertWithWhereUniqueWithoutUserInput | PostLikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostLikesCreateManyUserInputEnvelope
    set?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    disconnect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    delete?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    update?: PostLikesUpdateWithWhereUniqueWithoutUserInput | PostLikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostLikesUpdateManyWithWhereWithoutUserInput | PostLikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[]
  }

  export type UserViewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserViewsCreateWithoutUserInput, UserViewsUncheckedCreateWithoutUserInput> | UserViewsCreateWithoutUserInput[] | UserViewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserViewsCreateOrConnectWithoutUserInput | UserViewsCreateOrConnectWithoutUserInput[]
    upsert?: UserViewsUpsertWithWhereUniqueWithoutUserInput | UserViewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserViewsCreateManyUserInputEnvelope
    set?: UserViewsWhereUniqueInput | UserViewsWhereUniqueInput[]
    disconnect?: UserViewsWhereUniqueInput | UserViewsWhereUniqueInput[]
    delete?: UserViewsWhereUniqueInput | UserViewsWhereUniqueInput[]
    connect?: UserViewsWhereUniqueInput | UserViewsWhereUniqueInput[]
    update?: UserViewsUpdateWithWhereUniqueWithoutUserInput | UserViewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserViewsUpdateManyWithWhereWithoutUserInput | UserViewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserViewsScalarWhereInput | UserViewsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCommentsCreateNestedManyWithoutPostInput = {
    create?: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput> | PostCommentsCreateWithoutPostInput[] | PostCommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutPostInput | PostCommentsCreateOrConnectWithoutPostInput[]
    createMany?: PostCommentsCreateManyPostInputEnvelope
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
  }

  export type PostLikesCreateNestedManyWithoutPostInput = {
    create?: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput> | PostLikesCreateWithoutPostInput[] | PostLikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutPostInput | PostLikesCreateOrConnectWithoutPostInput[]
    createMany?: PostLikesCreateManyPostInputEnvelope
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
  }

  export type PostViewsCreateNestedManyWithoutPostInput = {
    create?: XOR<PostViewsCreateWithoutPostInput, PostViewsUncheckedCreateWithoutPostInput> | PostViewsCreateWithoutPostInput[] | PostViewsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostViewsCreateOrConnectWithoutPostInput | PostViewsCreateOrConnectWithoutPostInput[]
    createMany?: PostViewsCreateManyPostInputEnvelope
    connect?: PostViewsWhereUniqueInput | PostViewsWhereUniqueInput[]
  }

  export type PostCommentsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput> | PostCommentsCreateWithoutPostInput[] | PostCommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutPostInput | PostCommentsCreateOrConnectWithoutPostInput[]
    createMany?: PostCommentsCreateManyPostInputEnvelope
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
  }

  export type PostLikesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput> | PostLikesCreateWithoutPostInput[] | PostLikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutPostInput | PostLikesCreateOrConnectWithoutPostInput[]
    createMany?: PostLikesCreateManyPostInputEnvelope
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
  }

  export type PostViewsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostViewsCreateWithoutPostInput, PostViewsUncheckedCreateWithoutPostInput> | PostViewsCreateWithoutPostInput[] | PostViewsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostViewsCreateOrConnectWithoutPostInput | PostViewsCreateOrConnectWithoutPostInput[]
    createMany?: PostViewsCreateManyPostInputEnvelope
    connect?: PostViewsWhereUniqueInput | PostViewsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type PostCommentsUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput> | PostCommentsCreateWithoutPostInput[] | PostCommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutPostInput | PostCommentsCreateOrConnectWithoutPostInput[]
    upsert?: PostCommentsUpsertWithWhereUniqueWithoutPostInput | PostCommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostCommentsCreateManyPostInputEnvelope
    set?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    disconnect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    delete?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    update?: PostCommentsUpdateWithWhereUniqueWithoutPostInput | PostCommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostCommentsUpdateManyWithWhereWithoutPostInput | PostCommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
  }

  export type PostLikesUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput> | PostLikesCreateWithoutPostInput[] | PostLikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutPostInput | PostLikesCreateOrConnectWithoutPostInput[]
    upsert?: PostLikesUpsertWithWhereUniqueWithoutPostInput | PostLikesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostLikesCreateManyPostInputEnvelope
    set?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    disconnect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    delete?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    update?: PostLikesUpdateWithWhereUniqueWithoutPostInput | PostLikesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostLikesUpdateManyWithWhereWithoutPostInput | PostLikesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[]
  }

  export type PostViewsUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostViewsCreateWithoutPostInput, PostViewsUncheckedCreateWithoutPostInput> | PostViewsCreateWithoutPostInput[] | PostViewsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostViewsCreateOrConnectWithoutPostInput | PostViewsCreateOrConnectWithoutPostInput[]
    upsert?: PostViewsUpsertWithWhereUniqueWithoutPostInput | PostViewsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostViewsCreateManyPostInputEnvelope
    set?: PostViewsWhereUniqueInput | PostViewsWhereUniqueInput[]
    disconnect?: PostViewsWhereUniqueInput | PostViewsWhereUniqueInput[]
    delete?: PostViewsWhereUniqueInput | PostViewsWhereUniqueInput[]
    connect?: PostViewsWhereUniqueInput | PostViewsWhereUniqueInput[]
    update?: PostViewsUpdateWithWhereUniqueWithoutPostInput | PostViewsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostViewsUpdateManyWithWhereWithoutPostInput | PostViewsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostViewsScalarWhereInput | PostViewsScalarWhereInput[]
  }

  export type PostCommentsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput> | PostCommentsCreateWithoutPostInput[] | PostCommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutPostInput | PostCommentsCreateOrConnectWithoutPostInput[]
    upsert?: PostCommentsUpsertWithWhereUniqueWithoutPostInput | PostCommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostCommentsCreateManyPostInputEnvelope
    set?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    disconnect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    delete?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    update?: PostCommentsUpdateWithWhereUniqueWithoutPostInput | PostCommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostCommentsUpdateManyWithWhereWithoutPostInput | PostCommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
  }

  export type PostLikesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput> | PostLikesCreateWithoutPostInput[] | PostLikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutPostInput | PostLikesCreateOrConnectWithoutPostInput[]
    upsert?: PostLikesUpsertWithWhereUniqueWithoutPostInput | PostLikesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostLikesCreateManyPostInputEnvelope
    set?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    disconnect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    delete?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    update?: PostLikesUpdateWithWhereUniqueWithoutPostInput | PostLikesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostLikesUpdateManyWithWhereWithoutPostInput | PostLikesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[]
  }

  export type PostViewsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostViewsCreateWithoutPostInput, PostViewsUncheckedCreateWithoutPostInput> | PostViewsCreateWithoutPostInput[] | PostViewsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostViewsCreateOrConnectWithoutPostInput | PostViewsCreateOrConnectWithoutPostInput[]
    upsert?: PostViewsUpsertWithWhereUniqueWithoutPostInput | PostViewsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostViewsCreateManyPostInputEnvelope
    set?: PostViewsWhereUniqueInput | PostViewsWhereUniqueInput[]
    disconnect?: PostViewsWhereUniqueInput | PostViewsWhereUniqueInput[]
    delete?: PostViewsWhereUniqueInput | PostViewsWhereUniqueInput[]
    connect?: PostViewsWhereUniqueInput | PostViewsWhereUniqueInput[]
    update?: PostViewsUpdateWithWhereUniqueWithoutPostInput | PostViewsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostViewsUpdateManyWithWhereWithoutPostInput | PostViewsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostViewsScalarWhereInput | PostViewsScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutLikesInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostLikesInput = {
    create?: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostLikesInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput
    upsert?: PostUpsertWithoutLikesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutLikesInput, PostUpdateWithoutLikesInput>, PostUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutPostLikesNestedInput = {
    create?: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostLikesInput
    upsert?: UserUpsertWithoutPostLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostLikesInput, UserUpdateWithoutPostLikesInput>, UserUncheckedUpdateWithoutPostLikesInput>
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostCommentsInput = {
    create?: XOR<UserCreateWithoutPostCommentsInput, UserUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutPostCommentsNestedInput = {
    create?: XOR<UserCreateWithoutPostCommentsInput, UserUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostCommentsInput
    upsert?: UserUpsertWithoutPostCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostCommentsInput, UserUpdateWithoutPostCommentsInput>, UserUncheckedUpdateWithoutPostCommentsInput>
  }

  export type PostCreateNestedOneWithoutViewsInput = {
    create?: XOR<PostCreateWithoutViewsInput, PostUncheckedCreateWithoutViewsInput>
    connectOrCreate?: PostCreateOrConnectWithoutViewsInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<PostCreateWithoutViewsInput, PostUncheckedCreateWithoutViewsInput>
    connectOrCreate?: PostCreateOrConnectWithoutViewsInput
    upsert?: PostUpsertWithoutViewsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutViewsInput, PostUpdateWithoutViewsInput>, PostUncheckedUpdateWithoutViewsInput>
  }

  export type UserCreateNestedOneWithoutProfileViewsInput = {
    create?: XOR<UserCreateWithoutProfileViewsInput, UserUncheckedCreateWithoutProfileViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileViewsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileViewsNestedInput = {
    create?: XOR<UserCreateWithoutProfileViewsInput, UserUncheckedCreateWithoutProfileViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileViewsInput
    upsert?: UserUpsertWithoutProfileViewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileViewsInput, UserUpdateWithoutProfileViewsInput>, UserUncheckedUpdateWithoutProfileViewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PostCreateWithoutAuthorInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image1?: string | null
    description1?: string | null
    image2?: string | null
    description2?: string | null
    image3?: string | null
    description3?: string | null
    image4?: string | null
    description4?: string | null
    image5?: string | null
    description5?: string | null
    likeCount?: number
    location?: string | null
    googlePlace?: string | null
    lat?: number | null
    lon?: number | null
    category?: string
    published?: boolean
    comments?: PostCommentsCreateNestedManyWithoutPostInput
    likes?: PostLikesCreateNestedManyWithoutPostInput
    views?: PostViewsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image1?: string | null
    description1?: string | null
    image2?: string | null
    description2?: string | null
    image3?: string | null
    description3?: string | null
    image4?: string | null
    description4?: string | null
    image5?: string | null
    description5?: string | null
    likeCount?: number
    location?: string | null
    googlePlace?: string | null
    lat?: number | null
    lon?: number | null
    category?: string
    published?: boolean
    comments?: PostCommentsUncheckedCreateNestedManyWithoutPostInput
    likes?: PostLikesUncheckedCreateNestedManyWithoutPostInput
    views?: PostViewsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostCommentsCreateWithoutUserInput = {
    comment: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
  }

  export type PostCommentsUncheckedCreateWithoutUserInput = {
    commentId?: number
    comment: string
    postId: number
    createdAt?: Date | string
  }

  export type PostCommentsCreateOrConnectWithoutUserInput = {
    where: PostCommentsWhereUniqueInput
    create: XOR<PostCommentsCreateWithoutUserInput, PostCommentsUncheckedCreateWithoutUserInput>
  }

  export type PostCommentsCreateManyUserInputEnvelope = {
    data: PostCommentsCreateManyUserInput | PostCommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostLikesCreateWithoutUserInput = {
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutLikesInput
  }

  export type PostLikesUncheckedCreateWithoutUserInput = {
    id?: number
    postId: number
    createdAt?: Date | string
  }

  export type PostLikesCreateOrConnectWithoutUserInput = {
    where: PostLikesWhereUniqueInput
    create: XOR<PostLikesCreateWithoutUserInput, PostLikesUncheckedCreateWithoutUserInput>
  }

  export type PostLikesCreateManyUserInputEnvelope = {
    data: PostLikesCreateManyUserInput | PostLikesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserViewsCreateWithoutUserInput = {
    viewedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type UserViewsUncheckedCreateWithoutUserInput = {
    id?: number
    viewedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type UserViewsCreateOrConnectWithoutUserInput = {
    where: UserViewsWhereUniqueInput
    create: XOR<UserViewsCreateWithoutUserInput, UserViewsUncheckedCreateWithoutUserInput>
  }

  export type UserViewsCreateManyUserInputEnvelope = {
    data: UserViewsCreateManyUserInput | UserViewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    title?: StringFilter<"Post"> | string
    image1?: StringNullableFilter<"Post"> | string | null
    description1?: StringNullableFilter<"Post"> | string | null
    image2?: StringNullableFilter<"Post"> | string | null
    description2?: StringNullableFilter<"Post"> | string | null
    image3?: StringNullableFilter<"Post"> | string | null
    description3?: StringNullableFilter<"Post"> | string | null
    image4?: StringNullableFilter<"Post"> | string | null
    description4?: StringNullableFilter<"Post"> | string | null
    image5?: StringNullableFilter<"Post"> | string | null
    description5?: StringNullableFilter<"Post"> | string | null
    likeCount?: IntFilter<"Post"> | number
    location?: StringNullableFilter<"Post"> | string | null
    googlePlace?: StringNullableFilter<"Post"> | string | null
    lat?: FloatNullableFilter<"Post"> | number | null
    lon?: FloatNullableFilter<"Post"> | number | null
    category?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntFilter<"Post"> | number
  }

  export type PostCommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: PostCommentsWhereUniqueInput
    update: XOR<PostCommentsUpdateWithoutUserInput, PostCommentsUncheckedUpdateWithoutUserInput>
    create: XOR<PostCommentsCreateWithoutUserInput, PostCommentsUncheckedCreateWithoutUserInput>
  }

  export type PostCommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: PostCommentsWhereUniqueInput
    data: XOR<PostCommentsUpdateWithoutUserInput, PostCommentsUncheckedUpdateWithoutUserInput>
  }

  export type PostCommentsUpdateManyWithWhereWithoutUserInput = {
    where: PostCommentsScalarWhereInput
    data: XOR<PostCommentsUpdateManyMutationInput, PostCommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type PostCommentsScalarWhereInput = {
    AND?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
    OR?: PostCommentsScalarWhereInput[]
    NOT?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
    commentId?: IntFilter<"PostComments"> | number
    comment?: StringFilter<"PostComments"> | string
    postId?: IntFilter<"PostComments"> | number
    userId?: IntFilter<"PostComments"> | number
    createdAt?: DateTimeFilter<"PostComments"> | Date | string
  }

  export type PostLikesUpsertWithWhereUniqueWithoutUserInput = {
    where: PostLikesWhereUniqueInput
    update: XOR<PostLikesUpdateWithoutUserInput, PostLikesUncheckedUpdateWithoutUserInput>
    create: XOR<PostLikesCreateWithoutUserInput, PostLikesUncheckedCreateWithoutUserInput>
  }

  export type PostLikesUpdateWithWhereUniqueWithoutUserInput = {
    where: PostLikesWhereUniqueInput
    data: XOR<PostLikesUpdateWithoutUserInput, PostLikesUncheckedUpdateWithoutUserInput>
  }

  export type PostLikesUpdateManyWithWhereWithoutUserInput = {
    where: PostLikesScalarWhereInput
    data: XOR<PostLikesUpdateManyMutationInput, PostLikesUncheckedUpdateManyWithoutUserInput>
  }

  export type PostLikesScalarWhereInput = {
    AND?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[]
    OR?: PostLikesScalarWhereInput[]
    NOT?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[]
    id?: IntFilter<"PostLikes"> | number
    postId?: IntFilter<"PostLikes"> | number
    userId?: IntFilter<"PostLikes"> | number
    createdAt?: DateTimeFilter<"PostLikes"> | Date | string
  }

  export type UserViewsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserViewsWhereUniqueInput
    update: XOR<UserViewsUpdateWithoutUserInput, UserViewsUncheckedUpdateWithoutUserInput>
    create: XOR<UserViewsCreateWithoutUserInput, UserViewsUncheckedCreateWithoutUserInput>
  }

  export type UserViewsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserViewsWhereUniqueInput
    data: XOR<UserViewsUpdateWithoutUserInput, UserViewsUncheckedUpdateWithoutUserInput>
  }

  export type UserViewsUpdateManyWithWhereWithoutUserInput = {
    where: UserViewsScalarWhereInput
    data: XOR<UserViewsUpdateManyMutationInput, UserViewsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserViewsScalarWhereInput = {
    AND?: UserViewsScalarWhereInput | UserViewsScalarWhereInput[]
    OR?: UserViewsScalarWhereInput[]
    NOT?: UserViewsScalarWhereInput | UserViewsScalarWhereInput[]
    id?: IntFilter<"UserViews"> | number
    userId?: IntFilter<"UserViews"> | number
    viewedAt?: DateTimeFilter<"UserViews"> | Date | string
    ip?: StringNullableFilter<"UserViews"> | string | null
    userAgent?: StringNullableFilter<"UserViews"> | string | null
  }

  export type UserCreateWithoutPostsInput = {
    email: string
    name: string
    password: string
    userIcon: string
    userProfile?: string | null
    postComments?: PostCommentsCreateNestedManyWithoutUserInput
    postLikes?: PostLikesCreateNestedManyWithoutUserInput
    profileViews?: UserViewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    name: string
    password: string
    userIcon: string
    userProfile?: string | null
    postComments?: PostCommentsUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput
    profileViews?: UserViewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type PostCommentsCreateWithoutPostInput = {
    comment: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostCommentsInput
  }

  export type PostCommentsUncheckedCreateWithoutPostInput = {
    commentId?: number
    comment: string
    userId: number
    createdAt?: Date | string
  }

  export type PostCommentsCreateOrConnectWithoutPostInput = {
    where: PostCommentsWhereUniqueInput
    create: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput>
  }

  export type PostCommentsCreateManyPostInputEnvelope = {
    data: PostCommentsCreateManyPostInput | PostCommentsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostLikesCreateWithoutPostInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostLikesInput
  }

  export type PostLikesUncheckedCreateWithoutPostInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type PostLikesCreateOrConnectWithoutPostInput = {
    where: PostLikesWhereUniqueInput
    create: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput>
  }

  export type PostLikesCreateManyPostInputEnvelope = {
    data: PostLikesCreateManyPostInput | PostLikesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostViewsCreateWithoutPostInput = {
    viewedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type PostViewsUncheckedCreateWithoutPostInput = {
    id?: number
    viewedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type PostViewsCreateOrConnectWithoutPostInput = {
    where: PostViewsWhereUniqueInput
    create: XOR<PostViewsCreateWithoutPostInput, PostViewsUncheckedCreateWithoutPostInput>
  }

  export type PostViewsCreateManyPostInputEnvelope = {
    data: PostViewsCreateManyPostInput | PostViewsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userIcon?: StringFieldUpdateOperationsInput | string
    userProfile?: NullableStringFieldUpdateOperationsInput | string | null
    postComments?: PostCommentsUpdateManyWithoutUserNestedInput
    postLikes?: PostLikesUpdateManyWithoutUserNestedInput
    profileViews?: UserViewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userIcon?: StringFieldUpdateOperationsInput | string
    userProfile?: NullableStringFieldUpdateOperationsInput | string | null
    postComments?: PostCommentsUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput
    profileViews?: UserViewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCommentsUpsertWithWhereUniqueWithoutPostInput = {
    where: PostCommentsWhereUniqueInput
    update: XOR<PostCommentsUpdateWithoutPostInput, PostCommentsUncheckedUpdateWithoutPostInput>
    create: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput>
  }

  export type PostCommentsUpdateWithWhereUniqueWithoutPostInput = {
    where: PostCommentsWhereUniqueInput
    data: XOR<PostCommentsUpdateWithoutPostInput, PostCommentsUncheckedUpdateWithoutPostInput>
  }

  export type PostCommentsUpdateManyWithWhereWithoutPostInput = {
    where: PostCommentsScalarWhereInput
    data: XOR<PostCommentsUpdateManyMutationInput, PostCommentsUncheckedUpdateManyWithoutPostInput>
  }

  export type PostLikesUpsertWithWhereUniqueWithoutPostInput = {
    where: PostLikesWhereUniqueInput
    update: XOR<PostLikesUpdateWithoutPostInput, PostLikesUncheckedUpdateWithoutPostInput>
    create: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput>
  }

  export type PostLikesUpdateWithWhereUniqueWithoutPostInput = {
    where: PostLikesWhereUniqueInput
    data: XOR<PostLikesUpdateWithoutPostInput, PostLikesUncheckedUpdateWithoutPostInput>
  }

  export type PostLikesUpdateManyWithWhereWithoutPostInput = {
    where: PostLikesScalarWhereInput
    data: XOR<PostLikesUpdateManyMutationInput, PostLikesUncheckedUpdateManyWithoutPostInput>
  }

  export type PostViewsUpsertWithWhereUniqueWithoutPostInput = {
    where: PostViewsWhereUniqueInput
    update: XOR<PostViewsUpdateWithoutPostInput, PostViewsUncheckedUpdateWithoutPostInput>
    create: XOR<PostViewsCreateWithoutPostInput, PostViewsUncheckedCreateWithoutPostInput>
  }

  export type PostViewsUpdateWithWhereUniqueWithoutPostInput = {
    where: PostViewsWhereUniqueInput
    data: XOR<PostViewsUpdateWithoutPostInput, PostViewsUncheckedUpdateWithoutPostInput>
  }

  export type PostViewsUpdateManyWithWhereWithoutPostInput = {
    where: PostViewsScalarWhereInput
    data: XOR<PostViewsUpdateManyMutationInput, PostViewsUncheckedUpdateManyWithoutPostInput>
  }

  export type PostViewsScalarWhereInput = {
    AND?: PostViewsScalarWhereInput | PostViewsScalarWhereInput[]
    OR?: PostViewsScalarWhereInput[]
    NOT?: PostViewsScalarWhereInput | PostViewsScalarWhereInput[]
    id?: IntFilter<"PostViews"> | number
    postId?: IntFilter<"PostViews"> | number
    viewedAt?: DateTimeFilter<"PostViews"> | Date | string
    ip?: StringNullableFilter<"PostViews"> | string | null
    userAgent?: StringNullableFilter<"PostViews"> | string | null
  }

  export type PostCreateWithoutLikesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image1?: string | null
    description1?: string | null
    image2?: string | null
    description2?: string | null
    image3?: string | null
    description3?: string | null
    image4?: string | null
    description4?: string | null
    image5?: string | null
    description5?: string | null
    likeCount?: number
    location?: string | null
    googlePlace?: string | null
    lat?: number | null
    lon?: number | null
    category?: string
    published?: boolean
    author: UserCreateNestedOneWithoutPostsInput
    comments?: PostCommentsCreateNestedManyWithoutPostInput
    views?: PostViewsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutLikesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image1?: string | null
    description1?: string | null
    image2?: string | null
    description2?: string | null
    image3?: string | null
    description3?: string | null
    image4?: string | null
    description4?: string | null
    image5?: string | null
    description5?: string | null
    likeCount?: number
    location?: string | null
    googlePlace?: string | null
    lat?: number | null
    lon?: number | null
    category?: string
    published?: boolean
    authorId: number
    comments?: PostCommentsUncheckedCreateNestedManyWithoutPostInput
    views?: PostViewsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutLikesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutPostLikesInput = {
    email: string
    name: string
    password: string
    userIcon: string
    userProfile?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
    postComments?: PostCommentsCreateNestedManyWithoutUserInput
    profileViews?: UserViewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostLikesInput = {
    id?: number
    email: string
    name: string
    password: string
    userIcon: string
    userProfile?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    postComments?: PostCommentsUncheckedCreateNestedManyWithoutUserInput
    profileViews?: UserViewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
  }

  export type PostUpsertWithoutLikesInput = {
    update: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutLikesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
  }

  export type PostUpdateWithoutLikesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    description1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    description4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    description5?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googlePlace?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: PostCommentsUpdateManyWithoutPostNestedInput
    views?: PostViewsUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    description1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    description4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    description5?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googlePlace?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    comments?: PostCommentsUncheckedUpdateManyWithoutPostNestedInput
    views?: PostViewsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutPostLikesInput = {
    update: XOR<UserUpdateWithoutPostLikesInput, UserUncheckedUpdateWithoutPostLikesInput>
    create: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostLikesInput, UserUncheckedUpdateWithoutPostLikesInput>
  }

  export type UserUpdateWithoutPostLikesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userIcon?: StringFieldUpdateOperationsInput | string
    userProfile?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
    postComments?: PostCommentsUpdateManyWithoutUserNestedInput
    profileViews?: UserViewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userIcon?: StringFieldUpdateOperationsInput | string
    userProfile?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    postComments?: PostCommentsUncheckedUpdateManyWithoutUserNestedInput
    profileViews?: UserViewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCreateWithoutCommentsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image1?: string | null
    description1?: string | null
    image2?: string | null
    description2?: string | null
    image3?: string | null
    description3?: string | null
    image4?: string | null
    description4?: string | null
    image5?: string | null
    description5?: string | null
    likeCount?: number
    location?: string | null
    googlePlace?: string | null
    lat?: number | null
    lon?: number | null
    category?: string
    published?: boolean
    author: UserCreateNestedOneWithoutPostsInput
    likes?: PostLikesCreateNestedManyWithoutPostInput
    views?: PostViewsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image1?: string | null
    description1?: string | null
    image2?: string | null
    description2?: string | null
    image3?: string | null
    description3?: string | null
    image4?: string | null
    description4?: string | null
    image5?: string | null
    description5?: string | null
    likeCount?: number
    location?: string | null
    googlePlace?: string | null
    lat?: number | null
    lon?: number | null
    category?: string
    published?: boolean
    authorId: number
    likes?: PostLikesUncheckedCreateNestedManyWithoutPostInput
    views?: PostViewsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutPostCommentsInput = {
    email: string
    name: string
    password: string
    userIcon: string
    userProfile?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikesCreateNestedManyWithoutUserInput
    profileViews?: UserViewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostCommentsInput = {
    id?: number
    email: string
    name: string
    password: string
    userIcon: string
    userProfile?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput
    profileViews?: UserViewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostCommentsInput, UserUncheckedCreateWithoutPostCommentsInput>
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    description1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    description4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    description5?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googlePlace?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    likes?: PostLikesUpdateManyWithoutPostNestedInput
    views?: PostViewsUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    description1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    description4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    description5?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googlePlace?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    likes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput
    views?: PostViewsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutPostCommentsInput = {
    update: XOR<UserUpdateWithoutPostCommentsInput, UserUncheckedUpdateWithoutPostCommentsInput>
    create: XOR<UserCreateWithoutPostCommentsInput, UserUncheckedCreateWithoutPostCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostCommentsInput, UserUncheckedUpdateWithoutPostCommentsInput>
  }

  export type UserUpdateWithoutPostCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userIcon?: StringFieldUpdateOperationsInput | string
    userProfile?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikesUpdateManyWithoutUserNestedInput
    profileViews?: UserViewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userIcon?: StringFieldUpdateOperationsInput | string
    userProfile?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput
    profileViews?: UserViewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCreateWithoutViewsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image1?: string | null
    description1?: string | null
    image2?: string | null
    description2?: string | null
    image3?: string | null
    description3?: string | null
    image4?: string | null
    description4?: string | null
    image5?: string | null
    description5?: string | null
    likeCount?: number
    location?: string | null
    googlePlace?: string | null
    lat?: number | null
    lon?: number | null
    category?: string
    published?: boolean
    author: UserCreateNestedOneWithoutPostsInput
    comments?: PostCommentsCreateNestedManyWithoutPostInput
    likes?: PostLikesCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutViewsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image1?: string | null
    description1?: string | null
    image2?: string | null
    description2?: string | null
    image3?: string | null
    description3?: string | null
    image4?: string | null
    description4?: string | null
    image5?: string | null
    description5?: string | null
    likeCount?: number
    location?: string | null
    googlePlace?: string | null
    lat?: number | null
    lon?: number | null
    category?: string
    published?: boolean
    authorId: number
    comments?: PostCommentsUncheckedCreateNestedManyWithoutPostInput
    likes?: PostLikesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutViewsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutViewsInput, PostUncheckedCreateWithoutViewsInput>
  }

  export type PostUpsertWithoutViewsInput = {
    update: XOR<PostUpdateWithoutViewsInput, PostUncheckedUpdateWithoutViewsInput>
    create: XOR<PostCreateWithoutViewsInput, PostUncheckedCreateWithoutViewsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutViewsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutViewsInput, PostUncheckedUpdateWithoutViewsInput>
  }

  export type PostUpdateWithoutViewsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    description1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    description4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    description5?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googlePlace?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: PostCommentsUpdateManyWithoutPostNestedInput
    likes?: PostLikesUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    description1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    description4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    description5?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googlePlace?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    comments?: PostCommentsUncheckedUpdateManyWithoutPostNestedInput
    likes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutProfileViewsInput = {
    email: string
    name: string
    password: string
    userIcon: string
    userProfile?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
    postComments?: PostCommentsCreateNestedManyWithoutUserInput
    postLikes?: PostLikesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileViewsInput = {
    id?: number
    email: string
    name: string
    password: string
    userIcon: string
    userProfile?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    postComments?: PostCommentsUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileViewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileViewsInput, UserUncheckedCreateWithoutProfileViewsInput>
  }

  export type UserUpsertWithoutProfileViewsInput = {
    update: XOR<UserUpdateWithoutProfileViewsInput, UserUncheckedUpdateWithoutProfileViewsInput>
    create: XOR<UserCreateWithoutProfileViewsInput, UserUncheckedCreateWithoutProfileViewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileViewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileViewsInput, UserUncheckedUpdateWithoutProfileViewsInput>
  }

  export type UserUpdateWithoutProfileViewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userIcon?: StringFieldUpdateOperationsInput | string
    userProfile?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
    postComments?: PostCommentsUpdateManyWithoutUserNestedInput
    postLikes?: PostLikesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userIcon?: StringFieldUpdateOperationsInput | string
    userProfile?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    postComments?: PostCommentsUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image1?: string | null
    description1?: string | null
    image2?: string | null
    description2?: string | null
    image3?: string | null
    description3?: string | null
    image4?: string | null
    description4?: string | null
    image5?: string | null
    description5?: string | null
    likeCount?: number
    location?: string | null
    googlePlace?: string | null
    lat?: number | null
    lon?: number | null
    category?: string
    published?: boolean
  }

  export type PostCommentsCreateManyUserInput = {
    commentId?: number
    comment: string
    postId: number
    createdAt?: Date | string
  }

  export type PostLikesCreateManyUserInput = {
    id?: number
    postId: number
    createdAt?: Date | string
  }

  export type UserViewsCreateManyUserInput = {
    id?: number
    viewedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type PostUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    description1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    description4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    description5?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googlePlace?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    comments?: PostCommentsUpdateManyWithoutPostNestedInput
    likes?: PostLikesUpdateManyWithoutPostNestedInput
    views?: PostViewsUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    description1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    description4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    description5?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googlePlace?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    comments?: PostCommentsUncheckedUpdateManyWithoutPostNestedInput
    likes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput
    views?: PostViewsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    description1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    description4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    description5?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googlePlace?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostCommentsUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type PostCommentsUncheckedUpdateWithoutUserInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsUncheckedUpdateManyWithoutUserInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutLikesNestedInput
  }

  export type PostLikesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserViewsUpdateWithoutUserInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserViewsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserViewsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCommentsCreateManyPostInput = {
    commentId?: number
    comment: string
    userId: number
    createdAt?: Date | string
  }

  export type PostLikesCreateManyPostInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type PostViewsCreateManyPostInput = {
    id?: number
    viewedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type PostCommentsUpdateWithoutPostInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostCommentsNestedInput
  }

  export type PostCommentsUncheckedUpdateWithoutPostInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsUncheckedUpdateManyWithoutPostInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostLikesNestedInput
  }

  export type PostLikesUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostViewsUpdateWithoutPostInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostViewsUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostViewsUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}