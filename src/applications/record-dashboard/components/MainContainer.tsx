import React, { useContext } from 'react';
import { RecordContext } from '../RecordProvider';
import { useSelector, useActor } from '@xstate/react';
import { ActorRef } from 'xstate';
import { CleverTabs } from '../../../global-components';
import { Main } from '../../../atomic/dashboard';
import { Idata } from '../types';
import * as Components from './index';

const MainContainer: React.FC<any> = () => {
	const record_context = useContext(RecordContext);
	const { recordService } = record_context;

	const selector = ({ context }: any) => {
		console.log('IM RUNNING', context);
		const { active_tab, tabs } = context;
		return active_tab != null && tabs.length > 0;
	};

	const tab_data = useSelector(recordService, selector);

	const [{ context = {} }] = useActor<ActorRef<any, any>>(recordService);
	const { active_tab, tabs } = context;
	console.log('current_tab:', active_tab?.current?.application_id);

	const data: Idata = {
		tab_data,
		active_tab,
		tabs,
	};

	return (
		<Main className='main-container'>
			{/* <h1>SEARCH COMPONENT GOES HERE</h1> */}
			<CleverTabs data={data} component={Components} />
		</Main>
	);
};

export default MainContainer;
