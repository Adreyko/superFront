import { CountSchema } from 'entities/Counter/model/types/counterSchema';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
  counter: CountSchema;
  user: UserSchema;
  loginSchema: LoginSchema;
}
