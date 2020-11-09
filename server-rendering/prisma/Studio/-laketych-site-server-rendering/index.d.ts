import {
  DMMF,
  DMMFClass,
  Engine,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  sqltag as sql,
  empty,
  join,
  raw,
  Sql,
  Decimal,
} from './runtime';

export { PrismaClientKnownRequestError }
export { PrismaClientUnknownRequestError }
export { PrismaClientRustPanicError }
export { PrismaClientInitializationError }
export { PrismaClientValidationError }
export { Decimal }

/**
 * Re-export of sql-template-tag
 */
export { sql, empty, join, raw, Sql }

/**
 * Prisma Client JS version: 2.10.1
 * Query Engine version: 7d0087eadc7265e12d4b8d8c3516b02c4c965111
 */
export declare type PrismaVersion = {
  client: string
}

export declare const prismaVersion: PrismaVersion 

/**
 * Utility Types
 */

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON object.
 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
 */
export declare type JsonObject = {[Key in string]?: JsonValue}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON array.
 */
export declare interface JsonArray extends Array<JsonValue> {}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches any valid JSON value.
 */
export declare type JsonValue = string | number | boolean | null | JsonObject | JsonArray

/**
 * Same as JsonObject, but allows undefined
 */
export declare type InputJsonObject = {[Key in string]?: JsonValue}
 
export declare interface InputJsonArray extends Array<JsonValue> {}
 
export declare type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray

declare type SelectAndInclude = {
  select: any
  include: any
}

declare type HasSelect = {
  select: any
}

declare type HasInclude = {
  include: any
}

declare type CheckSelect<T, S, U> = T extends SelectAndInclude
  ? 'Please either choose `select` or `include`'
  : T extends HasSelect
  ? U
  : T extends HasInclude
  ? U
  : S

/**
 * Get the type of the value, that the Promise holds.
 */
export declare type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

/**
 * Get the return type of a function which returns a Promise.
 */
export declare type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>


export declare type Enumerable<T> = T | Array<T>;

export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

export declare type TruthyKeys<T> = {
  [key in keyof T]: T[key] extends false | undefined | null ? never : key
}[keyof T]

export declare type TrueKeys<T> = TruthyKeys<Pick<T, RequiredKeys<T>>>

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export declare type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};
declare class PrismaClientFetcher {
  private readonly prisma;
  private readonly debug;
  private readonly hooks?;
  constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
  request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
  sanitizeMessage(message: string): string;
  protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
}


/**
 * Client
**/

export declare type Datasource = {
  url?: string
}

export type Datasources = {
  db?: Datasource
}

export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

export interface PrismaClientOptions {
  /**
   * Overwrites the datasource url from your prisma.schema file
   */
  datasources?: Datasources

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
   *  { emit: 'stdout', level: 'query' },
   *  { emit: 'stdout', level: 'info' },
   *  { emit: 'stdout', level: 'warn' }
   *  { emit: 'stdout', level: 'error' }
   * ]
   * ```
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
   */
  log?: Array<LogLevel | LogDefinition>
}

export type Hooks = {
  beforeRequest?: (options: {query: string, path: string[], rootField?: string, typeName?: string, document: any}) => any
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
  | 'findOne'
  | 'findMany'
  | 'findFirst'
  | 'create'
  | 'update'
  | 'updateMany'
  | 'upsert'
  | 'delete'
  | 'deleteMany'
  | 'executeRaw'
  | 'queryRaw'
  | 'aggregate'

/**
 * These options are being passed in to the middleware as "params"
 */
export type MiddlewareParams = {
  model?: string
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
  next: (params: MiddlewareParams) => Promise<T>,
) => Promise<T>

// tested in getLogLevel.test.ts
export declare function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articles
 * const articles = await prisma.article.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare class PrismaClient<
  T extends PrismaClientOptions = PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<LogLevel | LogDefinition> ? GetEvents<T['log']> : never : never
> {
  /**
   * @private
   */
  private fetcher;
  /**
   * @private
   */
  private readonly dmmf;
  /**
   * @private
   */
  private connectionPromise?;
  /**
   * @private
   */
  private disconnectionPromise?;
  /**
   * @private
   */
  private readonly engineConfig;
  /**
   * @private
   */
  private readonly measurePerformance;
  /**
   * @private
   */
  private engine: Engine;
  /**
   * @private
   */
  private errorFormat: ErrorFormat;

  /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Articles
   * const articles = await prisma.article.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
  constructor(optionsArg?: T);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * @deprecated renamed to `$on`
   */
  on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * Connect with the database
   */
  $connect(): Promise<void>;
  /**
   * @deprecated renamed to `$connect`
   */
  connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;
  /**
   * @deprecated renamed to `$disconnect`
   */
  disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw<T = any>(query: string | TemplateStringsArray | Sql, ...values: any[]): Promise<number>;

  /**
   * @deprecated renamed to `$executeRaw`
   */
  executeRaw<T = any>(query: string | TemplateStringsArray | Sql, ...values: any[]): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw<T = any>(query: string | TemplateStringsArray | Sql, ...values: any[]): Promise<T>;
 
  /**
   * @deprecated renamed to `$queryRaw`
   */
  queryRaw<T = any>(query: string | TemplateStringsArray | Sql, ...values: any[]): Promise<T>;

  /**
   * Execute queries in a transaction
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   */
  $transaction: PromiseConstructor['all']
  /**
   * @deprecated renamed to `$transaction`
   */
  transaction: PromiseConstructor['all']

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): ArticleDelegate;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): CategoryDelegate;

  /**
   * `prisma.articleCategory`: Exposes CRUD operations for the **ArticleCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleCategories
    * const articleCategories = await prisma.articleCategory.findMany()
    * ```
    */
  get articleCategory(): ArticleCategoryDelegate;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): ProjectDelegate;

  /**
   * `prisma.stack`: Exposes CRUD operations for the **Stack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stacks
    * const stacks = await prisma.stack.findMany()
    * ```
    */
  get stack(): StackDelegate;

  /**
   * `prisma.development`: Exposes CRUD operations for the **Development** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Developments
    * const developments = await prisma.development.findMany()
    * ```
    */
  get development(): DevelopmentDelegate;

  /**
   * `prisma.projectStack`: Exposes CRUD operations for the **ProjectStack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectStacks
    * const projectStacks = await prisma.projectStack.findMany()
    * ```
    */
  get projectStack(): ProjectStackDelegate;

  /**
   * `prisma.projectDevelopment`: Exposes CRUD operations for the **ProjectDevelopment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectDevelopments
    * const projectDevelopments = await prisma.projectDevelopment.findMany()
    * ```
    */
  get projectDevelopment(): ProjectDevelopmentDelegate;
}



/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export declare const ArticleDistinctFieldEnum: {
  id: 'id',
  author: 'author',
  title: 'title',
  content: 'content',
  photo: 'photo'
};

export declare type ArticleDistinctFieldEnum = (typeof ArticleDistinctFieldEnum)[keyof typeof ArticleDistinctFieldEnum]


export declare const CategoryDistinctFieldEnum: {
  id: 'id',
  label: 'label'
};

export declare type CategoryDistinctFieldEnum = (typeof CategoryDistinctFieldEnum)[keyof typeof CategoryDistinctFieldEnum]


export declare const ArticleCategoryDistinctFieldEnum: {
  articleId: 'articleId',
  categoryId: 'categoryId'
};

export declare type ArticleCategoryDistinctFieldEnum = (typeof ArticleCategoryDistinctFieldEnum)[keyof typeof ArticleCategoryDistinctFieldEnum]


export declare const ProjectDistinctFieldEnum: {
  id: 'id',
  title: 'title',
  preview: 'preview',
  description: 'description',
  githublink: 'githublink',
  photo: 'photo'
};

export declare type ProjectDistinctFieldEnum = (typeof ProjectDistinctFieldEnum)[keyof typeof ProjectDistinctFieldEnum]


export declare const StackDistinctFieldEnum: {
  id: 'id',
  label: 'label'
};

export declare type StackDistinctFieldEnum = (typeof StackDistinctFieldEnum)[keyof typeof StackDistinctFieldEnum]


export declare const DevelopmentDistinctFieldEnum: {
  id: 'id',
  label: 'label'
};

export declare type DevelopmentDistinctFieldEnum = (typeof DevelopmentDistinctFieldEnum)[keyof typeof DevelopmentDistinctFieldEnum]


export declare const ProjectStackDistinctFieldEnum: {
  projectId: 'projectId',
  stackId: 'stackId'
};

export declare type ProjectStackDistinctFieldEnum = (typeof ProjectStackDistinctFieldEnum)[keyof typeof ProjectStackDistinctFieldEnum]


export declare const ProjectDevelopmentDistinctFieldEnum: {
  projectId: 'projectId',
  developmentId: 'developmentId'
};

export declare type ProjectDevelopmentDistinctFieldEnum = (typeof ProjectDevelopmentDistinctFieldEnum)[keyof typeof ProjectDevelopmentDistinctFieldEnum]


export declare const SortOrder: {
  asc: 'asc',
  desc: 'desc'
};

export declare type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]



/**
 * Model Article
 */

export type Article = {
  id: number
  author: string
  title: string
  content: string
  photo: string
}


export type AggregateArticle = {
  count: number
  avg: ArticleAvgAggregateOutputType | null
  sum: ArticleSumAggregateOutputType | null
  min: ArticleMinAggregateOutputType | null
  max: ArticleMaxAggregateOutputType | null
}

export type ArticleAvgAggregateOutputType = {
  id: number
}

export type ArticleSumAggregateOutputType = {
  id: number
}

export type ArticleMinAggregateOutputType = {
  id: number
}

export type ArticleMaxAggregateOutputType = {
  id: number
}


export type ArticleAvgAggregateInputType = {
  id?: true
}

export type ArticleSumAggregateInputType = {
  id?: true
}

export type ArticleMinAggregateInputType = {
  id?: true
}

export type ArticleMaxAggregateInputType = {
  id?: true
}

export type AggregateArticleArgs = {
  where?: ArticleWhereInput
  orderBy?: Enumerable<ArticleOrderByInput> | ArticleOrderByInput
  cursor?: ArticleWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ArticleDistinctFieldEnum>
  count?: true
  avg?: ArticleAvgAggregateInputType
  sum?: ArticleSumAggregateInputType
  min?: ArticleMinAggregateInputType
  max?: ArticleMaxAggregateInputType
}

export type GetArticleAggregateType<T extends AggregateArticleArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetArticleAggregateScalarType<T[P]>
}

export type GetArticleAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof ArticleAvgAggregateOutputType ? ArticleAvgAggregateOutputType[P] : never
}
    
    

export type ArticleSelect = {
  id?: boolean
  author?: boolean
  title?: boolean
  content?: boolean
  photo?: boolean
  categories?: boolean | FindManyArticleCategoryArgs
}

export type ArticleInclude = {
  categories?: boolean | FindManyArticleCategoryArgs
}

export type ArticleGetPayload<
  S extends boolean | null | undefined | ArticleArgs,
  U = keyof S
> = S extends true
  ? Article
  : S extends undefined
  ? never
  : S extends ArticleArgs | FindManyArticleArgs
  ? 'include' extends U
    ? Article  & {
      [P in TrueKeys<S['include']>]:
      P extends 'categories'
      ? Array<ArticleCategoryGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Article ? Article[P]
: 
      P extends 'categories'
      ? Array<ArticleCategoryGetPayload<S['select'][P]>> : never
    }
  : Article
: Article


export interface ArticleDelegate {
  /**
   * Find zero or one Article that matches the filter.
   * @param {FindOneArticleArgs} args - Arguments to find a Article
   * @example
   * // Get one Article
   * const article = await prisma.article.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneArticleArgs>(
    args: Subset<T, FindOneArticleArgs>
  ): CheckSelect<T, Prisma__ArticleClient<Article | null>, Prisma__ArticleClient<ArticleGetPayload<T> | null>>
  /**
   * Find the first Article that matches the filter.
   * @param {FindFirstArticleArgs} args - Arguments to find a Article
   * @example
   * // Get one Article
   * const article = await prisma.article.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstArticleArgs>(
    args?: Subset<T, FindFirstArticleArgs>
  ): CheckSelect<T, Prisma__ArticleClient<Article | null>, Prisma__ArticleClient<ArticleGetPayload<T> | null>>
  /**
   * Find zero or more Articles that matches the filter.
   * @param {FindManyArticleArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Articles
   * const articles = await prisma.article.findMany()
   * 
   * // Get first 10 Articles
   * const articles = await prisma.article.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyArticleArgs>(
    args?: Subset<T, FindManyArticleArgs>
  ): CheckSelect<T, Promise<Array<Article>>, Promise<Array<ArticleGetPayload<T>>>>
  /**
   * Create a Article.
   * @param {ArticleCreateArgs} args - Arguments to create a Article.
   * @example
   * // Create one Article
   * const Article = await prisma.article.create({
   *   data: {
   *     // ... data to create a Article
   *   }
   * })
   * 
  **/
  create<T extends ArticleCreateArgs>(
    args: Subset<T, ArticleCreateArgs>
  ): CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>>
  /**
   * Delete a Article.
   * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
   * @example
   * // Delete one Article
   * const Article = await prisma.article.delete({
   *   where: {
   *     // ... filter to delete one Article
   *   }
   * })
   * 
  **/
  delete<T extends ArticleDeleteArgs>(
    args: Subset<T, ArticleDeleteArgs>
  ): CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>>
  /**
   * Update one Article.
   * @param {ArticleUpdateArgs} args - Arguments to update one Article.
   * @example
   * // Update one Article
   * const article = await prisma.article.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends ArticleUpdateArgs>(
    args: Subset<T, ArticleUpdateArgs>
  ): CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>>
  /**
   * Delete zero or more Articles.
   * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
   * @example
   * // Delete a few Articles
   * const { count } = await prisma.article.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends ArticleDeleteManyArgs>(
    args: Subset<T, ArticleDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Articles.
   * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Articles
   * const article = await prisma.article.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends ArticleUpdateManyArgs>(
    args: Subset<T, ArticleUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Article.
   * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
   * @example
   * // Update or create a Article
   * const article = await prisma.article.upsert({
   *   create: {
   *     // ... data to create a Article
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Article we want to update
   *   }
   * })
  **/
  upsert<T extends ArticleUpsertArgs>(
    args: Subset<T, ArticleUpsertArgs>
  ): CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyArticleArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateArticleArgs>(args: Subset<T, AggregateArticleArgs>): Promise<GetArticleAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Article.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__ArticleClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  categories<T extends FindManyArticleCategoryArgs = {}>(args?: Subset<T, FindManyArticleCategoryArgs>): CheckSelect<T, Promise<Array<ArticleCategory>>, Promise<Array<ArticleCategoryGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Article findOne
 */
export type FindOneArticleArgs = {
  /**
   * Select specific fields to fetch from the Article
  **/
  select?: ArticleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ArticleInclude | null
  /**
   * Filter, which Article to fetch.
  **/
  where: ArticleWhereUniqueInput
}


/**
 * Article findFirst
 */
export type FindFirstArticleArgs = {
  /**
   * Select specific fields to fetch from the Article
  **/
  select?: ArticleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ArticleInclude | null
  /**
   * Filter, which Article to fetch.
  **/
  where?: ArticleWhereInput
  orderBy?: Enumerable<ArticleOrderByInput> | ArticleOrderByInput
  cursor?: ArticleWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ArticleDistinctFieldEnum>
}


/**
 * Article findMany
 */
export type FindManyArticleArgs = {
  /**
   * Select specific fields to fetch from the Article
  **/
  select?: ArticleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ArticleInclude | null
  /**
   * Filter, which Articles to fetch.
  **/
  where?: ArticleWhereInput
  /**
   * Determine the order of the Articles to fetch.
  **/
  orderBy?: Enumerable<ArticleOrderByInput> | ArticleOrderByInput
  /**
   * Sets the position for listing Articles.
  **/
  cursor?: ArticleWhereUniqueInput
  /**
   * The number of Articles to fetch. If negative number, it will take Articles before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Articles.
  **/
  skip?: number
  distinct?: Enumerable<ArticleDistinctFieldEnum>
}


/**
 * Article create
 */
export type ArticleCreateArgs = {
  /**
   * Select specific fields to fetch from the Article
  **/
  select?: ArticleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ArticleInclude | null
  /**
   * The data needed to create a Article.
  **/
  data: ArticleCreateInput
}


/**
 * Article update
 */
export type ArticleUpdateArgs = {
  /**
   * Select specific fields to fetch from the Article
  **/
  select?: ArticleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ArticleInclude | null
  /**
   * The data needed to update a Article.
  **/
  data: ArticleUpdateInput
  /**
   * Choose, which Article to update.
  **/
  where: ArticleWhereUniqueInput
}


/**
 * Article updateMany
 */
export type ArticleUpdateManyArgs = {
  data: ArticleUpdateManyMutationInput
  where?: ArticleWhereInput
}


/**
 * Article upsert
 */
export type ArticleUpsertArgs = {
  /**
   * Select specific fields to fetch from the Article
  **/
  select?: ArticleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ArticleInclude | null
  /**
   * The filter to search for the Article to update in case it exists.
  **/
  where: ArticleWhereUniqueInput
  /**
   * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
  **/
  create: ArticleCreateInput
  /**
   * In case the Article was found with the provided `where` argument, update it with this data.
  **/
  update: ArticleUpdateInput
}


/**
 * Article delete
 */
export type ArticleDeleteArgs = {
  /**
   * Select specific fields to fetch from the Article
  **/
  select?: ArticleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ArticleInclude | null
  /**
   * Filter which Article to delete.
  **/
  where: ArticleWhereUniqueInput
}


/**
 * Article deleteMany
 */
export type ArticleDeleteManyArgs = {
  where?: ArticleWhereInput
}


/**
 * Article without action
 */
export type ArticleArgs = {
  /**
   * Select specific fields to fetch from the Article
  **/
  select?: ArticleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ArticleInclude | null
}



/**
 * Model Category
 */

export type Category = {
  id: number
  label: string
}


export type AggregateCategory = {
  count: number
  avg: CategoryAvgAggregateOutputType | null
  sum: CategorySumAggregateOutputType | null
  min: CategoryMinAggregateOutputType | null
  max: CategoryMaxAggregateOutputType | null
}

export type CategoryAvgAggregateOutputType = {
  id: number
}

export type CategorySumAggregateOutputType = {
  id: number
}

export type CategoryMinAggregateOutputType = {
  id: number
}

export type CategoryMaxAggregateOutputType = {
  id: number
}


export type CategoryAvgAggregateInputType = {
  id?: true
}

export type CategorySumAggregateInputType = {
  id?: true
}

export type CategoryMinAggregateInputType = {
  id?: true
}

export type CategoryMaxAggregateInputType = {
  id?: true
}

export type AggregateCategoryArgs = {
  where?: CategoryWhereInput
  orderBy?: Enumerable<CategoryOrderByInput> | CategoryOrderByInput
  cursor?: CategoryWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<CategoryDistinctFieldEnum>
  count?: true
  avg?: CategoryAvgAggregateInputType
  sum?: CategorySumAggregateInputType
  min?: CategoryMinAggregateInputType
  max?: CategoryMaxAggregateInputType
}

export type GetCategoryAggregateType<T extends AggregateCategoryArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetCategoryAggregateScalarType<T[P]>
}

