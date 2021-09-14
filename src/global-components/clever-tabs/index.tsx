import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ApplicationMapper } from '../../global-components';
import styled from 'styled-components';

import 'react-tabs/style/react-tabs.css';

export interface Idata {
	tab_data: boolean;
	active_tab: {
		application_id: string;
		application_name: string;
	};
	tabs: any;
}
export interface CleverTabsProps<T> {
	data: T;
	component: any;
}
// const CleverTabs: React.FC<CleverTabsProps<unknown>> = (props) => {
const CleverTabs = <T extends Idata>(props: CleverTabsProps<T>) => {
	const [tabIndex, setTabIndex] = useState(0);
	const {
		data: { tab_data, active_tab, tabs },
		component,
	} = props;

	console.log('COMPONENT:', component);

	useEffect(() => {
		if (tabs.length) {
			const currentIndex = tabs?.findIndex(
				(item: any) => item?.application_id === active_tab.application_id
			);
			setTabIndex(currentIndex);
		}
		console.log('CHECK TABS:', tabs);
	}, [tabs, active_tab.application_id]);

	return (
		<CleverTabsContainer className='clever-tabs_container'>
			<StyledTabsParent
				className='tab-parent'
				selectedIndex={tabIndex}
				onSelect={(index) => setTabIndex(index)}
			>
				{tab_data && (
					<StyledTabList className='tab-list'>
						{tabs.map((tab: any, index: number) => (
							<StyledTab key={tab.application_id ?? (index || index)}>
								{tab.application_name}{' '}
							</StyledTab>
						))}
					</StyledTabList>
				)}

				{tabs.map((tab: any, index: number) => {
					const { component_name } = tab;
					return (
						<StyledTabPanel className='tab-content'>
							{/* <h2>Any content {index + 1}</h2> */}
							{component_name && (
								<ApplicationMapper
									key={tab.application_id ?? (index || index)}
									component_name={component_name}
									component={component}
								/>
							)}
						</StyledTabPanel>
					);
				})}
			</StyledTabsParent>
		</CleverTabsContainer>
	);
};

export default CleverTabs;

export const CleverTabsContainer = styled.div`
	/* background-color: green; */
	height: 100vh;
	padding: 0 1rem 0 1rem;
`;

export const StyledTabPanel = styled(TabPanel)`
	/* height: 100%; */
`;

export const StyledTabList = styled(TabList)`
	display: flex;
	padding: 0;
	background-color: #a8c1cd;
	margin: 0;
	margin-bottom: 0;

	.react-tabs__tab--selected {
		background-color: #fff;
	}
	/* height: 100%; */
`;
export const StyledTab = styled(Tab)`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: none;
	list-style-type: none;
	padding: 0 1rem 0 1rem;
	/* height: 2rem; */
	border-radius: 0;
	border-left: 0.2px solid #fff;
	line-height: 40px;
`;

export const StyledTabsParent = styled(Tabs)`
	/* background-color: blue; */
	height: 100%;
`;
