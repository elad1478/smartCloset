// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Item, Outfit, History } = initSchema(schema);

export {
  Item,
  Outfit,
  History
};