export type GetCategoryAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof CategoryAvgAggregateOutputType ? CategoryAvgAggregateOutputType[P] : never
}
    
    

export type CategorySelect = {
  id?: boolean
  label?: boolean
  articles?: boolean | FindManyArticleCategoryArgs
}

export type CategoryInclude = {
  articles?: boolean | FindManyArticleCategoryArgs
}

export type CategoryGetPayload<
  S extends boolean | null | undefined | CategoryArgs,
  U = keyof S
> = S extends true
  ? Category
  : S extends undefined
  ? never
  : S extends CategoryArgs | FindManyCategoryArgs
  ? 'include' extends U
    ? Category  & {
      [P in TrueKeys<S['include']>]:
      P extends 'articles'
      ? Array<ArticleCategoryGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Category ? Category[P]
: 
      P extends 'articles'
      ? Array<ArticleCategoryGetPayload<S['select'][P]>> : never
    }
  : Category
: Category


export interface CategoryDelegate {
  /**
   * Find zero or one Category that matches the filter.
   * @param {FindOneCategoryArgs} args - Arguments to find a Category
   * @example
   * // Get one Category
   * const category = await prisma.category.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneCategoryArgs>(
    args: Subset<T, FindOneCategoryArgs>
  ): CheckSelect<T, Prisma__CategoryClient<Category | null>, Prisma__CategoryClient<CategoryGetPayload<T> | null>>
  /**
   * Find the first Category that matches the filter.
   * @param {FindFirstCategoryArgs} args - Arguments to find a Category
   * @example
   * // Get one Category
   * const category = await prisma.category.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstCategoryArgs>(
    args?: Subset<T, FindFirstCategoryArgs>
  ): CheckSelect<T, Prisma__CategoryClient<Category | null>, Prisma__CategoryClient<CategoryGetPayload<T> | null>>
  /**
   * Find zero or more Categories that matches the filter.
   * @param {FindManyCategoryArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Categories
   * const categories = await prisma.category.findMany()
   * 
   * // Get first 10 Categories
   * const categories = await prisma.category.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyCategoryArgs>(
    args?: Subset<T, FindManyCategoryArgs>
  ): CheckSelect<T, Promise<Array<Category>>, Promise<Array<CategoryGetPayload<T>>>>
  /**
   * Create a Category.
   * @param {CategoryCreateArgs} args - Arguments to create a Category.
   * @example
   * // Create one Category
   * const Category = await prisma.category.create({
   *   data: {
   *     // ... data to create a Category
   *   }
   * })
   * 
  **/
  create<T extends CategoryCreateArgs>(
    args: Subset<T, CategoryCreateArgs>
  ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>
  /**
   * Delete a Category.
   * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
   * @example
   * // Delete one Category
   * const Category = await prisma.category.delete({
   *   where: {
   *     // ... filter to delete one Category
   *   }
   * })
   * 
  **/
  delete<T extends CategoryDeleteArgs>(
    args: Subset<T, CategoryDeleteArgs>
  ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>
  /**
   * Update one Category.
   * @param {CategoryUpdateArgs} args - Arguments to update one Category.
   * @example
   * // Update one Category
   * const category = await prisma.category.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends CategoryUpdateArgs>(
    args: Subset<T, CategoryUpdateArgs>
  ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>
  /**
   * Delete zero or more Categories.
   * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
   * @example
   * // Delete a few Categories
   * const { count } = await prisma.category.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends CategoryDeleteManyArgs>(
    args: Subset<T, CategoryDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Categories.
   * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Categories
   * const category = await prisma.category.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends CategoryUpdateManyArgs>(
    args: Subset<T, CategoryUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Category.
   * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
   * @example
   * // Update or create a Category
   * const category = await prisma.category.upsert({
   *   create: {
   *     // ... data to create a Category
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Category we want to update
   *   }
   * })
  **/
  upsert<T extends CategoryUpsertArgs>(
    args: Subset<T, CategoryUpsertArgs>
  ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyCategoryArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateCategoryArgs>(args: Subset<T, AggregateCategoryArgs>): Promise<GetCategoryAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Category.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__CategoryClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  articles<T extends FindManyArticleCategoryArgs = {}>(args?: Subset<T, FindManyArticleCategoryArgs>): CheckSelect<T, Promise<Array<ArticleCategory>>, Promise<Array<ArticleCategoryGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Category findOne
 */
export type FindOneCategoryArgs = {
  /**
   * Select specific fields to fetch from the Category
  **/
  select?: CategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CategoryInclude | null
  /**
   * Filter, which Category to fetch.
  **/
  where: CategoryWhereUniqueInput
}


/**
 * Category findFirst
 */
export type FindFirstCategoryArgs = {
  /**
   * Select specific fields to fetch from the Category
  **/
  select?: CategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CategoryInclude | null
  /**
   * Filter, which Category to fetch.
  **/
  where?: CategoryWhereInput
  orderBy?: Enumerable<CategoryOrderByInput> | CategoryOrderByInput
  cursor?: CategoryWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<CategoryDistinctFieldEnum>
}


/**
 * Category findMany
 */
export type FindManyCategoryArgs = {
  /**
   * Select specific fields to fetch from the Category
  **/
  select?: CategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CategoryInclude | null
  /**
   * Filter, which Categories to fetch.
  **/
  where?: CategoryWhereInput
  /**
   * Determine the order of the Categories to fetch.
  **/
  orderBy?: Enumerable<CategoryOrderByInput> | CategoryOrderByInput
  /**
   * Sets the position for listing Categories.
  **/
  cursor?: CategoryWhereUniqueInput
  /**
   * The number of Categories to fetch. If negative number, it will take Categories before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Categories.
  **/
  skip?: number
  distinct?: Enumerable<CategoryDistinctFieldEnum>
}


/**
 * Category create
 */
export type CategoryCreateArgs = {
  /**
   * Select specific fields to fetch from the Category
  **/
  select?: CategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CategoryInclude | null
  /**
   * The data needed to create a Category.
  **/
  data: CategoryCreateInput
}


/**
 * Category update
 */
export type CategoryUpdateArgs = {
  /**
   * Select specific fields to fetch from the Category
  **/
  select?: CategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CategoryInclude | null
  /**
   * The data needed to update a Category.
  **/
  data: CategoryUpdateInput
  /**
   * Choose, which Category to update.
  **/
  where: CategoryWhereUniqueInput
}


/**
 * Category updateMany
 */
export type CategoryUpdateManyArgs = {
  data: CategoryUpdateManyMutationInput
  where?: CategoryWhereInput
}


/**
 * Category upsert
 */
export type CategoryUpsertArgs = {
  /**
   * Select specific fields to fetch from the Category
  **/
  select?: CategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CategoryInclude | null
  /**
   * The filter to search for the Category to update in case it exists.
  **/
  where: CategoryWhereUniqueInput
  /**
   * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
  **/
  create: CategoryCreateInput
  /**
   * In case the Category was found with the provided `where` argument, update it with this data.
  **/
  update: CategoryUpdateInput
}


/**
 * Category delete
 */
export type CategoryDeleteArgs = {
  /**
   * Select specific fields to fetch from the Category
  **/
  select?: CategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CategoryInclude | null
  /**
   * Filter which Category to delete.
  **/
  where: CategoryWhereUniqueInput
}


/**
 * Category deleteMany
 */
export type CategoryDeleteManyArgs = {
  where?: CategoryWhereInput
}


/**
 * Category without action
 */
export type CategoryArgs = {
  /**
   * Select specific fields to fetch from the Category
  **/
  select?: CategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CategoryInclude | null
}



/**
 * Model ArticleCategory
 */

export type ArticleCategory = {
  articleId: number
  categoryId: number
}


export type AggregateArticleCategory = {
  count: number
  avg: ArticleCategoryAvgAggregateOutputType | null
  sum: ArticleCategorySumAggregateOutputType | null
  min: ArticleCategoryMinAggregateOutputType | null
  max: ArticleCategoryMaxAggregateOutputType | null
}

export type ArticleCategoryAvgAggregateOutputType = {
  articleId: number
  categoryId: number
}

export type ArticleCategorySumAggregateOutputType = {
  articleId: number
  categoryId: number
}

export type ArticleCategoryMinAggregateOutputType = {
  articleId: number
  categoryId: number
}

export type ArticleCategoryMaxAggregateOutputType = {
  articleId: number
  categoryId: number
}


export type ArticleCategoryAvgAggregateInputType = {
  articleId?: true
  categoryId?: true
}

export type ArticleCategorySumAggregateInputType = {
  articleId?: true
  categoryId?: true
}

export type ArticleCategoryMinAggregateInputType = {
  articleId?: true
  categoryId?: true
}

export type ArticleCategoryMaxAggregateInputType = {
  articleId?: true
  categoryId?: true
}

export type AggregateArticleCategoryArgs = {
  where?: ArticleCategoryWhereInput
  orderBy?: Enumerable<ArticleCategoryOrderByInput> | ArticleCategoryOrderByInput
  cursor?: ArticleCategoryWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ArticleCategoryDistinctFieldEnum>
  count?: true
  avg?: ArticleCategoryAvgAggregateInputType
  sum?: ArticleCategorySumAggregateInputType
  min?: ArticleCategoryMinAggregateInputType
  max?: ArticleCategoryMaxAggregateInputType
}

export type GetArticleCategoryAggregateType<T extends AggregateArticleCategoryArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetArticleCategoryAggregateScalarType<T[P]>
}

export type GetArticleCategoryAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof ArticleCategoryAvgAggregateOutputType ? ArticleCategoryAvgAggregateOutputType[P] : never
}
    
    

export type ArticleCategorySelect = {
  article?: boolean | ArticleArgs
  articleId?: boolean
  category?: boolean | CategoryArgs
  categoryId?: boolean
}

export type ArticleCategoryInclude = {
  article?: boolean | ArticleArgs
  category?: boolean | CategoryArgs
}

export type ArticleCategoryGetPayload<
  S extends boolean | null | undefined | ArticleCategoryArgs,
  U = keyof S
> = S extends true
  ? ArticleCategory
  : S extends undefined
  ? never
  : S extends ArticleCategoryArgs | FindManyArticleCategoryArgs
  ? 'include' extends U
    ? ArticleCategory  & {
      [P in TrueKeys<S['include']>]:
      P extends 'article'
      ? ArticleGetPayload<S['include'][P]> :
      P extends 'category'
      ? CategoryGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof ArticleCategory ? ArticleCategory[P]
: 
      P extends 'article'
      ? ArticleGetPayload<S['select'][P]> :
      P extends 'category'
      ? CategoryGetPayload<S['select'][P]> : never
    }
  : ArticleCategory
: ArticleCategory


export interface ArticleCategoryDelegate {
  /**
   * Find zero or one ArticleCategory that matches the filter.
   * @param {FindOneArticleCategoryArgs} args - Arguments to find a ArticleCategory
   * @example
   * // Get one ArticleCategory
   * const articleCategory = await prisma.articleCategory.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneArticleCategoryArgs>(
    args: Subset<T, FindOneArticleCategoryArgs>
  ): CheckSelect<T, Prisma__ArticleCategoryClient<ArticleCategory | null>, Prisma__ArticleCategoryClient<ArticleCategoryGetPayload<T> | null>>
  /**
   * Find the first ArticleCategory that matches the filter.
   * @param {FindFirstArticleCategoryArgs} args - Arguments to find a ArticleCategory
   * @example
   * // Get one ArticleCategory
   * const articleCategory = await prisma.articleCategory.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstArticleCategoryArgs>(
    args?: Subset<T, FindFirstArticleCategoryArgs>
  ): CheckSelect<T, Prisma__ArticleCategoryClient<ArticleCategory | null>, Prisma__ArticleCategoryClient<ArticleCategoryGetPayload<T> | null>>
  /**
   * Find zero or more ArticleCategories that matches the filter.
   * @param {FindManyArticleCategoryArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all ArticleCategories
   * const articleCategories = await prisma.articleCategory.findMany()
   * 
   * // Get first 10 ArticleCategories
   * const articleCategories = await prisma.articleCategory.findMany({ take: 10 })
   * 
   * // Only select the `articleId`
   * const articleCategoryWithArticleIdOnly = await prisma.articleCategory.findMany({ select: { articleId: true } })
   * 
  **/
  findMany<T extends FindManyArticleCategoryArgs>(
    args?: Subset<T, FindManyArticleCategoryArgs>
  ): CheckSelect<T, Promise<Array<ArticleCategory>>, Promise<Array<ArticleCategoryGetPayload<T>>>>
  /**
   * Create a ArticleCategory.
   * @param {ArticleCategoryCreateArgs} args - Arguments to create a ArticleCategory.
   * @example
   * // Create one ArticleCategory
   * const ArticleCategory = await prisma.articleCategory.create({
   *   data: {
   *     // ... data to create a ArticleCategory
   *   }
   * })
   * 
  **/
  create<T extends ArticleCategoryCreateArgs>(
    args: Subset<T, ArticleCategoryCreateArgs>
  ): CheckSelect<T, Prisma__ArticleCategoryClient<ArticleCategory>, Prisma__ArticleCategoryClient<ArticleCategoryGetPayload<T>>>
  /**
   * Delete a ArticleCategory.
   * @param {ArticleCategoryDeleteArgs} args - Arguments to delete one ArticleCategory.
   * @example
   * // Delete one ArticleCategory
   * const ArticleCategory = await prisma.articleCategory.delete({
   *   where: {
   *     // ... filter to delete one ArticleCategory
   *   }
   * })
   * 
  **/
  delete<T extends ArticleCategoryDeleteArgs>(
    args: Subset<T, ArticleCategoryDeleteArgs>
  ): CheckSelect<T, Prisma__ArticleCategoryClient<ArticleCategory>, Prisma__ArticleCategoryClient<ArticleCategoryGetPayload<T>>>
  /**
   * Update one ArticleCategory.
   * @param {ArticleCategoryUpdateArgs} args - Arguments to update one ArticleCategory.
   * @example
   * // Update one ArticleCategory
   * const articleCategory = await prisma.articleCategory.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends ArticleCategoryUpdateArgs>(
    args: Subset<T, ArticleCategoryUpdateArgs>
  ): CheckSelect<T, Prisma__ArticleCategoryClient<ArticleCategory>, Prisma__ArticleCategoryClient<ArticleCategoryGetPayload<T>>>
  /**
   * Delete zero or more ArticleCategories.
   * @param {ArticleCategoryDeleteManyArgs} args - Arguments to filter ArticleCategories to delete.
   * @example
   * // Delete a few ArticleCategories
   * const { count } = await prisma.articleCategory.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends ArticleCategoryDeleteManyArgs>(
    args: Subset<T, ArticleCategoryDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more ArticleCategories.
   * @param {ArticleCategoryUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many ArticleCategories
   * const articleCategory = await prisma.articleCategory.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends ArticleCategoryUpdateManyArgs>(
    args: Subset<T, ArticleCategoryUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one ArticleCategory.
   * @param {ArticleCategoryUpsertArgs} args - Arguments to update or create a ArticleCategory.
   * @example
   * // Update or create a ArticleCategory
   * const articleCategory = await prisma.articleCategory.upsert({
   *   create: {
   *     // ... data to create a ArticleCategory
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the ArticleCategory we want to update
   *   }
   * })
  **/
  upsert<T extends ArticleCategoryUpsertArgs>(
    args: Subset<T, ArticleCategoryUpsertArgs>
  ): CheckSelect<T, Prisma__ArticleCategoryClient<ArticleCategory>, Prisma__ArticleCategoryClient<ArticleCategoryGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyArticleCategoryArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateArticleCategoryArgs>(args: Subset<T, AggregateArticleCategoryArgs>): Promise<GetArticleCategoryAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for ArticleCategory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__ArticleCategoryClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  article<T extends ArticleArgs = {}>(args?: Subset<T, ArticleArgs>): CheckSelect<T, Prisma__ArticleClient<Article | null>, Prisma__ArticleClient<ArticleGetPayload<T> | null>>;

  category<T extends CategoryArgs = {}>(args?: Subset<T, CategoryArgs>): CheckSelect<T, Prisma__CategoryClient<Category | null>, Prisma__CategoryClient<CategoryGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * ArticleCategory findOne
 */
export type FindOneArticleCategoryArgs = {
  /**
   * Select specific fields to fetch from the ArticleCategory
  **/
  select?: ArticleCategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ArticleCategoryInclude | null
  /**
   * Filter, which ArticleCategory to fetch.
  **/
  where: ArticleCategoryWhereUniqueInput
}


/**
 * ArticleCategory findFirst
 */
export type FindFirstArticleCategoryArgs = {
  /**
   * Select specific fields to fetch from the ArticleCategory
  **/
  select?: ArticleCategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ArticleCategoryInclude | null
  /**
   * Filter, which ArticleCategory to fetch.
  **/
  where?: ArticleCategoryWhereInput
  orderBy?: Enumerable<ArticleCategoryOrderByInput> | ArticleCategoryOrderByInput
  cursor?: ArticleCategoryWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ArticleCategoryDistinctFieldEnum>
}


/**
 * ArticleCategory findMany
 */
export type FindManyArticleCategoryArgs = {
  /**
   * Select specific fields to fetch from the ArticleCategory
  **/
  select?: ArticleCategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ArticleCategoryInclude | null
  /**
   * Filter, which ArticleCategories to fetch.
  **/
  where?: ArticleCategoryWhereInput
  /**
   * Determine the order of the ArticleCategories to fetch.
  **/
  orderBy?: Enumerable<ArticleCategoryOrderByInput> | ArticleCategoryOrderByInput
  /**
   * Sets the position for listing ArticleCategories.
  **/
  cursor?: ArticleCategoryWhereUniqueInput
  /**
   * The number of ArticleCategories to fetch. If negative number, it will take ArticleCategories before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` ArticleCategories.
  **/
  skip?: number
  distinct?: Enumerable<ArticleCategoryDistinctFieldEnum>
}


/**
 * ArticleCategory create
 */
export type ArticleCategoryCreateArgs = {
  /**
   * Select specific fields to fetch from the ArticleCategory
  **/
  select?: ArticleCategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ArticleCategoryInclude | null
  /**
   * The data needed to create a ArticleCategory.
  **/
  data: ArticleCategoryCreateInput
}


/**
 * ArticleCategory update
 */
export type ArticleCategoryUpdateArgs = {
  /**
   * Select specific fields to fetch from the ArticleCategory
  **/
  select?: ArticleCategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ArticleCategoryInclude | null
  /**
   * The data needed to update a ArticleCategory.
  **/
  data: ArticleCategoryUpdateInput
  /**
   * Choose, which ArticleCategory to update.
  **/
  where: ArticleCategoryWhereUniqueInput
}


/**
 * ArticleCategory updateMany
 */
export type ArticleCategoryUpdateManyArgs = {
  data: ArticleCategoryUpdateManyMutationInput
  where?: ArticleCategoryWhereInput
}


/**
 * ArticleCategory upsert
 */
export type ArticleCategoryUpsertArgs = {
  /**
   * Select specific fields to fetch from the ArticleCategory
  **/
  select?: ArticleCategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ArticleCategoryInclude | null
  /**
   * The filter to search for the ArticleCategory to update in case it exists.
  **/
  where: ArticleCategoryWhereUniqueInput
  /**
   * In case the ArticleCategory found by the `where` argument doesn't exist, create a new ArticleCategory with this data.
  **/
  create: ArticleCategoryCreateInput
  /**
   * In case the ArticleCategory was found with the provided `where` argument, update it with this data.
  **/
  update: ArticleCategoryUpdateInput
}


/**
 * ArticleCategory delete
 */
export type ArticleCategoryDeleteArgs = {
  /**
   * Select specific fields to fetch from the ArticleCategory
  **/
  select?: ArticleCategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ArticleCategoryInclude | null
  /**
   * Filter which ArticleCategory to delete.
  **/
  where: ArticleCategoryWhereUniqueInput
}


/**
 * ArticleCategory deleteMany
 */
export type ArticleCategoryDeleteManyArgs = {
  where?: ArticleCategoryWhereInput
}


/**
 * ArticleCategory without action
 */
export type ArticleCategoryArgs = {
  /**
   * Select specific fields to fetch from the ArticleCategory
  **/
  select?: ArticleCategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ArticleCategoryInclude | null
}



/**
 * Model Project
 */

export type Project = {
  id: number
  title: string
  preview: string
  description: string
  githublink: string
  photo: string
}


export type AggregateProject = {
  count: number
  avg: ProjectAvgAggregateOutputType | null
  sum: ProjectSumAggregateOutputType | null
  min: ProjectMinAggregateOutputType | null
  max: ProjectMaxAggregateOutputType | null
}

export type ProjectAvgAggregateOutputType = {
  id: number
}

export type ProjectSumAggregateOutputType = {
  id: number
}

export type ProjectMinAggregateOutputType = {
  id: number
}

export type ProjectMaxAggregateOutputType = {
  id: number
}


export type ProjectAvgAggregateInputType = {
  id?: true
}

export type ProjectSumAggregateInputType = {
  id?: true
}

export type ProjectMinAggregateInputType = {
  id?: true
}

export type ProjectMaxAggregateInputType = {
  id?: true
}

export type AggregateProjectArgs = {
  where?: ProjectWhereInput
  orderBy?: Enumerable<ProjectOrderByInput> | ProjectOrderByInput
  cursor?: ProjectWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ProjectDistinctFieldEnum>
  count?: true
  avg?: ProjectAvgAggregateInputType
  sum?: ProjectSumAggregateInputType
  min?: ProjectMinAggregateInputType
  max?: ProjectMaxAggregateInputType
}

export type GetProjectAggregateType<T extends AggregateProjectArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetProjectAggregateScalarType<T[P]>
}

export type GetProjectAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof ProjectAvgAggregateOutputType ? ProjectAvgAggregateOutputType[P] : never
}
    
    

export type ProjectSelect = {
  id?: boolean
  title?: boolean
  preview?: boolean
  description?: boolean
  githublink?: boolean
  photo?: boolean
  ProjectStack?: boolean | FindManyProjectStackArgs
  ProjectDevelopment?: boolean | FindManyProjectDevelopmentArgs
}

export type ProjectInclude = {
  ProjectStack?: boolean | FindManyProjectStackArgs
  ProjectDevelopment?: boolean | FindManyProjectDevelopmentArgs
}

export type ProjectGetPayload<
  S extends boolean | null | undefined | ProjectArgs,
  U = keyof S
> = S extends true
  ? Project
  : S extends undefined
  ? never
  : S extends ProjectArgs | FindManyProjectArgs
  ? 'include' extends U
    ? Project  & {
      [P in TrueKeys<S['include']>]:
      P extends 'ProjectStack'
      ? Array<ProjectStackGetPayload<S['include'][P]>> :
      P extends 'ProjectDevelopment'
      ? Array<ProjectDevelopmentGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Project ? Project[P]
: 
      P extends 'ProjectStack'
      ? Array<ProjectStackGetPayload<S['select'][P]>> :
      P extends 'ProjectDevelopment'
      ? Array<ProjectDevelopmentGetPayload<S['select'][P]>> : never
    }
  : Project
: Project


export interface ProjectDelegate {
  /**
   * Find zero or one Project that matches the filter.
   * @param {FindOneProjectArgs} args - Arguments to find a Project
   * @example
   * // Get one Project
   * const project = await prisma.project.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneProjectArgs>(
    args: Subset<T, FindOneProjectArgs>
  ): CheckSelect<T, Prisma__ProjectClient<Project | null>, Prisma__ProjectClient<ProjectGetPayload<T> | null>>
  /**
   * Find the first Project that matches the filter.
   * @param {FindFirstProjectArgs} args - Arguments to find a Project
   * @example
   * // Get one Project
   * const project = await prisma.project.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstProjectArgs>(
    args?: Subset<T, FindFirstProjectArgs>
  ): CheckSelect<T, Prisma__ProjectClient<Project | null>, Prisma__ProjectClient<ProjectGetPayload<T> | null>>
  /**
   * Find zero or more Projects that matches the filter.
   * @param {FindManyProjectArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Projects
   * const projects = await prisma.project.findMany()
   * 
   * // Get first 10 Projects
   * const projects = await prisma.project.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyProjectArgs>(
    args?: Subset<T, FindManyProjectArgs>
  ): CheckSelect<T, Promise<Array<Project>>, Promise<Array<ProjectGetPayload<T>>>>
  /**
   * Create a Project.
   * @param {ProjectCreateArgs} args - Arguments to create a Project.
   * @example
   * // Create one Project
   * const Project = await prisma.project.create({
   *   data: {
   *     // ... data to create a Project
   *   }
   * })
   * 
  **/
  create<T extends ProjectCreateArgs>(
    args: Subset<T, ProjectCreateArgs>
  ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>
  /**
   * Delete a Project.
   * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
   * @example
   * // Delete one Project
   * const Project = await prisma.project.delete({
   *   where: {
   *     // ... filter to delete one Project
   *   }
   * })
   * 
  **/
  delete<T extends ProjectDeleteArgs>(
    args: Subset<T, ProjectDeleteArgs>
  ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>
  /**
   * Update one Project.
   * @param {ProjectUpdateArgs} args - Arguments to update one Project.
   * @example
   * // Update one Project
   * const project = await prisma.project.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends ProjectUpdateArgs>(
    args: Subset<T, ProjectUpdateArgs>
  ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>
  /**
   * Delete zero or more Projects.
   * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
   * @example
   * // Delete a few Projects
   * const { count } = await prisma.project.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends ProjectDeleteManyArgs>(
    args: Subset<T, ProjectDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Projects.
   * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Projects
   * const project = await prisma.project.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends ProjectUpdateManyArgs>(
    args: Subset<T, ProjectUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Project.
   * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
   * @example
   * // Update or create a Project
   * const project = await prisma.project.upsert({
   *   create: {
   *     // ... data to create a Project
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Project we want to update
   *   }
   * })
  **/
  upsert<T extends ProjectUpsertArgs>(
    args: Subset<T, ProjectUpsertArgs>
  ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyProjectArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateProjectArgs>(args: Subset<T, AggregateProjectArgs>): Promise<GetProjectAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Project.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__ProjectClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  ProjectStack<T extends FindManyProjectStackArgs = {}>(args?: Subset<T, FindManyProjectStackArgs>): CheckSelect<T, Promise<Array<ProjectStack>>, Promise<Array<ProjectStackGetPayload<T>>>>;

  ProjectDevelopment<T extends FindManyProjectDevelopmentArgs = {}>(args?: Subset<T, FindManyProjectDevelopmentArgs>): CheckSelect<T, Promise<Array<ProjectDevelopment>>, Promise<Array<ProjectDevelopmentGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Project findOne
 */
export type FindOneProjectArgs = {
  /**
   * Select specific fields to fetch from the Project
  **/
  select?: ProjectSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectInclude | null
  /**
   * Filter, which Project to fetch.
  **/
  where: ProjectWhereUniqueInput
}


/**
 * Project findFirst
 */
export type FindFirstProjectArgs = {
  /**
   * Select specific fields to fetch from the Project
  **/
  select?: ProjectSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectInclude | null
  /**
   * Filter, which Project to fetch.
  **/
  where?: ProjectWhereInput
  orderBy?: Enumerable<ProjectOrderByInput> | ProjectOrderByInput
  cursor?: ProjectWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ProjectDistinctFieldEnum>
}


/**
 * Project findMany
 */
export type FindManyProjectArgs = {
  /**
   * Select specific fields to fetch from the Project
  **/
  select?: ProjectSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectInclude | null
  /**
   * Filter, which Projects to fetch.
  **/
  where?: ProjectWhereInput
  /**
   * Determine the order of the Projects to fetch.
  **/
  orderBy?: Enumerable<ProjectOrderByInput> | ProjectOrderByInput
  /**
   * Sets the position for listing Projects.
  **/
  cursor?: ProjectWhereUniqueInput
  /**
   * The number of Projects to fetch. If negative number, it will take Projects before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Projects.
  **/
  skip?: number
  distinct?: Enumerable<ProjectDistinctFieldEnum>
}


/**
 * Project create
 */
export type ProjectCreateArgs = {
  /**
   * Select specific fields to fetch from the Project
  **/
  select?: ProjectSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectInclude | null
  /**
   * The data needed to create a Project.
  **/
  data: ProjectCreateInput
}


/**
 * Project update
 */
export type ProjectUpdateArgs = {
  /**
   * Select specific fields to fetch from the Project
  **/
  select?: ProjectSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectInclude | null
  /**
   * The data needed to update a Project.
  **/
  data: ProjectUpdateInput
  /**
   * Choose, which Project to update.
  **/
  where: ProjectWhereUniqueInput
}


/**
 * Project updateMany
 */
export type ProjectUpdateManyArgs = {
  data: ProjectUpdateManyMutationInput
  where?: ProjectWhereInput
}


/**
 * Project upsert
 */
export type ProjectUpsertArgs = {
  /**
   * Select specific fields to fetch from the Project
  **/
  select?: ProjectSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectInclude | null
  /**
   * The filter to search for the Project to update in case it exists.
  **/
  where: ProjectWhereUniqueInput
  /**
   * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
  **/
  create: ProjectCreateInput
  /**
   * In case the Project was found with the provided `where` argument, update it with this data.
  **/
  update: ProjectUpdateInput
}


/**
 * Project delete
 */
export type ProjectDeleteArgs = {
  /**
   * Select specific fields to fetch from the Project
  **/
  select?: ProjectSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectInclude | null
  /**
   * Filter which Project to delete.
  **/
  where: ProjectWhereUniqueInput
}


/**
 * Project deleteMany
 */
export type ProjectDeleteManyArgs = {
  where?: ProjectWhereInput
}


/**
 * Project without action
 */
export type ProjectArgs = {
  /**
   * Select specific fields to fetch from the Project
  **/
  select?: ProjectSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectInclude | null
}



/**
 * Model Stack
 */

export type Stack = {
  id: number
  label: string
}


export type AggregateStack = {
  count: number
  avg: StackAvgAggregateOutputType | null
  sum: StackSumAggregateOutputType | null
  min: StackMinAggregateOutputType | null
  max: StackMaxAggregateOutputType | null
}

export type StackAvgAggregateOutputType = {
  id: number
}

export type StackSumAggregateOutputType = {
  id: number
}

export type StackMinAggregateOutputType = {
  id: number
}

export type StackMaxAggregateOutputType = {
  id: number
}


export type StackAvgAggregateInputType = {
  id?: true
}

export type StackSumAggregateInputType = {
  id?: true
}

export type StackMinAggregateInputType = {
  id?: true
}

export type StackMaxAggregateInputType = {
  id?: true
}

export type AggregateStackArgs = {
  where?: StackWhereInput
  orderBy?: Enumerable<StackOrderByInput> | StackOrderByInput
  cursor?: StackWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<StackDistinctFieldEnum>
  count?: true
  avg?: StackAvgAggregateInputType
  sum?: StackSumAggregateInputType
  min?: StackMinAggregateInputType
  max?: StackMaxAggregateInputType
}

export type GetStackAggregateType<T extends AggregateStackArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetStackAggregateScalarType<T[P]>
}

export type GetStackAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof StackAvgAggregateOutputType ? StackAvgAggregateOutputType[P] : never
}
    
    

export type StackSelect = {
  id?: boolean
  label?: boolean
  ProjectStack?: boolean | FindManyProjectStackArgs
}

export type StackInclude = {
  ProjectStack?: boolean | FindManyProjectStackArgs
}

export type StackGetPayload<
  S extends boolean | null | undefined | StackArgs,
  U = keyof S
> = S extends true
  ? Stack
  : S extends undefined
  ? never
  : S extends StackArgs | FindManyStackArgs
  ? 'include' extends U
    ? Stack  & {
      [P in TrueKeys<S['include']>]:
      P extends 'ProjectStack'
      ? Array<ProjectStackGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Stack ? Stack[P]
: 
      P extends 'ProjectStack'
      ? Array<ProjectStackGetPayload<S['select'][P]>> : never
    }
  : Stack
: Stack


export interface StackDelegate {
  /**
   * Find zero or one Stack that matches the filter.
   * @param {FindOneStackArgs} args - Arguments to find a Stack
   * @example
   * // Get one Stack
   * const stack = await prisma.stack.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneStackArgs>(
    args: Subset<T, FindOneStackArgs>
  ): CheckSelect<T, Prisma__StackClient<Stack | null>, Prisma__StackClient<StackGetPayload<T> | null>>
  /**
   * Find the first Stack that matches the filter.
   * @param {FindFirstStackArgs} args - Arguments to find a Stack
   * @example
   * // Get one Stack
   * const stack = await prisma.stack.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstStackArgs>(
    args?: Subset<T, FindFirstStackArgs>
  ): CheckSelect<T, Prisma__StackClient<Stack | null>, Prisma__StackClient<StackGetPayload<T> | null>>
  /**
   * Find zero or more Stacks that matches the filter.
   * @param {FindManyStackArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Stacks
   * const stacks = await prisma.stack.findMany()
   * 
   * // Get first 10 Stacks
   * const stacks = await prisma.stack.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const stackWithIdOnly = await prisma.stack.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyStackArgs>(
    args?: Subset<T, FindManyStackArgs>
  ): CheckSelect<T, Promise<Array<Stack>>, Promise<Array<StackGetPayload<T>>>>
  /**
   * Create a Stack.
   * @param {StackCreateArgs} args - Arguments to create a Stack.
   * @example
   * // Create one Stack
   * const Stack = await prisma.stack.create({
   *   data: {
   *     // ... data to create a Stack
   *   }
   * })
   * 
  **/
  create<T extends StackCreateArgs>(
    args: Subset<T, StackCreateArgs>
  ): CheckSelect<T, Prisma__StackClient<Stack>, Prisma__StackClient<StackGetPayload<T>>>
  /**
   * Delete a Stack.
   * @param {StackDeleteArgs} args - Arguments to delete one Stack.
   * @example
   * // Delete one Stack
   * const Stack = await prisma.stack.delete({
   *   where: {
   *     // ... filter to delete one Stack
   *   }
   * })
   * 
  **/
  delete<T extends StackDeleteArgs>(
    args: Subset<T, StackDeleteArgs>
  ): CheckSelect<T, Prisma__StackClient<Stack>, Prisma__StackClient<StackGetPayload<T>>>
  /**
   * Update one Stack.
   * @param {StackUpdateArgs} args - Arguments to update one Stack.
   * @example
   * // Update one Stack
   * const stack = await prisma.stack.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends StackUpdateArgs>(
    args: Subset<T, StackUpdateArgs>
  ): CheckSelect<T, Prisma__StackClient<Stack>, Prisma__StackClient<StackGetPayload<T>>>
  /**
   * Delete zero or more Stacks.
   * @param {StackDeleteManyArgs} args - Arguments to filter Stacks to delete.
   * @example
   * // Delete a few Stacks
   * const { count } = await prisma.stack.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends StackDeleteManyArgs>(
    args: Subset<T, StackDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Stacks.
   * @param {StackUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Stacks
   * const stack = await prisma.stack.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends StackUpdateManyArgs>(
    args: Subset<T, StackUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Stack.
   * @param {StackUpsertArgs} args - Arguments to update or create a Stack.
   * @example
   * // Update or create a Stack
   * const stack = await prisma.stack.upsert({
   *   create: {
   *     // ... data to create a Stack
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Stack we want to update
   *   }
   * })
  **/
  upsert<T extends StackUpsertArgs>(
    args: Subset<T, StackUpsertArgs>
  ): CheckSelect<T, Prisma__StackClient<Stack>, Prisma__StackClient<StackGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyStackArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateStackArgs>(args: Subset<T, AggregateStackArgs>): Promise<GetStackAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Stack.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__StackClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  ProjectStack<T extends FindManyProjectStackArgs = {}>(args?: Subset<T, FindManyProjectStackArgs>): CheckSelect<T, Promise<Array<ProjectStack>>, Promise<Array<ProjectStackGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Stack findOne
 */
export type FindOneStackArgs = {
  /**
   * Select specific fields to fetch from the Stack
  **/
  select?: StackSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: StackInclude | null
  /**
   * Filter, which Stack to fetch.
  **/
  where: StackWhereUniqueInput
}


/**
 * Stack findFirst
 */
export type FindFirstStackArgs = {
  /**
   * Select specific fields to fetch from the Stack
  **/
  select?: StackSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: StackInclude | null
  /**
   * Filter, which Stack to fetch.
  **/
  where?: StackWhereInput
  orderBy?: Enumerable<StackOrderByInput> | StackOrderByInput
  cursor?: StackWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<StackDistinctFieldEnum>
}


/**
 * Stack findMany
 */
export type FindManyStackArgs = {
  /**
   * Select specific fields to fetch from the Stack
  **/
  select?: StackSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: StackInclude | null
  /**
   * Filter, which Stacks to fetch.
  **/
  where?: StackWhereInput
  /**
   * Determine the order of the Stacks to fetch.
  **/
  orderBy?: Enumerable<StackOrderByInput> | StackOrderByInput
  /**
   * Sets the position for listing Stacks.
  **/
  cursor?: StackWhereUniqueInput
  /**
   * The number of Stacks to fetch. If negative number, it will take Stacks before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Stacks.
  **/
  skip?: number
  distinct?: Enumerable<StackDistinctFieldEnum>
}


/**
 * Stack create
 */
export type StackCreateArgs = {
  /**
   * Select specific fields to fetch from the Stack
  **/
  select?: StackSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: StackInclude | null
  /**
   * The data needed to create a Stack.
  **/
  data: StackCreateInput
}


/**
 * Stack update
 */
export type StackUpdateArgs = {
  /**
   * Select specific fields to fetch from the Stack
  **/
  select?: StackSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: StackInclude | null
  /**
   * The data needed to update a Stack.
  **/
  data: StackUpdateInput
  /**
   * Choose, which Stack to update.
  **/
  where: StackWhereUniqueInput
}


/**
 * Stack updateMany
 */
export type StackUpdateManyArgs = {
  data: StackUpdateManyMutationInput
  where?: StackWhereInput
}


/**
 * Stack upsert
 */
export type StackUpsertArgs = {
  /**
   * Select specific fields to fetch from the Stack
  **/
  select?: StackSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: StackInclude | null
  /**
   * The filter to search for the Stack to update in case it exists.
  **/
  where: StackWhereUniqueInput
  /**
   * In case the Stack found by the `where` argument doesn't exist, create a new Stack with this data.
  **/
  create: StackCreateInput
  /**
   * In case the Stack was found with the provided `where` argument, update it with this data.
  **/
  update: StackUpdateInput
}


/**
 * Stack delete
 */
export type StackDeleteArgs = {
  /**
   * Select specific fields to fetch from the Stack
  **/
  select?: StackSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: StackInclude | null
  /**
   * Filter which Stack to delete.
  **/
  where: StackWhereUniqueInput
}


/**
 * Stack deleteMany
 */
export type StackDeleteManyArgs = {
  where?: StackWhereInput
}


/**
 * Stack without action
 */
export type StackArgs = {
  /**
   * Select specific fields to fetch from the Stack
  **/
  select?: StackSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: StackInclude | null
}



/**
 * Model Development
 */

export type Development = {
  id: number
  label: string
}


export type AggregateDevelopment = {
  count: number
  avg: DevelopmentAvgAggregateOutputType | null
  sum: DevelopmentSumAggregateOutputType | null
  min: DevelopmentMinAggregateOutputType | null
  max: DevelopmentMaxAggregateOutputType | null
}

export type DevelopmentAvgAggregateOutputType = {
  id: number
}

export type DevelopmentSumAggregateOutputType = {
  id: number
}

export type DevelopmentMinAggregateOutputType = {
  id: number
}

export type DevelopmentMaxAggregateOutputType = {
  id: number
}


export type DevelopmentAvgAggregateInputType = {
  id?: true
}

export type DevelopmentSumAggregateInputType = {
  id?: true
}

export type DevelopmentMinAggregateInputType = {
  id?: true
}

export type DevelopmentMaxAggregateInputType = {
  id?: true
}

export type AggregateDevelopmentArgs = {
  where?: DevelopmentWhereInput
  orderBy?: Enumerable<DevelopmentOrderByInput> | DevelopmentOrderByInput
  cursor?: DevelopmentWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<DevelopmentDistinctFieldEnum>
  count?: true
  avg?: DevelopmentAvgAggregateInputType
  sum?: DevelopmentSumAggregateInputType
  min?: DevelopmentMinAggregateInputType
  max?: DevelopmentMaxAggregateInputType
}

export type GetDevelopmentAggregateType<T extends AggregateDevelopmentArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetDevelopmentAggregateScalarType<T[P]>
}

export type GetDevelopmentAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof DevelopmentAvgAggregateOutputType ? DevelopmentAvgAggregateOutputType[P] : never
}
    
    

export type DevelopmentSelect = {
  id?: boolean
  label?: boolean
  ProjectDevelopment?: boolean | FindManyProjectDevelopmentArgs
}

export type DevelopmentInclude = {
  ProjectDevelopment?: boolean | FindManyProjectDevelopmentArgs
}

export type DevelopmentGetPayload<
  S extends boolean | null | undefined | DevelopmentArgs,
  U = keyof S
> = S extends true
  ? Development
  : S extends undefined
  ? never
  : S extends DevelopmentArgs | FindManyDevelopmentArgs
  ? 'include' extends U
    ? Development  & {
      [P in TrueKeys<S['include']>]:
      P extends 'ProjectDevelopment'
      ? Array<ProjectDevelopmentGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Development ? Development[P]
: 
      P extends 'ProjectDevelopment'
      ? Array<ProjectDevelopmentGetPayload<S['select'][P]>> : never
    }
  : Development
: Development


export interface DevelopmentDelegate {
  /**
   * Find zero or one Development that matches the filter.
   * @param {FindOneDevelopmentArgs} args - Arguments to find a Development
   * @example
   * // Get one Development
   * const development = await prisma.development.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneDevelopmentArgs>(
    args: Subset<T, FindOneDevelopmentArgs>
  ): CheckSelect<T, Prisma__DevelopmentClient<Development | null>, Prisma__DevelopmentClient<DevelopmentGetPayload<T> | null>>
  /**
   * Find the first Development that matches the filter.
   * @param {FindFirstDevelopmentArgs} args - Arguments to find a Development
   * @example
   * // Get one Development
   * const development = await prisma.development.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstDevelopmentArgs>(
    args?: Subset<T, FindFirstDevelopmentArgs>
  ): CheckSelect<T, Prisma__DevelopmentClient<Development | null>, Prisma__DevelopmentClient<DevelopmentGetPayload<T> | null>>
  /**
   * Find zero or more Developments that matches the filter.
   * @param {FindManyDevelopmentArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Developments
   * const developments = await prisma.development.findMany()
   * 
   * // Get first 10 Developments
   * const developments = await prisma.development.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const developmentWithIdOnly = await prisma.development.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyDevelopmentArgs>(
    args?: Subset<T, FindManyDevelopmentArgs>
  ): CheckSelect<T, Promise<Array<Development>>, Promise<Array<DevelopmentGetPayload<T>>>>
  /**
   * Create a Development.
   * @param {DevelopmentCreateArgs} args - Arguments to create a Development.
   * @example
   * // Create one Development
   * const Development = await prisma.development.create({
   *   data: {
   *     // ... data to create a Development
   *   }
   * })
   * 
  **/
  create<T extends DevelopmentCreateArgs>(
    args: Subset<T, DevelopmentCreateArgs>
  ): CheckSelect<T, Prisma__DevelopmentClient<Development>, Prisma__DevelopmentClient<DevelopmentGetPayload<T>>>
  /**
   * Delete a Development.
   * @param {DevelopmentDeleteArgs} args - Arguments to delete one Development.
   * @example
   * // Delete one Development
   * const Development = await prisma.development.delete({
   *   where: {
   *     // ... filter to delete one Development
   *   }
   * })
   * 
  **/
  delete<T extends DevelopmentDeleteArgs>(
    args: Subset<T, DevelopmentDeleteArgs>
  ): CheckSelect<T, Prisma__DevelopmentClient<Development>, Prisma__DevelopmentClient<DevelopmentGetPayload<T>>>
  /**
   * Update one Development.
   * @param {DevelopmentUpdateArgs} args - Arguments to update one Development.
   * @example
   * // Update one Development
   * const development = await prisma.development.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends DevelopmentUpdateArgs>(
    args: Subset<T, DevelopmentUpdateArgs>
  ): CheckSelect<T, Prisma__DevelopmentClient<Development>, Prisma__DevelopmentClient<DevelopmentGetPayload<T>>>
  /**
   * Delete zero or more Developments.
   * @param {DevelopmentDeleteManyArgs} args - Arguments to filter Developments to delete.
   * @example
   * // Delete a few Developments
   * const { count } = await prisma.development.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends DevelopmentDeleteManyArgs>(
    args: Subset<T, DevelopmentDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Developments.
   * @param {DevelopmentUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Developments
   * const development = await prisma.development.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends DevelopmentUpdateManyArgs>(
    args: Subset<T, DevelopmentUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Development.
   * @param {DevelopmentUpsertArgs} args - Arguments to update or create a Development.
   * @example
   * // Update or create a Development
   * const development = await prisma.development.upsert({
   *   create: {
   *     // ... data to create a Development
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Development we want to update
   *   }
   * })
  **/
  upsert<T extends DevelopmentUpsertArgs>(
    args: Subset<T, DevelopmentUpsertArgs>
  ): CheckSelect<T, Prisma__DevelopmentClient<Development>, Prisma__DevelopmentClient<DevelopmentGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyDevelopmentArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateDevelopmentArgs>(args: Subset<T, AggregateDevelopmentArgs>): Promise<GetDevelopmentAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Development.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__DevelopmentClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  ProjectDevelopment<T extends FindManyProjectDevelopmentArgs = {}>(args?: Subset<T, FindManyProjectDevelopmentArgs>): CheckSelect<T, Promise<Array<ProjectDevelopment>>, Promise<Array<ProjectDevelopmentGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Development findOne
 */
export type FindOneDevelopmentArgs = {
  /**
   * Select specific fields to fetch from the Development
  **/
  select?: DevelopmentSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: DevelopmentInclude | null
  /**
   * Filter, which Development to fetch.
  **/
  where: DevelopmentWhereUniqueInput
}


/**
 * Development findFirst
 */
export type FindFirstDevelopmentArgs = {
  /**
   * Select specific fields to fetch from the Development
  **/
  select?: DevelopmentSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: DevelopmentInclude | null
  /**
   * Filter, which Development to fetch.
  **/
  where?: DevelopmentWhereInput
  orderBy?: Enumerable<DevelopmentOrderByInput> | DevelopmentOrderByInput
  cursor?: DevelopmentWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<DevelopmentDistinctFieldEnum>
}


/**
 * Development findMany
 */
export type FindManyDevelopmentArgs = {
  /**
   * Select specific fields to fetch from the Development
  **/
  select?: DevelopmentSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: DevelopmentInclude | null
  /**
   * Filter, which Developments to fetch.
  **/
  where?: DevelopmentWhereInput
  /**
   * Determine the order of the Developments to fetch.
  **/
  orderBy?: Enumerable<DevelopmentOrderByInput> | DevelopmentOrderByInput
  /**
   * Sets the position for listing Developments.
  **/
  cursor?: DevelopmentWhereUniqueInput
  /**
   * The number of Developments to fetch. If negative number, it will take Developments before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Developments.
  **/
  skip?: number
  distinct?: Enumerable<DevelopmentDistinctFieldEnum>
}


/**
 * Development create
 */
export type DevelopmentCreateArgs = {
  /**
   * Select specific fields to fetch from the Development
  **/
  select?: DevelopmentSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: DevelopmentInclude | null
  /**
   * The data needed to create a Development.
  **/
  data: DevelopmentCreateInput
}


/**
 * Development update
 */
export type DevelopmentUpdateArgs = {
  /**
   * Select specific fields to fetch from the Development
  **/
  select?: DevelopmentSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: DevelopmentInclude | null
  /**
   * The data needed to update a Development.
  **/
  data: DevelopmentUpdateInput
  /**
   * Choose, which Development to update.
  **/
  where: DevelopmentWhereUniqueInput
}


/**
 * Development updateMany
 */
export type DevelopmentUpdateManyArgs = {
  data: DevelopmentUpdateManyMutationInput
  where?: DevelopmentWhereInput
}


/**
 * Development upsert
 */
export type DevelopmentUpsertArgs = {
  /**
   * Select specific fields to fetch from the Development
  **/
  select?: DevelopmentSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: DevelopmentInclude | null
  /**
   * The filter to search for the Development to update in case it exists.
  **/
  where: DevelopmentWhereUniqueInput
  /**
   * In case the Development found by the `where` argument doesn't exist, create a new Development with this data.
  **/
  create: DevelopmentCreateInput
  /**
   * In case the Development was found with the provided `where` argument, update it with this data.
  **/
  update: DevelopmentUpdateInput
}


/**
 * Development delete
 */
export type DevelopmentDeleteArgs = {
  /**
   * Select specific fields to fetch from the Development
  **/
  select?: DevelopmentSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: DevelopmentInclude | null
  /**
   * Filter which Development to delete.
  **/
  where: DevelopmentWhereUniqueInput
}


/**
 * Development deleteMany
 */
export type DevelopmentDeleteManyArgs = {
  where?: DevelopmentWhereInput
}


/**
 * Development without action
 */
export type DevelopmentArgs = {
  /**
   * Select specific fields to fetch from the Development
  **/
  select?: DevelopmentSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: DevelopmentInclude | null
}



/**
 * Model ProjectStack
 */

export type ProjectStack = {
  projectId: number
  stackId: number
}


export type AggregateProjectStack = {
  count: number
  avg: ProjectStackAvgAggregateOutputType | null
  sum: ProjectStackSumAggregateOutputType | null
  min: ProjectStackMinAggregateOutputType | null
  max: ProjectStackMaxAggregateOutputType | null
}

export type ProjectStackAvgAggregateOutputType = {
  projectId: number
  stackId: number
}

export type ProjectStackSumAggregateOutputType = {
  projectId: number
  stackId: number
}

export type ProjectStackMinAggregateOutputType = {
  projectId: number
  stackId: number
}

export type ProjectStackMaxAggregateOutputType = {
  projectId: number
  stackId: number
}


export type ProjectStackAvgAggregateInputType = {
  projectId?: true
  stackId?: true
}

export type ProjectStackSumAggregateInputType = {
  projectId?: true
  stackId?: true
}

export type ProjectStackMinAggregateInputType = {
  projectId?: true
  stackId?: true
}

export type ProjectStackMaxAggregateInputType = {
  projectId?: true
  stackId?: true
}

export type AggregateProjectStackArgs = {
  where?: ProjectStackWhereInput
  orderBy?: Enumerable<ProjectStackOrderByInput> | ProjectStackOrderByInput
  cursor?: ProjectStackWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ProjectStackDistinctFieldEnum>
  count?: true
  avg?: ProjectStackAvgAggregateInputType
  sum?: ProjectStackSumAggregateInputType
  min?: ProjectStackMinAggregateInputType
  max?: ProjectStackMaxAggregateInputType
}

export type GetProjectStackAggregateType<T extends AggregateProjectStackArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetProjectStackAggregateScalarType<T[P]>
}

export type GetProjectStackAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof ProjectStackAvgAggregateOutputType ? ProjectStackAvgAggregateOutputType[P] : never
}
    
    

export type ProjectStackSelect = {
  project?: boolean | ProjectArgs
  projectId?: boolean
  stack?: boolean | StackArgs
  stackId?: boolean
}

export type ProjectStackInclude = {
  project?: boolean | ProjectArgs
  stack?: boolean | StackArgs
}

export type ProjectStackGetPayload<
  S extends boolean | null | undefined | ProjectStackArgs,
  U = keyof S
> = S extends true
  ? ProjectStack
  : S extends undefined
  ? never
  : S extends ProjectStackArgs | FindManyProjectStackArgs
  ? 'include' extends U
    ? ProjectStack  & {
      [P in TrueKeys<S['include']>]:
      P extends 'project'
      ? ProjectGetPayload<S['include'][P]> :
      P extends 'stack'
      ? StackGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof ProjectStack ? ProjectStack[P]
: 
      P extends 'project'
      ? ProjectGetPayload<S['select'][P]> :
      P extends 'stack'
      ? StackGetPayload<S['select'][P]> : never
    }
  : ProjectStack
: ProjectStack


export interface ProjectStackDelegate {
  /**
   * Find zero or one ProjectStack that matches the filter.
   * @param {FindOneProjectStackArgs} args - Arguments to find a ProjectStack
   * @example
   * // Get one ProjectStack
   * const projectStack = await prisma.projectStack.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneProjectStackArgs>(
    args: Subset<T, FindOneProjectStackArgs>
  ): CheckSelect<T, Prisma__ProjectStackClient<ProjectStack | null>, Prisma__ProjectStackClient<ProjectStackGetPayload<T> | null>>
  /**
   * Find the first ProjectStack that matches the filter.
   * @param {FindFirstProjectStackArgs} args - Arguments to find a ProjectStack
   * @example
   * // Get one ProjectStack
   * const projectStack = await prisma.projectStack.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstProjectStackArgs>(
    args?: Subset<T, FindFirstProjectStackArgs>
  ): CheckSelect<T, Prisma__ProjectStackClient<ProjectStack | null>, Prisma__ProjectStackClient<ProjectStackGetPayload<T> | null>>
  /**
   * Find zero or more ProjectStacks that matches the filter.
   * @param {FindManyProjectStackArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all ProjectStacks
   * const projectStacks = await prisma.projectStack.findMany()
   * 
   * // Get first 10 ProjectStacks
   * const projectStacks = await prisma.projectStack.findMany({ take: 10 })
   * 
   * // Only select the `projectId`
   * const projectStackWithProjectIdOnly = await prisma.projectStack.findMany({ select: { projectId: true } })
   * 
  **/
  findMany<T extends FindManyProjectStackArgs>(
    args?: Subset<T, FindManyProjectStackArgs>
  ): CheckSelect<T, Promise<Array<ProjectStack>>, Promise<Array<ProjectStackGetPayload<T>>>>
  /**
   * Create a ProjectStack.
   * @param {ProjectStackCreateArgs} args - Arguments to create a ProjectStack.
   * @example
   * // Create one ProjectStack
   * const ProjectStack = await prisma.projectStack.create({
   *   data: {
   *     // ... data to create a ProjectStack
   *   }
   * })
   * 
  **/
  create<T extends ProjectStackCreateArgs>(
    args: Subset<T, ProjectStackCreateArgs>
  ): CheckSelect<T, Prisma__ProjectStackClient<ProjectStack>, Prisma__ProjectStackClient<ProjectStackGetPayload<T>>>
  /**
   * Delete a ProjectStack.
   * @param {ProjectStackDeleteArgs} args - Arguments to delete one ProjectStack.
   * @example
   * // Delete one ProjectStack
   * const ProjectStack = await prisma.projectStack.delete({
   *   where: {
   *     // ... filter to delete one ProjectStack
   *   }
   * })
   * 
  **/
  delete<T extends ProjectStackDeleteArgs>(
    args: Subset<T, ProjectStackDeleteArgs>
  ): CheckSelect<T, Prisma__ProjectStackClient<ProjectStack>, Prisma__ProjectStackClient<ProjectStackGetPayload<T>>>
  /**
   * Update one ProjectStack.
   * @param {ProjectStackUpdateArgs} args - Arguments to update one ProjectStack.
   * @example
   * // Update one ProjectStack
   * const projectStack = await prisma.projectStack.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends ProjectStackUpdateArgs>(
    args: Subset<T, ProjectStackUpdateArgs>
  ): CheckSelect<T, Prisma__ProjectStackClient<ProjectStack>, Prisma__ProjectStackClient<ProjectStackGetPayload<T>>>
  /**
   * Delete zero or more ProjectStacks.
   * @param {ProjectStackDeleteManyArgs} args - Arguments to filter ProjectStacks to delete.
   * @example
   * // Delete a few ProjectStacks
   * const { count } = await prisma.projectStack.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends ProjectStackDeleteManyArgs>(
    args: Subset<T, ProjectStackDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more ProjectStacks.
   * @param {ProjectStackUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many ProjectStacks
   * const projectStack = await prisma.projectStack.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends ProjectStackUpdateManyArgs>(
    args: Subset<T, ProjectStackUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one ProjectStack.
   * @param {ProjectStackUpsertArgs} args - Arguments to update or create a ProjectStack.
   * @example
   * // Update or create a ProjectStack
   * const projectStack = await prisma.projectStack.upsert({
   *   create: {
   *     // ... data to create a ProjectStack
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the ProjectStack we want to update
   *   }
   * })
  **/
  upsert<T extends ProjectStackUpsertArgs>(
    args: Subset<T, ProjectStackUpsertArgs>
  ): CheckSelect<T, Prisma__ProjectStackClient<ProjectStack>, Prisma__ProjectStackClient<ProjectStackGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyProjectStackArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateProjectStackArgs>(args: Subset<T, AggregateProjectStackArgs>): Promise<GetProjectStackAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for ProjectStack.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__ProjectStackClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | null>, Prisma__ProjectClient<ProjectGetPayload<T> | null>>;

