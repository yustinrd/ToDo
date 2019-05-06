import { schema } from 'normalizr';

const category = new schema.Entity('categories');
const categoriesSchema = [ category ];

export default categoriesSchema;
