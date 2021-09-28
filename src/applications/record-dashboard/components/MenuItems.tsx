import { useContext } from 'react';
import { RecordContext } from '../RecordProvider';
import { useActor } from '@xstate/react';
import { ActorRef } from 'xstate';
import { LeftSideBar } from '../../../global-components';

export const MenuItems: React.FC<any> = () => {
	const { recordService } = useContext(RecordContext);
	const [{ context = {} }, send] = useActor<ActorRef<any, any>>(recordService);
	const {
		application_data: { application_list = [] },
		active_tab
	} = context ?? [];
	return <LeftSideBar menus={application_list} send={send} active_tab={active_tab} />;
};

export default MenuItems;