  stack<T extends StackArgs = {}>(args?: Subset<T, StackArgs>): CheckSelect<T, Prisma__StackClient<Stack | null>, Prisma__StackClient<StackGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * ProjectStack findOne
 */
export type FindOneProjectStackArgs = {
  /**
   * Select specific fields to fetch from the ProjectStack
  **/
  select?: ProjectStackSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectStackInclude | null
  /**
   * Filter, which ProjectStack to fetch.
  **/
  where: ProjectStackWhereUniqueInput
}


/**
 * ProjectStack findFirst
 */
export type FindFirstProjectStackArgs = {
  /**
   * Select specific fields to fetch from the ProjectStack
  **/
  select?: ProjectStackSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectStackInclude | null
  /**
   * Filter, which ProjectStack to fetch.
  **/
  where?: ProjectStackWhereInput
  orderBy?: Enumerable<ProjectStackOrderByInput> | ProjectStackOrderByInput
  cursor?: ProjectStackWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ProjectStackDistinctFieldEnum>
}


/**
 * ProjectStack findMany
 */
export type FindManyProjectStackArgs = {
  /**
   * Select specific fields to fetch from the ProjectStack
  **/
  select?: ProjectStackSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectStackInclude | null
  /**
   * Filter, which ProjectStacks to fetch.
  **/
  where?: ProjectStackWhereInput
  /**
   * Determine the order of the ProjectStacks to fetch.
  **/
  orderBy?: Enumerable<ProjectStackOrderByInput> | ProjectStackOrderByInput
  /**
   * Sets the position for listing ProjectStacks.
  **/
  cursor?: ProjectStackWhereUniqueInput
  /**
   * The number of ProjectStacks to fetch. If negative number, it will take ProjectStacks before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` ProjectStacks.
  **/
  skip?: number
  distinct?: Enumerable<ProjectStackDistinctFieldEnum>
}


/**
 * ProjectStack create
 */
export type ProjectStackCreateArgs = {
  /**
   * Select specific fields to fetch from the ProjectStack
  **/
  select?: ProjectStackSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectStackInclude | null
  /**
   * The data needed to create a ProjectStack.
  **/
  data: ProjectStackCreateInput
}


/**
 * ProjectStack update
 */
export type ProjectStackUpdateArgs = {
  /**
   * Select specific fields to fetch from the ProjectStack
  **/
  select?: ProjectStackSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectStackInclude | null
  /**
   * The data needed to update a ProjectStack.
  **/
  data: ProjectStackUpdateInput
  /**
   * Choose, which ProjectStack to update.
  **/
  where: ProjectStackWhereUniqueInput
}


/**
 * ProjectStack updateMany
 */
export type ProjectStackUpdateManyArgs = {
  data: ProjectStackUpdateManyMutationInput
  where?: ProjectStackWhereInput
}


/**
 * ProjectStack upsert
 */
export type ProjectStackUpsertArgs = {
  /**
   * Select specific fields to fetch from the ProjectStack
  **/
  select?: ProjectStackSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectStackInclude | null
  /**
   * The filter to search for the ProjectStack to update in case it exists.
  **/
  where: ProjectStackWhereUniqueInput
  /**
   * In case the ProjectStack found by the `where` argument doesn't exist, create a new ProjectStack with this data.
  **/
  create: ProjectStackCreateInput
  /**
   * In case the ProjectStack was found with the provided `where` argument, update it with this data.
  **/
  update: ProjectStackUpdateInput
}


/**
 * ProjectStack delete
 */
export type ProjectStackDeleteArgs = {
  /**
   * Select specific fields to fetch from the ProjectStack
  **/
  select?: ProjectStackSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectStackInclude | null
  /**
   * Filter which ProjectStack to delete.
  **/
  where: ProjectStackWhereUniqueInput
}


/**
 * ProjectStack deleteMany
 */
export type ProjectStackDeleteManyArgs = {
  where?: ProjectStackWhereInput
}


/**
 * ProjectStack without action
 */
export type ProjectStackArgs = {
  /**
   * Select specific fields to fetch from the ProjectStack
  **/
  select?: ProjectStackSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectStackInclude | null
}



/**
 * Model ProjectDevelopment
 */

export type ProjectDevelopment = {
  projectId: number
  developmentId: number
}


export type AggregateProjectDevelopment = {
  count: number
  avg: ProjectDevelopmentAvgAggregateOutputType | null
  sum: ProjectDevelopmentSumAggregateOutputType | null
  min: ProjectDevelopmentMinAggregateOutputType | null
  max: ProjectDevelopmentMaxAggregateOutputType | null
}

export type ProjectDevelopmentAvgAggregateOutputType = {
  projectId: number
  developmentId: number
}

export type ProjectDevelopmentSumAggregateOutputType = {
  projectId: number
  developmentId: number
}

export type ProjectDevelopmentMinAggregateOutputType = {
  projectId: number
  developmentId: number
}

export type ProjectDevelopmentMaxAggregateOutputType = {
  projectId: number
  developmentId: number
}


export type ProjectDevelopmentAvgAggregateInputType = {
  projectId?: true
  developmentId?: true
}

export type ProjectDevelopmentSumAggregateInputType = {
  projectId?: true
  developmentId?: true
}

export type ProjectDevelopmentMinAggregateInputType = {
  projectId?: true
  developmentId?: true
}

export type ProjectDevelopmentMaxAggregateInputType = {
  projectId?: true
  developmentId?: true
}

export type AggregateProjectDevelopmentArgs = {
  where?: ProjectDevelopmentWhereInput
  orderBy?: Enumerable<ProjectDevelopmentOrderByInput> | ProjectDevelopmentOrderByInput
  cursor?: ProjectDevelopmentWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ProjectDevelopmentDistinctFieldEnum>
  count?: true
  avg?: ProjectDevelopmentAvgAggregateInputType
  sum?: ProjectDevelopmentSumAggregateInputType
  min?: ProjectDevelopmentMinAggregateInputType
  max?: ProjectDevelopmentMaxAggregateInputType
}

export type GetProjectDevelopmentAggregateType<T extends AggregateProjectDevelopmentArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetProjectDevelopmentAggregateScalarType<T[P]>
}

export type GetProjectDevelopmentAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof ProjectDevelopmentAvgAggregateOutputType ? ProjectDevelopmentAvgAggregateOutputType[P] : never
}
    
    

