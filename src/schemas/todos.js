import { schema } from 'normalizr';

const todo = new schema.Entity('todos');
const todosSchema = [ todo ];

export default todosSchema;
