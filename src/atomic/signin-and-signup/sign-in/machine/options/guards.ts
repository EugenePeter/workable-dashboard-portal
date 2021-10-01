import { ConditionPredicate } from 'xstate';
import { IContext } from '../types';
import { IRecord } from '../types';

const guards: IRecord<ConditionPredicate<IContext, any>> = {};

export default guards;
