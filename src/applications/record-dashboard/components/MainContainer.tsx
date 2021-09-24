import React, { useContext } from 'react';
import { RecordContext } from '../RecordProvider';
import { useSelector, useActor } from '@xstate/react';
import { ActorRef } from 'xstate';
import { CleverTabs } from '../../../global-components';
import { Main } from '../../../atomic/dashboard';
import { Idata } from '../types';
import * as Components from '../../../atomic';

import styled from 'styled-components';

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
			<Container>
				<CleverSearch />
				<CleverTabs data={data} component={Components} />
				<Footer>
					Architected, designed and developed by Eugene Peter Maestrado
				</Footer>
			</Container>
		</Main>
	);
};

export default MainContainer;

export const CleverSearch = styled.input`
	line-height: 40px;
	width: 100%;
	margin: 1rem 0 4rem 0;
`;
export const Container = styled.div`
	max-height: inherit;
	position: relative;
	display: flex;
	flex-direction: column;
	/* background-color: red; */
	height: 100vh;
	/* overflow: scroll; */
`;

export const Footer = styled.div`
	line-height: 40px;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	margin: 1rem 0 1rem 0;
	position: absolute;
	width: 100%;
	bottom: 0;
	/* align-self: flex-end!important; */
	/* overflow: scroll; */
`;
