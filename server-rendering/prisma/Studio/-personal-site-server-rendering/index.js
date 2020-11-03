
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  debugLib,
  sqltag,
  sql,
  Sql,
  empty,
  join,
  raw,
  Decimal
} = require('./runtime')

const path = require('path')
const debug = debugLib('prisma-client')

/**
 * Prisma Client JS version: 2.10.1
 * Query Engine version: 7d0087eadc7265e12d4b8d8c3516b02c4c965111
 */
exports.prismaVersion = {
  client: "2.10.1",
  engine: "7d0087eadc7265e12d4b8d8c3516b02c4c965111"
}

exports.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = PrismaClientRustPanicError;
exports.PrismaClientInitializationError = PrismaClientInitializationError;
exports.PrismaClientValidationError = PrismaClientValidationError;
exports.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

exports.sql = sqltag
exports.empty = empty
exports.join = join
exports.raw = raw


/**
 * Build tool annotations
 * In order to make `ncc` and `node-file-trace` happy.
**/

path.join(__dirname, 'query-engine-windows');

/**
 * Annotation for `node-file-trace`
**/
path.join(__dirname, 'schema.prisma');

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.PostDistinctFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  excerpt: 'excerpt'
});

exports.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


/**
 * DMMF
 */
const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"Post\",\"isEmbedded\":false,\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"type\":\"Int\",\"hasDefaultValue\":true,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"type\":\"String\",\"hasDefaultValue\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"excerpt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"type\":\"String\",\"hasDefaultValue\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"isGenerated\":false,\"idFields\":[],\"uniqueFields\":[],\"uniqueIndexes\":[]}]},\"schema\":{\"rootQueryType\":\"Query\",\"rootMutationType\":\"Mutation\",\"inputTypes\":[{\"name\":\"PostWhereInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"AND\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostWhereInput\",\"kind\":\"object\",\"isList\":false},{\"type\":\"PostWhereInput\",\"kind\":\"object\",\"isList\":true}]},{\"name\":\"OR\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostWhereInput\",\"kind\":\"object\",\"isList\":false},{\"type\":\"PostWhereInput\",\"kind\":\"object\",\"isList\":true}]},{\"name\":\"NOT\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostWhereInput\",\"kind\":\"object\",\"isList\":false},{\"type\":\"PostWhereInput\",\"kind\":\"object\",\"isList\":true}]},{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"IntFilter\",\"kind\":\"object\",\"isList\":false},{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"title\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"StringFilter\",\"kind\":\"object\",\"isList\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"excerpt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"StringFilter\",\"kind\":\"object\",\"isList\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]}]},{\"name\":\"PostOrderByInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":0},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"SortOrder\",\"kind\":\"enum\",\"isList\":false}]},{\"name\":\"title\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"SortOrder\",\"kind\":\"enum\",\"isList\":false}]},{\"name\":\"excerpt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"SortOrder\",\"kind\":\"enum\",\"isList\":false}]}]},{\"name\":\"PostWhereUniqueInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":1},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]}]},{\"name\":\"PostCreateInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"title\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"excerpt\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]}]},{\"name\":\"PostUpdateInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"title\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"kind\":\"object\",\"isList\":false}]},{\"name\":\"excerpt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"kind\":\"object\",\"isList\":false}]}]},{\"name\":\"PostUpdateManyMutationInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"title\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"kind\":\"object\",\"isList\":false}]},{\"name\":\"excerpt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"kind\":\"object\",\"isList\":false}]}]},{\"name\":\"IntFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false},{\"type\":\"NestedIntFilter\",\"kind\":\"object\",\"isList\":false}]}]},{\"name\":\"StringFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"contains\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"startsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"endsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false},{\"type\":\"NestedStringFilter\",\"kind\":\"object\",\"isList\":false}]}]},{\"name\":\"StringFieldUpdateOperationsInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":1},\"fields\":[{\"name\":\"set\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]}]},{\"name\":\"NestedIntFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false},{\"type\":\"NestedIntFilter\",\"kind\":\"object\",\"isList\":false}]}]},{\"name\":\"NestedStringFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"contains\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"startsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"endsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false},{\"type\":\"NestedStringFilter\",\"kind\":\"object\",\"isList\":false}]}]}],\"outputTypes\":[{\"name\":\"Query\",\"fields\":[{\"name\":\"findFirstPost\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostWhereInput\",\"kind\":\"object\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostOrderByInput\",\"kind\":\"object\",\"isList\":true},{\"type\":\"PostOrderByInput\",\"kind\":\"object\",\"isList\":false}]},{\"name\":\"cursor\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostWhereUniqueInput\",\"kind\":\"object\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"distinct\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostDistinctFieldEnum\",\"kind\":\"enum\",\"isList\":true}]}],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"Post\",\"kind\":\"object\",\"isList\":false}},{\"name\":\"findManyPost\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostWhereInput\",\"kind\":\"object\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostOrderByInput\",\"kind\":\"object\",\"isList\":true},{\"type\":\"PostOrderByInput\",\"kind\":\"object\",\"isList\":false}]},{\"name\":\"cursor\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostWhereUniqueInput\",\"kind\":\"object\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"distinct\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostDistinctFieldEnum\",\"kind\":\"enum\",\"isList\":true}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Post\",\"kind\":\"object\",\"isList\":true}},{\"name\":\"aggregatePost\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostWhereInput\",\"kind\":\"object\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostOrderByInput\",\"kind\":\"object\",\"isList\":true},{\"type\":\"PostOrderByInput\",\"kind\":\"object\",\"isList\":false}]},{\"name\":\"cursor\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostWhereUniqueInput\",\"kind\":\"object\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"distinct\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostDistinctFieldEnum\",\"kind\":\"enum\",\"isList\":true}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"AggregatePost\",\"kind\":\"object\",\"isList\":false}},{\"name\":\"findOnePost\",\"args\":[{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostWhereUniqueInput\",\"kind\":\"object\",\"isList\":false}]}],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"Post\",\"kind\":\"object\",\"isList\":false}}]},{\"name\":\"Mutation\",\"fields\":[{\"name\":\"createOnePost\",\"args\":[{\"name\":\"data\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostCreateInput\",\"kind\":\"object\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Post\",\"kind\":\"object\",\"isList\":false}},{\"name\":\"deleteOnePost\",\"args\":[{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostWhereUniqueInput\",\"kind\":\"object\",\"isList\":false}]}],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"Post\",\"kind\":\"object\",\"isList\":false}},{\"name\":\"updateOnePost\",\"args\":[{\"name\":\"data\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostUpdateInput\",\"kind\":\"object\",\"isList\":false}]},{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostWhereUniqueInput\",\"kind\":\"object\",\"isList\":false}]}],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"Post\",\"kind\":\"object\",\"isList\":false}},{\"name\":\"upsertOnePost\",\"args\":[{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostWhereUniqueInput\",\"kind\":\"object\",\"isList\":false}]},{\"name\":\"create\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostCreateInput\",\"kind\":\"object\",\"isList\":false}]},{\"name\":\"update\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostUpdateInput\",\"kind\":\"object\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Post\",\"kind\":\"object\",\"isList\":false}},{\"name\":\"updateManyPost\",\"args\":[{\"name\":\"data\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostUpdateManyMutationInput\",\"kind\":\"object\",\"isList\":false}]},{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostWhereInput\",\"kind\":\"object\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"BatchPayload\",\"kind\":\"object\",\"isList\":false}},{\"name\":\"deleteManyPost\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"PostWhereInput\",\"kind\":\"object\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"BatchPayload\",\"kind\":\"object\",\"isList\":false}},{\"name\":\"executeRaw\",\"args\":[{\"name\":\"query\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"parameters\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Json\",\"kind\":\"scalar\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Json\",\"kind\":\"scalar\",\"isList\":false}},{\"name\":\"queryRaw\",\"args\":[{\"name\":\"query\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}]},{\"name\":\"parameters\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Json\",\"kind\":\"scalar\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Json\",\"kind\":\"scalar\",\"isList\":false}}]},{\"name\":\"Post\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}},{\"name\":\"title\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}},{\"name\":\"excerpt\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"String\",\"kind\":\"scalar\",\"isList\":false}}]},{\"name\":\"AggregatePost\",\"fields\":[{\"name\":\"count\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}},{\"name\":\"avg\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"PostAvgAggregateOutputType\",\"kind\":\"object\",\"isList\":false}},{\"name\":\"sum\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"PostSumAggregateOutputType\",\"kind\":\"object\",\"isList\":false}},{\"name\":\"min\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"PostMinAggregateOutputType\",\"kind\":\"object\",\"isList\":false}},{\"name\":\"max\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"PostMaxAggregateOutputType\",\"kind\":\"object\",\"isList\":false}}]},{\"name\":\"BatchPayload\",\"fields\":[{\"name\":\"count\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}}]},{\"name\":\"PostAvgAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Float\",\"kind\":\"scalar\",\"isList\":false}}]},{\"name\":\"PostSumAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}}]},{\"name\":\"PostMinAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}}]},{\"name\":\"PostMaxAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isList\":false}}]}],\"enums\":[{\"name\":\"PostDistinctFieldEnum\",\"values\":[\"id\",\"title\",\"excerpt\"]},{\"name\":\"SortOrder\",\"values\":[\"asc\",\"desc\"]}]},\"mappings\":{\"modelOperations\":[{\"model\":\"Post\",\"plural\":\"posts\",\"findOne\":\"findOnePost\",\"findFirst\":\"findFirstPost\",\"findMany\":\"findManyPost\",\"create\":\"createOnePost\",\"delete\":\"deleteOnePost\",\"update\":\"updateOnePost\",\"deleteMany\":\"deleteManyPost\",\"updateMany\":\"updateManyPost\",\"upsert\":\"upsertOnePost\",\"aggregate\":\"aggregatePost\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"

// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(dmmfString)
exports.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */

const config = {
  "generator": {
    "binaryTargets": [],
    "previewFeatures": [
      "transactionApi"
    ],
    "config": {
      "copyRuntime": "true"
    },
    "name": "photon",
    "provider": "prisma-client-js",
    "output": "D:\\personal-site\\server-rendering\\Prisma\\Studio\\-personal-site-server-rendering",
    "isCustomOutput": true
  },
  "sqliteDatasourceOverrides": [
    {
      "name": "db",
      "url": "..\\..\\blog.db"
    }
  ],
  "relativePath": "..\\..",
  "clientVersion": "2.10.1",
  "engineVersion": "7d0087eadc7265e12d4b8d8c3516b02c4c965111"
}
config.document = dmmf
config.dirname = __dirname

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient