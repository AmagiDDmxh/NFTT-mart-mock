import { compose, map, project, prop, uniqBy } from "ramda";
import { Asset } from "../entity/Asset";
import Collection from "../entity/Collection";
import ASSETS from "./assets";

const debug = (log: string, f: any) => (...args: any[]) => {
  console.log(log);
  const result = f(...args);
  console.log(result);
  return result;
};

const mapAssetsToCollections = compose<
  Partial<Asset>[],
  Partial<Asset>[],
  Partial<Asset>[],
  Partial<Collection>[]
>(
  // @ts-ignore
  debug(
    "to collection",
    map(({ collectionId, ...rest }) => ({
      ...rest,
      id: collectionId,
      address: "",
    }))
  ),
  debug(
    "second pipe",
    project(["name", "categoryId", "describe", "collectionId", "picUrl"])
  ),
  debug("first pipeline", uniqBy(prop("collectionId")))
);

// @ts-ignore
const DEFAULT_DATA: Collection[] = mapAssetsToCollections(ASSETS);

export default DEFAULT_DATA;
