/* eslint-disable indent */
import { ServiceConfig } from 'xstate'
import { IContext, IMachineEvents } from '../../types'
import { IRecord } from '../../types'

const services: IRecord<ServiceConfig<IContext, IMachineEvents>> = {}

export default services
