import { CountSchema } from 'entities/Counter/model/types/counterSchema';
import { UserSchema } from 'entities/User';

export interface StateSchema {
  counter: CountSchema;
  user: UserSchema;
}