export type ProjectDevelopmentSelect = {
  project?: boolean | ProjectArgs
  projectId?: boolean
  development?: boolean | DevelopmentArgs
  developmentId?: boolean
}

export type ProjectDevelopmentInclude = {
  project?: boolean | ProjectArgs
  development?: boolean | DevelopmentArgs
}

export type ProjectDevelopmentGetPayload<
  S extends boolean | null | undefined | ProjectDevelopmentArgs,
  U = keyof S
> = S extends true
  ? ProjectDevelopment
  : S extends undefined
  ? never
  : S extends ProjectDevelopmentArgs | FindManyProjectDevelopmentArgs
  ? 'include' extends U
    ? ProjectDevelopment  & {
      [P in TrueKeys<S['include']>]:
      P extends 'project'
      ? ProjectGetPayload<S['include'][P]> :
      P extends 'development'
      ? DevelopmentGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof ProjectDevelopment ? ProjectDevelopment[P]
: 
      P extends 'project'
      ? ProjectGetPayload<S['select'][P]> :
      P extends 'development'
      ? DevelopmentGetPayload<S['select'][P]> : never
    }
  : ProjectDevelopment
: ProjectDevelopment


export interface ProjectDevelopmentDelegate {
  /**
   * Find zero or one ProjectDevelopment that matches the filter.
   * @param {FindOneProjectDevelopmentArgs} args - Arguments to find a ProjectDevelopment
   * @example
   * // Get one ProjectDevelopment
   * const projectDevelopment = await prisma.projectDevelopment.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneProjectDevelopmentArgs>(
    args: Subset<T, FindOneProjectDevelopmentArgs>
  ): CheckSelect<T, Prisma__ProjectDevelopmentClient<ProjectDevelopment | null>, Prisma__ProjectDevelopmentClient<ProjectDevelopmentGetPayload<T> | null>>
  /**
   * Find the first ProjectDevelopment that matches the filter.
   * @param {FindFirstProjectDevelopmentArgs} args - Arguments to find a ProjectDevelopment
   * @example
   * // Get one ProjectDevelopment
   * const projectDevelopment = await prisma.projectDevelopment.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstProjectDevelopmentArgs>(
    args?: Subset<T, FindFirstProjectDevelopmentArgs>
  ): CheckSelect<T, Prisma__ProjectDevelopmentClient<ProjectDevelopment | null>, Prisma__ProjectDevelopmentClient<ProjectDevelopmentGetPayload<T> | null>>
  /**
   * Find zero or more ProjectDevelopments that matches the filter.
   * @param {FindManyProjectDevelopmentArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all ProjectDevelopments
   * const projectDevelopments = await prisma.projectDevelopment.findMany()
   * 
   * // Get first 10 ProjectDevelopments
   * const projectDevelopments = await prisma.projectDevelopment.findMany({ take: 10 })
   * 
   * // Only select the `projectId`
   * const projectDevelopmentWithProjectIdOnly = await prisma.projectDevelopment.findMany({ select: { projectId: true } })
   * 
  **/
  findMany<T extends FindManyProjectDevelopmentArgs>(
    args?: Subset<T, FindManyProjectDevelopmentArgs>
  ): CheckSelect<T, Promise<Array<ProjectDevelopment>>, Promise<Array<ProjectDevelopmentGetPayload<T>>>>
  /**
   * Create a ProjectDevelopment.
   * @param {ProjectDevelopmentCreateArgs} args - Arguments to create a ProjectDevelopment.
   * @example
   * // Create one ProjectDevelopment
   * const ProjectDevelopment = await prisma.projectDevelopment.create({
   *   data: {
   *     // ... data to create a ProjectDevelopment
   *   }
   * })
   * 
  **/
  create<T extends ProjectDevelopmentCreateArgs>(
    args: Subset<T, ProjectDevelopmentCreateArgs>
  ): CheckSelect<T, Prisma__ProjectDevelopmentClient<ProjectDevelopment>, Prisma__ProjectDevelopmentClient<ProjectDevelopmentGetPayload<T>>>
  /**
   * Delete a ProjectDevelopment.
   * @param {ProjectDevelopmentDeleteArgs} args - Arguments to delete one ProjectDevelopment.
   * @example
   * // Delete one ProjectDevelopment
   * const ProjectDevelopment = await prisma.projectDevelopment.delete({
   *   where: {
   *     // ... filter to delete one ProjectDevelopment
   *   }
   * })
   * 
  **/
  delete<T extends ProjectDevelopmentDeleteArgs>(
    args: Subset<T, ProjectDevelopmentDeleteArgs>
  ): CheckSelect<T, Prisma__ProjectDevelopmentClient<ProjectDevelopment>, Prisma__ProjectDevelopmentClient<ProjectDevelopmentGetPayload<T>>>
  /**
   * Update one ProjectDevelopment.
   * @param {ProjectDevelopmentUpdateArgs} args - Arguments to update one ProjectDevelopment.
   * @example
   * // Update one ProjectDevelopment
   * const projectDevelopment = await prisma.projectDevelopment.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends ProjectDevelopmentUpdateArgs>(
    args: Subset<T, ProjectDevelopmentUpdateArgs>
  ): CheckSelect<T, Prisma__ProjectDevelopmentClient<ProjectDevelopment>, Prisma__ProjectDevelopmentClient<ProjectDevelopmentGetPayload<T>>>
  /**
   * Delete zero or more ProjectDevelopments.
   * @param {ProjectDevelopmentDeleteManyArgs} args - Arguments to filter ProjectDevelopments to delete.
   * @example
   * // Delete a few ProjectDevelopments
   * const { count } = await prisma.projectDevelopment.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends ProjectDevelopmentDeleteManyArgs>(
    args: Subset<T, ProjectDevelopmentDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more ProjectDevelopments.
   * @param {ProjectDevelopmentUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many ProjectDevelopments
   * const projectDevelopment = await prisma.projectDevelopment.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends ProjectDevelopmentUpdateManyArgs>(
    args: Subset<T, ProjectDevelopmentUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one ProjectDevelopment.
   * @param {ProjectDevelopmentUpsertArgs} args - Arguments to update or create a ProjectDevelopment.
   * @example
   * // Update or create a ProjectDevelopment
   * const projectDevelopment = await prisma.projectDevelopment.upsert({
   *   create: {
   *     // ... data to create a ProjectDevelopment
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the ProjectDevelopment we want to update
   *   }
   * })
  **/
  upsert<T extends ProjectDevelopmentUpsertArgs>(
    args: Subset<T, ProjectDevelopmentUpsertArgs>
  ): CheckSelect<T, Prisma__ProjectDevelopmentClient<ProjectDevelopment>, Prisma__ProjectDevelopmentClient<ProjectDevelopmentGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyProjectDevelopmentArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateProjectDevelopmentArgs>(args: Subset<T, AggregateProjectDevelopmentArgs>): Promise<GetProjectDevelopmentAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for ProjectDevelopment.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__ProjectDevelopmentClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | null>, Prisma__ProjectClient<ProjectGetPayload<T> | null>>;

