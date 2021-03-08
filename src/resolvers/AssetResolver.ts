import {
  Arg,
  Field,
  // InputType,
  Int,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { Asset } from "../entity/Asset";
import ASSETS from "../mock/assets";

// @InputType()
// class AssetInput {
//   @Field()
//   collectionId: number;
//   @Field()
//   status: number;
//   @Field()
//   categoryId: number;
// }

@ObjectType()
class PaginatedAssets {
  @Field(() => [Asset])
  assets: Asset[];
  @Field()
  hasMore: boolean;
}

// TODO
@Resolver(Asset)
export class AssetResolver {
  @Query(() => PaginatedAssets)
  async assets(
    @Arg("pageSize", () => Int, { nullable: true }) pageSize = 10,
    @Arg("page", () => Int, { nullable: true }) page = 1,
    @Arg("status", () => Int, { nullable: true }) status = 0,
    @Arg("categoryId", () => Int, { nullable: true }) categoryId = 0,
    @Arg("collectionId", () => Int, { nullable: true }) collectionId = 0
  ): Promise<PaginatedAssets> {
    const realLimit = Math.min(20, pageSize);
    const currentPageNumber = (page - 1) * pageSize;

    const filteredAssets = ASSETS.filter(({ Status }) =>
      status === 0 ? true : Status === status
    )
      .filter(({ categoryId: category }) =>
        categoryId === 0 ? true : categoryId === category
      )
      .filter(({ collectionId: cId }) =>
        collectionId === 0 ? true : collectionId === cId
      );

    return {
      assets: (filteredAssets as any).slice(currentPageNumber, realLimit),
      hasMore: false,
    };
  }
}
