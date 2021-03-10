import {
  Arg,
  Field,
  // InputType,
  Int,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import Collection from "../entity/Collection";
import { Asset } from "../entity/Asset";
import ASSETS from "../mock/assets";
import COLLECTIONS from "../mock/collection";

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

@ObjectType()
class PaginatedCollections {
  @Field(() => [Collection])
  collections: Collection[];

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
    @Arg("status", () => Int, { nullable: true }) status = -1,
    @Arg("categoryId", () => Int, { nullable: true }) categoryId = -1,
    @Arg("collectionId", () => Int, { nullable: true }) collectionId = -1
  ): Promise<PaginatedAssets> {
    const realLimit = Math.min(20, pageSize);
    const currentPageNumber = (page - 1) * pageSize;

    const filteredAssets = ASSETS.filter(
      ({ status: originalStatus }) => status === -1 || status === originalStatus
    )
      .filter(
        ({ categoryId: category }) =>
          categoryId === -1 || categoryId === category
      )
      .filter(
        ({ collectionId: cId }) => collectionId === -1 || collectionId === cId
      );

    return {
      assets: (filteredAssets as any).slice(currentPageNumber, realLimit),
      hasMore: false,
    };
  }

  @Query(() => PaginatedCollections)
  async collections(
    @Arg("pageSize", () => Int, { nullable: true }) pageSize = 10,
    @Arg("page", () => Int, { nullable: true }) page = 1,
    @Arg("id", () => Int, { nullable: true }) id = -1
  ): Promise<PaginatedCollections> {
    const realLimit = Math.min(20, pageSize);
    const currentPageNumber = (page - 1) * pageSize;

    const filteredCollections = COLLECTIONS.filter(
      ({ id: collectionId }) => id === -1 || collectionId === id
    );

    return {
      collections: (filteredCollections as any).slice(
        currentPageNumber,
        realLimit
      ),
      hasMore: false,
    };
  }


  @Query(() => PaginatedCollections)
  async myCollections(
    @Arg("pageSize", () => Int, { nullable: true }) pageSize = 10,
    @Arg("page", () => Int, { nullable: true }) page = 1,
    @Arg("id", () => Int, { nullable: true }) id = -1,
    @Arg("user", () => Int, { nullable: true }) user = '',
  ): Promise<PaginatedCollections> {
    const realLimit = Math.min(20, pageSize);
    const currentPageNumber = (page - 1) * pageSize;

    console.log(user);

    const filteredCollections = COLLECTIONS.filter(
      ({ id: collectionId }) => id === -1 || collectionId === id
    );

    return {
      collections: (filteredCollections as any).slice(
        currentPageNumber,
        realLimit
      ),
      hasMore: false,
    };
  }
}
