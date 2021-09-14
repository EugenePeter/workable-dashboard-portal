import { ActionFunctionMap } from 'xstate'
import { IContext, IMachineEvents } from '../../types'

const actions: ActionFunctionMap<IContext, IMachineEvents> = {
  logEvent: (_, e) => console.log('Event received: ', e)
}

export default actions
