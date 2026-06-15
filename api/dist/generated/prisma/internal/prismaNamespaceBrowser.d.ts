import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Portfolio: "Portfolio";
    readonly Photo: "Photo";
    readonly Experience: "Experience";
    readonly GenerationJob: "GenerationJob";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const PortfolioScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly fullName: "fullName";
    readonly gender: "gender";
    readonly dateOfBirth: "dateOfBirth";
    readonly email: "email";
    readonly phone: "phone";
    readonly location: "location";
    readonly profession: "profession";
    readonly description: "description";
    readonly instagramUrl: "instagramUrl";
    readonly tiktokUrl: "tiktokUrl";
    readonly youtubeUrl: "youtubeUrl";
    readonly instagramFollowers: "instagramFollowers";
    readonly tiktokFollowers: "tiktokFollowers";
    readonly youtubeSubscribers: "youtubeSubscribers";
    readonly headline: "headline";
    readonly biography: "biography";
    readonly skills: "skills";
    readonly brandSummary: "brandSummary";
    readonly slug: "slug";
    readonly status: "status";
    readonly showPhone: "showPhone";
    readonly showDob: "showDob";
    readonly publishedAt: "publishedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PortfolioScalarFieldEnum = (typeof PortfolioScalarFieldEnum)[keyof typeof PortfolioScalarFieldEnum];
export declare const PhotoScalarFieldEnum: {
    readonly id: "id";
    readonly portfolioId: "portfolioId";
    readonly cloudinaryPublicId: "cloudinaryPublicId";
    readonly url: "url";
    readonly width: "width";
    readonly height: "height";
    readonly isCover: "isCover";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
};
export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum];
export declare const ExperienceScalarFieldEnum: {
    readonly id: "id";
    readonly portfolioId: "portfolioId";
    readonly type: "type";
    readonly title: "title";
    readonly role: "role";
    readonly year: "year";
    readonly note: "note";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
};
export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum];
export declare const GenerationJobScalarFieldEnum: {
    readonly id: "id";
    readonly portfolioId: "portfolioId";
    readonly section: "section";
    readonly status: "status";
    readonly provider: "provider";
    readonly inputSnapshot: "inputSnapshot";
    readonly output: "output";
    readonly error: "error";
    readonly tokensUsed: "tokensUsed";
    readonly createdAt: "createdAt";
    readonly completedAt: "completedAt";
};
export type GenerationJobScalarFieldEnum = (typeof GenerationJobScalarFieldEnum)[keyof typeof GenerationJobScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
