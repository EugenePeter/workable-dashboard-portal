import { useContext, useState, useEffect } from 'react';
import { RecordContext } from '../../applications/record-dashboard/RecordProvider';
import { useSelector, useActor } from '@xstate/react';
import { ActorRef } from 'xstate';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Interpret, spawn } from '../../machines/record-machine';

const TestTabs = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const record_context = useContext(RecordContext);
	const { recordService } = record_context;

	const selector = ({ context }: any) => {
		console.log('IM RUNNING', context);
		const { active_tab, menu_items, tabs } = context;
		return active_tab != null && tabs.length > 0;
	};

	const tab_data = useSelector(recordService, selector);
	// console.log('main panel state:', tab_data);

	const [{ context = {} }] = useActor<ActorRef<any, any>>(recordService);
	const { active_tab, tabs } = context;
	console.log('current_tab:', active_tab?.current?.application_id);

	useEffect(() => {
		if (tabs.length) {
			const currentIndex = tabs?.findIndex(
				(item: any) =>
					item?.application_id === active_tab.application_id ||
					item.application_name === 'home'
			);
			setTabIndex(currentIndex);
		}
		console.log('TABS:', tabs);
	}, [tabs]);
	// // const globa_service = useInterpret(machine, {}, (state) =>
	// // 	console.log('YOHHHO', state)
	// // );
	// // const [state] = useActor(machine);
	console.log('YOHHHO', context);
	console.log('tabIndex', tabIndex);
	console.log('TAAABS:', tabs);
	return (
		<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
			{tab_data && (
				<TabList>
					{tabs.map((tab: any, index: number) => (
						<Tab key={tab.application_id}>{tab.application_name} </Tab>
					))}
				</TabList>
			)}

			<TabPanel>
				<h2>Any content 1</h2>
			</TabPanel>
			<TabPanel>
				<h2>Any content 2</h2>
			</TabPanel>
			<TabPanel>
				<h2>Any content 3</h2>
			</TabPanel>
		</Tabs>
	);
};

export default TestTabs;

