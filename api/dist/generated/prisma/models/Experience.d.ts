import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ExperienceModel = runtime.Types.Result.DefaultSelection<Prisma.$ExperiencePayload>;
export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null;
    _avg: ExperienceAvgAggregateOutputType | null;
    _sum: ExperienceSumAggregateOutputType | null;
    _min: ExperienceMinAggregateOutputType | null;
    _max: ExperienceMaxAggregateOutputType | null;
};
export type ExperienceAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type ExperienceSumAggregateOutputType = {
    sortOrder: number | null;
};
export type ExperienceMinAggregateOutputType = {
    id: string | null;
    portfolioId: string | null;
    type: string | null;
    title: string | null;
    role: string | null;
    year: string | null;
    note: string | null;
    sortOrder: number | null;
    createdAt: Date | null;
};
export type ExperienceMaxAggregateOutputType = {
    id: string | null;
    portfolioId: string | null;
    type: string | null;
    title: string | null;
    role: string | null;
    year: string | null;
    note: string | null;
    sortOrder: number | null;
    createdAt: Date | null;
};
export type ExperienceCountAggregateOutputType = {
    id: number;
    portfolioId: number;
    type: number;
    title: number;
    role: number;
    year: number;
    note: number;
    sortOrder: number;
    createdAt: number;
    _all: number;
};
export type ExperienceAvgAggregateInputType = {
    sortOrder?: true;
};
export type ExperienceSumAggregateInputType = {
    sortOrder?: true;
};
export type ExperienceMinAggregateInputType = {
    id?: true;
    portfolioId?: true;
    type?: true;
    title?: true;
    role?: true;
    year?: true;
    note?: true;
    sortOrder?: true;
    createdAt?: true;
};
export type ExperienceMaxAggregateInputType = {
    id?: true;
    portfolioId?: true;
    type?: true;
    title?: true;
    role?: true;
    year?: true;
    note?: true;
    sortOrder?: true;
    createdAt?: true;
};
export type ExperienceCountAggregateInputType = {
    id?: true;
    portfolioId?: true;
    type?: true;
    title?: true;
    role?: true;
    year?: true;
    note?: true;
    sortOrder?: true;
    createdAt?: true;
    _all?: true;
};
export type ExperienceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExperienceWhereInput;
    orderBy?: Prisma.ExperienceOrderByWithRelationInput | Prisma.ExperienceOrderByWithRelationInput[];
    cursor?: Prisma.ExperienceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExperienceCountAggregateInputType;
    _avg?: ExperienceAvgAggregateInputType;
    _sum?: ExperienceSumAggregateInputType;
    _min?: ExperienceMinAggregateInputType;
    _max?: ExperienceMaxAggregateInputType;
};
export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
    [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExperience[P]> : Prisma.GetScalarType<T[P], AggregateExperience[P]>;
};
export type ExperienceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExperienceWhereInput;
    orderBy?: Prisma.ExperienceOrderByWithAggregationInput | Prisma.ExperienceOrderByWithAggregationInput[];
    by: Prisma.ExperienceScalarFieldEnum[] | Prisma.ExperienceScalarFieldEnum;
    having?: Prisma.ExperienceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExperienceCountAggregateInputType | true;
    _avg?: ExperienceAvgAggregateInputType;
    _sum?: ExperienceSumAggregateInputType;
    _min?: ExperienceMinAggregateInputType;
    _max?: ExperienceMaxAggregateInputType;
};
export type ExperienceGroupByOutputType = {
    id: string;
    portfolioId: string;
    type: string;
    title: string;
    role: string | null;
    year: string | null;
    note: string | null;
    sortOrder: number;
    createdAt: Date;
    _count: ExperienceCountAggregateOutputType | null;
    _avg: ExperienceAvgAggregateOutputType | null;
    _sum: ExperienceSumAggregateOutputType | null;
    _min: ExperienceMinAggregateOutputType | null;
    _max: ExperienceMaxAggregateOutputType | null;
};
export type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExperienceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExperienceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExperienceGroupByOutputType[P]>;
}>>;
export type ExperienceWhereInput = {
    AND?: Prisma.ExperienceWhereInput | Prisma.ExperienceWhereInput[];
    OR?: Prisma.ExperienceWhereInput[];
    NOT?: Prisma.ExperienceWhereInput | Prisma.ExperienceWhereInput[];
    id?: Prisma.StringFilter<"Experience"> | string;
    portfolioId?: Prisma.StringFilter<"Experience"> | string;
    type?: Prisma.StringFilter<"Experience"> | string;
    title?: Prisma.StringFilter<"Experience"> | string;
    role?: Prisma.StringNullableFilter<"Experience"> | string | null;
    year?: Prisma.StringNullableFilter<"Experience"> | string | null;
    note?: Prisma.StringNullableFilter<"Experience"> | string | null;
    sortOrder?: Prisma.IntFilter<"Experience"> | number;
    createdAt?: Prisma.DateTimeFilter<"Experience"> | Date | string;
    portfolio?: Prisma.XOR<Prisma.PortfolioScalarRelationFilter, Prisma.PortfolioWhereInput>;
};
export type ExperienceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    portfolioId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    role?: Prisma.SortOrderInput | Prisma.SortOrder;
    year?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    portfolio?: Prisma.PortfolioOrderByWithRelationInput;
};
export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ExperienceWhereInput | Prisma.ExperienceWhereInput[];
    OR?: Prisma.ExperienceWhereInput[];
    NOT?: Prisma.ExperienceWhereInput | Prisma.ExperienceWhereInput[];
    portfolioId?: Prisma.StringFilter<"Experience"> | string;
    type?: Prisma.StringFilter<"Experience"> | string;
    title?: Prisma.StringFilter<"Experience"> | string;
    role?: Prisma.StringNullableFilter<"Experience"> | string | null;
    year?: Prisma.StringNullableFilter<"Experience"> | string | null;
    note?: Prisma.StringNullableFilter<"Experience"> | string | null;
    sortOrder?: Prisma.IntFilter<"Experience"> | number;
    createdAt?: Prisma.DateTimeFilter<"Experience"> | Date | string;
    portfolio?: Prisma.XOR<Prisma.PortfolioScalarRelationFilter, Prisma.PortfolioWhereInput>;
}, "id">;
export type ExperienceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    portfolioId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    role?: Prisma.SortOrderInput | Prisma.SortOrder;
    year?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ExperienceCountOrderByAggregateInput;
    _avg?: Prisma.ExperienceAvgOrderByAggregateInput;
    _max?: Prisma.ExperienceMaxOrderByAggregateInput;
    _min?: Prisma.ExperienceMinOrderByAggregateInput;
    _sum?: Prisma.ExperienceSumOrderByAggregateInput;
};
export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExperienceScalarWhereWithAggregatesInput | Prisma.ExperienceScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExperienceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExperienceScalarWhereWithAggregatesInput | Prisma.ExperienceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Experience"> | string;
    portfolioId?: Prisma.StringWithAggregatesFilter<"Experience"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Experience"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Experience"> | string;
    role?: Prisma.StringNullableWithAggregatesFilter<"Experience"> | string | null;
    year?: Prisma.StringNullableWithAggregatesFilter<"Experience"> | string | null;
    note?: Prisma.StringNullableWithAggregatesFilter<"Experience"> | string | null;
    sortOrder?: Prisma.IntWithAggregatesFilter<"Experience"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Experience"> | Date | string;
};
export type ExperienceCreateInput = {
    id?: string;
    type: string;
    title: string;
    role?: string | null;
    year?: string | null;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    portfolio: Prisma.PortfolioCreateNestedOneWithoutExperiencesInput;
};
export type ExperienceUncheckedCreateInput = {
    id?: string;
    portfolioId: string;
    type: string;
    title: string;
    role?: string | null;
    year?: string | null;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type ExperienceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    year?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    portfolio?: Prisma.PortfolioUpdateOneRequiredWithoutExperiencesNestedInput;
};
export type ExperienceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    portfolioId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    year?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExperienceCreateManyInput = {
    id?: string;
    portfolioId: string;
    type: string;
    title: string;
    role?: string | null;
    year?: string | null;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type ExperienceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    year?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExperienceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    portfolioId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    year?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExperienceListRelationFilter = {
    every?: Prisma.ExperienceWhereInput;
    some?: Prisma.ExperienceWhereInput;
    none?: Prisma.ExperienceWhereInput;
};
export type ExperienceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExperienceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    portfolioId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ExperienceAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ExperienceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    portfolioId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ExperienceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    portfolioId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ExperienceSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ExperienceCreateNestedManyWithoutPortfolioInput = {
    create?: Prisma.XOR<Prisma.ExperienceCreateWithoutPortfolioInput, Prisma.ExperienceUncheckedCreateWithoutPortfolioInput> | Prisma.ExperienceCreateWithoutPortfolioInput[] | Prisma.ExperienceUncheckedCreateWithoutPortfolioInput[];
    connectOrCreate?: Prisma.ExperienceCreateOrConnectWithoutPortfolioInput | Prisma.ExperienceCreateOrConnectWithoutPortfolioInput[];
    createMany?: Prisma.ExperienceCreateManyPortfolioInputEnvelope;
    connect?: Prisma.ExperienceWhereUniqueInput | Prisma.ExperienceWhereUniqueInput[];
};
export type ExperienceUncheckedCreateNestedManyWithoutPortfolioInput = {
    create?: Prisma.XOR<Prisma.ExperienceCreateWithoutPortfolioInput, Prisma.ExperienceUncheckedCreateWithoutPortfolioInput> | Prisma.ExperienceCreateWithoutPortfolioInput[] | Prisma.ExperienceUncheckedCreateWithoutPortfolioInput[];
    connectOrCreate?: Prisma.ExperienceCreateOrConnectWithoutPortfolioInput | Prisma.ExperienceCreateOrConnectWithoutPortfolioInput[];
    createMany?: Prisma.ExperienceCreateManyPortfolioInputEnvelope;
    connect?: Prisma.ExperienceWhereUniqueInput | Prisma.ExperienceWhereUniqueInput[];
};
export type ExperienceUpdateManyWithoutPortfolioNestedInput = {
    create?: Prisma.XOR<Prisma.ExperienceCreateWithoutPortfolioInput, Prisma.ExperienceUncheckedCreateWithoutPortfolioInput> | Prisma.ExperienceCreateWithoutPortfolioInput[] | Prisma.ExperienceUncheckedCreateWithoutPortfolioInput[];
    connectOrCreate?: Prisma.ExperienceCreateOrConnectWithoutPortfolioInput | Prisma.ExperienceCreateOrConnectWithoutPortfolioInput[];
    upsert?: Prisma.ExperienceUpsertWithWhereUniqueWithoutPortfolioInput | Prisma.ExperienceUpsertWithWhereUniqueWithoutPortfolioInput[];
    createMany?: Prisma.ExperienceCreateManyPortfolioInputEnvelope;
    set?: Prisma.ExperienceWhereUniqueInput | Prisma.ExperienceWhereUniqueInput[];
    disconnect?: Prisma.ExperienceWhereUniqueInput | Prisma.ExperienceWhereUniqueInput[];
    delete?: Prisma.ExperienceWhereUniqueInput | Prisma.ExperienceWhereUniqueInput[];
    connect?: Prisma.ExperienceWhereUniqueInput | Prisma.ExperienceWhereUniqueInput[];
    update?: Prisma.ExperienceUpdateWithWhereUniqueWithoutPortfolioInput | Prisma.ExperienceUpdateWithWhereUniqueWithoutPortfolioInput[];
    updateMany?: Prisma.ExperienceUpdateManyWithWhereWithoutPortfolioInput | Prisma.ExperienceUpdateManyWithWhereWithoutPortfolioInput[];
    deleteMany?: Prisma.ExperienceScalarWhereInput | Prisma.ExperienceScalarWhereInput[];
};
export type ExperienceUncheckedUpdateManyWithoutPortfolioNestedInput = {
    create?: Prisma.XOR<Prisma.ExperienceCreateWithoutPortfolioInput, Prisma.ExperienceUncheckedCreateWithoutPortfolioInput> | Prisma.ExperienceCreateWithoutPortfolioInput[] | Prisma.ExperienceUncheckedCreateWithoutPortfolioInput[];
    connectOrCreate?: Prisma.ExperienceCreateOrConnectWithoutPortfolioInput | Prisma.ExperienceCreateOrConnectWithoutPortfolioInput[];
    upsert?: Prisma.ExperienceUpsertWithWhereUniqueWithoutPortfolioInput | Prisma.ExperienceUpsertWithWhereUniqueWithoutPortfolioInput[];
    createMany?: Prisma.ExperienceCreateManyPortfolioInputEnvelope;
    set?: Prisma.ExperienceWhereUniqueInput | Prisma.ExperienceWhereUniqueInput[];
    disconnect?: Prisma.ExperienceWhereUniqueInput | Prisma.ExperienceWhereUniqueInput[];
    delete?: Prisma.ExperienceWhereUniqueInput | Prisma.ExperienceWhereUniqueInput[];
    connect?: Prisma.ExperienceWhereUniqueInput | Prisma.ExperienceWhereUniqueInput[];
    update?: Prisma.ExperienceUpdateWithWhereUniqueWithoutPortfolioInput | Prisma.ExperienceUpdateWithWhereUniqueWithoutPortfolioInput[];
    updateMany?: Prisma.ExperienceUpdateManyWithWhereWithoutPortfolioInput | Prisma.ExperienceUpdateManyWithWhereWithoutPortfolioInput[];
    deleteMany?: Prisma.ExperienceScalarWhereInput | Prisma.ExperienceScalarWhereInput[];
};
export type ExperienceCreateWithoutPortfolioInput = {
    id?: string;
    type: string;
    title: string;
    role?: string | null;
    year?: string | null;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type ExperienceUncheckedCreateWithoutPortfolioInput = {
    id?: string;
    type: string;
    title: string;
    role?: string | null;
    year?: string | null;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type ExperienceCreateOrConnectWithoutPortfolioInput = {
    where: Prisma.ExperienceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExperienceCreateWithoutPortfolioInput, Prisma.ExperienceUncheckedCreateWithoutPortfolioInput>;
};
export type ExperienceCreateManyPortfolioInputEnvelope = {
    data: Prisma.ExperienceCreateManyPortfolioInput | Prisma.ExperienceCreateManyPortfolioInput[];
    skipDuplicates?: boolean;
};
export type ExperienceUpsertWithWhereUniqueWithoutPortfolioInput = {
    where: Prisma.ExperienceWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExperienceUpdateWithoutPortfolioInput, Prisma.ExperienceUncheckedUpdateWithoutPortfolioInput>;
    create: Prisma.XOR<Prisma.ExperienceCreateWithoutPortfolioInput, Prisma.ExperienceUncheckedCreateWithoutPortfolioInput>;
};
export type ExperienceUpdateWithWhereUniqueWithoutPortfolioInput = {
    where: Prisma.ExperienceWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExperienceUpdateWithoutPortfolioInput, Prisma.ExperienceUncheckedUpdateWithoutPortfolioInput>;
};
export type ExperienceUpdateManyWithWhereWithoutPortfolioInput = {
    where: Prisma.ExperienceScalarWhereInput;
    data: Prisma.XOR<Prisma.ExperienceUpdateManyMutationInput, Prisma.ExperienceUncheckedUpdateManyWithoutPortfolioInput>;
};
export type ExperienceScalarWhereInput = {
    AND?: Prisma.ExperienceScalarWhereInput | Prisma.ExperienceScalarWhereInput[];
    OR?: Prisma.ExperienceScalarWhereInput[];
    NOT?: Prisma.ExperienceScalarWhereInput | Prisma.ExperienceScalarWhereInput[];
    id?: Prisma.StringFilter<"Experience"> | string;
    portfolioId?: Prisma.StringFilter<"Experience"> | string;
    type?: Prisma.StringFilter<"Experience"> | string;
    title?: Prisma.StringFilter<"Experience"> | string;
    role?: Prisma.StringNullableFilter<"Experience"> | string | null;
    year?: Prisma.StringNullableFilter<"Experience"> | string | null;
    note?: Prisma.StringNullableFilter<"Experience"> | string | null;
    sortOrder?: Prisma.IntFilter<"Experience"> | number;
    createdAt?: Prisma.DateTimeFilter<"Experience"> | Date | string;
};
export type ExperienceCreateManyPortfolioInput = {
    id?: string;
    type: string;
    title: string;
    role?: string | null;
    year?: string | null;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type ExperienceUpdateWithoutPortfolioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    year?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExperienceUncheckedUpdateWithoutPortfolioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    year?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExperienceUncheckedUpdateManyWithoutPortfolioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    year?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExperienceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    portfolioId?: boolean;
    type?: boolean;
    title?: boolean;
    role?: boolean;
    year?: boolean;
    note?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    portfolio?: boolean | Prisma.PortfolioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["experience"]>;
export type ExperienceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    portfolioId?: boolean;
    type?: boolean;
    title?: boolean;
    role?: boolean;
    year?: boolean;
    note?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    portfolio?: boolean | Prisma.PortfolioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["experience"]>;
export type ExperienceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    portfolioId?: boolean;
    type?: boolean;
    title?: boolean;
    role?: boolean;
    year?: boolean;
    note?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    portfolio?: boolean | Prisma.PortfolioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["experience"]>;
export type ExperienceSelectScalar = {
    id?: boolean;
    portfolioId?: boolean;
    type?: boolean;
    title?: boolean;
    role?: boolean;
    year?: boolean;
    note?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
};
export type ExperienceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "portfolioId" | "type" | "title" | "role" | "year" | "note" | "sortOrder" | "createdAt", ExtArgs["result"]["experience"]>;
export type ExperienceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    portfolio?: boolean | Prisma.PortfolioDefaultArgs<ExtArgs>;
};
export type ExperienceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    portfolio?: boolean | Prisma.PortfolioDefaultArgs<ExtArgs>;
};
export type ExperienceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    portfolio?: boolean | Prisma.PortfolioDefaultArgs<ExtArgs>;
};
export type $ExperiencePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Experience";
    objects: {
        portfolio: Prisma.$PortfolioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        portfolioId: string;
        type: string;
        title: string;
        role: string | null;
        year: string | null;
        note: string | null;
        sortOrder: number;
        createdAt: Date;
    }, ExtArgs["result"]["experience"]>;
    composites: {};
};
export type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExperiencePayload, S>;
export type ExperienceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExperienceCountAggregateInputType | true;
};
export interface ExperienceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Experience'];
        meta: {
            name: 'Experience';
        };
    };
    findUnique<T extends ExperienceFindUniqueArgs>(args: Prisma.SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExperienceClient<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExperienceClient<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExperienceFindFirstArgs>(args?: Prisma.SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExperienceClient<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExperienceClient<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExperienceFindManyArgs>(args?: Prisma.SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExperienceCreateArgs>(args: Prisma.SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma.Prisma__ExperienceClient<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExperienceCreateManyArgs>(args?: Prisma.SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExperienceDeleteArgs>(args: Prisma.SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma.Prisma__ExperienceClient<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExperienceUpdateArgs>(args: Prisma.SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma.Prisma__ExperienceClient<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExperienceUpdateManyArgs>(args: Prisma.SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExperienceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExperienceUpsertArgs>(args: Prisma.SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma.Prisma__ExperienceClient<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExperienceCountArgs>(args?: Prisma.Subset<T, ExperienceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExperienceCountAggregateOutputType> : number>;
    aggregate<T extends ExperienceAggregateArgs>(args: Prisma.Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>;
    groupBy<T extends ExperienceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExperienceGroupByArgs['orderBy'];
    } : {
        orderBy?: ExperienceGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExperienceFieldRefs;
}
export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    portfolio<T extends Prisma.PortfolioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PortfolioDefaultArgs<ExtArgs>>): Prisma.Prisma__PortfolioClient<runtime.Types.Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExperienceFieldRefs {
    readonly id: Prisma.FieldRef<"Experience", 'String'>;
    readonly portfolioId: Prisma.FieldRef<"Experience", 'String'>;
    readonly type: Prisma.FieldRef<"Experience", 'String'>;
    readonly title: Prisma.FieldRef<"Experience", 'String'>;
    readonly role: Prisma.FieldRef<"Experience", 'String'>;
    readonly year: Prisma.FieldRef<"Experience", 'String'>;
    readonly note: Prisma.FieldRef<"Experience", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"Experience", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Experience", 'DateTime'>;
}
export type ExperienceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    include?: Prisma.ExperienceInclude<ExtArgs> | null;
    where: Prisma.ExperienceWhereUniqueInput;
};
export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    include?: Prisma.ExperienceInclude<ExtArgs> | null;
    where: Prisma.ExperienceWhereUniqueInput;
};
export type ExperienceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    include?: Prisma.ExperienceInclude<ExtArgs> | null;
    where?: Prisma.ExperienceWhereInput;
    orderBy?: Prisma.ExperienceOrderByWithRelationInput | Prisma.ExperienceOrderByWithRelationInput[];
    cursor?: Prisma.ExperienceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExperienceScalarFieldEnum | Prisma.ExperienceScalarFieldEnum[];
};
export type ExperienceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    include?: Prisma.ExperienceInclude<ExtArgs> | null;
    where?: Prisma.ExperienceWhereInput;
    orderBy?: Prisma.ExperienceOrderByWithRelationInput | Prisma.ExperienceOrderByWithRelationInput[];
    cursor?: Prisma.ExperienceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExperienceScalarFieldEnum | Prisma.ExperienceScalarFieldEnum[];
};
export type ExperienceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    include?: Prisma.ExperienceInclude<ExtArgs> | null;
    where?: Prisma.ExperienceWhereInput;
    orderBy?: Prisma.ExperienceOrderByWithRelationInput | Prisma.ExperienceOrderByWithRelationInput[];
    cursor?: Prisma.ExperienceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExperienceScalarFieldEnum | Prisma.ExperienceScalarFieldEnum[];
};
export type ExperienceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    include?: Prisma.ExperienceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExperienceCreateInput, Prisma.ExperienceUncheckedCreateInput>;
};
export type ExperienceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExperienceCreateManyInput | Prisma.ExperienceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExperienceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    data: Prisma.ExperienceCreateManyInput | Prisma.ExperienceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExperienceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExperienceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    include?: Prisma.ExperienceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExperienceUpdateInput, Prisma.ExperienceUncheckedUpdateInput>;
    where: Prisma.ExperienceWhereUniqueInput;
};
export type ExperienceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExperienceUpdateManyMutationInput, Prisma.ExperienceUncheckedUpdateManyInput>;
    where?: Prisma.ExperienceWhereInput;
    limit?: number;
};
export type ExperienceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExperienceUpdateManyMutationInput, Prisma.ExperienceUncheckedUpdateManyInput>;
    where?: Prisma.ExperienceWhereInput;
    limit?: number;
    include?: Prisma.ExperienceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExperienceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    include?: Prisma.ExperienceInclude<ExtArgs> | null;
    where: Prisma.ExperienceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExperienceCreateInput, Prisma.ExperienceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExperienceUpdateInput, Prisma.ExperienceUncheckedUpdateInput>;
};
export type ExperienceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    include?: Prisma.ExperienceInclude<ExtArgs> | null;
    where: Prisma.ExperienceWhereUniqueInput;
};
export type ExperienceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExperienceWhereInput;
    limit?: number;
};
export type ExperienceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    include?: Prisma.ExperienceInclude<ExtArgs> | null;
};
