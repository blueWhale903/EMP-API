
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
 * Model events
 * 
 */
export type events = $Result.DefaultSelection<Prisma.$eventsPayload>
/**
 * Model mark_category
 * 
 */
export type mark_category = $Result.DefaultSelection<Prisma.$mark_categoryPayload>
/**
 * Model class_codes
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type class_codes = $Result.DefaultSelection<Prisma.$class_codesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model majors
 * 
 */
export type majors = $Result.DefaultSelection<Prisma.$majorsPayload>
/**
 * Model departments
 * 
 */
export type departments = $Result.DefaultSelection<Prisma.$departmentsPayload>
/**
 * Model participations
 * 
 */
export type participations = $Result.DefaultSelection<Prisma.$participationsPayload>
/**
 * Model members
 * 
 */
export type members = $Result.DefaultSelection<Prisma.$membersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Events
 * const events = await prisma.events.findMany()
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
   * // Fetch zero or more Events
   * const events = await prisma.events.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.events`: Exposes CRUD operations for the **events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.eventsDelegate<ExtArgs>;

  /**
   * `prisma.mark_category`: Exposes CRUD operations for the **mark_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mark_categories
    * const mark_categories = await prisma.mark_category.findMany()
    * ```
    */
  get mark_category(): Prisma.mark_categoryDelegate<ExtArgs>;

  /**
   * `prisma.class_codes`: Exposes CRUD operations for the **class_codes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Class_codes
    * const class_codes = await prisma.class_codes.findMany()
    * ```
    */
  get class_codes(): Prisma.class_codesDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.majors`: Exposes CRUD operations for the **majors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Majors
    * const majors = await prisma.majors.findMany()
    * ```
    */
  get majors(): Prisma.majorsDelegate<ExtArgs>;

  /**
   * `prisma.departments`: Exposes CRUD operations for the **departments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.departments.findMany()
    * ```
    */
  get departments(): Prisma.departmentsDelegate<ExtArgs>;

  /**
   * `prisma.participations`: Exposes CRUD operations for the **participations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participations
    * const participations = await prisma.participations.findMany()
    * ```
    */
  get participations(): Prisma.participationsDelegate<ExtArgs>;

  /**
   * `prisma.members`: Exposes CRUD operations for the **members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.members.findMany()
    * ```
    */
  get members(): Prisma.membersDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    events: 'events',
    mark_category: 'mark_category',
    class_codes: 'class_codes',
    users: 'users',
    majors: 'majors',
    departments: 'departments',
    participations: 'participations',
    members: 'members'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "events" | "mark_category" | "class_codes" | "users" | "majors" | "departments" | "participations" | "members"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      events: {
        payload: Prisma.$eventsPayload<ExtArgs>
        fields: Prisma.eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findFirst: {
            args: Prisma.eventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findMany: {
            args: Prisma.eventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          create: {
            args: Prisma.eventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          createMany: {
            args: Prisma.eventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          delete: {
            args: Prisma.eventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          update: {
            args: Prisma.eventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          deleteMany: {
            args: Prisma.eventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.eventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.eventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      mark_category: {
        payload: Prisma.$mark_categoryPayload<ExtArgs>
        fields: Prisma.mark_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mark_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mark_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mark_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mark_categoryPayload>
          }
          findFirst: {
            args: Prisma.mark_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mark_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mark_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mark_categoryPayload>
          }
          findMany: {
            args: Prisma.mark_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mark_categoryPayload>[]
          }
          create: {
            args: Prisma.mark_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mark_categoryPayload>
          }
          createMany: {
            args: Prisma.mark_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mark_categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mark_categoryPayload>[]
          }
          delete: {
            args: Prisma.mark_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mark_categoryPayload>
          }
          update: {
            args: Prisma.mark_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mark_categoryPayload>
          }
          deleteMany: {
            args: Prisma.mark_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mark_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mark_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mark_categoryPayload>
          }
          aggregate: {
            args: Prisma.Mark_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMark_category>
          }
          groupBy: {
            args: Prisma.mark_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mark_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.mark_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<Mark_categoryCountAggregateOutputType> | number
          }
        }
      }
      class_codes: {
        payload: Prisma.$class_codesPayload<ExtArgs>
        fields: Prisma.class_codesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.class_codesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_codesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.class_codesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_codesPayload>
          }
          findFirst: {
            args: Prisma.class_codesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_codesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.class_codesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_codesPayload>
          }
          findMany: {
            args: Prisma.class_codesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_codesPayload>[]
          }
          create: {
            args: Prisma.class_codesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_codesPayload>
          }
          createMany: {
            args: Prisma.class_codesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.class_codesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_codesPayload>[]
          }
          delete: {
            args: Prisma.class_codesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_codesPayload>
          }
          update: {
            args: Prisma.class_codesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_codesPayload>
          }
          deleteMany: {
            args: Prisma.class_codesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.class_codesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.class_codesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_codesPayload>
          }
          aggregate: {
            args: Prisma.Class_codesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass_codes>
          }
          groupBy: {
            args: Prisma.class_codesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Class_codesGroupByOutputType>[]
          }
          count: {
            args: Prisma.class_codesCountArgs<ExtArgs>
            result: $Utils.Optional<Class_codesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      majors: {
        payload: Prisma.$majorsPayload<ExtArgs>
        fields: Prisma.majorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.majorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$majorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.majorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$majorsPayload>
          }
          findFirst: {
            args: Prisma.majorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$majorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.majorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$majorsPayload>
          }
          findMany: {
            args: Prisma.majorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$majorsPayload>[]
          }
          create: {
            args: Prisma.majorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$majorsPayload>
          }
          createMany: {
            args: Prisma.majorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.majorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$majorsPayload>[]
          }
          delete: {
            args: Prisma.majorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$majorsPayload>
          }
          update: {
            args: Prisma.majorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$majorsPayload>
          }
          deleteMany: {
            args: Prisma.majorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.majorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.majorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$majorsPayload>
          }
          aggregate: {
            args: Prisma.MajorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMajors>
          }
          groupBy: {
            args: Prisma.majorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MajorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.majorsCountArgs<ExtArgs>
            result: $Utils.Optional<MajorsCountAggregateOutputType> | number
          }
        }
      }
      departments: {
        payload: Prisma.$departmentsPayload<ExtArgs>
        fields: Prisma.departmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.departmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.departmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          findFirst: {
            args: Prisma.departmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.departmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          findMany: {
            args: Prisma.departmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>[]
          }
          create: {
            args: Prisma.departmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          createMany: {
            args: Prisma.departmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.departmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>[]
          }
          delete: {
            args: Prisma.departmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          update: {
            args: Prisma.departmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          deleteMany: {
            args: Prisma.departmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.departmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.departmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          aggregate: {
            args: Prisma.DepartmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartments>
          }
          groupBy: {
            args: Prisma.departmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.departmentsCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsCountAggregateOutputType> | number
          }
        }
      }
      participations: {
        payload: Prisma.$participationsPayload<ExtArgs>
        fields: Prisma.participationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.participationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.participationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationsPayload>
          }
          findFirst: {
            args: Prisma.participationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.participationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationsPayload>
          }
          findMany: {
            args: Prisma.participationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationsPayload>[]
          }
          create: {
            args: Prisma.participationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationsPayload>
          }
          createMany: {
            args: Prisma.participationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.participationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationsPayload>[]
          }
          delete: {
            args: Prisma.participationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationsPayload>
          }
          update: {
            args: Prisma.participationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationsPayload>
          }
          deleteMany: {
            args: Prisma.participationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.participationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.participationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationsPayload>
          }
          aggregate: {
            args: Prisma.ParticipationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipations>
          }
          groupBy: {
            args: Prisma.participationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.participationsCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipationsCountAggregateOutputType> | number
          }
        }
      }
      members: {
        payload: Prisma.$membersPayload<ExtArgs>
        fields: Prisma.membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          findFirst: {
            args: Prisma.membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          findMany: {
            args: Prisma.membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>[]
          }
          create: {
            args: Prisma.membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          createMany: {
            args: Prisma.membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.membersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>[]
          }
          delete: {
            args: Prisma.membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          update: {
            args: Prisma.membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          deleteMany: {
            args: Prisma.membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          aggregate: {
            args: Prisma.MembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembers>
          }
          groupBy: {
            args: Prisma.membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.membersCountArgs<ExtArgs>
            result: $Utils.Optional<MembersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
   * Count Type EventsCountOutputType
   */

  export type EventsCountOutputType = {
    participations: number
  }

  export type EventsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participations?: boolean | EventsCountOutputTypeCountParticipationsArgs
  }

  // Custom InputTypes
  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventsCountOutputType
     */
    select?: EventsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participationsWhereInput
  }


  /**
   * Count Type Class_codesCountOutputType
   */

  export type Class_codesCountOutputType = {
    members: number
  }

  export type Class_codesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Class_codesCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * Class_codesCountOutputType without action
   */
  export type Class_codesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_codesCountOutputType
     */
    select?: Class_codesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Class_codesCountOutputType without action
   */
  export type Class_codesCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: membersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    events: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | UsersCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
  }


  /**
   * Count Type MajorsCountOutputType
   */

  export type MajorsCountOutputType = {
    participations: number
  }

  export type MajorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participations?: boolean | MajorsCountOutputTypeCountParticipationsArgs
  }

  // Custom InputTypes
  /**
   * MajorsCountOutputType without action
   */
  export type MajorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorsCountOutputType
     */
    select?: MajorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MajorsCountOutputType without action
   */
  export type MajorsCountOutputTypeCountParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participationsWhereInput
  }


  /**
   * Count Type DepartmentsCountOutputType
   */

  export type DepartmentsCountOutputType = {
    class_codes: number
    members: number
    users: number
  }

  export type DepartmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class_codes?: boolean | DepartmentsCountOutputTypeCountClass_codesArgs
    members?: boolean | DepartmentsCountOutputTypeCountMembersArgs
    users?: boolean | DepartmentsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentsCountOutputType
     */
    select?: DepartmentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountClass_codesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: class_codesWhereInput
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: membersWhereInput
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    semester: number | null
  }

  export type EventsSumAggregateOutputType = {
    semester: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: string | null
    name: string | null
    school_year: string | null
    semester: number | null
    category: string | null
    category_index: string | null
    organization: string | null
    start_date: Date | null
    end_date: Date | null
    description: string | null
    owner: string | null
    status: boolean | null
  }

  export type EventsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    school_year: string | null
    semester: number | null
    category: string | null
    category_index: string | null
    organization: string | null
    start_date: Date | null
    end_date: Date | null
    description: string | null
    owner: string | null
    status: boolean | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    name: number
    school_year: number
    semester: number
    category: number
    category_index: number
    organization: number
    start_date: number
    end_date: number
    description: number
    owner: number
    status: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    semester?: true
  }

  export type EventsSumAggregateInputType = {
    semester?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    name?: true
    school_year?: true
    semester?: true
    category?: true
    category_index?: true
    organization?: true
    start_date?: true
    end_date?: true
    description?: true
    owner?: true
    status?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    name?: true
    school_year?: true
    semester?: true
    category?: true
    category_index?: true
    organization?: true
    start_date?: true
    end_date?: true
    description?: true
    owner?: true
    status?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    name?: true
    school_year?: true
    semester?: true
    category?: true
    category_index?: true
    organization?: true
    start_date?: true
    end_date?: true
    description?: true
    owner?: true
    status?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to aggregate.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithAggregationInput | eventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: string
    name: string | null
    school_year: string | null
    semester: number | null
    category: string | null
    category_index: string | null
    organization: string | null
    start_date: Date | null
    end_date: Date | null
    description: string | null
    owner: string | null
    status: boolean | null
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    school_year?: boolean
    semester?: boolean
    category?: boolean
    category_index?: boolean
    organization?: boolean
    start_date?: boolean
    end_date?: boolean
    description?: boolean
    owner?: boolean
    status?: boolean
    users?: boolean | events$usersArgs<ExtArgs>
    participations?: boolean | events$participationsArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    school_year?: boolean
    semester?: boolean
    category?: boolean
    category_index?: boolean
    organization?: boolean
    start_date?: boolean
    end_date?: boolean
    description?: boolean
    owner?: boolean
    status?: boolean
    users?: boolean | events$usersArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectScalar = {
    id?: boolean
    name?: boolean
    school_year?: boolean
    semester?: boolean
    category?: boolean
    category_index?: boolean
    organization?: boolean
    start_date?: boolean
    end_date?: boolean
    description?: boolean
    owner?: boolean
    status?: boolean
  }

  export type eventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | events$usersArgs<ExtArgs>
    participations?: boolean | events$participationsArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type eventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | events$usersArgs<ExtArgs>
  }

  export type $eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "events"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      participations: Prisma.$participationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      school_year: string | null
      semester: number | null
      category: string | null
      category_index: string | null
      organization: string | null
      start_date: Date | null
      end_date: Date | null
      description: string | null
      owner: string | null
      status: boolean | null
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type eventsGetPayload<S extends boolean | null | undefined | eventsDefaultArgs> = $Result.GetResult<Prisma.$eventsPayload, S>

  type eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<eventsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['events'], meta: { name: 'events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {eventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventsFindUniqueArgs>(args: SelectSubset<T, eventsFindUniqueArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {eventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventsFindUniqueOrThrowArgs>(args: SelectSubset<T, eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventsFindFirstArgs>(args?: SelectSubset<T, eventsFindFirstArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventsFindFirstOrThrowArgs>(args?: SelectSubset<T, eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventsFindManyArgs>(args?: SelectSubset<T, eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Events.
     * @param {eventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends eventsCreateArgs>(args: SelectSubset<T, eventsCreateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {eventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventsCreateManyArgs>(args?: SelectSubset<T, eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {eventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventsCreateManyAndReturnArgs>(args?: SelectSubset<T, eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Events.
     * @param {eventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends eventsDeleteArgs>(args: SelectSubset<T, eventsDeleteArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Events.
     * @param {eventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventsUpdateArgs>(args: SelectSubset<T, eventsUpdateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {eventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventsDeleteManyArgs>(args?: SelectSubset<T, eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventsUpdateManyArgs>(args: SelectSubset<T, eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Events.
     * @param {eventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends eventsUpsertArgs>(args: SelectSubset<T, eventsUpsertArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends eventsCountArgs>(
      args?: Subset<T, eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsGroupByArgs} args - Group by arguments.
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
      T extends eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventsGroupByArgs['orderBy'] }
        : { orderBy?: eventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the events model
   */
  readonly fields: eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends events$usersArgs<ExtArgs> = {}>(args?: Subset<T, events$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    participations<T extends events$participationsArgs<ExtArgs> = {}>(args?: Subset<T, events$participationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participationsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the events model
   */ 
  interface eventsFieldRefs {
    readonly id: FieldRef<"events", 'String'>
    readonly name: FieldRef<"events", 'String'>
    readonly school_year: FieldRef<"events", 'String'>
    readonly semester: FieldRef<"events", 'Int'>
    readonly category: FieldRef<"events", 'String'>
    readonly category_index: FieldRef<"events", 'String'>
    readonly organization: FieldRef<"events", 'String'>
    readonly start_date: FieldRef<"events", 'DateTime'>
    readonly end_date: FieldRef<"events", 'DateTime'>
    readonly description: FieldRef<"events", 'String'>
    readonly owner: FieldRef<"events", 'String'>
    readonly status: FieldRef<"events", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * events findUnique
   */
  export type eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findUniqueOrThrow
   */
  export type eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findFirst
   */
  export type eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findFirstOrThrow
   */
  export type eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findMany
   */
  export type eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events create
   */
  export type eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to create a events.
     */
    data: XOR<eventsCreateInput, eventsUncheckedCreateInput>
  }

  /**
   * events createMany
   */
  export type eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * events createManyAndReturn
   */
  export type eventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * events update
   */
  export type eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to update a events.
     */
    data: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
    /**
     * Choose, which events to update.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events updateMany
   */
  export type eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
  }

  /**
   * events upsert
   */
  export type eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The filter to search for the events to update in case it exists.
     */
    where: eventsWhereUniqueInput
    /**
     * In case the events found by the `where` argument doesn't exist, create a new events with this data.
     */
    create: XOR<eventsCreateInput, eventsUncheckedCreateInput>
    /**
     * In case the events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
  }

  /**
   * events delete
   */
  export type eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter which events to delete.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events deleteMany
   */
  export type eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to delete
     */
    where?: eventsWhereInput
  }

  /**
   * events.users
   */
  export type events$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * events.participations
   */
  export type events$participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participations
     */
    select?: participationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationsInclude<ExtArgs> | null
    where?: participationsWhereInput
    orderBy?: participationsOrderByWithRelationInput | participationsOrderByWithRelationInput[]
    cursor?: participationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipationsScalarFieldEnum | ParticipationsScalarFieldEnum[]
  }

  /**
   * events without action
   */
  export type eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
  }


  /**
   * Model mark_category
   */

  export type AggregateMark_category = {
    _count: Mark_categoryCountAggregateOutputType | null
    _avg: Mark_categoryAvgAggregateOutputType | null
    _sum: Mark_categorySumAggregateOutputType | null
    _min: Mark_categoryMinAggregateOutputType | null
    _max: Mark_categoryMaxAggregateOutputType | null
  }

  export type Mark_categoryAvgAggregateOutputType = {
    id: number | null
    semester: number | null
    mark: number | null
  }

  export type Mark_categorySumAggregateOutputType = {
    id: number | null
    semester: number | null
    mark: number | null
  }

  export type Mark_categoryMinAggregateOutputType = {
    id: number | null
    category: string | null
    achievement: string | null
    reward_org: string | null
    note: string | null
    school_year: string | null
    semester: number | null
    mark: number | null
  }

  export type Mark_categoryMaxAggregateOutputType = {
    id: number | null
    category: string | null
    achievement: string | null
    reward_org: string | null
    note: string | null
    school_year: string | null
    semester: number | null
    mark: number | null
  }

  export type Mark_categoryCountAggregateOutputType = {
    id: number
    category: number
    achievement: number
    reward_org: number
    note: number
    school_year: number
    semester: number
    mark: number
    _all: number
  }


  export type Mark_categoryAvgAggregateInputType = {
    id?: true
    semester?: true
    mark?: true
  }

  export type Mark_categorySumAggregateInputType = {
    id?: true
    semester?: true
    mark?: true
  }

  export type Mark_categoryMinAggregateInputType = {
    id?: true
    category?: true
    achievement?: true
    reward_org?: true
    note?: true
    school_year?: true
    semester?: true
    mark?: true
  }

  export type Mark_categoryMaxAggregateInputType = {
    id?: true
    category?: true
    achievement?: true
    reward_org?: true
    note?: true
    school_year?: true
    semester?: true
    mark?: true
  }

  export type Mark_categoryCountAggregateInputType = {
    id?: true
    category?: true
    achievement?: true
    reward_org?: true
    note?: true
    school_year?: true
    semester?: true
    mark?: true
    _all?: true
  }

  export type Mark_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mark_category to aggregate.
     */
    where?: mark_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mark_categories to fetch.
     */
    orderBy?: mark_categoryOrderByWithRelationInput | mark_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mark_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mark_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mark_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mark_categories
    **/
    _count?: true | Mark_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mark_categoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mark_categorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mark_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mark_categoryMaxAggregateInputType
  }

  export type GetMark_categoryAggregateType<T extends Mark_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMark_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMark_category[P]>
      : GetScalarType<T[P], AggregateMark_category[P]>
  }




  export type mark_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mark_categoryWhereInput
    orderBy?: mark_categoryOrderByWithAggregationInput | mark_categoryOrderByWithAggregationInput[]
    by: Mark_categoryScalarFieldEnum[] | Mark_categoryScalarFieldEnum
    having?: mark_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mark_categoryCountAggregateInputType | true
    _avg?: Mark_categoryAvgAggregateInputType
    _sum?: Mark_categorySumAggregateInputType
    _min?: Mark_categoryMinAggregateInputType
    _max?: Mark_categoryMaxAggregateInputType
  }

  export type Mark_categoryGroupByOutputType = {
    id: number
    category: string | null
    achievement: string | null
    reward_org: string | null
    note: string | null
    school_year: string | null
    semester: number | null
    mark: number | null
    _count: Mark_categoryCountAggregateOutputType | null
    _avg: Mark_categoryAvgAggregateOutputType | null
    _sum: Mark_categorySumAggregateOutputType | null
    _min: Mark_categoryMinAggregateOutputType | null
    _max: Mark_categoryMaxAggregateOutputType | null
  }

  type GetMark_categoryGroupByPayload<T extends mark_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mark_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mark_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mark_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Mark_categoryGroupByOutputType[P]>
        }
      >
    >


  export type mark_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    achievement?: boolean
    reward_org?: boolean
    note?: boolean
    school_year?: boolean
    semester?: boolean
    mark?: boolean
  }, ExtArgs["result"]["mark_category"]>

  export type mark_categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    achievement?: boolean
    reward_org?: boolean
    note?: boolean
    school_year?: boolean
    semester?: boolean
    mark?: boolean
  }, ExtArgs["result"]["mark_category"]>

  export type mark_categorySelectScalar = {
    id?: boolean
    category?: boolean
    achievement?: boolean
    reward_org?: boolean
    note?: boolean
    school_year?: boolean
    semester?: boolean
    mark?: boolean
  }


  export type $mark_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mark_category"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: string | null
      achievement: string | null
      reward_org: string | null
      note: string | null
      school_year: string | null
      semester: number | null
      mark: number | null
    }, ExtArgs["result"]["mark_category"]>
    composites: {}
  }

  type mark_categoryGetPayload<S extends boolean | null | undefined | mark_categoryDefaultArgs> = $Result.GetResult<Prisma.$mark_categoryPayload, S>

  type mark_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mark_categoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Mark_categoryCountAggregateInputType | true
    }

  export interface mark_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mark_category'], meta: { name: 'mark_category' } }
    /**
     * Find zero or one Mark_category that matches the filter.
     * @param {mark_categoryFindUniqueArgs} args - Arguments to find a Mark_category
     * @example
     * // Get one Mark_category
     * const mark_category = await prisma.mark_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mark_categoryFindUniqueArgs>(args: SelectSubset<T, mark_categoryFindUniqueArgs<ExtArgs>>): Prisma__mark_categoryClient<$Result.GetResult<Prisma.$mark_categoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mark_category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mark_categoryFindUniqueOrThrowArgs} args - Arguments to find a Mark_category
     * @example
     * // Get one Mark_category
     * const mark_category = await prisma.mark_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mark_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, mark_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mark_categoryClient<$Result.GetResult<Prisma.$mark_categoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mark_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mark_categoryFindFirstArgs} args - Arguments to find a Mark_category
     * @example
     * // Get one Mark_category
     * const mark_category = await prisma.mark_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mark_categoryFindFirstArgs>(args?: SelectSubset<T, mark_categoryFindFirstArgs<ExtArgs>>): Prisma__mark_categoryClient<$Result.GetResult<Prisma.$mark_categoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mark_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mark_categoryFindFirstOrThrowArgs} args - Arguments to find a Mark_category
     * @example
     * // Get one Mark_category
     * const mark_category = await prisma.mark_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mark_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, mark_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__mark_categoryClient<$Result.GetResult<Prisma.$mark_categoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mark_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mark_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mark_categories
     * const mark_categories = await prisma.mark_category.findMany()
     * 
     * // Get first 10 Mark_categories
     * const mark_categories = await prisma.mark_category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mark_categoryWithIdOnly = await prisma.mark_category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mark_categoryFindManyArgs>(args?: SelectSubset<T, mark_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mark_categoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mark_category.
     * @param {mark_categoryCreateArgs} args - Arguments to create a Mark_category.
     * @example
     * // Create one Mark_category
     * const Mark_category = await prisma.mark_category.create({
     *   data: {
     *     // ... data to create a Mark_category
     *   }
     * })
     * 
     */
    create<T extends mark_categoryCreateArgs>(args: SelectSubset<T, mark_categoryCreateArgs<ExtArgs>>): Prisma__mark_categoryClient<$Result.GetResult<Prisma.$mark_categoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mark_categories.
     * @param {mark_categoryCreateManyArgs} args - Arguments to create many Mark_categories.
     * @example
     * // Create many Mark_categories
     * const mark_category = await prisma.mark_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mark_categoryCreateManyArgs>(args?: SelectSubset<T, mark_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mark_categories and returns the data saved in the database.
     * @param {mark_categoryCreateManyAndReturnArgs} args - Arguments to create many Mark_categories.
     * @example
     * // Create many Mark_categories
     * const mark_category = await prisma.mark_category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mark_categories and only return the `id`
     * const mark_categoryWithIdOnly = await prisma.mark_category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mark_categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, mark_categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mark_categoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Mark_category.
     * @param {mark_categoryDeleteArgs} args - Arguments to delete one Mark_category.
     * @example
     * // Delete one Mark_category
     * const Mark_category = await prisma.mark_category.delete({
     *   where: {
     *     // ... filter to delete one Mark_category
     *   }
     * })
     * 
     */
    delete<T extends mark_categoryDeleteArgs>(args: SelectSubset<T, mark_categoryDeleteArgs<ExtArgs>>): Prisma__mark_categoryClient<$Result.GetResult<Prisma.$mark_categoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mark_category.
     * @param {mark_categoryUpdateArgs} args - Arguments to update one Mark_category.
     * @example
     * // Update one Mark_category
     * const mark_category = await prisma.mark_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mark_categoryUpdateArgs>(args: SelectSubset<T, mark_categoryUpdateArgs<ExtArgs>>): Prisma__mark_categoryClient<$Result.GetResult<Prisma.$mark_categoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mark_categories.
     * @param {mark_categoryDeleteManyArgs} args - Arguments to filter Mark_categories to delete.
     * @example
     * // Delete a few Mark_categories
     * const { count } = await prisma.mark_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mark_categoryDeleteManyArgs>(args?: SelectSubset<T, mark_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mark_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mark_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mark_categories
     * const mark_category = await prisma.mark_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mark_categoryUpdateManyArgs>(args: SelectSubset<T, mark_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mark_category.
     * @param {mark_categoryUpsertArgs} args - Arguments to update or create a Mark_category.
     * @example
     * // Update or create a Mark_category
     * const mark_category = await prisma.mark_category.upsert({
     *   create: {
     *     // ... data to create a Mark_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mark_category we want to update
     *   }
     * })
     */
    upsert<T extends mark_categoryUpsertArgs>(args: SelectSubset<T, mark_categoryUpsertArgs<ExtArgs>>): Prisma__mark_categoryClient<$Result.GetResult<Prisma.$mark_categoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mark_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mark_categoryCountArgs} args - Arguments to filter Mark_categories to count.
     * @example
     * // Count the number of Mark_categories
     * const count = await prisma.mark_category.count({
     *   where: {
     *     // ... the filter for the Mark_categories we want to count
     *   }
     * })
    **/
    count<T extends mark_categoryCountArgs>(
      args?: Subset<T, mark_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mark_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mark_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mark_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mark_categoryAggregateArgs>(args: Subset<T, Mark_categoryAggregateArgs>): Prisma.PrismaPromise<GetMark_categoryAggregateType<T>>

    /**
     * Group by Mark_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mark_categoryGroupByArgs} args - Group by arguments.
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
      T extends mark_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mark_categoryGroupByArgs['orderBy'] }
        : { orderBy?: mark_categoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mark_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMark_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mark_category model
   */
  readonly fields: mark_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mark_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mark_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the mark_category model
   */ 
  interface mark_categoryFieldRefs {
    readonly id: FieldRef<"mark_category", 'Int'>
    readonly category: FieldRef<"mark_category", 'String'>
    readonly achievement: FieldRef<"mark_category", 'String'>
    readonly reward_org: FieldRef<"mark_category", 'String'>
    readonly note: FieldRef<"mark_category", 'String'>
    readonly school_year: FieldRef<"mark_category", 'String'>
    readonly semester: FieldRef<"mark_category", 'Int'>
    readonly mark: FieldRef<"mark_category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * mark_category findUnique
   */
  export type mark_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mark_category
     */
    select?: mark_categorySelect<ExtArgs> | null
    /**
     * Filter, which mark_category to fetch.
     */
    where: mark_categoryWhereUniqueInput
  }

  /**
   * mark_category findUniqueOrThrow
   */
  export type mark_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mark_category
     */
    select?: mark_categorySelect<ExtArgs> | null
    /**
     * Filter, which mark_category to fetch.
     */
    where: mark_categoryWhereUniqueInput
  }

  /**
   * mark_category findFirst
   */
  export type mark_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mark_category
     */
    select?: mark_categorySelect<ExtArgs> | null
    /**
     * Filter, which mark_category to fetch.
     */
    where?: mark_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mark_categories to fetch.
     */
    orderBy?: mark_categoryOrderByWithRelationInput | mark_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mark_categories.
     */
    cursor?: mark_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mark_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mark_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mark_categories.
     */
    distinct?: Mark_categoryScalarFieldEnum | Mark_categoryScalarFieldEnum[]
  }

  /**
   * mark_category findFirstOrThrow
   */
  export type mark_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mark_category
     */
    select?: mark_categorySelect<ExtArgs> | null
    /**
     * Filter, which mark_category to fetch.
     */
    where?: mark_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mark_categories to fetch.
     */
    orderBy?: mark_categoryOrderByWithRelationInput | mark_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mark_categories.
     */
    cursor?: mark_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mark_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mark_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mark_categories.
     */
    distinct?: Mark_categoryScalarFieldEnum | Mark_categoryScalarFieldEnum[]
  }

  /**
   * mark_category findMany
   */
  export type mark_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mark_category
     */
    select?: mark_categorySelect<ExtArgs> | null
    /**
     * Filter, which mark_categories to fetch.
     */
    where?: mark_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mark_categories to fetch.
     */
    orderBy?: mark_categoryOrderByWithRelationInput | mark_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mark_categories.
     */
    cursor?: mark_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mark_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mark_categories.
     */
    skip?: number
    distinct?: Mark_categoryScalarFieldEnum | Mark_categoryScalarFieldEnum[]
  }

  /**
   * mark_category create
   */
  export type mark_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mark_category
     */
    select?: mark_categorySelect<ExtArgs> | null
    /**
     * The data needed to create a mark_category.
     */
    data?: XOR<mark_categoryCreateInput, mark_categoryUncheckedCreateInput>
  }

  /**
   * mark_category createMany
   */
  export type mark_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mark_categories.
     */
    data: mark_categoryCreateManyInput | mark_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mark_category createManyAndReturn
   */
  export type mark_categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mark_category
     */
    select?: mark_categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many mark_categories.
     */
    data: mark_categoryCreateManyInput | mark_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mark_category update
   */
  export type mark_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mark_category
     */
    select?: mark_categorySelect<ExtArgs> | null
    /**
     * The data needed to update a mark_category.
     */
    data: XOR<mark_categoryUpdateInput, mark_categoryUncheckedUpdateInput>
    /**
     * Choose, which mark_category to update.
     */
    where: mark_categoryWhereUniqueInput
  }

  /**
   * mark_category updateMany
   */
  export type mark_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mark_categories.
     */
    data: XOR<mark_categoryUpdateManyMutationInput, mark_categoryUncheckedUpdateManyInput>
    /**
     * Filter which mark_categories to update
     */
    where?: mark_categoryWhereInput
  }

  /**
   * mark_category upsert
   */
  export type mark_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mark_category
     */
    select?: mark_categorySelect<ExtArgs> | null
    /**
     * The filter to search for the mark_category to update in case it exists.
     */
    where: mark_categoryWhereUniqueInput
    /**
     * In case the mark_category found by the `where` argument doesn't exist, create a new mark_category with this data.
     */
    create: XOR<mark_categoryCreateInput, mark_categoryUncheckedCreateInput>
    /**
     * In case the mark_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mark_categoryUpdateInput, mark_categoryUncheckedUpdateInput>
  }

  /**
   * mark_category delete
   */
  export type mark_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mark_category
     */
    select?: mark_categorySelect<ExtArgs> | null
    /**
     * Filter which mark_category to delete.
     */
    where: mark_categoryWhereUniqueInput
  }

  /**
   * mark_category deleteMany
   */
  export type mark_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mark_categories to delete
     */
    where?: mark_categoryWhereInput
  }

  /**
   * mark_category without action
   */
  export type mark_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mark_category
     */
    select?: mark_categorySelect<ExtArgs> | null
  }


  /**
   * Model class_codes
   */

  export type AggregateClass_codes = {
    _count: Class_codesCountAggregateOutputType | null
    _avg: Class_codesAvgAggregateOutputType | null
    _sum: Class_codesSumAggregateOutputType | null
    _min: Class_codesMinAggregateOutputType | null
    _max: Class_codesMaxAggregateOutputType | null
  }

  export type Class_codesAvgAggregateOutputType = {
    department_id: number | null
  }

  export type Class_codesSumAggregateOutputType = {
    department_id: number | null
  }

  export type Class_codesMinAggregateOutputType = {
    name: string | null
    department_id: number | null
  }

  export type Class_codesMaxAggregateOutputType = {
    name: string | null
    department_id: number | null
  }

  export type Class_codesCountAggregateOutputType = {
    name: number
    department_id: number
    _all: number
  }


  export type Class_codesAvgAggregateInputType = {
    department_id?: true
  }

  export type Class_codesSumAggregateInputType = {
    department_id?: true
  }

  export type Class_codesMinAggregateInputType = {
    name?: true
    department_id?: true
  }

  export type Class_codesMaxAggregateInputType = {
    name?: true
    department_id?: true
  }

  export type Class_codesCountAggregateInputType = {
    name?: true
    department_id?: true
    _all?: true
  }

  export type Class_codesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which class_codes to aggregate.
     */
    where?: class_codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of class_codes to fetch.
     */
    orderBy?: class_codesOrderByWithRelationInput | class_codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: class_codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` class_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` class_codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned class_codes
    **/
    _count?: true | Class_codesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Class_codesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Class_codesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Class_codesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Class_codesMaxAggregateInputType
  }

  export type GetClass_codesAggregateType<T extends Class_codesAggregateArgs> = {
        [P in keyof T & keyof AggregateClass_codes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass_codes[P]>
      : GetScalarType<T[P], AggregateClass_codes[P]>
  }




  export type class_codesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: class_codesWhereInput
    orderBy?: class_codesOrderByWithAggregationInput | class_codesOrderByWithAggregationInput[]
    by: Class_codesScalarFieldEnum[] | Class_codesScalarFieldEnum
    having?: class_codesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Class_codesCountAggregateInputType | true
    _avg?: Class_codesAvgAggregateInputType
    _sum?: Class_codesSumAggregateInputType
    _min?: Class_codesMinAggregateInputType
    _max?: Class_codesMaxAggregateInputType
  }

  export type Class_codesGroupByOutputType = {
    name: string
    department_id: number | null
    _count: Class_codesCountAggregateOutputType | null
    _avg: Class_codesAvgAggregateOutputType | null
    _sum: Class_codesSumAggregateOutputType | null
    _min: Class_codesMinAggregateOutputType | null
    _max: Class_codesMaxAggregateOutputType | null
  }

  type GetClass_codesGroupByPayload<T extends class_codesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Class_codesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Class_codesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Class_codesGroupByOutputType[P]>
            : GetScalarType<T[P], Class_codesGroupByOutputType[P]>
        }
      >
    >


  export type class_codesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    department_id?: boolean
    departments?: boolean | class_codes$departmentsArgs<ExtArgs>
    members?: boolean | class_codes$membersArgs<ExtArgs>
    _count?: boolean | Class_codesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class_codes"]>

  export type class_codesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    department_id?: boolean
    departments?: boolean | class_codes$departmentsArgs<ExtArgs>
  }, ExtArgs["result"]["class_codes"]>

  export type class_codesSelectScalar = {
    name?: boolean
    department_id?: boolean
  }

  export type class_codesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | class_codes$departmentsArgs<ExtArgs>
    members?: boolean | class_codes$membersArgs<ExtArgs>
    _count?: boolean | Class_codesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type class_codesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | class_codes$departmentsArgs<ExtArgs>
  }

  export type $class_codesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "class_codes"
    objects: {
      departments: Prisma.$departmentsPayload<ExtArgs> | null
      members: Prisma.$membersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      department_id: number | null
    }, ExtArgs["result"]["class_codes"]>
    composites: {}
  }

  type class_codesGetPayload<S extends boolean | null | undefined | class_codesDefaultArgs> = $Result.GetResult<Prisma.$class_codesPayload, S>

  type class_codesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<class_codesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Class_codesCountAggregateInputType | true
    }

  export interface class_codesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['class_codes'], meta: { name: 'class_codes' } }
    /**
     * Find zero or one Class_codes that matches the filter.
     * @param {class_codesFindUniqueArgs} args - Arguments to find a Class_codes
     * @example
     * // Get one Class_codes
     * const class_codes = await prisma.class_codes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends class_codesFindUniqueArgs>(args: SelectSubset<T, class_codesFindUniqueArgs<ExtArgs>>): Prisma__class_codesClient<$Result.GetResult<Prisma.$class_codesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Class_codes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {class_codesFindUniqueOrThrowArgs} args - Arguments to find a Class_codes
     * @example
     * // Get one Class_codes
     * const class_codes = await prisma.class_codes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends class_codesFindUniqueOrThrowArgs>(args: SelectSubset<T, class_codesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__class_codesClient<$Result.GetResult<Prisma.$class_codesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Class_codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_codesFindFirstArgs} args - Arguments to find a Class_codes
     * @example
     * // Get one Class_codes
     * const class_codes = await prisma.class_codes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends class_codesFindFirstArgs>(args?: SelectSubset<T, class_codesFindFirstArgs<ExtArgs>>): Prisma__class_codesClient<$Result.GetResult<Prisma.$class_codesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Class_codes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_codesFindFirstOrThrowArgs} args - Arguments to find a Class_codes
     * @example
     * // Get one Class_codes
     * const class_codes = await prisma.class_codes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends class_codesFindFirstOrThrowArgs>(args?: SelectSubset<T, class_codesFindFirstOrThrowArgs<ExtArgs>>): Prisma__class_codesClient<$Result.GetResult<Prisma.$class_codesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Class_codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_codesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Class_codes
     * const class_codes = await prisma.class_codes.findMany()
     * 
     * // Get first 10 Class_codes
     * const class_codes = await prisma.class_codes.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const class_codesWithNameOnly = await prisma.class_codes.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends class_codesFindManyArgs>(args?: SelectSubset<T, class_codesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$class_codesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Class_codes.
     * @param {class_codesCreateArgs} args - Arguments to create a Class_codes.
     * @example
     * // Create one Class_codes
     * const Class_codes = await prisma.class_codes.create({
     *   data: {
     *     // ... data to create a Class_codes
     *   }
     * })
     * 
     */
    create<T extends class_codesCreateArgs>(args: SelectSubset<T, class_codesCreateArgs<ExtArgs>>): Prisma__class_codesClient<$Result.GetResult<Prisma.$class_codesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Class_codes.
     * @param {class_codesCreateManyArgs} args - Arguments to create many Class_codes.
     * @example
     * // Create many Class_codes
     * const class_codes = await prisma.class_codes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends class_codesCreateManyArgs>(args?: SelectSubset<T, class_codesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Class_codes and returns the data saved in the database.
     * @param {class_codesCreateManyAndReturnArgs} args - Arguments to create many Class_codes.
     * @example
     * // Create many Class_codes
     * const class_codes = await prisma.class_codes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Class_codes and only return the `name`
     * const class_codesWithNameOnly = await prisma.class_codes.createManyAndReturn({ 
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends class_codesCreateManyAndReturnArgs>(args?: SelectSubset<T, class_codesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$class_codesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Class_codes.
     * @param {class_codesDeleteArgs} args - Arguments to delete one Class_codes.
     * @example
     * // Delete one Class_codes
     * const Class_codes = await prisma.class_codes.delete({
     *   where: {
     *     // ... filter to delete one Class_codes
     *   }
     * })
     * 
     */
    delete<T extends class_codesDeleteArgs>(args: SelectSubset<T, class_codesDeleteArgs<ExtArgs>>): Prisma__class_codesClient<$Result.GetResult<Prisma.$class_codesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Class_codes.
     * @param {class_codesUpdateArgs} args - Arguments to update one Class_codes.
     * @example
     * // Update one Class_codes
     * const class_codes = await prisma.class_codes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends class_codesUpdateArgs>(args: SelectSubset<T, class_codesUpdateArgs<ExtArgs>>): Prisma__class_codesClient<$Result.GetResult<Prisma.$class_codesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Class_codes.
     * @param {class_codesDeleteManyArgs} args - Arguments to filter Class_codes to delete.
     * @example
     * // Delete a few Class_codes
     * const { count } = await prisma.class_codes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends class_codesDeleteManyArgs>(args?: SelectSubset<T, class_codesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Class_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_codesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Class_codes
     * const class_codes = await prisma.class_codes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends class_codesUpdateManyArgs>(args: SelectSubset<T, class_codesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Class_codes.
     * @param {class_codesUpsertArgs} args - Arguments to update or create a Class_codes.
     * @example
     * // Update or create a Class_codes
     * const class_codes = await prisma.class_codes.upsert({
     *   create: {
     *     // ... data to create a Class_codes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class_codes we want to update
     *   }
     * })
     */
    upsert<T extends class_codesUpsertArgs>(args: SelectSubset<T, class_codesUpsertArgs<ExtArgs>>): Prisma__class_codesClient<$Result.GetResult<Prisma.$class_codesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Class_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_codesCountArgs} args - Arguments to filter Class_codes to count.
     * @example
     * // Count the number of Class_codes
     * const count = await prisma.class_codes.count({
     *   where: {
     *     // ... the filter for the Class_codes we want to count
     *   }
     * })
    **/
    count<T extends class_codesCountArgs>(
      args?: Subset<T, class_codesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Class_codesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Class_codesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Class_codesAggregateArgs>(args: Subset<T, Class_codesAggregateArgs>): Prisma.PrismaPromise<GetClass_codesAggregateType<T>>

    /**
     * Group by Class_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_codesGroupByArgs} args - Group by arguments.
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
      T extends class_codesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: class_codesGroupByArgs['orderBy'] }
        : { orderBy?: class_codesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, class_codesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClass_codesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the class_codes model
   */
  readonly fields: class_codesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for class_codes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__class_codesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departments<T extends class_codes$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, class_codes$departmentsArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    members<T extends class_codes$membersArgs<ExtArgs> = {}>(args?: Subset<T, class_codes$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the class_codes model
   */ 
  interface class_codesFieldRefs {
    readonly name: FieldRef<"class_codes", 'String'>
    readonly department_id: FieldRef<"class_codes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * class_codes findUnique
   */
  export type class_codesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_codes
     */
    select?: class_codesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_codesInclude<ExtArgs> | null
    /**
     * Filter, which class_codes to fetch.
     */
    where: class_codesWhereUniqueInput
  }

  /**
   * class_codes findUniqueOrThrow
   */
  export type class_codesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_codes
     */
    select?: class_codesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_codesInclude<ExtArgs> | null
    /**
     * Filter, which class_codes to fetch.
     */
    where: class_codesWhereUniqueInput
  }

  /**
   * class_codes findFirst
   */
  export type class_codesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_codes
     */
    select?: class_codesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_codesInclude<ExtArgs> | null
    /**
     * Filter, which class_codes to fetch.
     */
    where?: class_codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of class_codes to fetch.
     */
    orderBy?: class_codesOrderByWithRelationInput | class_codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for class_codes.
     */
    cursor?: class_codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` class_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` class_codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of class_codes.
     */
    distinct?: Class_codesScalarFieldEnum | Class_codesScalarFieldEnum[]
  }

  /**
   * class_codes findFirstOrThrow
   */
  export type class_codesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_codes
     */
    select?: class_codesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_codesInclude<ExtArgs> | null
    /**
     * Filter, which class_codes to fetch.
     */
    where?: class_codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of class_codes to fetch.
     */
    orderBy?: class_codesOrderByWithRelationInput | class_codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for class_codes.
     */
    cursor?: class_codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` class_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` class_codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of class_codes.
     */
    distinct?: Class_codesScalarFieldEnum | Class_codesScalarFieldEnum[]
  }

  /**
   * class_codes findMany
   */
  export type class_codesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_codes
     */
    select?: class_codesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_codesInclude<ExtArgs> | null
    /**
     * Filter, which class_codes to fetch.
     */
    where?: class_codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of class_codes to fetch.
     */
    orderBy?: class_codesOrderByWithRelationInput | class_codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing class_codes.
     */
    cursor?: class_codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` class_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` class_codes.
     */
    skip?: number
    distinct?: Class_codesScalarFieldEnum | Class_codesScalarFieldEnum[]
  }

  /**
   * class_codes create
   */
  export type class_codesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_codes
     */
    select?: class_codesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_codesInclude<ExtArgs> | null
    /**
     * The data needed to create a class_codes.
     */
    data: XOR<class_codesCreateInput, class_codesUncheckedCreateInput>
  }

  /**
   * class_codes createMany
   */
  export type class_codesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many class_codes.
     */
    data: class_codesCreateManyInput | class_codesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * class_codes createManyAndReturn
   */
  export type class_codesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_codes
     */
    select?: class_codesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many class_codes.
     */
    data: class_codesCreateManyInput | class_codesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_codesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * class_codes update
   */
  export type class_codesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_codes
     */
    select?: class_codesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_codesInclude<ExtArgs> | null
    /**
     * The data needed to update a class_codes.
     */
    data: XOR<class_codesUpdateInput, class_codesUncheckedUpdateInput>
    /**
     * Choose, which class_codes to update.
     */
    where: class_codesWhereUniqueInput
  }

  /**
   * class_codes updateMany
   */
  export type class_codesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update class_codes.
     */
    data: XOR<class_codesUpdateManyMutationInput, class_codesUncheckedUpdateManyInput>
    /**
     * Filter which class_codes to update
     */
    where?: class_codesWhereInput
  }

  /**
   * class_codes upsert
   */
  export type class_codesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_codes
     */
    select?: class_codesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_codesInclude<ExtArgs> | null
    /**
     * The filter to search for the class_codes to update in case it exists.
     */
    where: class_codesWhereUniqueInput
    /**
     * In case the class_codes found by the `where` argument doesn't exist, create a new class_codes with this data.
     */
    create: XOR<class_codesCreateInput, class_codesUncheckedCreateInput>
    /**
     * In case the class_codes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<class_codesUpdateInput, class_codesUncheckedUpdateInput>
  }

  /**
   * class_codes delete
   */
  export type class_codesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_codes
     */
    select?: class_codesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_codesInclude<ExtArgs> | null
    /**
     * Filter which class_codes to delete.
     */
    where: class_codesWhereUniqueInput
  }

  /**
   * class_codes deleteMany
   */
  export type class_codesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which class_codes to delete
     */
    where?: class_codesWhereInput
  }

  /**
   * class_codes.departments
   */
  export type class_codes$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    where?: departmentsWhereInput
  }

  /**
   * class_codes.members
   */
  export type class_codes$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    where?: membersWhereInput
    orderBy?: membersOrderByWithRelationInput | membersOrderByWithRelationInput[]
    cursor?: membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * class_codes without action
   */
  export type class_codesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_codes
     */
    select?: class_codesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_codesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    department_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    department_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    department_id: number | null
    department: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    department_id: number | null
    department: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    department_id: number
    department: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    department_id?: true
  }

  export type UsersSumAggregateInputType = {
    department_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    department_id?: true
    department?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    department_id?: true
    department?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    department_id?: true
    department?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    username: string
    password: string
    department_id: number | null
    department: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    department_id?: boolean
    department?: boolean
    events?: boolean | users$eventsArgs<ExtArgs>
    departments?: boolean | users$departmentsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    department_id?: boolean
    department?: boolean
    departments?: boolean | users$departmentsArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    department_id?: boolean
    department?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | users$eventsArgs<ExtArgs>
    departments?: boolean | users$departmentsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | users$departmentsArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      events: Prisma.$eventsPayload<ExtArgs>[]
      departments: Prisma.$departmentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      password: string
      department_id: number | null
      department: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends users$eventsArgs<ExtArgs> = {}>(args?: Subset<T, users$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany"> | Null>
    departments<T extends users$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, users$departmentsArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly department_id: FieldRef<"users", 'Int'>
    readonly department: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.events
   */
  export type users$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    cursor?: eventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * users.departments
   */
  export type users$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    where?: departmentsWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model majors
   */

  export type AggregateMajors = {
    _count: MajorsCountAggregateOutputType | null
    _avg: MajorsAvgAggregateOutputType | null
    _sum: MajorsSumAggregateOutputType | null
    _min: MajorsMinAggregateOutputType | null
    _max: MajorsMaxAggregateOutputType | null
  }

  export type MajorsAvgAggregateOutputType = {
    department_id: number | null
  }

  export type MajorsSumAggregateOutputType = {
    department_id: number | null
  }

  export type MajorsMinAggregateOutputType = {
    id: string | null
    name: string | null
    ctda: boolean | null
    department_id: number | null
  }

  export type MajorsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ctda: boolean | null
    department_id: number | null
  }

  export type MajorsCountAggregateOutputType = {
    id: number
    name: number
    ctda: number
    department_id: number
    _all: number
  }


  export type MajorsAvgAggregateInputType = {
    department_id?: true
  }

  export type MajorsSumAggregateInputType = {
    department_id?: true
  }

  export type MajorsMinAggregateInputType = {
    id?: true
    name?: true
    ctda?: true
    department_id?: true
  }

  export type MajorsMaxAggregateInputType = {
    id?: true
    name?: true
    ctda?: true
    department_id?: true
  }

  export type MajorsCountAggregateInputType = {
    id?: true
    name?: true
    ctda?: true
    department_id?: true
    _all?: true
  }

  export type MajorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which majors to aggregate.
     */
    where?: majorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of majors to fetch.
     */
    orderBy?: majorsOrderByWithRelationInput | majorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: majorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned majors
    **/
    _count?: true | MajorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MajorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MajorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MajorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MajorsMaxAggregateInputType
  }

  export type GetMajorsAggregateType<T extends MajorsAggregateArgs> = {
        [P in keyof T & keyof AggregateMajors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMajors[P]>
      : GetScalarType<T[P], AggregateMajors[P]>
  }




  export type majorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: majorsWhereInput
    orderBy?: majorsOrderByWithAggregationInput | majorsOrderByWithAggregationInput[]
    by: MajorsScalarFieldEnum[] | MajorsScalarFieldEnum
    having?: majorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MajorsCountAggregateInputType | true
    _avg?: MajorsAvgAggregateInputType
    _sum?: MajorsSumAggregateInputType
    _min?: MajorsMinAggregateInputType
    _max?: MajorsMaxAggregateInputType
  }

  export type MajorsGroupByOutputType = {
    id: string
    name: string | null
    ctda: boolean | null
    department_id: number | null
    _count: MajorsCountAggregateOutputType | null
    _avg: MajorsAvgAggregateOutputType | null
    _sum: MajorsSumAggregateOutputType | null
    _min: MajorsMinAggregateOutputType | null
    _max: MajorsMaxAggregateOutputType | null
  }

  type GetMajorsGroupByPayload<T extends majorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MajorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MajorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MajorsGroupByOutputType[P]>
            : GetScalarType<T[P], MajorsGroupByOutputType[P]>
        }
      >
    >


  export type majorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ctda?: boolean
    department_id?: boolean
    participations?: boolean | majors$participationsArgs<ExtArgs>
    _count?: boolean | MajorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["majors"]>

  export type majorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ctda?: boolean
    department_id?: boolean
  }, ExtArgs["result"]["majors"]>

  export type majorsSelectScalar = {
    id?: boolean
    name?: boolean
    ctda?: boolean
    department_id?: boolean
  }

  export type majorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participations?: boolean | majors$participationsArgs<ExtArgs>
    _count?: boolean | MajorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type majorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $majorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "majors"
    objects: {
      participations: Prisma.$participationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      ctda: boolean | null
      department_id: number | null
    }, ExtArgs["result"]["majors"]>
    composites: {}
  }

  type majorsGetPayload<S extends boolean | null | undefined | majorsDefaultArgs> = $Result.GetResult<Prisma.$majorsPayload, S>

  type majorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<majorsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MajorsCountAggregateInputType | true
    }

  export interface majorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['majors'], meta: { name: 'majors' } }
    /**
     * Find zero or one Majors that matches the filter.
     * @param {majorsFindUniqueArgs} args - Arguments to find a Majors
     * @example
     * // Get one Majors
     * const majors = await prisma.majors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends majorsFindUniqueArgs>(args: SelectSubset<T, majorsFindUniqueArgs<ExtArgs>>): Prisma__majorsClient<$Result.GetResult<Prisma.$majorsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Majors that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {majorsFindUniqueOrThrowArgs} args - Arguments to find a Majors
     * @example
     * // Get one Majors
     * const majors = await prisma.majors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends majorsFindUniqueOrThrowArgs>(args: SelectSubset<T, majorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__majorsClient<$Result.GetResult<Prisma.$majorsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Majors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {majorsFindFirstArgs} args - Arguments to find a Majors
     * @example
     * // Get one Majors
     * const majors = await prisma.majors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends majorsFindFirstArgs>(args?: SelectSubset<T, majorsFindFirstArgs<ExtArgs>>): Prisma__majorsClient<$Result.GetResult<Prisma.$majorsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Majors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {majorsFindFirstOrThrowArgs} args - Arguments to find a Majors
     * @example
     * // Get one Majors
     * const majors = await prisma.majors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends majorsFindFirstOrThrowArgs>(args?: SelectSubset<T, majorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__majorsClient<$Result.GetResult<Prisma.$majorsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Majors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {majorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Majors
     * const majors = await prisma.majors.findMany()
     * 
     * // Get first 10 Majors
     * const majors = await prisma.majors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const majorsWithIdOnly = await prisma.majors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends majorsFindManyArgs>(args?: SelectSubset<T, majorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$majorsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Majors.
     * @param {majorsCreateArgs} args - Arguments to create a Majors.
     * @example
     * // Create one Majors
     * const Majors = await prisma.majors.create({
     *   data: {
     *     // ... data to create a Majors
     *   }
     * })
     * 
     */
    create<T extends majorsCreateArgs>(args: SelectSubset<T, majorsCreateArgs<ExtArgs>>): Prisma__majorsClient<$Result.GetResult<Prisma.$majorsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Majors.
     * @param {majorsCreateManyArgs} args - Arguments to create many Majors.
     * @example
     * // Create many Majors
     * const majors = await prisma.majors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends majorsCreateManyArgs>(args?: SelectSubset<T, majorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Majors and returns the data saved in the database.
     * @param {majorsCreateManyAndReturnArgs} args - Arguments to create many Majors.
     * @example
     * // Create many Majors
     * const majors = await prisma.majors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Majors and only return the `id`
     * const majorsWithIdOnly = await prisma.majors.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends majorsCreateManyAndReturnArgs>(args?: SelectSubset<T, majorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$majorsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Majors.
     * @param {majorsDeleteArgs} args - Arguments to delete one Majors.
     * @example
     * // Delete one Majors
     * const Majors = await prisma.majors.delete({
     *   where: {
     *     // ... filter to delete one Majors
     *   }
     * })
     * 
     */
    delete<T extends majorsDeleteArgs>(args: SelectSubset<T, majorsDeleteArgs<ExtArgs>>): Prisma__majorsClient<$Result.GetResult<Prisma.$majorsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Majors.
     * @param {majorsUpdateArgs} args - Arguments to update one Majors.
     * @example
     * // Update one Majors
     * const majors = await prisma.majors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends majorsUpdateArgs>(args: SelectSubset<T, majorsUpdateArgs<ExtArgs>>): Prisma__majorsClient<$Result.GetResult<Prisma.$majorsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Majors.
     * @param {majorsDeleteManyArgs} args - Arguments to filter Majors to delete.
     * @example
     * // Delete a few Majors
     * const { count } = await prisma.majors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends majorsDeleteManyArgs>(args?: SelectSubset<T, majorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {majorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Majors
     * const majors = await prisma.majors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends majorsUpdateManyArgs>(args: SelectSubset<T, majorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Majors.
     * @param {majorsUpsertArgs} args - Arguments to update or create a Majors.
     * @example
     * // Update or create a Majors
     * const majors = await prisma.majors.upsert({
     *   create: {
     *     // ... data to create a Majors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Majors we want to update
     *   }
     * })
     */
    upsert<T extends majorsUpsertArgs>(args: SelectSubset<T, majorsUpsertArgs<ExtArgs>>): Prisma__majorsClient<$Result.GetResult<Prisma.$majorsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {majorsCountArgs} args - Arguments to filter Majors to count.
     * @example
     * // Count the number of Majors
     * const count = await prisma.majors.count({
     *   where: {
     *     // ... the filter for the Majors we want to count
     *   }
     * })
    **/
    count<T extends majorsCountArgs>(
      args?: Subset<T, majorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MajorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MajorsAggregateArgs>(args: Subset<T, MajorsAggregateArgs>): Prisma.PrismaPromise<GetMajorsAggregateType<T>>

    /**
     * Group by Majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {majorsGroupByArgs} args - Group by arguments.
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
      T extends majorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: majorsGroupByArgs['orderBy'] }
        : { orderBy?: majorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, majorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMajorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the majors model
   */
  readonly fields: majorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for majors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__majorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participations<T extends majors$participationsArgs<ExtArgs> = {}>(args?: Subset<T, majors$participationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participationsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the majors model
   */ 
  interface majorsFieldRefs {
    readonly id: FieldRef<"majors", 'String'>
    readonly name: FieldRef<"majors", 'String'>
    readonly ctda: FieldRef<"majors", 'Boolean'>
    readonly department_id: FieldRef<"majors", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * majors findUnique
   */
  export type majorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the majors
     */
    select?: majorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: majorsInclude<ExtArgs> | null
    /**
     * Filter, which majors to fetch.
     */
    where: majorsWhereUniqueInput
  }

  /**
   * majors findUniqueOrThrow
   */
  export type majorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the majors
     */
    select?: majorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: majorsInclude<ExtArgs> | null
    /**
     * Filter, which majors to fetch.
     */
    where: majorsWhereUniqueInput
  }

  /**
   * majors findFirst
   */
  export type majorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the majors
     */
    select?: majorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: majorsInclude<ExtArgs> | null
    /**
     * Filter, which majors to fetch.
     */
    where?: majorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of majors to fetch.
     */
    orderBy?: majorsOrderByWithRelationInput | majorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for majors.
     */
    cursor?: majorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of majors.
     */
    distinct?: MajorsScalarFieldEnum | MajorsScalarFieldEnum[]
  }

  /**
   * majors findFirstOrThrow
   */
  export type majorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the majors
     */
    select?: majorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: majorsInclude<ExtArgs> | null
    /**
     * Filter, which majors to fetch.
     */
    where?: majorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of majors to fetch.
     */
    orderBy?: majorsOrderByWithRelationInput | majorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for majors.
     */
    cursor?: majorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of majors.
     */
    distinct?: MajorsScalarFieldEnum | MajorsScalarFieldEnum[]
  }

  /**
   * majors findMany
   */
  export type majorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the majors
     */
    select?: majorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: majorsInclude<ExtArgs> | null
    /**
     * Filter, which majors to fetch.
     */
    where?: majorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of majors to fetch.
     */
    orderBy?: majorsOrderByWithRelationInput | majorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing majors.
     */
    cursor?: majorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` majors.
     */
    skip?: number
    distinct?: MajorsScalarFieldEnum | MajorsScalarFieldEnum[]
  }

  /**
   * majors create
   */
  export type majorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the majors
     */
    select?: majorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: majorsInclude<ExtArgs> | null
    /**
     * The data needed to create a majors.
     */
    data: XOR<majorsCreateInput, majorsUncheckedCreateInput>
  }

  /**
   * majors createMany
   */
  export type majorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many majors.
     */
    data: majorsCreateManyInput | majorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * majors createManyAndReturn
   */
  export type majorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the majors
     */
    select?: majorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many majors.
     */
    data: majorsCreateManyInput | majorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * majors update
   */
  export type majorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the majors
     */
    select?: majorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: majorsInclude<ExtArgs> | null
    /**
     * The data needed to update a majors.
     */
    data: XOR<majorsUpdateInput, majorsUncheckedUpdateInput>
    /**
     * Choose, which majors to update.
     */
    where: majorsWhereUniqueInput
  }

  /**
   * majors updateMany
   */
  export type majorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update majors.
     */
    data: XOR<majorsUpdateManyMutationInput, majorsUncheckedUpdateManyInput>
    /**
     * Filter which majors to update
     */
    where?: majorsWhereInput
  }

  /**
   * majors upsert
   */
  export type majorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the majors
     */
    select?: majorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: majorsInclude<ExtArgs> | null
    /**
     * The filter to search for the majors to update in case it exists.
     */
    where: majorsWhereUniqueInput
    /**
     * In case the majors found by the `where` argument doesn't exist, create a new majors with this data.
     */
    create: XOR<majorsCreateInput, majorsUncheckedCreateInput>
    /**
     * In case the majors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<majorsUpdateInput, majorsUncheckedUpdateInput>
  }

  /**
   * majors delete
   */
  export type majorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the majors
     */
    select?: majorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: majorsInclude<ExtArgs> | null
    /**
     * Filter which majors to delete.
     */
    where: majorsWhereUniqueInput
  }

  /**
   * majors deleteMany
   */
  export type majorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which majors to delete
     */
    where?: majorsWhereInput
  }

  /**
   * majors.participations
   */
  export type majors$participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participations
     */
    select?: participationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationsInclude<ExtArgs> | null
    where?: participationsWhereInput
    orderBy?: participationsOrderByWithRelationInput | participationsOrderByWithRelationInput[]
    cursor?: participationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipationsScalarFieldEnum | ParticipationsScalarFieldEnum[]
  }

  /**
   * majors without action
   */
  export type majorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the majors
     */
    select?: majorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: majorsInclude<ExtArgs> | null
  }


  /**
   * Model departments
   */

  export type AggregateDepartments = {
    _count: DepartmentsCountAggregateOutputType | null
    _avg: DepartmentsAvgAggregateOutputType | null
    _sum: DepartmentsSumAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  export type DepartmentsAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartmentsSumAggregateOutputType = {
    id: number | null
  }

  export type DepartmentsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DepartmentsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DepartmentsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DepartmentsAvgAggregateInputType = {
    id?: true
  }

  export type DepartmentsSumAggregateInputType = {
    id?: true
  }

  export type DepartmentsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DepartmentsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DepartmentsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DepartmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to aggregate.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departments
    **/
    _count?: true | DepartmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentsMaxAggregateInputType
  }

  export type GetDepartmentsAggregateType<T extends DepartmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartments[P]>
      : GetScalarType<T[P], AggregateDepartments[P]>
  }




  export type departmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departmentsWhereInput
    orderBy?: departmentsOrderByWithAggregationInput | departmentsOrderByWithAggregationInput[]
    by: DepartmentsScalarFieldEnum[] | DepartmentsScalarFieldEnum
    having?: departmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentsCountAggregateInputType | true
    _avg?: DepartmentsAvgAggregateInputType
    _sum?: DepartmentsSumAggregateInputType
    _min?: DepartmentsMinAggregateInputType
    _max?: DepartmentsMaxAggregateInputType
  }

  export type DepartmentsGroupByOutputType = {
    id: number
    name: string | null
    _count: DepartmentsCountAggregateOutputType | null
    _avg: DepartmentsAvgAggregateOutputType | null
    _sum: DepartmentsSumAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  type GetDepartmentsGroupByPayload<T extends departmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
        }
      >
    >


  export type departmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    class_codes?: boolean | departments$class_codesArgs<ExtArgs>
    members?: boolean | departments$membersArgs<ExtArgs>
    users?: boolean | departments$usersArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departments"]>

  export type departmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["departments"]>

  export type departmentsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type departmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class_codes?: boolean | departments$class_codesArgs<ExtArgs>
    members?: boolean | departments$membersArgs<ExtArgs>
    users?: boolean | departments$usersArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type departmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $departmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "departments"
    objects: {
      class_codes: Prisma.$class_codesPayload<ExtArgs>[]
      members: Prisma.$membersPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["departments"]>
    composites: {}
  }

  type departmentsGetPayload<S extends boolean | null | undefined | departmentsDefaultArgs> = $Result.GetResult<Prisma.$departmentsPayload, S>

  type departmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<departmentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepartmentsCountAggregateInputType | true
    }

  export interface departmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['departments'], meta: { name: 'departments' } }
    /**
     * Find zero or one Departments that matches the filter.
     * @param {departmentsFindUniqueArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends departmentsFindUniqueArgs>(args: SelectSubset<T, departmentsFindUniqueArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Departments that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {departmentsFindUniqueOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends departmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, departmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindFirstArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends departmentsFindFirstArgs>(args?: SelectSubset<T, departmentsFindFirstArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Departments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindFirstOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends departmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, departmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.departments.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.departments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentsWithIdOnly = await prisma.departments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends departmentsFindManyArgs>(args?: SelectSubset<T, departmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Departments.
     * @param {departmentsCreateArgs} args - Arguments to create a Departments.
     * @example
     * // Create one Departments
     * const Departments = await prisma.departments.create({
     *   data: {
     *     // ... data to create a Departments
     *   }
     * })
     * 
     */
    create<T extends departmentsCreateArgs>(args: SelectSubset<T, departmentsCreateArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Departments.
     * @param {departmentsCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends departmentsCreateManyArgs>(args?: SelectSubset<T, departmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {departmentsCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentsWithIdOnly = await prisma.departments.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends departmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, departmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Departments.
     * @param {departmentsDeleteArgs} args - Arguments to delete one Departments.
     * @example
     * // Delete one Departments
     * const Departments = await prisma.departments.delete({
     *   where: {
     *     // ... filter to delete one Departments
     *   }
     * })
     * 
     */
    delete<T extends departmentsDeleteArgs>(args: SelectSubset<T, departmentsDeleteArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Departments.
     * @param {departmentsUpdateArgs} args - Arguments to update one Departments.
     * @example
     * // Update one Departments
     * const departments = await prisma.departments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends departmentsUpdateArgs>(args: SelectSubset<T, departmentsUpdateArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Departments.
     * @param {departmentsDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.departments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends departmentsDeleteManyArgs>(args?: SelectSubset<T, departmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends departmentsUpdateManyArgs>(args: SelectSubset<T, departmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Departments.
     * @param {departmentsUpsertArgs} args - Arguments to update or create a Departments.
     * @example
     * // Update or create a Departments
     * const departments = await prisma.departments.upsert({
     *   create: {
     *     // ... data to create a Departments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departments we want to update
     *   }
     * })
     */
    upsert<T extends departmentsUpsertArgs>(args: SelectSubset<T, departmentsUpsertArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.departments.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends departmentsCountArgs>(
      args?: Subset<T, departmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentsAggregateArgs>(args: Subset<T, DepartmentsAggregateArgs>): Prisma.PrismaPromise<GetDepartmentsAggregateType<T>>

    /**
     * Group by Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsGroupByArgs} args - Group by arguments.
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
      T extends departmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departmentsGroupByArgs['orderBy'] }
        : { orderBy?: departmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, departmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the departments model
   */
  readonly fields: departmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for departments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class_codes<T extends departments$class_codesArgs<ExtArgs> = {}>(args?: Subset<T, departments$class_codesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$class_codesPayload<ExtArgs>, T, "findMany"> | Null>
    members<T extends departments$membersArgs<ExtArgs> = {}>(args?: Subset<T, departments$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends departments$usersArgs<ExtArgs> = {}>(args?: Subset<T, departments$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the departments model
   */ 
  interface departmentsFieldRefs {
    readonly id: FieldRef<"departments", 'Int'>
    readonly name: FieldRef<"departments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * departments findUnique
   */
  export type departmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments findUniqueOrThrow
   */
  export type departmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments findFirst
   */
  export type departmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * departments findFirstOrThrow
   */
  export type departmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * departments findMany
   */
  export type departmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * departments create
   */
  export type departmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a departments.
     */
    data: XOR<departmentsCreateInput, departmentsUncheckedCreateInput>
  }

  /**
   * departments createMany
   */
  export type departmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departments.
     */
    data: departmentsCreateManyInput | departmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * departments createManyAndReturn
   */
  export type departmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many departments.
     */
    data: departmentsCreateManyInput | departmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * departments update
   */
  export type departmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a departments.
     */
    data: XOR<departmentsUpdateInput, departmentsUncheckedUpdateInput>
    /**
     * Choose, which departments to update.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments updateMany
   */
  export type departmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departments.
     */
    data: XOR<departmentsUpdateManyMutationInput, departmentsUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentsWhereInput
  }

  /**
   * departments upsert
   */
  export type departmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the departments to update in case it exists.
     */
    where: departmentsWhereUniqueInput
    /**
     * In case the departments found by the `where` argument doesn't exist, create a new departments with this data.
     */
    create: XOR<departmentsCreateInput, departmentsUncheckedCreateInput>
    /**
     * In case the departments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departmentsUpdateInput, departmentsUncheckedUpdateInput>
  }

  /**
   * departments delete
   */
  export type departmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter which departments to delete.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments deleteMany
   */
  export type departmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to delete
     */
    where?: departmentsWhereInput
  }

  /**
   * departments.class_codes
   */
  export type departments$class_codesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_codes
     */
    select?: class_codesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_codesInclude<ExtArgs> | null
    where?: class_codesWhereInput
    orderBy?: class_codesOrderByWithRelationInput | class_codesOrderByWithRelationInput[]
    cursor?: class_codesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Class_codesScalarFieldEnum | Class_codesScalarFieldEnum[]
  }

  /**
   * departments.members
   */
  export type departments$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    where?: membersWhereInput
    orderBy?: membersOrderByWithRelationInput | membersOrderByWithRelationInput[]
    cursor?: membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * departments.users
   */
  export type departments$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * departments without action
   */
  export type departmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
  }


  /**
   * Model participations
   */

  export type AggregateParticipations = {
    _count: ParticipationsCountAggregateOutputType | null
    _avg: ParticipationsAvgAggregateOutputType | null
    _sum: ParticipationsSumAggregateOutputType | null
    _min: ParticipationsMinAggregateOutputType | null
    _max: ParticipationsMaxAggregateOutputType | null
  }

  export type ParticipationsAvgAggregateOutputType = {
    mark: number | null
  }

  export type ParticipationsSumAggregateOutputType = {
    mark: number | null
  }

  export type ParticipationsMinAggregateOutputType = {
    student_id: string | null
    name: string | null
    event_id: string | null
    note: string | null
    achievement: string | null
    reward_org: string | null
    major_id: string | null
    mark: number | null
  }

  export type ParticipationsMaxAggregateOutputType = {
    student_id: string | null
    name: string | null
    event_id: string | null
    note: string | null
    achievement: string | null
    reward_org: string | null
    major_id: string | null
    mark: number | null
  }

  export type ParticipationsCountAggregateOutputType = {
    student_id: number
    name: number
    event_id: number
    note: number
    achievement: number
    reward_org: number
    major_id: number
    mark: number
    _all: number
  }


  export type ParticipationsAvgAggregateInputType = {
    mark?: true
  }

  export type ParticipationsSumAggregateInputType = {
    mark?: true
  }

  export type ParticipationsMinAggregateInputType = {
    student_id?: true
    name?: true
    event_id?: true
    note?: true
    achievement?: true
    reward_org?: true
    major_id?: true
    mark?: true
  }

  export type ParticipationsMaxAggregateInputType = {
    student_id?: true
    name?: true
    event_id?: true
    note?: true
    achievement?: true
    reward_org?: true
    major_id?: true
    mark?: true
  }

  export type ParticipationsCountAggregateInputType = {
    student_id?: true
    name?: true
    event_id?: true
    note?: true
    achievement?: true
    reward_org?: true
    major_id?: true
    mark?: true
    _all?: true
  }

  export type ParticipationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participations to aggregate.
     */
    where?: participationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participations to fetch.
     */
    orderBy?: participationsOrderByWithRelationInput | participationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: participationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned participations
    **/
    _count?: true | ParticipationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipationsMaxAggregateInputType
  }

  export type GetParticipationsAggregateType<T extends ParticipationsAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipations[P]>
      : GetScalarType<T[P], AggregateParticipations[P]>
  }




  export type participationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participationsWhereInput
    orderBy?: participationsOrderByWithAggregationInput | participationsOrderByWithAggregationInput[]
    by: ParticipationsScalarFieldEnum[] | ParticipationsScalarFieldEnum
    having?: participationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipationsCountAggregateInputType | true
    _avg?: ParticipationsAvgAggregateInputType
    _sum?: ParticipationsSumAggregateInputType
    _min?: ParticipationsMinAggregateInputType
    _max?: ParticipationsMaxAggregateInputType
  }

  export type ParticipationsGroupByOutputType = {
    student_id: string
    name: string | null
    event_id: string
    note: string | null
    achievement: string | null
    reward_org: string | null
    major_id: string | null
    mark: number | null
    _count: ParticipationsCountAggregateOutputType | null
    _avg: ParticipationsAvgAggregateOutputType | null
    _sum: ParticipationsSumAggregateOutputType | null
    _min: ParticipationsMinAggregateOutputType | null
    _max: ParticipationsMaxAggregateOutputType | null
  }

  type GetParticipationsGroupByPayload<T extends participationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipationsGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipationsGroupByOutputType[P]>
        }
      >
    >


  export type participationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    name?: boolean
    event_id?: boolean
    note?: boolean
    achievement?: boolean
    reward_org?: boolean
    major_id?: boolean
    mark?: boolean
    events?: boolean | eventsDefaultArgs<ExtArgs>
    majors?: boolean | participations$majorsArgs<ExtArgs>
  }, ExtArgs["result"]["participations"]>

  export type participationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    name?: boolean
    event_id?: boolean
    note?: boolean
    achievement?: boolean
    reward_org?: boolean
    major_id?: boolean
    mark?: boolean
    events?: boolean | eventsDefaultArgs<ExtArgs>
    majors?: boolean | participations$majorsArgs<ExtArgs>
  }, ExtArgs["result"]["participations"]>

  export type participationsSelectScalar = {
    student_id?: boolean
    name?: boolean
    event_id?: boolean
    note?: boolean
    achievement?: boolean
    reward_org?: boolean
    major_id?: boolean
    mark?: boolean
  }

  export type participationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | eventsDefaultArgs<ExtArgs>
    majors?: boolean | participations$majorsArgs<ExtArgs>
  }
  export type participationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | eventsDefaultArgs<ExtArgs>
    majors?: boolean | participations$majorsArgs<ExtArgs>
  }

  export type $participationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "participations"
    objects: {
      events: Prisma.$eventsPayload<ExtArgs>
      majors: Prisma.$majorsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      student_id: string
      name: string | null
      event_id: string
      note: string | null
      achievement: string | null
      reward_org: string | null
      major_id: string | null
      mark: number | null
    }, ExtArgs["result"]["participations"]>
    composites: {}
  }

  type participationsGetPayload<S extends boolean | null | undefined | participationsDefaultArgs> = $Result.GetResult<Prisma.$participationsPayload, S>

  type participationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<participationsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParticipationsCountAggregateInputType | true
    }

  export interface participationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['participations'], meta: { name: 'participations' } }
    /**
     * Find zero or one Participations that matches the filter.
     * @param {participationsFindUniqueArgs} args - Arguments to find a Participations
     * @example
     * // Get one Participations
     * const participations = await prisma.participations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends participationsFindUniqueArgs>(args: SelectSubset<T, participationsFindUniqueArgs<ExtArgs>>): Prisma__participationsClient<$Result.GetResult<Prisma.$participationsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Participations that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {participationsFindUniqueOrThrowArgs} args - Arguments to find a Participations
     * @example
     * // Get one Participations
     * const participations = await prisma.participations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends participationsFindUniqueOrThrowArgs>(args: SelectSubset<T, participationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__participationsClient<$Result.GetResult<Prisma.$participationsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Participations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participationsFindFirstArgs} args - Arguments to find a Participations
     * @example
     * // Get one Participations
     * const participations = await prisma.participations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends participationsFindFirstArgs>(args?: SelectSubset<T, participationsFindFirstArgs<ExtArgs>>): Prisma__participationsClient<$Result.GetResult<Prisma.$participationsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Participations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participationsFindFirstOrThrowArgs} args - Arguments to find a Participations
     * @example
     * // Get one Participations
     * const participations = await prisma.participations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends participationsFindFirstOrThrowArgs>(args?: SelectSubset<T, participationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__participationsClient<$Result.GetResult<Prisma.$participationsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Participations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participations
     * const participations = await prisma.participations.findMany()
     * 
     * // Get first 10 Participations
     * const participations = await prisma.participations.findMany({ take: 10 })
     * 
     * // Only select the `student_id`
     * const participationsWithStudent_idOnly = await prisma.participations.findMany({ select: { student_id: true } })
     * 
     */
    findMany<T extends participationsFindManyArgs>(args?: SelectSubset<T, participationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participationsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Participations.
     * @param {participationsCreateArgs} args - Arguments to create a Participations.
     * @example
     * // Create one Participations
     * const Participations = await prisma.participations.create({
     *   data: {
     *     // ... data to create a Participations
     *   }
     * })
     * 
     */
    create<T extends participationsCreateArgs>(args: SelectSubset<T, participationsCreateArgs<ExtArgs>>): Prisma__participationsClient<$Result.GetResult<Prisma.$participationsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Participations.
     * @param {participationsCreateManyArgs} args - Arguments to create many Participations.
     * @example
     * // Create many Participations
     * const participations = await prisma.participations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends participationsCreateManyArgs>(args?: SelectSubset<T, participationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participations and returns the data saved in the database.
     * @param {participationsCreateManyAndReturnArgs} args - Arguments to create many Participations.
     * @example
     * // Create many Participations
     * const participations = await prisma.participations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participations and only return the `student_id`
     * const participationsWithStudent_idOnly = await prisma.participations.createManyAndReturn({ 
     *   select: { student_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends participationsCreateManyAndReturnArgs>(args?: SelectSubset<T, participationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participationsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Participations.
     * @param {participationsDeleteArgs} args - Arguments to delete one Participations.
     * @example
     * // Delete one Participations
     * const Participations = await prisma.participations.delete({
     *   where: {
     *     // ... filter to delete one Participations
     *   }
     * })
     * 
     */
    delete<T extends participationsDeleteArgs>(args: SelectSubset<T, participationsDeleteArgs<ExtArgs>>): Prisma__participationsClient<$Result.GetResult<Prisma.$participationsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Participations.
     * @param {participationsUpdateArgs} args - Arguments to update one Participations.
     * @example
     * // Update one Participations
     * const participations = await prisma.participations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends participationsUpdateArgs>(args: SelectSubset<T, participationsUpdateArgs<ExtArgs>>): Prisma__participationsClient<$Result.GetResult<Prisma.$participationsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Participations.
     * @param {participationsDeleteManyArgs} args - Arguments to filter Participations to delete.
     * @example
     * // Delete a few Participations
     * const { count } = await prisma.participations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends participationsDeleteManyArgs>(args?: SelectSubset<T, participationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participations
     * const participations = await prisma.participations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends participationsUpdateManyArgs>(args: SelectSubset<T, participationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Participations.
     * @param {participationsUpsertArgs} args - Arguments to update or create a Participations.
     * @example
     * // Update or create a Participations
     * const participations = await prisma.participations.upsert({
     *   create: {
     *     // ... data to create a Participations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participations we want to update
     *   }
     * })
     */
    upsert<T extends participationsUpsertArgs>(args: SelectSubset<T, participationsUpsertArgs<ExtArgs>>): Prisma__participationsClient<$Result.GetResult<Prisma.$participationsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Participations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participationsCountArgs} args - Arguments to filter Participations to count.
     * @example
     * // Count the number of Participations
     * const count = await prisma.participations.count({
     *   where: {
     *     // ... the filter for the Participations we want to count
     *   }
     * })
    **/
    count<T extends participationsCountArgs>(
      args?: Subset<T, participationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipationsAggregateArgs>(args: Subset<T, ParticipationsAggregateArgs>): Prisma.PrismaPromise<GetParticipationsAggregateType<T>>

    /**
     * Group by Participations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participationsGroupByArgs} args - Group by arguments.
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
      T extends participationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: participationsGroupByArgs['orderBy'] }
        : { orderBy?: participationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, participationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the participations model
   */
  readonly fields: participationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for participations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__participationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends eventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventsDefaultArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    majors<T extends participations$majorsArgs<ExtArgs> = {}>(args?: Subset<T, participations$majorsArgs<ExtArgs>>): Prisma__majorsClient<$Result.GetResult<Prisma.$majorsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the participations model
   */ 
  interface participationsFieldRefs {
    readonly student_id: FieldRef<"participations", 'String'>
    readonly name: FieldRef<"participations", 'String'>
    readonly event_id: FieldRef<"participations", 'String'>
    readonly note: FieldRef<"participations", 'String'>
    readonly achievement: FieldRef<"participations", 'String'>
    readonly reward_org: FieldRef<"participations", 'String'>
    readonly major_id: FieldRef<"participations", 'String'>
    readonly mark: FieldRef<"participations", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * participations findUnique
   */
  export type participationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participations
     */
    select?: participationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationsInclude<ExtArgs> | null
    /**
     * Filter, which participations to fetch.
     */
    where: participationsWhereUniqueInput
  }

  /**
   * participations findUniqueOrThrow
   */
  export type participationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participations
     */
    select?: participationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationsInclude<ExtArgs> | null
    /**
     * Filter, which participations to fetch.
     */
    where: participationsWhereUniqueInput
  }

  /**
   * participations findFirst
   */
  export type participationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participations
     */
    select?: participationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationsInclude<ExtArgs> | null
    /**
     * Filter, which participations to fetch.
     */
    where?: participationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participations to fetch.
     */
    orderBy?: participationsOrderByWithRelationInput | participationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participations.
     */
    cursor?: participationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participations.
     */
    distinct?: ParticipationsScalarFieldEnum | ParticipationsScalarFieldEnum[]
  }

  /**
   * participations findFirstOrThrow
   */
  export type participationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participations
     */
    select?: participationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationsInclude<ExtArgs> | null
    /**
     * Filter, which participations to fetch.
     */
    where?: participationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participations to fetch.
     */
    orderBy?: participationsOrderByWithRelationInput | participationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participations.
     */
    cursor?: participationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participations.
     */
    distinct?: ParticipationsScalarFieldEnum | ParticipationsScalarFieldEnum[]
  }

  /**
   * participations findMany
   */
  export type participationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participations
     */
    select?: participationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationsInclude<ExtArgs> | null
    /**
     * Filter, which participations to fetch.
     */
    where?: participationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participations to fetch.
     */
    orderBy?: participationsOrderByWithRelationInput | participationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing participations.
     */
    cursor?: participationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participations.
     */
    skip?: number
    distinct?: ParticipationsScalarFieldEnum | ParticipationsScalarFieldEnum[]
  }

  /**
   * participations create
   */
  export type participationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participations
     */
    select?: participationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationsInclude<ExtArgs> | null
    /**
     * The data needed to create a participations.
     */
    data: XOR<participationsCreateInput, participationsUncheckedCreateInput>
  }

  /**
   * participations createMany
   */
  export type participationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many participations.
     */
    data: participationsCreateManyInput | participationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * participations createManyAndReturn
   */
  export type participationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participations
     */
    select?: participationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many participations.
     */
    data: participationsCreateManyInput | participationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * participations update
   */
  export type participationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participations
     */
    select?: participationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationsInclude<ExtArgs> | null
    /**
     * The data needed to update a participations.
     */
    data: XOR<participationsUpdateInput, participationsUncheckedUpdateInput>
    /**
     * Choose, which participations to update.
     */
    where: participationsWhereUniqueInput
  }

  /**
   * participations updateMany
   */
  export type participationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update participations.
     */
    data: XOR<participationsUpdateManyMutationInput, participationsUncheckedUpdateManyInput>
    /**
     * Filter which participations to update
     */
    where?: participationsWhereInput
  }

  /**
   * participations upsert
   */
  export type participationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participations
     */
    select?: participationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationsInclude<ExtArgs> | null
    /**
     * The filter to search for the participations to update in case it exists.
     */
    where: participationsWhereUniqueInput
    /**
     * In case the participations found by the `where` argument doesn't exist, create a new participations with this data.
     */
    create: XOR<participationsCreateInput, participationsUncheckedCreateInput>
    /**
     * In case the participations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<participationsUpdateInput, participationsUncheckedUpdateInput>
  }

  /**
   * participations delete
   */
  export type participationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participations
     */
    select?: participationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationsInclude<ExtArgs> | null
    /**
     * Filter which participations to delete.
     */
    where: participationsWhereUniqueInput
  }

  /**
   * participations deleteMany
   */
  export type participationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participations to delete
     */
    where?: participationsWhereInput
  }

  /**
   * participations.majors
   */
  export type participations$majorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the majors
     */
    select?: majorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: majorsInclude<ExtArgs> | null
    where?: majorsWhereInput
  }

  /**
   * participations without action
   */
  export type participationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participations
     */
    select?: participationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationsInclude<ExtArgs> | null
  }


  /**
   * Model members
   */

  export type AggregateMembers = {
    _count: MembersCountAggregateOutputType | null
    _avg: MembersAvgAggregateOutputType | null
    _sum: MembersSumAggregateOutputType | null
    _min: MembersMinAggregateOutputType | null
    _max: MembersMaxAggregateOutputType | null
  }

  export type MembersAvgAggregateOutputType = {
    department_id: number | null
  }

  export type MembersSumAggregateOutputType = {
    department_id: number | null
  }

  export type MembersMinAggregateOutputType = {
    id: string | null
    name: string | null
    class_code: string | null
    department_id: number | null
  }

  export type MembersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    class_code: string | null
    department_id: number | null
  }

  export type MembersCountAggregateOutputType = {
    id: number
    name: number
    class_code: number
    department_id: number
    _all: number
  }


  export type MembersAvgAggregateInputType = {
    department_id?: true
  }

  export type MembersSumAggregateInputType = {
    department_id?: true
  }

  export type MembersMinAggregateInputType = {
    id?: true
    name?: true
    class_code?: true
    department_id?: true
  }

  export type MembersMaxAggregateInputType = {
    id?: true
    name?: true
    class_code?: true
    department_id?: true
  }

  export type MembersCountAggregateInputType = {
    id?: true
    name?: true
    class_code?: true
    department_id?: true
    _all?: true
  }

  export type MembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which members to aggregate.
     */
    where?: membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: membersOrderByWithRelationInput | membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned members
    **/
    _count?: true | MembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembersMaxAggregateInputType
  }

  export type GetMembersAggregateType<T extends MembersAggregateArgs> = {
        [P in keyof T & keyof AggregateMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembers[P]>
      : GetScalarType<T[P], AggregateMembers[P]>
  }




  export type membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: membersWhereInput
    orderBy?: membersOrderByWithAggregationInput | membersOrderByWithAggregationInput[]
    by: MembersScalarFieldEnum[] | MembersScalarFieldEnum
    having?: membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembersCountAggregateInputType | true
    _avg?: MembersAvgAggregateInputType
    _sum?: MembersSumAggregateInputType
    _min?: MembersMinAggregateInputType
    _max?: MembersMaxAggregateInputType
  }

  export type MembersGroupByOutputType = {
    id: string
    name: string | null
    class_code: string | null
    department_id: number | null
    _count: MembersCountAggregateOutputType | null
    _avg: MembersAvgAggregateOutputType | null
    _sum: MembersSumAggregateOutputType | null
    _min: MembersMinAggregateOutputType | null
    _max: MembersMaxAggregateOutputType | null
  }

  type GetMembersGroupByPayload<T extends membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembersGroupByOutputType[P]>
            : GetScalarType<T[P], MembersGroupByOutputType[P]>
        }
      >
    >


  export type membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    class_code?: boolean
    department_id?: boolean
    class_codes?: boolean | members$class_codesArgs<ExtArgs>
    departments?: boolean | members$departmentsArgs<ExtArgs>
  }, ExtArgs["result"]["members"]>

  export type membersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    class_code?: boolean
    department_id?: boolean
    class_codes?: boolean | members$class_codesArgs<ExtArgs>
    departments?: boolean | members$departmentsArgs<ExtArgs>
  }, ExtArgs["result"]["members"]>

  export type membersSelectScalar = {
    id?: boolean
    name?: boolean
    class_code?: boolean
    department_id?: boolean
  }

  export type membersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class_codes?: boolean | members$class_codesArgs<ExtArgs>
    departments?: boolean | members$departmentsArgs<ExtArgs>
  }
  export type membersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class_codes?: boolean | members$class_codesArgs<ExtArgs>
    departments?: boolean | members$departmentsArgs<ExtArgs>
  }

  export type $membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "members"
    objects: {
      class_codes: Prisma.$class_codesPayload<ExtArgs> | null
      departments: Prisma.$departmentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      class_code: string | null
      department_id: number | null
    }, ExtArgs["result"]["members"]>
    composites: {}
  }

  type membersGetPayload<S extends boolean | null | undefined | membersDefaultArgs> = $Result.GetResult<Prisma.$membersPayload, S>

  type membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<membersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MembersCountAggregateInputType | true
    }

  export interface membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['members'], meta: { name: 'members' } }
    /**
     * Find zero or one Members that matches the filter.
     * @param {membersFindUniqueArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends membersFindUniqueArgs>(args: SelectSubset<T, membersFindUniqueArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Members that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {membersFindUniqueOrThrowArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends membersFindUniqueOrThrowArgs>(args: SelectSubset<T, membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersFindFirstArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends membersFindFirstArgs>(args?: SelectSubset<T, membersFindFirstArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersFindFirstOrThrowArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends membersFindFirstOrThrowArgs>(args?: SelectSubset<T, membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.members.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membersWithIdOnly = await prisma.members.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends membersFindManyArgs>(args?: SelectSubset<T, membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Members.
     * @param {membersCreateArgs} args - Arguments to create a Members.
     * @example
     * // Create one Members
     * const Members = await prisma.members.create({
     *   data: {
     *     // ... data to create a Members
     *   }
     * })
     * 
     */
    create<T extends membersCreateArgs>(args: SelectSubset<T, membersCreateArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Members.
     * @param {membersCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const members = await prisma.members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends membersCreateManyArgs>(args?: SelectSubset<T, membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {membersCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const members = await prisma.members.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const membersWithIdOnly = await prisma.members.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends membersCreateManyAndReturnArgs>(args?: SelectSubset<T, membersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Members.
     * @param {membersDeleteArgs} args - Arguments to delete one Members.
     * @example
     * // Delete one Members
     * const Members = await prisma.members.delete({
     *   where: {
     *     // ... filter to delete one Members
     *   }
     * })
     * 
     */
    delete<T extends membersDeleteArgs>(args: SelectSubset<T, membersDeleteArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Members.
     * @param {membersUpdateArgs} args - Arguments to update one Members.
     * @example
     * // Update one Members
     * const members = await prisma.members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends membersUpdateArgs>(args: SelectSubset<T, membersUpdateArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Members.
     * @param {membersDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends membersDeleteManyArgs>(args?: SelectSubset<T, membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const members = await prisma.members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends membersUpdateManyArgs>(args: SelectSubset<T, membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Members.
     * @param {membersUpsertArgs} args - Arguments to update or create a Members.
     * @example
     * // Update or create a Members
     * const members = await prisma.members.upsert({
     *   create: {
     *     // ... data to create a Members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Members we want to update
     *   }
     * })
     */
    upsert<T extends membersUpsertArgs>(args: SelectSubset<T, membersUpsertArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.members.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends membersCountArgs>(
      args?: Subset<T, membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembersAggregateArgs>(args: Subset<T, MembersAggregateArgs>): Prisma.PrismaPromise<GetMembersAggregateType<T>>

    /**
     * Group by Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersGroupByArgs} args - Group by arguments.
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
      T extends membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: membersGroupByArgs['orderBy'] }
        : { orderBy?: membersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the members model
   */
  readonly fields: membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class_codes<T extends members$class_codesArgs<ExtArgs> = {}>(args?: Subset<T, members$class_codesArgs<ExtArgs>>): Prisma__class_codesClient<$Result.GetResult<Prisma.$class_codesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    departments<T extends members$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, members$departmentsArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the members model
   */ 
  interface membersFieldRefs {
    readonly id: FieldRef<"members", 'String'>
    readonly name: FieldRef<"members", 'String'>
    readonly class_code: FieldRef<"members", 'String'>
    readonly department_id: FieldRef<"members", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * members findUnique
   */
  export type membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where: membersWhereUniqueInput
  }

  /**
   * members findUniqueOrThrow
   */
  export type membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where: membersWhereUniqueInput
  }

  /**
   * members findFirst
   */
  export type membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: membersOrderByWithRelationInput | membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * members findFirstOrThrow
   */
  export type membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: membersOrderByWithRelationInput | membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * members findMany
   */
  export type membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: membersOrderByWithRelationInput | membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing members.
     */
    cursor?: membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * members create
   */
  export type membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * The data needed to create a members.
     */
    data: XOR<membersCreateInput, membersUncheckedCreateInput>
  }

  /**
   * members createMany
   */
  export type membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many members.
     */
    data: membersCreateManyInput | membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * members createManyAndReturn
   */
  export type membersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many members.
     */
    data: membersCreateManyInput | membersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * members update
   */
  export type membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * The data needed to update a members.
     */
    data: XOR<membersUpdateInput, membersUncheckedUpdateInput>
    /**
     * Choose, which members to update.
     */
    where: membersWhereUniqueInput
  }

  /**
   * members updateMany
   */
  export type membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update members.
     */
    data: XOR<membersUpdateManyMutationInput, membersUncheckedUpdateManyInput>
    /**
     * Filter which members to update
     */
    where?: membersWhereInput
  }

  /**
   * members upsert
   */
  export type membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * The filter to search for the members to update in case it exists.
     */
    where: membersWhereUniqueInput
    /**
     * In case the members found by the `where` argument doesn't exist, create a new members with this data.
     */
    create: XOR<membersCreateInput, membersUncheckedCreateInput>
    /**
     * In case the members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<membersUpdateInput, membersUncheckedUpdateInput>
  }

  /**
   * members delete
   */
  export type membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * Filter which members to delete.
     */
    where: membersWhereUniqueInput
  }

  /**
   * members deleteMany
   */
  export type membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which members to delete
     */
    where?: membersWhereInput
  }

  /**
   * members.class_codes
   */
  export type members$class_codesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_codes
     */
    select?: class_codesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_codesInclude<ExtArgs> | null
    where?: class_codesWhereInput
  }

  /**
   * members.departments
   */
  export type members$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    where?: departmentsWhereInput
  }

  /**
   * members without action
   */
  export type membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
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


  export const EventsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    school_year: 'school_year',
    semester: 'semester',
    category: 'category',
    category_index: 'category_index',
    organization: 'organization',
    start_date: 'start_date',
    end_date: 'end_date',
    description: 'description',
    owner: 'owner',
    status: 'status'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const Mark_categoryScalarFieldEnum: {
    id: 'id',
    category: 'category',
    achievement: 'achievement',
    reward_org: 'reward_org',
    note: 'note',
    school_year: 'school_year',
    semester: 'semester',
    mark: 'mark'
  };

  export type Mark_categoryScalarFieldEnum = (typeof Mark_categoryScalarFieldEnum)[keyof typeof Mark_categoryScalarFieldEnum]


  export const Class_codesScalarFieldEnum: {
    name: 'name',
    department_id: 'department_id'
  };

  export type Class_codesScalarFieldEnum = (typeof Class_codesScalarFieldEnum)[keyof typeof Class_codesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    department_id: 'department_id',
    department: 'department'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const MajorsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ctda: 'ctda',
    department_id: 'department_id'
  };

  export type MajorsScalarFieldEnum = (typeof MajorsScalarFieldEnum)[keyof typeof MajorsScalarFieldEnum]


  export const DepartmentsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DepartmentsScalarFieldEnum = (typeof DepartmentsScalarFieldEnum)[keyof typeof DepartmentsScalarFieldEnum]


  export const ParticipationsScalarFieldEnum: {
    student_id: 'student_id',
    name: 'name',
    event_id: 'event_id',
    note: 'note',
    achievement: 'achievement',
    reward_org: 'reward_org',
    major_id: 'major_id',
    mark: 'mark'
  };

  export type ParticipationsScalarFieldEnum = (typeof ParticipationsScalarFieldEnum)[keyof typeof ParticipationsScalarFieldEnum]


  export const MembersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    class_code: 'class_code',
    department_id: 'department_id'
  };

  export type MembersScalarFieldEnum = (typeof MembersScalarFieldEnum)[keyof typeof MembersScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type eventsWhereInput = {
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    id?: StringFilter<"events"> | string
    name?: StringNullableFilter<"events"> | string | null
    school_year?: StringNullableFilter<"events"> | string | null
    semester?: IntNullableFilter<"events"> | number | null
    category?: StringNullableFilter<"events"> | string | null
    category_index?: StringNullableFilter<"events"> | string | null
    organization?: StringNullableFilter<"events"> | string | null
    start_date?: DateTimeNullableFilter<"events"> | Date | string | null
    end_date?: DateTimeNullableFilter<"events"> | Date | string | null
    description?: StringNullableFilter<"events"> | string | null
    owner?: StringNullableFilter<"events"> | string | null
    status?: BoolNullableFilter<"events"> | boolean | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    participations?: ParticipationsListRelationFilter
  }

  export type eventsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    school_year?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    category_index?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    owner?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    participations?: participationsOrderByRelationAggregateInput
  }

  export type eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    name?: StringNullableFilter<"events"> | string | null
    school_year?: StringNullableFilter<"events"> | string | null
    semester?: IntNullableFilter<"events"> | number | null
    category?: StringNullableFilter<"events"> | string | null
    category_index?: StringNullableFilter<"events"> | string | null
    organization?: StringNullableFilter<"events"> | string | null
    start_date?: DateTimeNullableFilter<"events"> | Date | string | null
    end_date?: DateTimeNullableFilter<"events"> | Date | string | null
    description?: StringNullableFilter<"events"> | string | null
    owner?: StringNullableFilter<"events"> | string | null
    status?: BoolNullableFilter<"events"> | boolean | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    participations?: ParticipationsListRelationFilter
  }, "id">

  export type eventsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    school_year?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    category_index?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    owner?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: eventsCountOrderByAggregateInput
    _avg?: eventsAvgOrderByAggregateInput
    _max?: eventsMaxOrderByAggregateInput
    _min?: eventsMinOrderByAggregateInput
    _sum?: eventsSumOrderByAggregateInput
  }

  export type eventsScalarWhereWithAggregatesInput = {
    AND?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    OR?: eventsScalarWhereWithAggregatesInput[]
    NOT?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"events"> | string
    name?: StringNullableWithAggregatesFilter<"events"> | string | null
    school_year?: StringNullableWithAggregatesFilter<"events"> | string | null
    semester?: IntNullableWithAggregatesFilter<"events"> | number | null
    category?: StringNullableWithAggregatesFilter<"events"> | string | null
    category_index?: StringNullableWithAggregatesFilter<"events"> | string | null
    organization?: StringNullableWithAggregatesFilter<"events"> | string | null
    start_date?: DateTimeNullableWithAggregatesFilter<"events"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"events"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"events"> | string | null
    owner?: StringNullableWithAggregatesFilter<"events"> | string | null
    status?: BoolNullableWithAggregatesFilter<"events"> | boolean | null
  }

  export type mark_categoryWhereInput = {
    AND?: mark_categoryWhereInput | mark_categoryWhereInput[]
    OR?: mark_categoryWhereInput[]
    NOT?: mark_categoryWhereInput | mark_categoryWhereInput[]
    id?: IntFilter<"mark_category"> | number
    category?: StringNullableFilter<"mark_category"> | string | null
    achievement?: StringNullableFilter<"mark_category"> | string | null
    reward_org?: StringNullableFilter<"mark_category"> | string | null
    note?: StringNullableFilter<"mark_category"> | string | null
    school_year?: StringNullableFilter<"mark_category"> | string | null
    semester?: IntNullableFilter<"mark_category"> | number | null
    mark?: IntNullableFilter<"mark_category"> | number | null
  }

  export type mark_categoryOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrderInput | SortOrder
    achievement?: SortOrderInput | SortOrder
    reward_org?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    school_year?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    mark?: SortOrderInput | SortOrder
  }

  export type mark_categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mark_categoryWhereInput | mark_categoryWhereInput[]
    OR?: mark_categoryWhereInput[]
    NOT?: mark_categoryWhereInput | mark_categoryWhereInput[]
    category?: StringNullableFilter<"mark_category"> | string | null
    achievement?: StringNullableFilter<"mark_category"> | string | null
    reward_org?: StringNullableFilter<"mark_category"> | string | null
    note?: StringNullableFilter<"mark_category"> | string | null
    school_year?: StringNullableFilter<"mark_category"> | string | null
    semester?: IntNullableFilter<"mark_category"> | number | null
    mark?: IntNullableFilter<"mark_category"> | number | null
  }, "id">

  export type mark_categoryOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrderInput | SortOrder
    achievement?: SortOrderInput | SortOrder
    reward_org?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    school_year?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    mark?: SortOrderInput | SortOrder
    _count?: mark_categoryCountOrderByAggregateInput
    _avg?: mark_categoryAvgOrderByAggregateInput
    _max?: mark_categoryMaxOrderByAggregateInput
    _min?: mark_categoryMinOrderByAggregateInput
    _sum?: mark_categorySumOrderByAggregateInput
  }

  export type mark_categoryScalarWhereWithAggregatesInput = {
    AND?: mark_categoryScalarWhereWithAggregatesInput | mark_categoryScalarWhereWithAggregatesInput[]
    OR?: mark_categoryScalarWhereWithAggregatesInput[]
    NOT?: mark_categoryScalarWhereWithAggregatesInput | mark_categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mark_category"> | number
    category?: StringNullableWithAggregatesFilter<"mark_category"> | string | null
    achievement?: StringNullableWithAggregatesFilter<"mark_category"> | string | null
    reward_org?: StringNullableWithAggregatesFilter<"mark_category"> | string | null
    note?: StringNullableWithAggregatesFilter<"mark_category"> | string | null
    school_year?: StringNullableWithAggregatesFilter<"mark_category"> | string | null
    semester?: IntNullableWithAggregatesFilter<"mark_category"> | number | null
    mark?: IntNullableWithAggregatesFilter<"mark_category"> | number | null
  }

  export type class_codesWhereInput = {
    AND?: class_codesWhereInput | class_codesWhereInput[]
    OR?: class_codesWhereInput[]
    NOT?: class_codesWhereInput | class_codesWhereInput[]
    name?: StringFilter<"class_codes"> | string
    department_id?: IntNullableFilter<"class_codes"> | number | null
    departments?: XOR<DepartmentsNullableRelationFilter, departmentsWhereInput> | null
    members?: MembersListRelationFilter
  }

  export type class_codesOrderByWithRelationInput = {
    name?: SortOrder
    department_id?: SortOrderInput | SortOrder
    departments?: departmentsOrderByWithRelationInput
    members?: membersOrderByRelationAggregateInput
  }

  export type class_codesWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: class_codesWhereInput | class_codesWhereInput[]
    OR?: class_codesWhereInput[]
    NOT?: class_codesWhereInput | class_codesWhereInput[]
    department_id?: IntNullableFilter<"class_codes"> | number | null
    departments?: XOR<DepartmentsNullableRelationFilter, departmentsWhereInput> | null
    members?: MembersListRelationFilter
  }, "name">

  export type class_codesOrderByWithAggregationInput = {
    name?: SortOrder
    department_id?: SortOrderInput | SortOrder
    _count?: class_codesCountOrderByAggregateInput
    _avg?: class_codesAvgOrderByAggregateInput
    _max?: class_codesMaxOrderByAggregateInput
    _min?: class_codesMinOrderByAggregateInput
    _sum?: class_codesSumOrderByAggregateInput
  }

  export type class_codesScalarWhereWithAggregatesInput = {
    AND?: class_codesScalarWhereWithAggregatesInput | class_codesScalarWhereWithAggregatesInput[]
    OR?: class_codesScalarWhereWithAggregatesInput[]
    NOT?: class_codesScalarWhereWithAggregatesInput | class_codesScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"class_codes"> | string
    department_id?: IntNullableWithAggregatesFilter<"class_codes"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    department_id?: IntNullableFilter<"users"> | number | null
    department?: StringNullableFilter<"users"> | string | null
    events?: EventsListRelationFilter
    departments?: XOR<DepartmentsNullableRelationFilter, departmentsWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    department_id?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    events?: eventsOrderByRelationAggregateInput
    departments?: departmentsOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    department_id?: IntNullableFilter<"users"> | number | null
    department?: StringNullableFilter<"users"> | string | null
    events?: EventsListRelationFilter
    departments?: XOR<DepartmentsNullableRelationFilter, departmentsWhereInput> | null
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    department_id?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    department_id?: IntNullableWithAggregatesFilter<"users"> | number | null
    department?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type majorsWhereInput = {
    AND?: majorsWhereInput | majorsWhereInput[]
    OR?: majorsWhereInput[]
    NOT?: majorsWhereInput | majorsWhereInput[]
    id?: StringFilter<"majors"> | string
    name?: StringNullableFilter<"majors"> | string | null
    ctda?: BoolNullableFilter<"majors"> | boolean | null
    department_id?: IntNullableFilter<"majors"> | number | null
    participations?: ParticipationsListRelationFilter
  }

  export type majorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    ctda?: SortOrderInput | SortOrder
    department_id?: SortOrderInput | SortOrder
    participations?: participationsOrderByRelationAggregateInput
  }

  export type majorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: majorsWhereInput | majorsWhereInput[]
    OR?: majorsWhereInput[]
    NOT?: majorsWhereInput | majorsWhereInput[]
    name?: StringNullableFilter<"majors"> | string | null
    ctda?: BoolNullableFilter<"majors"> | boolean | null
    department_id?: IntNullableFilter<"majors"> | number | null
    participations?: ParticipationsListRelationFilter
  }, "id">

  export type majorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    ctda?: SortOrderInput | SortOrder
    department_id?: SortOrderInput | SortOrder
    _count?: majorsCountOrderByAggregateInput
    _avg?: majorsAvgOrderByAggregateInput
    _max?: majorsMaxOrderByAggregateInput
    _min?: majorsMinOrderByAggregateInput
    _sum?: majorsSumOrderByAggregateInput
  }

  export type majorsScalarWhereWithAggregatesInput = {
    AND?: majorsScalarWhereWithAggregatesInput | majorsScalarWhereWithAggregatesInput[]
    OR?: majorsScalarWhereWithAggregatesInput[]
    NOT?: majorsScalarWhereWithAggregatesInput | majorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"majors"> | string
    name?: StringNullableWithAggregatesFilter<"majors"> | string | null
    ctda?: BoolNullableWithAggregatesFilter<"majors"> | boolean | null
    department_id?: IntNullableWithAggregatesFilter<"majors"> | number | null
  }

  export type departmentsWhereInput = {
    AND?: departmentsWhereInput | departmentsWhereInput[]
    OR?: departmentsWhereInput[]
    NOT?: departmentsWhereInput | departmentsWhereInput[]
    id?: IntFilter<"departments"> | number
    name?: StringNullableFilter<"departments"> | string | null
    class_codes?: Class_codesListRelationFilter
    members?: MembersListRelationFilter
    users?: UsersListRelationFilter
  }

  export type departmentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    class_codes?: class_codesOrderByRelationAggregateInput
    members?: membersOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
  }

  export type departmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: departmentsWhereInput | departmentsWhereInput[]
    OR?: departmentsWhereInput[]
    NOT?: departmentsWhereInput | departmentsWhereInput[]
    name?: StringNullableFilter<"departments"> | string | null
    class_codes?: Class_codesListRelationFilter
    members?: MembersListRelationFilter
    users?: UsersListRelationFilter
  }, "id">

  export type departmentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: departmentsCountOrderByAggregateInput
    _avg?: departmentsAvgOrderByAggregateInput
    _max?: departmentsMaxOrderByAggregateInput
    _min?: departmentsMinOrderByAggregateInput
    _sum?: departmentsSumOrderByAggregateInput
  }

  export type departmentsScalarWhereWithAggregatesInput = {
    AND?: departmentsScalarWhereWithAggregatesInput | departmentsScalarWhereWithAggregatesInput[]
    OR?: departmentsScalarWhereWithAggregatesInput[]
    NOT?: departmentsScalarWhereWithAggregatesInput | departmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"departments"> | number
    name?: StringNullableWithAggregatesFilter<"departments"> | string | null
  }

  export type participationsWhereInput = {
    AND?: participationsWhereInput | participationsWhereInput[]
    OR?: participationsWhereInput[]
    NOT?: participationsWhereInput | participationsWhereInput[]
    student_id?: StringFilter<"participations"> | string
    name?: StringNullableFilter<"participations"> | string | null
    event_id?: StringFilter<"participations"> | string
    note?: StringNullableFilter<"participations"> | string | null
    achievement?: StringNullableFilter<"participations"> | string | null
    reward_org?: StringNullableFilter<"participations"> | string | null
    major_id?: StringNullableFilter<"participations"> | string | null
    mark?: IntNullableFilter<"participations"> | number | null
    events?: XOR<EventsRelationFilter, eventsWhereInput>
    majors?: XOR<MajorsNullableRelationFilter, majorsWhereInput> | null
  }

  export type participationsOrderByWithRelationInput = {
    student_id?: SortOrder
    name?: SortOrderInput | SortOrder
    event_id?: SortOrder
    note?: SortOrderInput | SortOrder
    achievement?: SortOrderInput | SortOrder
    reward_org?: SortOrderInput | SortOrder
    major_id?: SortOrderInput | SortOrder
    mark?: SortOrderInput | SortOrder
    events?: eventsOrderByWithRelationInput
    majors?: majorsOrderByWithRelationInput
  }

  export type participationsWhereUniqueInput = Prisma.AtLeast<{
    student_id_event_id?: participationsStudent_idEvent_idCompoundUniqueInput
    AND?: participationsWhereInput | participationsWhereInput[]
    OR?: participationsWhereInput[]
    NOT?: participationsWhereInput | participationsWhereInput[]
    student_id?: StringFilter<"participations"> | string
    name?: StringNullableFilter<"participations"> | string | null
    event_id?: StringFilter<"participations"> | string
    note?: StringNullableFilter<"participations"> | string | null
    achievement?: StringNullableFilter<"participations"> | string | null
    reward_org?: StringNullableFilter<"participations"> | string | null
    major_id?: StringNullableFilter<"participations"> | string | null
    mark?: IntNullableFilter<"participations"> | number | null
    events?: XOR<EventsRelationFilter, eventsWhereInput>
    majors?: XOR<MajorsNullableRelationFilter, majorsWhereInput> | null
  }, "student_id_event_id">

  export type participationsOrderByWithAggregationInput = {
    student_id?: SortOrder
    name?: SortOrderInput | SortOrder
    event_id?: SortOrder
    note?: SortOrderInput | SortOrder
    achievement?: SortOrderInput | SortOrder
    reward_org?: SortOrderInput | SortOrder
    major_id?: SortOrderInput | SortOrder
    mark?: SortOrderInput | SortOrder
    _count?: participationsCountOrderByAggregateInput
    _avg?: participationsAvgOrderByAggregateInput
    _max?: participationsMaxOrderByAggregateInput
    _min?: participationsMinOrderByAggregateInput
    _sum?: participationsSumOrderByAggregateInput
  }

  export type participationsScalarWhereWithAggregatesInput = {
    AND?: participationsScalarWhereWithAggregatesInput | participationsScalarWhereWithAggregatesInput[]
    OR?: participationsScalarWhereWithAggregatesInput[]
    NOT?: participationsScalarWhereWithAggregatesInput | participationsScalarWhereWithAggregatesInput[]
    student_id?: StringWithAggregatesFilter<"participations"> | string
    name?: StringNullableWithAggregatesFilter<"participations"> | string | null
    event_id?: StringWithAggregatesFilter<"participations"> | string
    note?: StringNullableWithAggregatesFilter<"participations"> | string | null
    achievement?: StringNullableWithAggregatesFilter<"participations"> | string | null
    reward_org?: StringNullableWithAggregatesFilter<"participations"> | string | null
    major_id?: StringNullableWithAggregatesFilter<"participations"> | string | null
    mark?: IntNullableWithAggregatesFilter<"participations"> | number | null
  }

  export type membersWhereInput = {
    AND?: membersWhereInput | membersWhereInput[]
    OR?: membersWhereInput[]
    NOT?: membersWhereInput | membersWhereInput[]
    id?: StringFilter<"members"> | string
    name?: StringNullableFilter<"members"> | string | null
    class_code?: StringNullableFilter<"members"> | string | null
    department_id?: IntNullableFilter<"members"> | number | null
    class_codes?: XOR<Class_codesNullableRelationFilter, class_codesWhereInput> | null
    departments?: XOR<DepartmentsNullableRelationFilter, departmentsWhereInput> | null
  }

  export type membersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    class_code?: SortOrderInput | SortOrder
    department_id?: SortOrderInput | SortOrder
    class_codes?: class_codesOrderByWithRelationInput
    departments?: departmentsOrderByWithRelationInput
  }

  export type membersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: membersWhereInput | membersWhereInput[]
    OR?: membersWhereInput[]
    NOT?: membersWhereInput | membersWhereInput[]
    name?: StringNullableFilter<"members"> | string | null
    class_code?: StringNullableFilter<"members"> | string | null
    department_id?: IntNullableFilter<"members"> | number | null
    class_codes?: XOR<Class_codesNullableRelationFilter, class_codesWhereInput> | null
    departments?: XOR<DepartmentsNullableRelationFilter, departmentsWhereInput> | null
  }, "id">

  export type membersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    class_code?: SortOrderInput | SortOrder
    department_id?: SortOrderInput | SortOrder
    _count?: membersCountOrderByAggregateInput
    _avg?: membersAvgOrderByAggregateInput
    _max?: membersMaxOrderByAggregateInput
    _min?: membersMinOrderByAggregateInput
    _sum?: membersSumOrderByAggregateInput
  }

  export type membersScalarWhereWithAggregatesInput = {
    AND?: membersScalarWhereWithAggregatesInput | membersScalarWhereWithAggregatesInput[]
    OR?: membersScalarWhereWithAggregatesInput[]
    NOT?: membersScalarWhereWithAggregatesInput | membersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"members"> | string
    name?: StringNullableWithAggregatesFilter<"members"> | string | null
    class_code?: StringNullableWithAggregatesFilter<"members"> | string | null
    department_id?: IntNullableWithAggregatesFilter<"members"> | number | null
  }

  export type eventsCreateInput = {
    id: string
    name?: string | null
    school_year?: string | null
    semester?: number | null
    category?: string | null
    category_index?: string | null
    organization?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    description?: string | null
    status?: boolean | null
    users?: usersCreateNestedOneWithoutEventsInput
    participations?: participationsCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateInput = {
    id: string
    name?: string | null
    school_year?: string | null
    semester?: number | null
    category?: string | null
    category_index?: string | null
    organization?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    description?: string | null
    owner?: string | null
    status?: boolean | null
    participations?: participationsUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category_index?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: usersUpdateOneWithoutEventsNestedInput
    participations?: participationsUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category_index?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    participations?: participationsUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type eventsCreateManyInput = {
    id: string
    name?: string | null
    school_year?: string | null
    semester?: number | null
    category?: string | null
    category_index?: string | null
    organization?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    description?: string | null
    owner?: string | null
    status?: boolean | null
  }

  export type eventsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category_index?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type eventsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category_index?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type mark_categoryCreateInput = {
    category?: string | null
    achievement?: string | null
    reward_org?: string | null
    note?: string | null
    school_year?: string | null
    semester?: number | null
    mark?: number | null
  }

  export type mark_categoryUncheckedCreateInput = {
    id?: number
    category?: string | null
    achievement?: string | null
    reward_org?: string | null
    note?: string | null
    school_year?: string | null
    semester?: number | null
    mark?: number | null
  }

  export type mark_categoryUpdateInput = {
    category?: NullableStringFieldUpdateOperationsInput | string | null
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    reward_org?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    mark?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mark_categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    reward_org?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    mark?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mark_categoryCreateManyInput = {
    id?: number
    category?: string | null
    achievement?: string | null
    reward_org?: string | null
    note?: string | null
    school_year?: string | null
    semester?: number | null
    mark?: number | null
  }

  export type mark_categoryUpdateManyMutationInput = {
    category?: NullableStringFieldUpdateOperationsInput | string | null
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    reward_org?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    mark?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mark_categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    reward_org?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    mark?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type class_codesCreateInput = {
    name: string
    departments?: departmentsCreateNestedOneWithoutClass_codesInput
    members?: membersCreateNestedManyWithoutClass_codesInput
  }

  export type class_codesUncheckedCreateInput = {
    name: string
    department_id?: number | null
    members?: membersUncheckedCreateNestedManyWithoutClass_codesInput
  }

  export type class_codesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    departments?: departmentsUpdateOneWithoutClass_codesNestedInput
    members?: membersUpdateManyWithoutClass_codesNestedInput
  }

  export type class_codesUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    members?: membersUncheckedUpdateManyWithoutClass_codesNestedInput
  }

  export type class_codesCreateManyInput = {
    name: string
    department_id?: number | null
  }

  export type class_codesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type class_codesUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    id: string
    name: string
    username: string
    password: string
    department?: string | null
    events?: eventsCreateNestedManyWithoutUsersInput
    departments?: departmentsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    name: string
    username: string
    password: string
    department_id?: number | null
    department?: string | null
    events?: eventsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    events?: eventsUpdateManyWithoutUsersNestedInput
    departments?: departmentsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    events?: eventsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    name: string
    username: string
    password: string
    department_id?: number | null
    department?: string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type majorsCreateInput = {
    id: string
    name?: string | null
    ctda?: boolean | null
    department_id?: number | null
    participations?: participationsCreateNestedManyWithoutMajorsInput
  }

  export type majorsUncheckedCreateInput = {
    id: string
    name?: string | null
    ctda?: boolean | null
    department_id?: number | null
    participations?: participationsUncheckedCreateNestedManyWithoutMajorsInput
  }

  export type majorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ctda?: NullableBoolFieldUpdateOperationsInput | boolean | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    participations?: participationsUpdateManyWithoutMajorsNestedInput
  }

  export type majorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ctda?: NullableBoolFieldUpdateOperationsInput | boolean | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    participations?: participationsUncheckedUpdateManyWithoutMajorsNestedInput
  }

  export type majorsCreateManyInput = {
    id: string
    name?: string | null
    ctda?: boolean | null
    department_id?: number | null
  }

  export type majorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ctda?: NullableBoolFieldUpdateOperationsInput | boolean | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type majorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ctda?: NullableBoolFieldUpdateOperationsInput | boolean | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type departmentsCreateInput = {
    id: number
    name?: string | null
    class_codes?: class_codesCreateNestedManyWithoutDepartmentsInput
    members?: membersCreateNestedManyWithoutDepartmentsInput
    users?: usersCreateNestedManyWithoutDepartmentsInput
  }

  export type departmentsUncheckedCreateInput = {
    id: number
    name?: string | null
    class_codes?: class_codesUncheckedCreateNestedManyWithoutDepartmentsInput
    members?: membersUncheckedCreateNestedManyWithoutDepartmentsInput
    users?: usersUncheckedCreateNestedManyWithoutDepartmentsInput
  }

  export type departmentsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    class_codes?: class_codesUpdateManyWithoutDepartmentsNestedInput
    members?: membersUpdateManyWithoutDepartmentsNestedInput
    users?: usersUpdateManyWithoutDepartmentsNestedInput
  }

  export type departmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    class_codes?: class_codesUncheckedUpdateManyWithoutDepartmentsNestedInput
    members?: membersUncheckedUpdateManyWithoutDepartmentsNestedInput
    users?: usersUncheckedUpdateManyWithoutDepartmentsNestedInput
  }

  export type departmentsCreateManyInput = {
    id: number
    name?: string | null
  }

  export type departmentsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type departmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type participationsCreateInput = {
    student_id: string
    name?: string | null
    note?: string | null
    achievement?: string | null
    reward_org?: string | null
    mark?: number | null
    events: eventsCreateNestedOneWithoutParticipationsInput
    majors?: majorsCreateNestedOneWithoutParticipationsInput
  }

  export type participationsUncheckedCreateInput = {
    student_id: string
    name?: string | null
    event_id: string
    note?: string | null
    achievement?: string | null
    reward_org?: string | null
    major_id?: string | null
    mark?: number | null
  }

  export type participationsUpdateInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    reward_org?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableIntFieldUpdateOperationsInput | number | null
    events?: eventsUpdateOneRequiredWithoutParticipationsNestedInput
    majors?: majorsUpdateOneWithoutParticipationsNestedInput
  }

  export type participationsUncheckedUpdateInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    event_id?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    reward_org?: NullableStringFieldUpdateOperationsInput | string | null
    major_id?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type participationsCreateManyInput = {
    student_id: string
    name?: string | null
    event_id: string
    note?: string | null
    achievement?: string | null
    reward_org?: string | null
    major_id?: string | null
    mark?: number | null
  }

  export type participationsUpdateManyMutationInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    reward_org?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type participationsUncheckedUpdateManyInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    event_id?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    reward_org?: NullableStringFieldUpdateOperationsInput | string | null
    major_id?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type membersCreateInput = {
    id: string
    name?: string | null
    class_codes?: class_codesCreateNestedOneWithoutMembersInput
    departments?: departmentsCreateNestedOneWithoutMembersInput
  }

  export type membersUncheckedCreateInput = {
    id: string
    name?: string | null
    class_code?: string | null
    department_id?: number | null
  }

  export type membersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    class_codes?: class_codesUpdateOneWithoutMembersNestedInput
    departments?: departmentsUpdateOneWithoutMembersNestedInput
  }

  export type membersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    class_code?: NullableStringFieldUpdateOperationsInput | string | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type membersCreateManyInput = {
    id: string
    name?: string | null
    class_code?: string | null
    department_id?: number | null
  }

  export type membersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type membersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    class_code?: NullableStringFieldUpdateOperationsInput | string | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type ParticipationsListRelationFilter = {
    every?: participationsWhereInput
    some?: participationsWhereInput
    none?: participationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type participationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    school_year?: SortOrder
    semester?: SortOrder
    category?: SortOrder
    category_index?: SortOrder
    organization?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    description?: SortOrder
    owner?: SortOrder
    status?: SortOrder
  }

  export type eventsAvgOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    school_year?: SortOrder
    semester?: SortOrder
    category?: SortOrder
    category_index?: SortOrder
    organization?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    description?: SortOrder
    owner?: SortOrder
    status?: SortOrder
  }

  export type eventsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    school_year?: SortOrder
    semester?: SortOrder
    category?: SortOrder
    category_index?: SortOrder
    organization?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    description?: SortOrder
    owner?: SortOrder
    status?: SortOrder
  }

  export type eventsSumOrderByAggregateInput = {
    semester?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type mark_categoryCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    achievement?: SortOrder
    reward_org?: SortOrder
    note?: SortOrder
    school_year?: SortOrder
    semester?: SortOrder
    mark?: SortOrder
  }

  export type mark_categoryAvgOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
    mark?: SortOrder
  }

  export type mark_categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    achievement?: SortOrder
    reward_org?: SortOrder
    note?: SortOrder
    school_year?: SortOrder
    semester?: SortOrder
    mark?: SortOrder
  }

  export type mark_categoryMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    achievement?: SortOrder
    reward_org?: SortOrder
    note?: SortOrder
    school_year?: SortOrder
    semester?: SortOrder
    mark?: SortOrder
  }

  export type mark_categorySumOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
    mark?: SortOrder
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

  export type DepartmentsNullableRelationFilter = {
    is?: departmentsWhereInput | null
    isNot?: departmentsWhereInput | null
  }

  export type MembersListRelationFilter = {
    every?: membersWhereInput
    some?: membersWhereInput
    none?: membersWhereInput
  }

  export type membersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type class_codesCountOrderByAggregateInput = {
    name?: SortOrder
    department_id?: SortOrder
  }

  export type class_codesAvgOrderByAggregateInput = {
    department_id?: SortOrder
  }

  export type class_codesMaxOrderByAggregateInput = {
    name?: SortOrder
    department_id?: SortOrder
  }

  export type class_codesMinOrderByAggregateInput = {
    name?: SortOrder
    department_id?: SortOrder
  }

  export type class_codesSumOrderByAggregateInput = {
    department_id?: SortOrder
  }

  export type EventsListRelationFilter = {
    every?: eventsWhereInput
    some?: eventsWhereInput
    none?: eventsWhereInput
  }

  export type eventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    department_id?: SortOrder
    department?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    department_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    department_id?: SortOrder
    department?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    department_id?: SortOrder
    department?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    department_id?: SortOrder
  }

  export type majorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ctda?: SortOrder
    department_id?: SortOrder
  }

  export type majorsAvgOrderByAggregateInput = {
    department_id?: SortOrder
  }

  export type majorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ctda?: SortOrder
    department_id?: SortOrder
  }

  export type majorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ctda?: SortOrder
    department_id?: SortOrder
  }

  export type majorsSumOrderByAggregateInput = {
    department_id?: SortOrder
  }

  export type Class_codesListRelationFilter = {
    every?: class_codesWhereInput
    some?: class_codesWhereInput
    none?: class_codesWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type class_codesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type departmentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type departmentsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type departmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type departmentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type departmentsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventsRelationFilter = {
    is?: eventsWhereInput
    isNot?: eventsWhereInput
  }

  export type MajorsNullableRelationFilter = {
    is?: majorsWhereInput | null
    isNot?: majorsWhereInput | null
  }

  export type participationsStudent_idEvent_idCompoundUniqueInput = {
    student_id: string
    event_id: string
  }

  export type participationsCountOrderByAggregateInput = {
    student_id?: SortOrder
    name?: SortOrder
    event_id?: SortOrder
    note?: SortOrder
    achievement?: SortOrder
    reward_org?: SortOrder
    major_id?: SortOrder
    mark?: SortOrder
  }

  export type participationsAvgOrderByAggregateInput = {
    mark?: SortOrder
  }

  export type participationsMaxOrderByAggregateInput = {
    student_id?: SortOrder
    name?: SortOrder
    event_id?: SortOrder
    note?: SortOrder
    achievement?: SortOrder
    reward_org?: SortOrder
    major_id?: SortOrder
    mark?: SortOrder
  }

  export type participationsMinOrderByAggregateInput = {
    student_id?: SortOrder
    name?: SortOrder
    event_id?: SortOrder
    note?: SortOrder
    achievement?: SortOrder
    reward_org?: SortOrder
    major_id?: SortOrder
    mark?: SortOrder
  }

  export type participationsSumOrderByAggregateInput = {
    mark?: SortOrder
  }

  export type Class_codesNullableRelationFilter = {
    is?: class_codesWhereInput | null
    isNot?: class_codesWhereInput | null
  }

  export type membersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    class_code?: SortOrder
    department_id?: SortOrder
  }

  export type membersAvgOrderByAggregateInput = {
    department_id?: SortOrder
  }

  export type membersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    class_code?: SortOrder
    department_id?: SortOrder
  }

  export type membersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    class_code?: SortOrder
    department_id?: SortOrder
  }

  export type membersSumOrderByAggregateInput = {
    department_id?: SortOrder
  }

  export type usersCreateNestedOneWithoutEventsInput = {
    create?: XOR<usersCreateWithoutEventsInput, usersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEventsInput
    connect?: usersWhereUniqueInput
  }

  export type participationsCreateNestedManyWithoutEventsInput = {
    create?: XOR<participationsCreateWithoutEventsInput, participationsUncheckedCreateWithoutEventsInput> | participationsCreateWithoutEventsInput[] | participationsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: participationsCreateOrConnectWithoutEventsInput | participationsCreateOrConnectWithoutEventsInput[]
    createMany?: participationsCreateManyEventsInputEnvelope
    connect?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
  }

  export type participationsUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<participationsCreateWithoutEventsInput, participationsUncheckedCreateWithoutEventsInput> | participationsCreateWithoutEventsInput[] | participationsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: participationsCreateOrConnectWithoutEventsInput | participationsCreateOrConnectWithoutEventsInput[]
    createMany?: participationsCreateManyEventsInputEnvelope
    connect?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usersUpdateOneWithoutEventsNestedInput = {
    create?: XOR<usersCreateWithoutEventsInput, usersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEventsInput
    upsert?: usersUpsertWithoutEventsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEventsInput, usersUpdateWithoutEventsInput>, usersUncheckedUpdateWithoutEventsInput>
  }

  export type participationsUpdateManyWithoutEventsNestedInput = {
    create?: XOR<participationsCreateWithoutEventsInput, participationsUncheckedCreateWithoutEventsInput> | participationsCreateWithoutEventsInput[] | participationsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: participationsCreateOrConnectWithoutEventsInput | participationsCreateOrConnectWithoutEventsInput[]
    upsert?: participationsUpsertWithWhereUniqueWithoutEventsInput | participationsUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: participationsCreateManyEventsInputEnvelope
    set?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
    disconnect?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
    delete?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
    connect?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
    update?: participationsUpdateWithWhereUniqueWithoutEventsInput | participationsUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: participationsUpdateManyWithWhereWithoutEventsInput | participationsUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: participationsScalarWhereInput | participationsScalarWhereInput[]
  }

  export type participationsUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<participationsCreateWithoutEventsInput, participationsUncheckedCreateWithoutEventsInput> | participationsCreateWithoutEventsInput[] | participationsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: participationsCreateOrConnectWithoutEventsInput | participationsCreateOrConnectWithoutEventsInput[]
    upsert?: participationsUpsertWithWhereUniqueWithoutEventsInput | participationsUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: participationsCreateManyEventsInputEnvelope
    set?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
    disconnect?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
    delete?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
    connect?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
    update?: participationsUpdateWithWhereUniqueWithoutEventsInput | participationsUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: participationsUpdateManyWithWhereWithoutEventsInput | participationsUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: participationsScalarWhereInput | participationsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type departmentsCreateNestedOneWithoutClass_codesInput = {
    create?: XOR<departmentsCreateWithoutClass_codesInput, departmentsUncheckedCreateWithoutClass_codesInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutClass_codesInput
    connect?: departmentsWhereUniqueInput
  }

  export type membersCreateNestedManyWithoutClass_codesInput = {
    create?: XOR<membersCreateWithoutClass_codesInput, membersUncheckedCreateWithoutClass_codesInput> | membersCreateWithoutClass_codesInput[] | membersUncheckedCreateWithoutClass_codesInput[]
    connectOrCreate?: membersCreateOrConnectWithoutClass_codesInput | membersCreateOrConnectWithoutClass_codesInput[]
    createMany?: membersCreateManyClass_codesInputEnvelope
    connect?: membersWhereUniqueInput | membersWhereUniqueInput[]
  }

  export type membersUncheckedCreateNestedManyWithoutClass_codesInput = {
    create?: XOR<membersCreateWithoutClass_codesInput, membersUncheckedCreateWithoutClass_codesInput> | membersCreateWithoutClass_codesInput[] | membersUncheckedCreateWithoutClass_codesInput[]
    connectOrCreate?: membersCreateOrConnectWithoutClass_codesInput | membersCreateOrConnectWithoutClass_codesInput[]
    createMany?: membersCreateManyClass_codesInputEnvelope
    connect?: membersWhereUniqueInput | membersWhereUniqueInput[]
  }

  export type departmentsUpdateOneWithoutClass_codesNestedInput = {
    create?: XOR<departmentsCreateWithoutClass_codesInput, departmentsUncheckedCreateWithoutClass_codesInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutClass_codesInput
    upsert?: departmentsUpsertWithoutClass_codesInput
    disconnect?: departmentsWhereInput | boolean
    delete?: departmentsWhereInput | boolean
    connect?: departmentsWhereUniqueInput
    update?: XOR<XOR<departmentsUpdateToOneWithWhereWithoutClass_codesInput, departmentsUpdateWithoutClass_codesInput>, departmentsUncheckedUpdateWithoutClass_codesInput>
  }

  export type membersUpdateManyWithoutClass_codesNestedInput = {
    create?: XOR<membersCreateWithoutClass_codesInput, membersUncheckedCreateWithoutClass_codesInput> | membersCreateWithoutClass_codesInput[] | membersUncheckedCreateWithoutClass_codesInput[]
    connectOrCreate?: membersCreateOrConnectWithoutClass_codesInput | membersCreateOrConnectWithoutClass_codesInput[]
    upsert?: membersUpsertWithWhereUniqueWithoutClass_codesInput | membersUpsertWithWhereUniqueWithoutClass_codesInput[]
    createMany?: membersCreateManyClass_codesInputEnvelope
    set?: membersWhereUniqueInput | membersWhereUniqueInput[]
    disconnect?: membersWhereUniqueInput | membersWhereUniqueInput[]
    delete?: membersWhereUniqueInput | membersWhereUniqueInput[]
    connect?: membersWhereUniqueInput | membersWhereUniqueInput[]
    update?: membersUpdateWithWhereUniqueWithoutClass_codesInput | membersUpdateWithWhereUniqueWithoutClass_codesInput[]
    updateMany?: membersUpdateManyWithWhereWithoutClass_codesInput | membersUpdateManyWithWhereWithoutClass_codesInput[]
    deleteMany?: membersScalarWhereInput | membersScalarWhereInput[]
  }

  export type membersUncheckedUpdateManyWithoutClass_codesNestedInput = {
    create?: XOR<membersCreateWithoutClass_codesInput, membersUncheckedCreateWithoutClass_codesInput> | membersCreateWithoutClass_codesInput[] | membersUncheckedCreateWithoutClass_codesInput[]
    connectOrCreate?: membersCreateOrConnectWithoutClass_codesInput | membersCreateOrConnectWithoutClass_codesInput[]
    upsert?: membersUpsertWithWhereUniqueWithoutClass_codesInput | membersUpsertWithWhereUniqueWithoutClass_codesInput[]
    createMany?: membersCreateManyClass_codesInputEnvelope
    set?: membersWhereUniqueInput | membersWhereUniqueInput[]
    disconnect?: membersWhereUniqueInput | membersWhereUniqueInput[]
    delete?: membersWhereUniqueInput | membersWhereUniqueInput[]
    connect?: membersWhereUniqueInput | membersWhereUniqueInput[]
    update?: membersUpdateWithWhereUniqueWithoutClass_codesInput | membersUpdateWithWhereUniqueWithoutClass_codesInput[]
    updateMany?: membersUpdateManyWithWhereWithoutClass_codesInput | membersUpdateManyWithWhereWithoutClass_codesInput[]
    deleteMany?: membersScalarWhereInput | membersScalarWhereInput[]
  }

  export type eventsCreateNestedManyWithoutUsersInput = {
    create?: XOR<eventsCreateWithoutUsersInput, eventsUncheckedCreateWithoutUsersInput> | eventsCreateWithoutUsersInput[] | eventsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutUsersInput | eventsCreateOrConnectWithoutUsersInput[]
    createMany?: eventsCreateManyUsersInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type departmentsCreateNestedOneWithoutUsersInput = {
    create?: XOR<departmentsCreateWithoutUsersInput, departmentsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutUsersInput
    connect?: departmentsWhereUniqueInput
  }

  export type eventsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<eventsCreateWithoutUsersInput, eventsUncheckedCreateWithoutUsersInput> | eventsCreateWithoutUsersInput[] | eventsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutUsersInput | eventsCreateOrConnectWithoutUsersInput[]
    createMany?: eventsCreateManyUsersInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type eventsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<eventsCreateWithoutUsersInput, eventsUncheckedCreateWithoutUsersInput> | eventsCreateWithoutUsersInput[] | eventsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutUsersInput | eventsCreateOrConnectWithoutUsersInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutUsersInput | eventsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: eventsCreateManyUsersInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutUsersInput | eventsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutUsersInput | eventsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type departmentsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<departmentsCreateWithoutUsersInput, departmentsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutUsersInput
    upsert?: departmentsUpsertWithoutUsersInput
    disconnect?: departmentsWhereInput | boolean
    delete?: departmentsWhereInput | boolean
    connect?: departmentsWhereUniqueInput
    update?: XOR<XOR<departmentsUpdateToOneWithWhereWithoutUsersInput, departmentsUpdateWithoutUsersInput>, departmentsUncheckedUpdateWithoutUsersInput>
  }

  export type eventsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<eventsCreateWithoutUsersInput, eventsUncheckedCreateWithoutUsersInput> | eventsCreateWithoutUsersInput[] | eventsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutUsersInput | eventsCreateOrConnectWithoutUsersInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutUsersInput | eventsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: eventsCreateManyUsersInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutUsersInput | eventsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutUsersInput | eventsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type participationsCreateNestedManyWithoutMajorsInput = {
    create?: XOR<participationsCreateWithoutMajorsInput, participationsUncheckedCreateWithoutMajorsInput> | participationsCreateWithoutMajorsInput[] | participationsUncheckedCreateWithoutMajorsInput[]
    connectOrCreate?: participationsCreateOrConnectWithoutMajorsInput | participationsCreateOrConnectWithoutMajorsInput[]
    createMany?: participationsCreateManyMajorsInputEnvelope
    connect?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
  }

  export type participationsUncheckedCreateNestedManyWithoutMajorsInput = {
    create?: XOR<participationsCreateWithoutMajorsInput, participationsUncheckedCreateWithoutMajorsInput> | participationsCreateWithoutMajorsInput[] | participationsUncheckedCreateWithoutMajorsInput[]
    connectOrCreate?: participationsCreateOrConnectWithoutMajorsInput | participationsCreateOrConnectWithoutMajorsInput[]
    createMany?: participationsCreateManyMajorsInputEnvelope
    connect?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
  }

  export type participationsUpdateManyWithoutMajorsNestedInput = {
    create?: XOR<participationsCreateWithoutMajorsInput, participationsUncheckedCreateWithoutMajorsInput> | participationsCreateWithoutMajorsInput[] | participationsUncheckedCreateWithoutMajorsInput[]
    connectOrCreate?: participationsCreateOrConnectWithoutMajorsInput | participationsCreateOrConnectWithoutMajorsInput[]
    upsert?: participationsUpsertWithWhereUniqueWithoutMajorsInput | participationsUpsertWithWhereUniqueWithoutMajorsInput[]
    createMany?: participationsCreateManyMajorsInputEnvelope
    set?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
    disconnect?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
    delete?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
    connect?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
    update?: participationsUpdateWithWhereUniqueWithoutMajorsInput | participationsUpdateWithWhereUniqueWithoutMajorsInput[]
    updateMany?: participationsUpdateManyWithWhereWithoutMajorsInput | participationsUpdateManyWithWhereWithoutMajorsInput[]
    deleteMany?: participationsScalarWhereInput | participationsScalarWhereInput[]
  }

  export type participationsUncheckedUpdateManyWithoutMajorsNestedInput = {
    create?: XOR<participationsCreateWithoutMajorsInput, participationsUncheckedCreateWithoutMajorsInput> | participationsCreateWithoutMajorsInput[] | participationsUncheckedCreateWithoutMajorsInput[]
    connectOrCreate?: participationsCreateOrConnectWithoutMajorsInput | participationsCreateOrConnectWithoutMajorsInput[]
    upsert?: participationsUpsertWithWhereUniqueWithoutMajorsInput | participationsUpsertWithWhereUniqueWithoutMajorsInput[]
    createMany?: participationsCreateManyMajorsInputEnvelope
    set?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
    disconnect?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
    delete?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
    connect?: participationsWhereUniqueInput | participationsWhereUniqueInput[]
    update?: participationsUpdateWithWhereUniqueWithoutMajorsInput | participationsUpdateWithWhereUniqueWithoutMajorsInput[]
    updateMany?: participationsUpdateManyWithWhereWithoutMajorsInput | participationsUpdateManyWithWhereWithoutMajorsInput[]
    deleteMany?: participationsScalarWhereInput | participationsScalarWhereInput[]
  }

  export type class_codesCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<class_codesCreateWithoutDepartmentsInput, class_codesUncheckedCreateWithoutDepartmentsInput> | class_codesCreateWithoutDepartmentsInput[] | class_codesUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: class_codesCreateOrConnectWithoutDepartmentsInput | class_codesCreateOrConnectWithoutDepartmentsInput[]
    createMany?: class_codesCreateManyDepartmentsInputEnvelope
    connect?: class_codesWhereUniqueInput | class_codesWhereUniqueInput[]
  }

  export type membersCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<membersCreateWithoutDepartmentsInput, membersUncheckedCreateWithoutDepartmentsInput> | membersCreateWithoutDepartmentsInput[] | membersUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: membersCreateOrConnectWithoutDepartmentsInput | membersCreateOrConnectWithoutDepartmentsInput[]
    createMany?: membersCreateManyDepartmentsInputEnvelope
    connect?: membersWhereUniqueInput | membersWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<usersCreateWithoutDepartmentsInput, usersUncheckedCreateWithoutDepartmentsInput> | usersCreateWithoutDepartmentsInput[] | usersUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutDepartmentsInput | usersCreateOrConnectWithoutDepartmentsInput[]
    createMany?: usersCreateManyDepartmentsInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type class_codesUncheckedCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<class_codesCreateWithoutDepartmentsInput, class_codesUncheckedCreateWithoutDepartmentsInput> | class_codesCreateWithoutDepartmentsInput[] | class_codesUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: class_codesCreateOrConnectWithoutDepartmentsInput | class_codesCreateOrConnectWithoutDepartmentsInput[]
    createMany?: class_codesCreateManyDepartmentsInputEnvelope
    connect?: class_codesWhereUniqueInput | class_codesWhereUniqueInput[]
  }

  export type membersUncheckedCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<membersCreateWithoutDepartmentsInput, membersUncheckedCreateWithoutDepartmentsInput> | membersCreateWithoutDepartmentsInput[] | membersUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: membersCreateOrConnectWithoutDepartmentsInput | membersCreateOrConnectWithoutDepartmentsInput[]
    createMany?: membersCreateManyDepartmentsInputEnvelope
    connect?: membersWhereUniqueInput | membersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<usersCreateWithoutDepartmentsInput, usersUncheckedCreateWithoutDepartmentsInput> | usersCreateWithoutDepartmentsInput[] | usersUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutDepartmentsInput | usersCreateOrConnectWithoutDepartmentsInput[]
    createMany?: usersCreateManyDepartmentsInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type class_codesUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<class_codesCreateWithoutDepartmentsInput, class_codesUncheckedCreateWithoutDepartmentsInput> | class_codesCreateWithoutDepartmentsInput[] | class_codesUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: class_codesCreateOrConnectWithoutDepartmentsInput | class_codesCreateOrConnectWithoutDepartmentsInput[]
    upsert?: class_codesUpsertWithWhereUniqueWithoutDepartmentsInput | class_codesUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: class_codesCreateManyDepartmentsInputEnvelope
    set?: class_codesWhereUniqueInput | class_codesWhereUniqueInput[]
    disconnect?: class_codesWhereUniqueInput | class_codesWhereUniqueInput[]
    delete?: class_codesWhereUniqueInput | class_codesWhereUniqueInput[]
    connect?: class_codesWhereUniqueInput | class_codesWhereUniqueInput[]
    update?: class_codesUpdateWithWhereUniqueWithoutDepartmentsInput | class_codesUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: class_codesUpdateManyWithWhereWithoutDepartmentsInput | class_codesUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: class_codesScalarWhereInput | class_codesScalarWhereInput[]
  }

  export type membersUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<membersCreateWithoutDepartmentsInput, membersUncheckedCreateWithoutDepartmentsInput> | membersCreateWithoutDepartmentsInput[] | membersUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: membersCreateOrConnectWithoutDepartmentsInput | membersCreateOrConnectWithoutDepartmentsInput[]
    upsert?: membersUpsertWithWhereUniqueWithoutDepartmentsInput | membersUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: membersCreateManyDepartmentsInputEnvelope
    set?: membersWhereUniqueInput | membersWhereUniqueInput[]
    disconnect?: membersWhereUniqueInput | membersWhereUniqueInput[]
    delete?: membersWhereUniqueInput | membersWhereUniqueInput[]
    connect?: membersWhereUniqueInput | membersWhereUniqueInput[]
    update?: membersUpdateWithWhereUniqueWithoutDepartmentsInput | membersUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: membersUpdateManyWithWhereWithoutDepartmentsInput | membersUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: membersScalarWhereInput | membersScalarWhereInput[]
  }

  export type usersUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<usersCreateWithoutDepartmentsInput, usersUncheckedCreateWithoutDepartmentsInput> | usersCreateWithoutDepartmentsInput[] | usersUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutDepartmentsInput | usersCreateOrConnectWithoutDepartmentsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutDepartmentsInput | usersUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: usersCreateManyDepartmentsInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutDepartmentsInput | usersUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutDepartmentsInput | usersUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type class_codesUncheckedUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<class_codesCreateWithoutDepartmentsInput, class_codesUncheckedCreateWithoutDepartmentsInput> | class_codesCreateWithoutDepartmentsInput[] | class_codesUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: class_codesCreateOrConnectWithoutDepartmentsInput | class_codesCreateOrConnectWithoutDepartmentsInput[]
    upsert?: class_codesUpsertWithWhereUniqueWithoutDepartmentsInput | class_codesUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: class_codesCreateManyDepartmentsInputEnvelope
    set?: class_codesWhereUniqueInput | class_codesWhereUniqueInput[]
    disconnect?: class_codesWhereUniqueInput | class_codesWhereUniqueInput[]
    delete?: class_codesWhereUniqueInput | class_codesWhereUniqueInput[]
    connect?: class_codesWhereUniqueInput | class_codesWhereUniqueInput[]
    update?: class_codesUpdateWithWhereUniqueWithoutDepartmentsInput | class_codesUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: class_codesUpdateManyWithWhereWithoutDepartmentsInput | class_codesUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: class_codesScalarWhereInput | class_codesScalarWhereInput[]
  }

  export type membersUncheckedUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<membersCreateWithoutDepartmentsInput, membersUncheckedCreateWithoutDepartmentsInput> | membersCreateWithoutDepartmentsInput[] | membersUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: membersCreateOrConnectWithoutDepartmentsInput | membersCreateOrConnectWithoutDepartmentsInput[]
    upsert?: membersUpsertWithWhereUniqueWithoutDepartmentsInput | membersUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: membersCreateManyDepartmentsInputEnvelope
    set?: membersWhereUniqueInput | membersWhereUniqueInput[]
    disconnect?: membersWhereUniqueInput | membersWhereUniqueInput[]
    delete?: membersWhereUniqueInput | membersWhereUniqueInput[]
    connect?: membersWhereUniqueInput | membersWhereUniqueInput[]
    update?: membersUpdateWithWhereUniqueWithoutDepartmentsInput | membersUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: membersUpdateManyWithWhereWithoutDepartmentsInput | membersUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: membersScalarWhereInput | membersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<usersCreateWithoutDepartmentsInput, usersUncheckedCreateWithoutDepartmentsInput> | usersCreateWithoutDepartmentsInput[] | usersUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutDepartmentsInput | usersCreateOrConnectWithoutDepartmentsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutDepartmentsInput | usersUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: usersCreateManyDepartmentsInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutDepartmentsInput | usersUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutDepartmentsInput | usersUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type eventsCreateNestedOneWithoutParticipationsInput = {
    create?: XOR<eventsCreateWithoutParticipationsInput, eventsUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutParticipationsInput
    connect?: eventsWhereUniqueInput
  }

  export type majorsCreateNestedOneWithoutParticipationsInput = {
    create?: XOR<majorsCreateWithoutParticipationsInput, majorsUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: majorsCreateOrConnectWithoutParticipationsInput
    connect?: majorsWhereUniqueInput
  }

  export type eventsUpdateOneRequiredWithoutParticipationsNestedInput = {
    create?: XOR<eventsCreateWithoutParticipationsInput, eventsUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutParticipationsInput
    upsert?: eventsUpsertWithoutParticipationsInput
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutParticipationsInput, eventsUpdateWithoutParticipationsInput>, eventsUncheckedUpdateWithoutParticipationsInput>
  }

  export type majorsUpdateOneWithoutParticipationsNestedInput = {
    create?: XOR<majorsCreateWithoutParticipationsInput, majorsUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: majorsCreateOrConnectWithoutParticipationsInput
    upsert?: majorsUpsertWithoutParticipationsInput
    disconnect?: majorsWhereInput | boolean
    delete?: majorsWhereInput | boolean
    connect?: majorsWhereUniqueInput
    update?: XOR<XOR<majorsUpdateToOneWithWhereWithoutParticipationsInput, majorsUpdateWithoutParticipationsInput>, majorsUncheckedUpdateWithoutParticipationsInput>
  }

  export type class_codesCreateNestedOneWithoutMembersInput = {
    create?: XOR<class_codesCreateWithoutMembersInput, class_codesUncheckedCreateWithoutMembersInput>
    connectOrCreate?: class_codesCreateOrConnectWithoutMembersInput
    connect?: class_codesWhereUniqueInput
  }

  export type departmentsCreateNestedOneWithoutMembersInput = {
    create?: XOR<departmentsCreateWithoutMembersInput, departmentsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutMembersInput
    connect?: departmentsWhereUniqueInput
  }

  export type class_codesUpdateOneWithoutMembersNestedInput = {
    create?: XOR<class_codesCreateWithoutMembersInput, class_codesUncheckedCreateWithoutMembersInput>
    connectOrCreate?: class_codesCreateOrConnectWithoutMembersInput
    upsert?: class_codesUpsertWithoutMembersInput
    disconnect?: class_codesWhereInput | boolean
    delete?: class_codesWhereInput | boolean
    connect?: class_codesWhereUniqueInput
    update?: XOR<XOR<class_codesUpdateToOneWithWhereWithoutMembersInput, class_codesUpdateWithoutMembersInput>, class_codesUncheckedUpdateWithoutMembersInput>
  }

  export type departmentsUpdateOneWithoutMembersNestedInput = {
    create?: XOR<departmentsCreateWithoutMembersInput, departmentsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutMembersInput
    upsert?: departmentsUpsertWithoutMembersInput
    disconnect?: departmentsWhereInput | boolean
    delete?: departmentsWhereInput | boolean
    connect?: departmentsWhereUniqueInput
    update?: XOR<XOR<departmentsUpdateToOneWithWhereWithoutMembersInput, departmentsUpdateWithoutMembersInput>, departmentsUncheckedUpdateWithoutMembersInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type usersCreateWithoutEventsInput = {
    id: string
    name: string
    username: string
    password: string
    department?: string | null
    departments?: departmentsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutEventsInput = {
    id: string
    name: string
    username: string
    password: string
    department_id?: number | null
    department?: string | null
  }

  export type usersCreateOrConnectWithoutEventsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEventsInput, usersUncheckedCreateWithoutEventsInput>
  }

  export type participationsCreateWithoutEventsInput = {
    student_id: string
    name?: string | null
    note?: string | null
    achievement?: string | null
    reward_org?: string | null
    mark?: number | null
    majors?: majorsCreateNestedOneWithoutParticipationsInput
  }

  export type participationsUncheckedCreateWithoutEventsInput = {
    student_id: string
    name?: string | null
    note?: string | null
    achievement?: string | null
    reward_org?: string | null
    major_id?: string | null
    mark?: number | null
  }

  export type participationsCreateOrConnectWithoutEventsInput = {
    where: participationsWhereUniqueInput
    create: XOR<participationsCreateWithoutEventsInput, participationsUncheckedCreateWithoutEventsInput>
  }

  export type participationsCreateManyEventsInputEnvelope = {
    data: participationsCreateManyEventsInput | participationsCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutEventsInput = {
    update: XOR<usersUpdateWithoutEventsInput, usersUncheckedUpdateWithoutEventsInput>
    create: XOR<usersCreateWithoutEventsInput, usersUncheckedCreateWithoutEventsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEventsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEventsInput, usersUncheckedUpdateWithoutEventsInput>
  }

  export type usersUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    departments?: departmentsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type participationsUpsertWithWhereUniqueWithoutEventsInput = {
    where: participationsWhereUniqueInput
    update: XOR<participationsUpdateWithoutEventsInput, participationsUncheckedUpdateWithoutEventsInput>
    create: XOR<participationsCreateWithoutEventsInput, participationsUncheckedCreateWithoutEventsInput>
  }

  export type participationsUpdateWithWhereUniqueWithoutEventsInput = {
    where: participationsWhereUniqueInput
    data: XOR<participationsUpdateWithoutEventsInput, participationsUncheckedUpdateWithoutEventsInput>
  }

  export type participationsUpdateManyWithWhereWithoutEventsInput = {
    where: participationsScalarWhereInput
    data: XOR<participationsUpdateManyMutationInput, participationsUncheckedUpdateManyWithoutEventsInput>
  }

  export type participationsScalarWhereInput = {
    AND?: participationsScalarWhereInput | participationsScalarWhereInput[]
    OR?: participationsScalarWhereInput[]
    NOT?: participationsScalarWhereInput | participationsScalarWhereInput[]
    student_id?: StringFilter<"participations"> | string
    name?: StringNullableFilter<"participations"> | string | null
    event_id?: StringFilter<"participations"> | string
    note?: StringNullableFilter<"participations"> | string | null
    achievement?: StringNullableFilter<"participations"> | string | null
    reward_org?: StringNullableFilter<"participations"> | string | null
    major_id?: StringNullableFilter<"participations"> | string | null
    mark?: IntNullableFilter<"participations"> | number | null
  }

  export type departmentsCreateWithoutClass_codesInput = {
    id: number
    name?: string | null
    members?: membersCreateNestedManyWithoutDepartmentsInput
    users?: usersCreateNestedManyWithoutDepartmentsInput
  }

  export type departmentsUncheckedCreateWithoutClass_codesInput = {
    id: number
    name?: string | null
    members?: membersUncheckedCreateNestedManyWithoutDepartmentsInput
    users?: usersUncheckedCreateNestedManyWithoutDepartmentsInput
  }

  export type departmentsCreateOrConnectWithoutClass_codesInput = {
    where: departmentsWhereUniqueInput
    create: XOR<departmentsCreateWithoutClass_codesInput, departmentsUncheckedCreateWithoutClass_codesInput>
  }

  export type membersCreateWithoutClass_codesInput = {
    id: string
    name?: string | null
    departments?: departmentsCreateNestedOneWithoutMembersInput
  }

  export type membersUncheckedCreateWithoutClass_codesInput = {
    id: string
    name?: string | null
    department_id?: number | null
  }

  export type membersCreateOrConnectWithoutClass_codesInput = {
    where: membersWhereUniqueInput
    create: XOR<membersCreateWithoutClass_codesInput, membersUncheckedCreateWithoutClass_codesInput>
  }

  export type membersCreateManyClass_codesInputEnvelope = {
    data: membersCreateManyClass_codesInput | membersCreateManyClass_codesInput[]
    skipDuplicates?: boolean
  }

  export type departmentsUpsertWithoutClass_codesInput = {
    update: XOR<departmentsUpdateWithoutClass_codesInput, departmentsUncheckedUpdateWithoutClass_codesInput>
    create: XOR<departmentsCreateWithoutClass_codesInput, departmentsUncheckedCreateWithoutClass_codesInput>
    where?: departmentsWhereInput
  }

  export type departmentsUpdateToOneWithWhereWithoutClass_codesInput = {
    where?: departmentsWhereInput
    data: XOR<departmentsUpdateWithoutClass_codesInput, departmentsUncheckedUpdateWithoutClass_codesInput>
  }

  export type departmentsUpdateWithoutClass_codesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    members?: membersUpdateManyWithoutDepartmentsNestedInput
    users?: usersUpdateManyWithoutDepartmentsNestedInput
  }

  export type departmentsUncheckedUpdateWithoutClass_codesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    members?: membersUncheckedUpdateManyWithoutDepartmentsNestedInput
    users?: usersUncheckedUpdateManyWithoutDepartmentsNestedInput
  }

  export type membersUpsertWithWhereUniqueWithoutClass_codesInput = {
    where: membersWhereUniqueInput
    update: XOR<membersUpdateWithoutClass_codesInput, membersUncheckedUpdateWithoutClass_codesInput>
    create: XOR<membersCreateWithoutClass_codesInput, membersUncheckedCreateWithoutClass_codesInput>
  }

  export type membersUpdateWithWhereUniqueWithoutClass_codesInput = {
    where: membersWhereUniqueInput
    data: XOR<membersUpdateWithoutClass_codesInput, membersUncheckedUpdateWithoutClass_codesInput>
  }

  export type membersUpdateManyWithWhereWithoutClass_codesInput = {
    where: membersScalarWhereInput
    data: XOR<membersUpdateManyMutationInput, membersUncheckedUpdateManyWithoutClass_codesInput>
  }

  export type membersScalarWhereInput = {
    AND?: membersScalarWhereInput | membersScalarWhereInput[]
    OR?: membersScalarWhereInput[]
    NOT?: membersScalarWhereInput | membersScalarWhereInput[]
    id?: StringFilter<"members"> | string
    name?: StringNullableFilter<"members"> | string | null
    class_code?: StringNullableFilter<"members"> | string | null
    department_id?: IntNullableFilter<"members"> | number | null
  }

  export type eventsCreateWithoutUsersInput = {
    id: string
    name?: string | null
    school_year?: string | null
    semester?: number | null
    category?: string | null
    category_index?: string | null
    organization?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    description?: string | null
    status?: boolean | null
    participations?: participationsCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateWithoutUsersInput = {
    id: string
    name?: string | null
    school_year?: string | null
    semester?: number | null
    category?: string | null
    category_index?: string | null
    organization?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    description?: string | null
    status?: boolean | null
    participations?: participationsUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsCreateOrConnectWithoutUsersInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutUsersInput, eventsUncheckedCreateWithoutUsersInput>
  }

  export type eventsCreateManyUsersInputEnvelope = {
    data: eventsCreateManyUsersInput | eventsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type departmentsCreateWithoutUsersInput = {
    id: number
    name?: string | null
    class_codes?: class_codesCreateNestedManyWithoutDepartmentsInput
    members?: membersCreateNestedManyWithoutDepartmentsInput
  }

  export type departmentsUncheckedCreateWithoutUsersInput = {
    id: number
    name?: string | null
    class_codes?: class_codesUncheckedCreateNestedManyWithoutDepartmentsInput
    members?: membersUncheckedCreateNestedManyWithoutDepartmentsInput
  }

  export type departmentsCreateOrConnectWithoutUsersInput = {
    where: departmentsWhereUniqueInput
    create: XOR<departmentsCreateWithoutUsersInput, departmentsUncheckedCreateWithoutUsersInput>
  }

  export type eventsUpsertWithWhereUniqueWithoutUsersInput = {
    where: eventsWhereUniqueInput
    update: XOR<eventsUpdateWithoutUsersInput, eventsUncheckedUpdateWithoutUsersInput>
    create: XOR<eventsCreateWithoutUsersInput, eventsUncheckedCreateWithoutUsersInput>
  }

  export type eventsUpdateWithWhereUniqueWithoutUsersInput = {
    where: eventsWhereUniqueInput
    data: XOR<eventsUpdateWithoutUsersInput, eventsUncheckedUpdateWithoutUsersInput>
  }

  export type eventsUpdateManyWithWhereWithoutUsersInput = {
    where: eventsScalarWhereInput
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyWithoutUsersInput>
  }

  export type eventsScalarWhereInput = {
    AND?: eventsScalarWhereInput | eventsScalarWhereInput[]
    OR?: eventsScalarWhereInput[]
    NOT?: eventsScalarWhereInput | eventsScalarWhereInput[]
    id?: StringFilter<"events"> | string
    name?: StringNullableFilter<"events"> | string | null
    school_year?: StringNullableFilter<"events"> | string | null
    semester?: IntNullableFilter<"events"> | number | null
    category?: StringNullableFilter<"events"> | string | null
    category_index?: StringNullableFilter<"events"> | string | null
    organization?: StringNullableFilter<"events"> | string | null
    start_date?: DateTimeNullableFilter<"events"> | Date | string | null
    end_date?: DateTimeNullableFilter<"events"> | Date | string | null
    description?: StringNullableFilter<"events"> | string | null
    owner?: StringNullableFilter<"events"> | string | null
    status?: BoolNullableFilter<"events"> | boolean | null
  }

  export type departmentsUpsertWithoutUsersInput = {
    update: XOR<departmentsUpdateWithoutUsersInput, departmentsUncheckedUpdateWithoutUsersInput>
    create: XOR<departmentsCreateWithoutUsersInput, departmentsUncheckedCreateWithoutUsersInput>
    where?: departmentsWhereInput
  }

  export type departmentsUpdateToOneWithWhereWithoutUsersInput = {
    where?: departmentsWhereInput
    data: XOR<departmentsUpdateWithoutUsersInput, departmentsUncheckedUpdateWithoutUsersInput>
  }

  export type departmentsUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    class_codes?: class_codesUpdateManyWithoutDepartmentsNestedInput
    members?: membersUpdateManyWithoutDepartmentsNestedInput
  }

  export type departmentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    class_codes?: class_codesUncheckedUpdateManyWithoutDepartmentsNestedInput
    members?: membersUncheckedUpdateManyWithoutDepartmentsNestedInput
  }

  export type participationsCreateWithoutMajorsInput = {
    student_id: string
    name?: string | null
    note?: string | null
    achievement?: string | null
    reward_org?: string | null
    mark?: number | null
    events: eventsCreateNestedOneWithoutParticipationsInput
  }

  export type participationsUncheckedCreateWithoutMajorsInput = {
    student_id: string
    name?: string | null
    event_id: string
    note?: string | null
    achievement?: string | null
    reward_org?: string | null
    mark?: number | null
  }

  export type participationsCreateOrConnectWithoutMajorsInput = {
    where: participationsWhereUniqueInput
    create: XOR<participationsCreateWithoutMajorsInput, participationsUncheckedCreateWithoutMajorsInput>
  }

  export type participationsCreateManyMajorsInputEnvelope = {
    data: participationsCreateManyMajorsInput | participationsCreateManyMajorsInput[]
    skipDuplicates?: boolean
  }

  export type participationsUpsertWithWhereUniqueWithoutMajorsInput = {
    where: participationsWhereUniqueInput
    update: XOR<participationsUpdateWithoutMajorsInput, participationsUncheckedUpdateWithoutMajorsInput>
    create: XOR<participationsCreateWithoutMajorsInput, participationsUncheckedCreateWithoutMajorsInput>
  }

  export type participationsUpdateWithWhereUniqueWithoutMajorsInput = {
    where: participationsWhereUniqueInput
    data: XOR<participationsUpdateWithoutMajorsInput, participationsUncheckedUpdateWithoutMajorsInput>
  }

  export type participationsUpdateManyWithWhereWithoutMajorsInput = {
    where: participationsScalarWhereInput
    data: XOR<participationsUpdateManyMutationInput, participationsUncheckedUpdateManyWithoutMajorsInput>
  }

  export type class_codesCreateWithoutDepartmentsInput = {
    name: string
    members?: membersCreateNestedManyWithoutClass_codesInput
  }

  export type class_codesUncheckedCreateWithoutDepartmentsInput = {
    name: string
    members?: membersUncheckedCreateNestedManyWithoutClass_codesInput
  }

  export type class_codesCreateOrConnectWithoutDepartmentsInput = {
    where: class_codesWhereUniqueInput
    create: XOR<class_codesCreateWithoutDepartmentsInput, class_codesUncheckedCreateWithoutDepartmentsInput>
  }

  export type class_codesCreateManyDepartmentsInputEnvelope = {
    data: class_codesCreateManyDepartmentsInput | class_codesCreateManyDepartmentsInput[]
    skipDuplicates?: boolean
  }

  export type membersCreateWithoutDepartmentsInput = {
    id: string
    name?: string | null
    class_codes?: class_codesCreateNestedOneWithoutMembersInput
  }

  export type membersUncheckedCreateWithoutDepartmentsInput = {
    id: string
    name?: string | null
    class_code?: string | null
  }

  export type membersCreateOrConnectWithoutDepartmentsInput = {
    where: membersWhereUniqueInput
    create: XOR<membersCreateWithoutDepartmentsInput, membersUncheckedCreateWithoutDepartmentsInput>
  }

  export type membersCreateManyDepartmentsInputEnvelope = {
    data: membersCreateManyDepartmentsInput | membersCreateManyDepartmentsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutDepartmentsInput = {
    id: string
    name: string
    username: string
    password: string
    department?: string | null
    events?: eventsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutDepartmentsInput = {
    id: string
    name: string
    username: string
    password: string
    department?: string | null
    events?: eventsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutDepartmentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDepartmentsInput, usersUncheckedCreateWithoutDepartmentsInput>
  }

  export type usersCreateManyDepartmentsInputEnvelope = {
    data: usersCreateManyDepartmentsInput | usersCreateManyDepartmentsInput[]
    skipDuplicates?: boolean
  }

  export type class_codesUpsertWithWhereUniqueWithoutDepartmentsInput = {
    where: class_codesWhereUniqueInput
    update: XOR<class_codesUpdateWithoutDepartmentsInput, class_codesUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<class_codesCreateWithoutDepartmentsInput, class_codesUncheckedCreateWithoutDepartmentsInput>
  }

  export type class_codesUpdateWithWhereUniqueWithoutDepartmentsInput = {
    where: class_codesWhereUniqueInput
    data: XOR<class_codesUpdateWithoutDepartmentsInput, class_codesUncheckedUpdateWithoutDepartmentsInput>
  }

  export type class_codesUpdateManyWithWhereWithoutDepartmentsInput = {
    where: class_codesScalarWhereInput
    data: XOR<class_codesUpdateManyMutationInput, class_codesUncheckedUpdateManyWithoutDepartmentsInput>
  }

  export type class_codesScalarWhereInput = {
    AND?: class_codesScalarWhereInput | class_codesScalarWhereInput[]
    OR?: class_codesScalarWhereInput[]
    NOT?: class_codesScalarWhereInput | class_codesScalarWhereInput[]
    name?: StringFilter<"class_codes"> | string
    department_id?: IntNullableFilter<"class_codes"> | number | null
  }

  export type membersUpsertWithWhereUniqueWithoutDepartmentsInput = {
    where: membersWhereUniqueInput
    update: XOR<membersUpdateWithoutDepartmentsInput, membersUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<membersCreateWithoutDepartmentsInput, membersUncheckedCreateWithoutDepartmentsInput>
  }

  export type membersUpdateWithWhereUniqueWithoutDepartmentsInput = {
    where: membersWhereUniqueInput
    data: XOR<membersUpdateWithoutDepartmentsInput, membersUncheckedUpdateWithoutDepartmentsInput>
  }

  export type membersUpdateManyWithWhereWithoutDepartmentsInput = {
    where: membersScalarWhereInput
    data: XOR<membersUpdateManyMutationInput, membersUncheckedUpdateManyWithoutDepartmentsInput>
  }

  export type usersUpsertWithWhereUniqueWithoutDepartmentsInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutDepartmentsInput, usersUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<usersCreateWithoutDepartmentsInput, usersUncheckedCreateWithoutDepartmentsInput>
  }

  export type usersUpdateWithWhereUniqueWithoutDepartmentsInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutDepartmentsInput, usersUncheckedUpdateWithoutDepartmentsInput>
  }

  export type usersUpdateManyWithWhereWithoutDepartmentsInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutDepartmentsInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    department_id?: IntNullableFilter<"users"> | number | null
    department?: StringNullableFilter<"users"> | string | null
  }

  export type eventsCreateWithoutParticipationsInput = {
    id: string
    name?: string | null
    school_year?: string | null
    semester?: number | null
    category?: string | null
    category_index?: string | null
    organization?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    description?: string | null
    status?: boolean | null
    users?: usersCreateNestedOneWithoutEventsInput
  }

  export type eventsUncheckedCreateWithoutParticipationsInput = {
    id: string
    name?: string | null
    school_year?: string | null
    semester?: number | null
    category?: string | null
    category_index?: string | null
    organization?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    description?: string | null
    owner?: string | null
    status?: boolean | null
  }

  export type eventsCreateOrConnectWithoutParticipationsInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutParticipationsInput, eventsUncheckedCreateWithoutParticipationsInput>
  }

  export type majorsCreateWithoutParticipationsInput = {
    id: string
    name?: string | null
    ctda?: boolean | null
    department_id?: number | null
  }

  export type majorsUncheckedCreateWithoutParticipationsInput = {
    id: string
    name?: string | null
    ctda?: boolean | null
    department_id?: number | null
  }

  export type majorsCreateOrConnectWithoutParticipationsInput = {
    where: majorsWhereUniqueInput
    create: XOR<majorsCreateWithoutParticipationsInput, majorsUncheckedCreateWithoutParticipationsInput>
  }

  export type eventsUpsertWithoutParticipationsInput = {
    update: XOR<eventsUpdateWithoutParticipationsInput, eventsUncheckedUpdateWithoutParticipationsInput>
    create: XOR<eventsCreateWithoutParticipationsInput, eventsUncheckedCreateWithoutParticipationsInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutParticipationsInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutParticipationsInput, eventsUncheckedUpdateWithoutParticipationsInput>
  }

  export type eventsUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category_index?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: usersUpdateOneWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category_index?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type majorsUpsertWithoutParticipationsInput = {
    update: XOR<majorsUpdateWithoutParticipationsInput, majorsUncheckedUpdateWithoutParticipationsInput>
    create: XOR<majorsCreateWithoutParticipationsInput, majorsUncheckedCreateWithoutParticipationsInput>
    where?: majorsWhereInput
  }

  export type majorsUpdateToOneWithWhereWithoutParticipationsInput = {
    where?: majorsWhereInput
    data: XOR<majorsUpdateWithoutParticipationsInput, majorsUncheckedUpdateWithoutParticipationsInput>
  }

  export type majorsUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ctda?: NullableBoolFieldUpdateOperationsInput | boolean | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type majorsUncheckedUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ctda?: NullableBoolFieldUpdateOperationsInput | boolean | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type class_codesCreateWithoutMembersInput = {
    name: string
    departments?: departmentsCreateNestedOneWithoutClass_codesInput
  }

  export type class_codesUncheckedCreateWithoutMembersInput = {
    name: string
    department_id?: number | null
  }

  export type class_codesCreateOrConnectWithoutMembersInput = {
    where: class_codesWhereUniqueInput
    create: XOR<class_codesCreateWithoutMembersInput, class_codesUncheckedCreateWithoutMembersInput>
  }

  export type departmentsCreateWithoutMembersInput = {
    id: number
    name?: string | null
    class_codes?: class_codesCreateNestedManyWithoutDepartmentsInput
    users?: usersCreateNestedManyWithoutDepartmentsInput
  }

  export type departmentsUncheckedCreateWithoutMembersInput = {
    id: number
    name?: string | null
    class_codes?: class_codesUncheckedCreateNestedManyWithoutDepartmentsInput
    users?: usersUncheckedCreateNestedManyWithoutDepartmentsInput
  }

  export type departmentsCreateOrConnectWithoutMembersInput = {
    where: departmentsWhereUniqueInput
    create: XOR<departmentsCreateWithoutMembersInput, departmentsUncheckedCreateWithoutMembersInput>
  }

  export type class_codesUpsertWithoutMembersInput = {
    update: XOR<class_codesUpdateWithoutMembersInput, class_codesUncheckedUpdateWithoutMembersInput>
    create: XOR<class_codesCreateWithoutMembersInput, class_codesUncheckedCreateWithoutMembersInput>
    where?: class_codesWhereInput
  }

  export type class_codesUpdateToOneWithWhereWithoutMembersInput = {
    where?: class_codesWhereInput
    data: XOR<class_codesUpdateWithoutMembersInput, class_codesUncheckedUpdateWithoutMembersInput>
  }

  export type class_codesUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    departments?: departmentsUpdateOneWithoutClass_codesNestedInput
  }

  export type class_codesUncheckedUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type departmentsUpsertWithoutMembersInput = {
    update: XOR<departmentsUpdateWithoutMembersInput, departmentsUncheckedUpdateWithoutMembersInput>
    create: XOR<departmentsCreateWithoutMembersInput, departmentsUncheckedCreateWithoutMembersInput>
    where?: departmentsWhereInput
  }

  export type departmentsUpdateToOneWithWhereWithoutMembersInput = {
    where?: departmentsWhereInput
    data: XOR<departmentsUpdateWithoutMembersInput, departmentsUncheckedUpdateWithoutMembersInput>
  }

  export type departmentsUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    class_codes?: class_codesUpdateManyWithoutDepartmentsNestedInput
    users?: usersUpdateManyWithoutDepartmentsNestedInput
  }

  export type departmentsUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    class_codes?: class_codesUncheckedUpdateManyWithoutDepartmentsNestedInput
    users?: usersUncheckedUpdateManyWithoutDepartmentsNestedInput
  }

  export type participationsCreateManyEventsInput = {
    student_id: string
    name?: string | null
    note?: string | null
    achievement?: string | null
    reward_org?: string | null
    major_id?: string | null
    mark?: number | null
  }

  export type participationsUpdateWithoutEventsInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    reward_org?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: majorsUpdateOneWithoutParticipationsNestedInput
  }

  export type participationsUncheckedUpdateWithoutEventsInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    reward_org?: NullableStringFieldUpdateOperationsInput | string | null
    major_id?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type participationsUncheckedUpdateManyWithoutEventsInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    reward_org?: NullableStringFieldUpdateOperationsInput | string | null
    major_id?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type membersCreateManyClass_codesInput = {
    id: string
    name?: string | null
    department_id?: number | null
  }

  export type membersUpdateWithoutClass_codesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    departments?: departmentsUpdateOneWithoutMembersNestedInput
  }

  export type membersUncheckedUpdateWithoutClass_codesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type membersUncheckedUpdateManyWithoutClass_codesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type eventsCreateManyUsersInput = {
    id: string
    name?: string | null
    school_year?: string | null
    semester?: number | null
    category?: string | null
    category_index?: string | null
    organization?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    description?: string | null
    status?: boolean | null
  }

  export type eventsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category_index?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    participations?: participationsUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category_index?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    participations?: participationsUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category_index?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type participationsCreateManyMajorsInput = {
    student_id: string
    name?: string | null
    event_id: string
    note?: string | null
    achievement?: string | null
    reward_org?: string | null
    mark?: number | null
  }

  export type participationsUpdateWithoutMajorsInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    reward_org?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableIntFieldUpdateOperationsInput | number | null
    events?: eventsUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type participationsUncheckedUpdateWithoutMajorsInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    event_id?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    reward_org?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type participationsUncheckedUpdateManyWithoutMajorsInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    event_id?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    reward_org?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type class_codesCreateManyDepartmentsInput = {
    name: string
  }

  export type membersCreateManyDepartmentsInput = {
    id: string
    name?: string | null
    class_code?: string | null
  }

  export type usersCreateManyDepartmentsInput = {
    id: string
    name: string
    username: string
    password: string
    department?: string | null
  }

  export type class_codesUpdateWithoutDepartmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    members?: membersUpdateManyWithoutClass_codesNestedInput
  }

  export type class_codesUncheckedUpdateWithoutDepartmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    members?: membersUncheckedUpdateManyWithoutClass_codesNestedInput
  }

  export type class_codesUncheckedUpdateManyWithoutDepartmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type membersUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    class_codes?: class_codesUpdateOneWithoutMembersNestedInput
  }

  export type membersUncheckedUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    class_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type membersUncheckedUpdateManyWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    class_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    events?: eventsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    events?: eventsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EventsCountOutputTypeDefaultArgs instead
     */
    export type EventsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Class_codesCountOutputTypeDefaultArgs instead
     */
    export type Class_codesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Class_codesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MajorsCountOutputTypeDefaultArgs instead
     */
    export type MajorsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MajorsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentsCountOutputTypeDefaultArgs instead
     */
    export type DepartmentsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use eventsDefaultArgs instead
     */
    export type eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = eventsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mark_categoryDefaultArgs instead
     */
    export type mark_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mark_categoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use class_codesDefaultArgs instead
     */
    export type class_codesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = class_codesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use majorsDefaultArgs instead
     */
    export type majorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = majorsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use departmentsDefaultArgs instead
     */
    export type departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = departmentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use participationsDefaultArgs instead
     */
    export type participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = participationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use membersDefaultArgs instead
     */
    export type membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = membersDefaultArgs<ExtArgs>

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