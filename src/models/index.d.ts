import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OutfitMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HistoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Item {
  readonly id: string;
  readonly name: string;
  readonly image?: string;
  readonly outfits?: Outfit[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly outfitItemsId?: string;
  constructor(init: ModelInit<Item, ItemMetaData>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item, ItemMetaData>) => MutableModel<Item, ItemMetaData> | void): Item;
}

export declare class Outfit {
  readonly id: string;
  readonly items?: Item[];
  readonly rating?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly itemOutfitsId?: string;
  constructor(init: ModelInit<Outfit, OutfitMetaData>);
  static copyOf(source: Outfit, mutator: (draft: MutableModel<Outfit, OutfitMetaData>) => MutableModel<Outfit, OutfitMetaData> | void): Outfit;
}

export declare class History {
  readonly id: string;
  readonly outfit: Outfit;
  readonly eventName?: string;
  readonly date: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<History, HistoryMetaData>);
  static copyOf(source: History, mutator: (draft: MutableModel<History, HistoryMetaData>) => MutableModel<History, HistoryMetaData> | void): History;
}