  development<T extends DevelopmentArgs = {}>(args?: Subset<T, DevelopmentArgs>): CheckSelect<T, Prisma__DevelopmentClient<Development | null>, Prisma__DevelopmentClient<DevelopmentGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * ProjectDevelopment findOne
 */
export type FindOneProjectDevelopmentArgs = {
  /**
   * Select specific fields to fetch from the ProjectDevelopment
  **/
  select?: ProjectDevelopmentSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectDevelopmentInclude | null
  /**
   * Filter, which ProjectDevelopment to fetch.
  **/
  where: ProjectDevelopmentWhereUniqueInput
}


/**
 * ProjectDevelopment findFirst
 */
export type FindFirstProjectDevelopmentArgs = {
  /**
   * Select specific fields to fetch from the ProjectDevelopment
  **/
  select?: ProjectDevelopmentSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectDevelopmentInclude | null
  /**
   * Filter, which ProjectDevelopment to fetch.
  **/
  where?: ProjectDevelopmentWhereInput
  orderBy?: Enumerable<ProjectDevelopmentOrderByInput> | ProjectDevelopmentOrderByInput
  cursor?: ProjectDevelopmentWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ProjectDevelopmentDistinctFieldEnum>
}


/**
 * ProjectDevelopment findMany
 */
export type FindManyProjectDevelopmentArgs = {
  /**
   * Select specific fields to fetch from the ProjectDevelopment
  **/
  select?: ProjectDevelopmentSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectDevelopmentInclude | null
  /**
   * Filter, which ProjectDevelopments to fetch.
  **/
  where?: ProjectDevelopmentWhereInput
  /**
   * Determine the order of the ProjectDevelopments to fetch.
  **/
  orderBy?: Enumerable<ProjectDevelopmentOrderByInput> | ProjectDevelopmentOrderByInput
  /**
   * Sets the position for listing ProjectDevelopments.
  **/
  cursor?: ProjectDevelopmentWhereUniqueInput
  /**
   * The number of ProjectDevelopments to fetch. If negative number, it will take ProjectDevelopments before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` ProjectDevelopments.
  **/
  skip?: number
  distinct?: Enumerable<ProjectDevelopmentDistinctFieldEnum>
}


/**
 * ProjectDevelopment create
 */
export type ProjectDevelopmentCreateArgs = {
  /**
   * Select specific fields to fetch from the ProjectDevelopment
  **/
  select?: ProjectDevelopmentSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectDevelopmentInclude | null
  /**
   * The data needed to create a ProjectDevelopment.
  **/
  data: ProjectDevelopmentCreateInput
}


/**
 * ProjectDevelopment update
 */
export type ProjectDevelopmentUpdateArgs = {
  /**
   * Select specific fields to fetch from the ProjectDevelopment
  **/
  select?: ProjectDevelopmentSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectDevelopmentInclude | null
  /**
   * The data needed to update a ProjectDevelopment.
  **/
  data: ProjectDevelopmentUpdateInput
  /**
   * Choose, which ProjectDevelopment to update.
  **/
  where: ProjectDevelopmentWhereUniqueInput
}


/**
 * ProjectDevelopment updateMany
 */
export type ProjectDevelopmentUpdateManyArgs = {
  data: ProjectDevelopmentUpdateManyMutationInput
  where?: ProjectDevelopmentWhereInput
}


/**
 * ProjectDevelopment upsert
 */
export type ProjectDevelopmentUpsertArgs = {
  /**
   * Select specific fields to fetch from the ProjectDevelopment
  **/
  select?: ProjectDevelopmentSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectDevelopmentInclude | null
  /**
   * The filter to search for the ProjectDevelopment to update in case it exists.
  **/
  where: ProjectDevelopmentWhereUniqueInput
  /**
   * In case the ProjectDevelopment found by the `where` argument doesn't exist, create a new ProjectDevelopment with this data.
  **/
  create: ProjectDevelopmentCreateInput
  /**
   * In case the ProjectDevelopment was found with the provided `where` argument, update it with this data.
  **/
  update: ProjectDevelopmentUpdateInput
}


/**
 * ProjectDevelopment delete
 */
export type ProjectDevelopmentDeleteArgs = {
  /**
   * Select specific fields to fetch from the ProjectDevelopment
  **/
  select?: ProjectDevelopmentSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectDevelopmentInclude | null
  /**
   * Filter which ProjectDevelopment to delete.
  **/
  where: ProjectDevelopmentWhereUniqueInput
}


/**
 * ProjectDevelopment deleteMany
 */
export type ProjectDevelopmentDeleteManyArgs = {
  where?: ProjectDevelopmentWhereInput
}


/**
 * ProjectDevelopment without action
 */
export type ProjectDevelopmentArgs = {
  /**
   * Select specific fields to fetch from the ProjectDevelopment
  **/
  select?: ProjectDevelopmentSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ProjectDevelopmentInclude | null
}



/**
 * Deep Input Types
 */


export type ArticleWhereInput = {
  AND?: ArticleWhereInput | Enumerable<ArticleWhereInput>
  OR?: ArticleWhereInput | Enumerable<ArticleWhereInput>
  NOT?: ArticleWhereInput | Enumerable<ArticleWhereInput>
  id?: IntFilter | number
  author?: StringFilter | string
  title?: StringFilter | string
  content?: StringFilter | string
  photo?: StringFilter | string
  categories?: ArticleCategoryListRelationFilter
}

export type ArticleOrderByInput = {
  id?: SortOrder
  author?: SortOrder
  title?: SortOrder
  content?: SortOrder
  photo?: SortOrder
}

export type ArticleWhereUniqueInput = {
  id?: number
}

export type CategoryWhereInput = {
  AND?: CategoryWhereInput | Enumerable<CategoryWhereInput>
  OR?: CategoryWhereInput | Enumerable<CategoryWhereInput>
  NOT?: CategoryWhereInput | Enumerable<CategoryWhereInput>
  id?: IntFilter | number
  label?: StringFilter | string
  articles?: ArticleCategoryListRelationFilter
}

export type CategoryOrderByInput = {
  id?: SortOrder
  label?: SortOrder
}

export type CategoryWhereUniqueInput = {
  id?: number
}

export type ArticleCategoryWhereInput = {
  AND?: ArticleCategoryWhereInput | Enumerable<ArticleCategoryWhereInput>
  OR?: ArticleCategoryWhereInput | Enumerable<ArticleCategoryWhereInput>
  NOT?: ArticleCategoryWhereInput | Enumerable<ArticleCategoryWhereInput>
  article?: ArticleRelationFilter | ArticleWhereInput
  articleId?: IntFilter | number
  category?: CategoryRelationFilter | CategoryWhereInput
  categoryId?: IntFilter | number
}

export type ArticleCategoryOrderByInput = {
  articleId?: SortOrder
  categoryId?: SortOrder
}

export type ArticleCategoryWhereUniqueInput = {
  articleId_categoryId?: ArticleIdCategoryIdCompoundUniqueInput
}

export type ProjectWhereInput = {
  AND?: ProjectWhereInput | Enumerable<ProjectWhereInput>
  OR?: ProjectWhereInput | Enumerable<ProjectWhereInput>
  NOT?: ProjectWhereInput | Enumerable<ProjectWhereInput>
  id?: IntFilter | number
  title?: StringFilter | string
  preview?: StringFilter | string
  description?: StringFilter | string
  githublink?: StringFilter | string
  photo?: StringFilter | string
  ProjectStack?: ProjectStackListRelationFilter
  ProjectDevelopment?: ProjectDevelopmentListRelationFilter
}

export type ProjectOrderByInput = {
  id?: SortOrder
  title?: SortOrder
  preview?: SortOrder
  description?: SortOrder
  githublink?: SortOrder
  photo?: SortOrder
}

export type ProjectWhereUniqueInput = {
  id?: number
}

export type StackWhereInput = {
  AND?: StackWhereInput | Enumerable<StackWhereInput>
  OR?: StackWhereInput | Enumerable<StackWhereInput>
  NOT?: StackWhereInput | Enumerable<StackWhereInput>
  id?: IntFilter | number
  label?: StringFilter | string
  ProjectStack?: ProjectStackListRelationFilter
}

export type StackOrderByInput = {
  id?: SortOrder
  label?: SortOrder
}

export type StackWhereUniqueInput = {
  id?: number
}

export type DevelopmentWhereInput = {
  AND?: DevelopmentWhereInput | Enumerable<DevelopmentWhereInput>
  OR?: DevelopmentWhereInput | Enumerable<DevelopmentWhereInput>
  NOT?: DevelopmentWhereInput | Enumerable<DevelopmentWhereInput>
  id?: IntFilter | number
  label?: StringFilter | string
  ProjectDevelopment?: ProjectDevelopmentListRelationFilter
}

export type DevelopmentOrderByInput = {
  id?: SortOrder
  label?: SortOrder
}

export type DevelopmentWhereUniqueInput = {
  id?: number
}

export type ProjectStackWhereInput = {
  AND?: ProjectStackWhereInput | Enumerable<ProjectStackWhereInput>
  OR?: ProjectStackWhereInput | Enumerable<ProjectStackWhereInput>
  NOT?: ProjectStackWhereInput | Enumerable<ProjectStackWhereInput>
  project?: ProjectRelationFilter | ProjectWhereInput
  projectId?: IntFilter | number
  stack?: StackRelationFilter | StackWhereInput
  stackId?: IntFilter | number
}

export type ProjectStackOrderByInput = {
  projectId?: SortOrder
  stackId?: SortOrder
}

export type ProjectStackWhereUniqueInput = {
  projectId_stackId?: ProjectIdStackIdCompoundUniqueInput
}

export type ProjectDevelopmentWhereInput = {
  AND?: ProjectDevelopmentWhereInput | Enumerable<ProjectDevelopmentWhereInput>
  OR?: ProjectDevelopmentWhereInput | Enumerable<ProjectDevelopmentWhereInput>
  NOT?: ProjectDevelopmentWhereInput | Enumerable<ProjectDevelopmentWhereInput>
  project?: ProjectRelationFilter | ProjectWhereInput
  projectId?: IntFilter | number
  development?: DevelopmentRelationFilter | DevelopmentWhereInput
  developmentId?: IntFilter | number
}

export type ProjectDevelopmentOrderByInput = {
  projectId?: SortOrder
  developmentId?: SortOrder
}

export type ProjectDevelopmentWhereUniqueInput = {
  projectId_developmentId?: ProjectIdDevelopmentIdCompoundUniqueInput
}

export type ArticleCreateInput = {
  author: string
  title: string
  content: string
  photo: string
  categories?: ArticleCategoryCreateManyWithoutArticleInput
}

export type ArticleUpdateInput = {
  author?: string | StringFieldUpdateOperationsInput
  title?: string | StringFieldUpdateOperationsInput
  content?: string | StringFieldUpdateOperationsInput
  photo?: string | StringFieldUpdateOperationsInput
  categories?: ArticleCategoryUpdateManyWithoutArticleInput
}

export type ArticleUpdateManyMutationInput = {
  author?: string | StringFieldUpdateOperationsInput
  title?: string | StringFieldUpdateOperationsInput
  content?: string | StringFieldUpdateOperationsInput
  photo?: string | StringFieldUpdateOperationsInput
}

export type CategoryCreateInput = {
  label: string
  articles?: ArticleCategoryCreateManyWithoutCategoryInput
}

export type CategoryUpdateInput = {
  label?: string | StringFieldUpdateOperationsInput
  articles?: ArticleCategoryUpdateManyWithoutCategoryInput
}

export type CategoryUpdateManyMutationInput = {
  label?: string | StringFieldUpdateOperationsInput
}

export type ArticleCategoryCreateInput = {
  article: ArticleCreateOneWithoutCategoriesInput
  category: CategoryCreateOneWithoutArticlesInput
}

export type ArticleCategoryUpdateInput = {
  article?: ArticleUpdateOneRequiredWithoutCategoriesInput
  category?: CategoryUpdateOneRequiredWithoutArticlesInput
}

export type ArticleCategoryUpdateManyMutationInput = {

}

export type ProjectCreateInput = {
  title: string
  preview: string
  description: string
  githublink: string
  photo: string
  ProjectStack?: ProjectStackCreateManyWithoutProjectInput
  ProjectDevelopment?: ProjectDevelopmentCreateManyWithoutProjectInput
}

export type ProjectUpdateInput = {
  title?: string | StringFieldUpdateOperationsInput
  preview?: string | StringFieldUpdateOperationsInput
  description?: string | StringFieldUpdateOperationsInput
  githublink?: string | StringFieldUpdateOperationsInput
  photo?: string | StringFieldUpdateOperationsInput
  ProjectStack?: ProjectStackUpdateManyWithoutProjectInput
  ProjectDevelopment?: ProjectDevelopmentUpdateManyWithoutProjectInput
}

export type ProjectUpdateManyMutationInput = {
  title?: string | StringFieldUpdateOperationsInput
  preview?: string | StringFieldUpdateOperationsInput
  description?: string | StringFieldUpdateOperationsInput
  githublink?: string | StringFieldUpdateOperationsInput
  photo?: string | StringFieldUpdateOperationsInput
}

export type StackCreateInput = {
  label: string
  ProjectStack?: ProjectStackCreateManyWithoutStackInput
}

export type StackUpdateInput = {
  label?: string | StringFieldUpdateOperationsInput
  ProjectStack?: ProjectStackUpdateManyWithoutStackInput
}

export type StackUpdateManyMutationInput = {
  label?: string | StringFieldUpdateOperationsInput
}

export type DevelopmentCreateInput = {
  label: string
  ProjectDevelopment?: ProjectDevelopmentCreateManyWithoutDevelopmentInput
}

export type DevelopmentUpdateInput = {
  label?: string | StringFieldUpdateOperationsInput
  ProjectDevelopment?: ProjectDevelopmentUpdateManyWithoutDevelopmentInput
}

export type DevelopmentUpdateManyMutationInput = {
  label?: string | StringFieldUpdateOperationsInput
}

export type ProjectStackCreateInput = {
  project: ProjectCreateOneWithoutProjectStackInput
  stack: StackCreateOneWithoutProjectStackInput
}

export type ProjectStackUpdateInput = {
  project?: ProjectUpdateOneRequiredWithoutProjectStackInput
  stack?: StackUpdateOneRequiredWithoutProjectStackInput
}

export type ProjectStackUpdateManyMutationInput = {

}

export type ProjectDevelopmentCreateInput = {
  project: ProjectCreateOneWithoutProjectDevelopmentInput
  development: DevelopmentCreateOneWithoutProjectDevelopmentInput
}

export type ProjectDevelopmentUpdateInput = {
  project?: ProjectUpdateOneRequiredWithoutProjectDevelopmentInput
  development?: DevelopmentUpdateOneRequiredWithoutProjectDevelopmentInput
}

export type ProjectDevelopmentUpdateManyMutationInput = {

}

export type IntFilter = {
  equals?: number
  in?: Enumerable<number>
  notIn?: Enumerable<number>
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: number | NestedIntFilter
}

export type StringFilter = {
  equals?: string
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: string | NestedStringFilter
}

export type ArticleCategoryListRelationFilter = {
  every?: ArticleCategoryWhereInput
  some?: ArticleCategoryWhereInput
  none?: ArticleCategoryWhereInput
}

export type ArticleRelationFilter = {
  is?: ArticleWhereInput
  isNot?: ArticleWhereInput
}

export type CategoryRelationFilter = {
  is?: CategoryWhereInput
  isNot?: CategoryWhereInput
}

export type ArticleIdCategoryIdCompoundUniqueInput = {
  articleId: number
  categoryId: number
}

export type ProjectStackListRelationFilter = {
  every?: ProjectStackWhereInput
  some?: ProjectStackWhereInput
  none?: ProjectStackWhereInput
}

export type ProjectDevelopmentListRelationFilter = {
  every?: ProjectDevelopmentWhereInput
  some?: ProjectDevelopmentWhereInput
  none?: ProjectDevelopmentWhereInput
}

export type ProjectRelationFilter = {
  is?: ProjectWhereInput
  isNot?: ProjectWhereInput
}

export type StackRelationFilter = {
  is?: StackWhereInput
  isNot?: StackWhereInput
}

export type ProjectIdStackIdCompoundUniqueInput = {
  projectId: number
  stackId: number
}

export type DevelopmentRelationFilter = {
  is?: DevelopmentWhereInput
  isNot?: DevelopmentWhereInput
}

export type ProjectIdDevelopmentIdCompoundUniqueInput = {
  projectId: number
  developmentId: number
}

export type ArticleCategoryCreateManyWithoutArticleInput = {
  create?: ArticleCategoryCreateWithoutArticleInput | Enumerable<ArticleCategoryCreateWithoutArticleInput>
  connect?: ArticleCategoryWhereUniqueInput | Enumerable<ArticleCategoryWhereUniqueInput>
}

export type StringFieldUpdateOperationsInput = {
  set?: string
}

export type ArticleCategoryUpdateManyWithoutArticleInput = {
  create?: ArticleCategoryCreateWithoutArticleInput | Enumerable<ArticleCategoryCreateWithoutArticleInput>
  connect?: ArticleCategoryWhereUniqueInput | Enumerable<ArticleCategoryWhereUniqueInput>
  set?: ArticleCategoryWhereUniqueInput | Enumerable<ArticleCategoryWhereUniqueInput>
  disconnect?: ArticleCategoryWhereUniqueInput | Enumerable<ArticleCategoryWhereUniqueInput>
  delete?: ArticleCategoryWhereUniqueInput | Enumerable<ArticleCategoryWhereUniqueInput>
  update?: ArticleCategoryUpdateWithWhereUniqueWithoutArticleInput | Enumerable<ArticleCategoryUpdateWithWhereUniqueWithoutArticleInput>
  updateMany?: ArticleCategoryUpdateManyWithWhereNestedInput | Enumerable<ArticleCategoryUpdateManyWithWhereNestedInput>
  deleteMany?: ArticleCategoryScalarWhereInput | Enumerable<ArticleCategoryScalarWhereInput>
  upsert?: ArticleCategoryUpsertWithWhereUniqueWithoutArticleInput | Enumerable<ArticleCategoryUpsertWithWhereUniqueWithoutArticleInput>
}

export type ArticleCategoryCreateManyWithoutCategoryInput = {
  create?: ArticleCategoryCreateWithoutCategoryInput | Enumerable<ArticleCategoryCreateWithoutCategoryInput>
  connect?: ArticleCategoryWhereUniqueInput | Enumerable<ArticleCategoryWhereUniqueInput>
}

export type ArticleCategoryUpdateManyWithoutCategoryInput = {
  create?: ArticleCategoryCreateWithoutCategoryInput | Enumerable<ArticleCategoryCreateWithoutCategoryInput>
  connect?: ArticleCategoryWhereUniqueInput | Enumerable<ArticleCategoryWhereUniqueInput>
  set?: ArticleCategoryWhereUniqueInput | Enumerable<ArticleCategoryWhereUniqueInput>
  disconnect?: ArticleCategoryWhereUniqueInput | Enumerable<ArticleCategoryWhereUniqueInput>
  delete?: ArticleCategoryWhereUniqueInput | Enumerable<ArticleCategoryWhereUniqueInput>
  update?: ArticleCategoryUpdateWithWhereUniqueWithoutCategoryInput | Enumerable<ArticleCategoryUpdateWithWhereUniqueWithoutCategoryInput>
  updateMany?: ArticleCategoryUpdateManyWithWhereNestedInput | Enumerable<ArticleCategoryUpdateManyWithWhereNestedInput>
  deleteMany?: ArticleCategoryScalarWhereInput | Enumerable<ArticleCategoryScalarWhereInput>
  upsert?: ArticleCategoryUpsertWithWhereUniqueWithoutCategoryInput | Enumerable<ArticleCategoryUpsertWithWhereUniqueWithoutCategoryInput>
}

export type ArticleCreateOneWithoutCategoriesInput = {
  create?: ArticleCreateWithoutCategoriesInput
  connect?: ArticleWhereUniqueInput
}

export type CategoryCreateOneWithoutArticlesInput = {
  create?: CategoryCreateWithoutArticlesInput
  connect?: CategoryWhereUniqueInput
}

export type ArticleUpdateOneRequiredWithoutCategoriesInput = {
  create?: ArticleCreateWithoutCategoriesInput
  connect?: ArticleWhereUniqueInput
  update?: ArticleUpdateWithoutCategoriesDataInput
  upsert?: ArticleUpsertWithoutCategoriesInput
}

export type CategoryUpdateOneRequiredWithoutArticlesInput = {
  create?: CategoryCreateWithoutArticlesInput
  connect?: CategoryWhereUniqueInput
  update?: CategoryUpdateWithoutArticlesDataInput
  upsert?: CategoryUpsertWithoutArticlesInput
}

export type ProjectStackCreateManyWithoutProjectInput = {
  create?: ProjectStackCreateWithoutProjectInput | Enumerable<ProjectStackCreateWithoutProjectInput>
  connect?: ProjectStackWhereUniqueInput | Enumerable<ProjectStackWhereUniqueInput>
}

export type ProjectDevelopmentCreateManyWithoutProjectInput = {
  create?: ProjectDevelopmentCreateWithoutProjectInput | Enumerable<ProjectDevelopmentCreateWithoutProjectInput>
  connect?: ProjectDevelopmentWhereUniqueInput | Enumerable<ProjectDevelopmentWhereUniqueInput>
}

export type ProjectStackUpdateManyWithoutProjectInput = {
  create?: ProjectStackCreateWithoutProjectInput | Enumerable<ProjectStackCreateWithoutProjectInput>
  connect?: ProjectStackWhereUniqueInput | Enumerable<ProjectStackWhereUniqueInput>
  set?: ProjectStackWhereUniqueInput | Enumerable<ProjectStackWhereUniqueInput>
  disconnect?: ProjectStackWhereUniqueInput | Enumerable<ProjectStackWhereUniqueInput>
  delete?: ProjectStackWhereUniqueInput | Enumerable<ProjectStackWhereUniqueInput>
  update?: ProjectStackUpdateWithWhereUniqueWithoutProjectInput | Enumerable<ProjectStackUpdateWithWhereUniqueWithoutProjectInput>
  updateMany?: ProjectStackUpdateManyWithWhereNestedInput | Enumerable<ProjectStackUpdateManyWithWhereNestedInput>
  deleteMany?: ProjectStackScalarWhereInput | Enumerable<ProjectStackScalarWhereInput>
  upsert?: ProjectStackUpsertWithWhereUniqueWithoutProjectInput | Enumerable<ProjectStackUpsertWithWhereUniqueWithoutProjectInput>
}

export type ProjectDevelopmentUpdateManyWithoutProjectInput = {
  create?: ProjectDevelopmentCreateWithoutProjectInput | Enumerable<ProjectDevelopmentCreateWithoutProjectInput>
  connect?: ProjectDevelopmentWhereUniqueInput | Enumerable<ProjectDevelopmentWhereUniqueInput>
  set?: ProjectDevelopmentWhereUniqueInput | Enumerable<ProjectDevelopmentWhereUniqueInput>
  disconnect?: ProjectDevelopmentWhereUniqueInput | Enumerable<ProjectDevelopmentWhereUniqueInput>
  delete?: ProjectDevelopmentWhereUniqueInput | Enumerable<ProjectDevelopmentWhereUniqueInput>
  update?: ProjectDevelopmentUpdateWithWhereUniqueWithoutProjectInput | Enumerable<ProjectDevelopmentUpdateWithWhereUniqueWithoutProjectInput>
  updateMany?: ProjectDevelopmentUpdateManyWithWhereNestedInput | Enumerable<ProjectDevelopmentUpdateManyWithWhereNestedInput>
  deleteMany?: ProjectDevelopmentScalarWhereInput | Enumerable<ProjectDevelopmentScalarWhereInput>
  upsert?: ProjectDevelopmentUpsertWithWhereUniqueWithoutProjectInput | Enumerable<ProjectDevelopmentUpsertWithWhereUniqueWithoutProjectInput>
}

export type ProjectStackCreateManyWithoutStackInput = {
  create?: ProjectStackCreateWithoutStackInput | Enumerable<ProjectStackCreateWithoutStackInput>
  connect?: ProjectStackWhereUniqueInput | Enumerable<ProjectStackWhereUniqueInput>
}

export type ProjectStackUpdateManyWithoutStackInput = {
  create?: ProjectStackCreateWithoutStackInput | Enumerable<ProjectStackCreateWithoutStackInput>
  connect?: ProjectStackWhereUniqueInput | Enumerable<ProjectStackWhereUniqueInput>
  set?: ProjectStackWhereUniqueInput | Enumerable<ProjectStackWhereUniqueInput>
  disconnect?: ProjectStackWhereUniqueInput | Enumerable<ProjectStackWhereUniqueInput>
  delete?: ProjectStackWhereUniqueInput | Enumerable<ProjectStackWhereUniqueInput>
  update?: ProjectStackUpdateWithWhereUniqueWithoutStackInput | Enumerable<ProjectStackUpdateWithWhereUniqueWithoutStackInput>
  updateMany?: ProjectStackUpdateManyWithWhereNestedInput | Enumerable<ProjectStackUpdateManyWithWhereNestedInput>
  deleteMany?: ProjectStackScalarWhereInput | Enumerable<ProjectStackScalarWhereInput>
  upsert?: ProjectStackUpsertWithWhereUniqueWithoutStackInput | Enumerable<ProjectStackUpsertWithWhereUniqueWithoutStackInput>
}

export type ProjectDevelopmentCreateManyWithoutDevelopmentInput = {
  create?: ProjectDevelopmentCreateWithoutDevelopmentInput | Enumerable<ProjectDevelopmentCreateWithoutDevelopmentInput>
  connect?: ProjectDevelopmentWhereUniqueInput | Enumerable<ProjectDevelopmentWhereUniqueInput>
}

export type ProjectDevelopmentUpdateManyWithoutDevelopmentInput = {
  create?: ProjectDevelopmentCreateWithoutDevelopmentInput | Enumerable<ProjectDevelopmentCreateWithoutDevelopmentInput>
  connect?: ProjectDevelopmentWhereUniqueInput | Enumerable<ProjectDevelopmentWhereUniqueInput>
  set?: ProjectDevelopmentWhereUniqueInput | Enumerable<ProjectDevelopmentWhereUniqueInput>
  disconnect?: ProjectDevelopmentWhereUniqueInput | Enumerable<ProjectDevelopmentWhereUniqueInput>
  delete?: ProjectDevelopmentWhereUniqueInput | Enumerable<ProjectDevelopmentWhereUniqueInput>
  update?: ProjectDevelopmentUpdateWithWhereUniqueWithoutDevelopmentInput | Enumerable<ProjectDevelopmentUpdateWithWhereUniqueWithoutDevelopmentInput>
  updateMany?: ProjectDevelopmentUpdateManyWithWhereNestedInput | Enumerable<ProjectDevelopmentUpdateManyWithWhereNestedInput>
  deleteMany?: ProjectDevelopmentScalarWhereInput | Enumerable<ProjectDevelopmentScalarWhereInput>
  upsert?: ProjectDevelopmentUpsertWithWhereUniqueWithoutDevelopmentInput | Enumerable<ProjectDevelopmentUpsertWithWhereUniqueWithoutDevelopmentInput>
}

export type ProjectCreateOneWithoutProjectStackInput = {
  create?: ProjectCreateWithoutProjectStackInput
  connect?: ProjectWhereUniqueInput
}

export type StackCreateOneWithoutProjectStackInput = {
  create?: StackCreateWithoutProjectStackInput
  connect?: StackWhereUniqueInput
}

export type ProjectUpdateOneRequiredWithoutProjectStackInput = {
  create?: ProjectCreateWithoutProjectStackInput
  connect?: ProjectWhereUniqueInput
  update?: ProjectUpdateWithoutProjectStackDataInput
  upsert?: ProjectUpsertWithoutProjectStackInput
}

export type StackUpdateOneRequiredWithoutProjectStackInput = {
  create?: StackCreateWithoutProjectStackInput
  connect?: StackWhereUniqueInput
  update?: StackUpdateWithoutProjectStackDataInput
  upsert?: StackUpsertWithoutProjectStackInput
}

export type ProjectCreateOneWithoutProjectDevelopmentInput = {
  create?: ProjectCreateWithoutProjectDevelopmentInput
  connect?: ProjectWhereUniqueInput
}

export type DevelopmentCreateOneWithoutProjectDevelopmentInput = {
  create?: DevelopmentCreateWithoutProjectDevelopmentInput
  connect?: DevelopmentWhereUniqueInput
}

export type ProjectUpdateOneRequiredWithoutProjectDevelopmentInput = {
  create?: ProjectCreateWithoutProjectDevelopmentInput
  connect?: ProjectWhereUniqueInput
  update?: ProjectUpdateWithoutProjectDevelopmentDataInput
  upsert?: ProjectUpsertWithoutProjectDevelopmentInput
}

export type DevelopmentUpdateOneRequiredWithoutProjectDevelopmentInput = {
  create?: DevelopmentCreateWithoutProjectDevelopmentInput
  connect?: DevelopmentWhereUniqueInput
  update?: DevelopmentUpdateWithoutProjectDevelopmentDataInput
  upsert?: DevelopmentUpsertWithoutProjectDevelopmentInput
}

export type NestedIntFilter = {
  equals?: number
  in?: Enumerable<number>
  notIn?: Enumerable<number>
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: number | NestedIntFilter
}

export type NestedStringFilter = {
  equals?: string
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: string | NestedStringFilter
}

export type ArticleCategoryCreateWithoutArticleInput = {
  category: CategoryCreateOneWithoutArticlesInput
}

export type ArticleCategoryUpdateWithWhereUniqueWithoutArticleInput = {
  where: ArticleCategoryWhereUniqueInput
  data: ArticleCategoryUpdateWithoutArticleDataInput
}

export type ArticleCategoryUpdateManyWithWhereNestedInput = {
  where: ArticleCategoryScalarWhereInput
  data: ArticleCategoryUpdateManyDataInput
}

export type ArticleCategoryScalarWhereInput = {
  AND?: ArticleCategoryScalarWhereInput | Enumerable<ArticleCategoryScalarWhereInput>
  OR?: ArticleCategoryScalarWhereInput | Enumerable<ArticleCategoryScalarWhereInput>
  NOT?: ArticleCategoryScalarWhereInput | Enumerable<ArticleCategoryScalarWhereInput>
  articleId?: IntFilter | number
  categoryId?: IntFilter | number
}

export type ArticleCategoryUpsertWithWhereUniqueWithoutArticleInput = {
  where: ArticleCategoryWhereUniqueInput
  update: ArticleCategoryUpdateWithoutArticleDataInput
  create: ArticleCategoryCreateWithoutArticleInput
}

export type ArticleCategoryCreateWithoutCategoryInput = {
  article: ArticleCreateOneWithoutCategoriesInput
}

export type ArticleCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
  where: ArticleCategoryWhereUniqueInput
  data: ArticleCategoryUpdateWithoutCategoryDataInput
}

export type ArticleCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
  where: ArticleCategoryWhereUniqueInput
  update: ArticleCategoryUpdateWithoutCategoryDataInput
  create: ArticleCategoryCreateWithoutCategoryInput
}

export type ArticleCreateWithoutCategoriesInput = {
  author: string
  title: string
  content: string
  photo: string
}

export type CategoryCreateWithoutArticlesInput = {
  label: string
}

export type ArticleUpdateWithoutCategoriesDataInput = {
  author?: string | StringFieldUpdateOperationsInput
  title?: string | StringFieldUpdateOperationsInput
  content?: string | StringFieldUpdateOperationsInput
  photo?: string | StringFieldUpdateOperationsInput
}

export type ArticleUpsertWithoutCategoriesInput = {
  update: ArticleUpdateWithoutCategoriesDataInput
  create: ArticleCreateWithoutCategoriesInput
}

export type CategoryUpdateWithoutArticlesDataInput = {
  label?: string | StringFieldUpdateOperationsInput
}

export type CategoryUpsertWithoutArticlesInput = {
  update: CategoryUpdateWithoutArticlesDataInput
  create: CategoryCreateWithoutArticlesInput
}

export type ProjectStackCreateWithoutProjectInput = {
  stack: StackCreateOneWithoutProjectStackInput
}

