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

export interface IActiveTab {
	application_id:string
	application_name: string
}

export interface Idata {
	tab_data: boolean;
	active_tab: IActiveTab
	tabs: any;
}
export interface CleverTabsProps {
	data: Idata;
}
