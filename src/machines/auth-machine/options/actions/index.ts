import { ActionFunctionMap } from 'xstate'
import { IContext, IMachineEvents } from '../../types'

import loggers from './loggers'
import spawners from './spawners'
import senders from './senders'
import assigners from './assigners'

const actions: ActionFunctionMap<IContext, IMachineEvents> = {
  ...assigners,
  ...loggers,
  ...senders,
  ...spawners
}

export default actions
