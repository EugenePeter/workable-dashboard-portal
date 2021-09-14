import { EventObject, Sender, State } from 'xstate';

export interface ShellProviderValue<
	TShellSlot extends string,
	TContext,
	TEvents extends EventObject,
	TCustomShellActions = Record<string, any>
> {
	state: State<
		TContext,
		TEvents,
		any,
		{
			value: any;
			context: TContext;
		}
	>;
	send: Sender<TEvents>;

}