export type ProjectDevelopmentCreateWithoutProjectInput = {
  development: DevelopmentCreateOneWithoutProjectDevelopmentInput
}

export type ProjectStackUpdateWithWhereUniqueWithoutProjectInput = {
  where: ProjectStackWhereUniqueInput
  data: ProjectStackUpdateWithoutProjectDataInput
}

export type ProjectStackUpdateManyWithWhereNestedInput = {
  where: ProjectStackScalarWhereInput
  data: ProjectStackUpdateManyDataInput
}

export type ProjectStackScalarWhereInput = {
  AND?: ProjectStackScalarWhereInput | Enumerable<ProjectStackScalarWhereInput>
  OR?: ProjectStackScalarWhereInput | Enumerable<ProjectStackScalarWhereInput>
  NOT?: ProjectStackScalarWhereInput | Enumerable<ProjectStackScalarWhereInput>
  projectId?: IntFilter | number
  stackId?: IntFilter | number
}

export type ProjectStackUpsertWithWhereUniqueWithoutProjectInput = {
  where: ProjectStackWhereUniqueInput
  update: ProjectStackUpdateWithoutProjectDataInput
  create: ProjectStackCreateWithoutProjectInput
}

export type ProjectDevelopmentUpdateWithWhereUniqueWithoutProjectInput = {
  where: ProjectDevelopmentWhereUniqueInput
  data: ProjectDevelopmentUpdateWithoutProjectDataInput
}

