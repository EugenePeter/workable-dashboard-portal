/* eslint-disable no-use-before-define */
import { AnyStateNodeDefinition, StateNodeDefinition } from 'xstate'
import { IContext, IMachineEvents } from '..'

export interface IStateSchema {
  states: {
    loading: StateNodeDefinition<IContext, ILoadingStateSchema, IMachineEvents>
    ready: StateNodeDefinition<IContext, IReadyStateSchema, IMachineEvents>
    error: StateNodeDefinition<IContext, AnyStateNodeDefinition, IMachineEvents>
    done: StateNodeDefinition<IContext, AnyStateNodeDefinition, IMachineEvents>
  }
}

interface ILoadingStateSchema {
  states: {
    get_application_config: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
    get_application_data: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
    error: StateNodeDefinition<IContext, AnyStateNodeDefinition, IMachineEvents>
  }
}

interface IReadyStateSchema {
  states: {
    fetching: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
    loaded: StateNodeDefinition<IContext, ILoadedStateSchema, IMachineEvents>
    error: StateNodeDefinition<IContext, AnyStateNodeDefinition, IMachineEvents>
  }
}

interface ILoadedStateSchema {
  states: {
    view_mode: StateNodeDefinition<
      IContext,
      IViewModeStateSchema,
      IMachineEvents
    >
    edit_mode: StateNodeDefinition<
      IContext,
      IEditModeStateSchema,
      IMachineEvents
    >
    list_mode: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
  }
}

interface IViewModeStateSchema {
  states: {
    idle: StateNodeDefinition<IContext, AnyStateNodeDefinition, IMachineEvents>
    archive_confirmation: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
    archiving: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
    archived: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
    timeout: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
    error: StateNodeDefinition<IContext, AnyStateNodeDefinition, IMachineEvents>
  }
}

interface IEditModeStateSchema {
  states: {
    no_pending_change: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
    has_pending_change: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
    discard_changes_confirmation: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
    archive_confirmation: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
    archiving: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
    archived: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
    save: StateNodeDefinition<IContext, AnyStateNodeDefinition, IMachineEvents>
    save_and_close: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
    updated: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
    timeout: StateNodeDefinition<
      IContext,
      AnyStateNodeDefinition,
      IMachineEvents
    >
    error: StateNodeDefinition<IContext, AnyStateNodeDefinition, IMachineEvents>
  }
}