export type ProjectDevelopmentUpdateManyWithWhereNestedInput = {
  where: ProjectDevelopmentScalarWhereInput
  data: ProjectDevelopmentUpdateManyDataInput
}

export type ProjectDevelopmentScalarWhereInput = {
  AND?: ProjectDevelopmentScalarWhereInput | Enumerable<ProjectDevelopmentScalarWhereInput>
  OR?: ProjectDevelopmentScalarWhereInput | Enumerable<ProjectDevelopmentScalarWhereInput>
  NOT?: ProjectDevelopmentScalarWhereInput | Enumerable<ProjectDevelopmentScalarWhereInput>
  projectId?: IntFilter | number
  developmentId?: IntFilter | number
}

export type ProjectDevelopmentUpsertWithWhereUniqueWithoutProjectInput = {
  where: ProjectDevelopmentWhereUniqueInput
  update: ProjectDevelopmentUpdateWithoutProjectDataInput
  create: ProjectDevelopmentCreateWithoutProjectInput
}

export type ProjectStackCreateWithoutStackInput = {
  project: ProjectCreateOneWithoutProjectStackInput
}

export type ProjectStackUpdateWithWhereUniqueWithoutStackInput = {
  where: ProjectStackWhereUniqueInput
  data: ProjectStackUpdateWithoutStackDataInput
}

export type ProjectStackUpsertWithWhereUniqueWithoutStackInput = {
  where: ProjectStackWhereUniqueInput
  update: ProjectStackUpdateWithoutStackDataInput
  create: ProjectStackCreateWithoutStackInput
}

export type ProjectDevelopmentCreateWithoutDevelopmentInput = {
  project: ProjectCreateOneWithoutProjectDevelopmentInput
}

export type ProjectDevelopmentUpdateWithWhereUniqueWithoutDevelopmentInput = {
  where: ProjectDevelopmentWhereUniqueInput
  data: ProjectDevelopmentUpdateWithoutDevelopmentDataInput
}

export type ProjectDevelopmentUpsertWithWhereUniqueWithoutDevelopmentInput = {
  where: ProjectDevelopmentWhereUniqueInput
  update: ProjectDevelopmentUpdateWithoutDevelopmentDataInput
  create: ProjectDevelopmentCreateWithoutDevelopmentInput
}

export type ProjectCreateWithoutProjectStackInput = {
  title: string
  preview: string
  description: string
  githublink: string
  photo: string
  ProjectDevelopment?: ProjectDevelopmentCreateManyWithoutProjectInput
}

export type StackCreateWithoutProjectStackInput = {
  label: string
}

export type ProjectUpdateWithoutProjectStackDataInput = {
  title?: string | StringFieldUpdateOperationsInput
  preview?: string | StringFieldUpdateOperationsInput
  description?: string | StringFieldUpdateOperationsInput
  githublink?: string | StringFieldUpdateOperationsInput
  photo?: string | StringFieldUpdateOperationsInput
  ProjectDevelopment?: ProjectDevelopmentUpdateManyWithoutProjectInput
}

export type ProjectUpsertWithoutProjectStackInput = {
  update: ProjectUpdateWithoutProjectStackDataInput
  create: ProjectCreateWithoutProjectStackInput
}

export type StackUpdateWithoutProjectStackDataInput = {
  label?: string | StringFieldUpdateOperationsInput
}

export type StackUpsertWithoutProjectStackInput = {
  update: StackUpdateWithoutProjectStackDataInput
  create: StackCreateWithoutProjectStackInput
}

export type ProjectCreateWithoutProjectDevelopmentInput = {
  title: string
  preview: string
  description: string
  githublink: string
  photo: string
  ProjectStack?: ProjectStackCreateManyWithoutProjectInput
}

export type DevelopmentCreateWithoutProjectDevelopmentInput = {
  label: string
}

export type ProjectUpdateWithoutProjectDevelopmentDataInput = {
  title?: string | StringFieldUpdateOperationsInput
  preview?: string | StringFieldUpdateOperationsInput
  description?: string | StringFieldUpdateOperationsInput
  githublink?: string | StringFieldUpdateOperationsInput
  photo?: string | StringFieldUpdateOperationsInput
  ProjectStack?: ProjectStackUpdateManyWithoutProjectInput
}

export type ProjectUpsertWithoutProjectDevelopmentInput = {
  update: ProjectUpdateWithoutProjectDevelopmentDataInput
  create: ProjectCreateWithoutProjectDevelopmentInput
}

export type DevelopmentUpdateWithoutProjectDevelopmentDataInput = {
  label?: string | StringFieldUpdateOperationsInput
}

export type DevelopmentUpsertWithoutProjectDevelopmentInput = {
  update: DevelopmentUpdateWithoutProjectDevelopmentDataInput
  create: DevelopmentCreateWithoutProjectDevelopmentInput
}

export type ArticleCategoryUpdateWithoutArticleDataInput = {
  category?: CategoryUpdateOneRequiredWithoutArticlesInput
}

export type ArticleCategoryUpdateManyDataInput = {

}

export type ArticleCategoryUpdateWithoutCategoryDataInput = {
  article?: ArticleUpdateOneRequiredWithoutCategoriesInput
}

export type ProjectStackUpdateWithoutProjectDataInput = {
  stack?: StackUpdateOneRequiredWithoutProjectStackInput
}

export type ProjectStackUpdateManyDataInput = {

}

export type ProjectDevelopmentUpdateWithoutProjectDataInput = {
  development?: DevelopmentUpdateOneRequiredWithoutProjectDevelopmentInput
}

export type ProjectDevelopmentUpdateManyDataInput = {

}

export type ProjectStackUpdateWithoutStackDataInput = {
  project?: ProjectUpdateOneRequiredWithoutProjectStackInput
}

export type ProjectDevelopmentUpdateWithoutDevelopmentDataInput = {
  project?: ProjectUpdateOneRequiredWithoutProjectDevelopmentInput
}

/**
 * Batch Payload for updateMany & deleteMany
 */

export type BatchPayload = {
  count: number
}

/**
 * DMMF
 */
export declare const dmmf: DMMF.Document;
export {};
