// import { useContext } from 'react';
// import { LeftSideBarWrapper } from '../styles';
// import { useMachine, useActor, useSelector } from '@xstate/react';
// import { ActorRef } from 'xstate';
// import { spawn } from '../../../../machines/record-machine';
// import { RecordContext } from '../../RecordProvider';
// const LeftSideBar = () => {
// 	const machine = spawn({});

// 	// const [state, send] = useMachine(machine);

// 	// const { menu_items = [] } = state?.context ?? [];
// 	// console.log('menu_items:', menu_items);
// 	// console.log('state:', state.context);

// 	const record_context = useContext(RecordContext);
// 	const { recordService } = record_context;
// 	const [{ context = {} }, send] = useActor<ActorRef<any, any>>(recordService);
// 	const {
// 		menu_items = [],
// 		application_data: { application_list = [] },
// 	} = context ?? [];

// 	const handleMenuItemClicked = (menu_item: any) => {
// 		send({
// 			type: 'OPEN_TAB',
// 			payload: menu_item,
// 		});
// 	};

// 	console.log('APPLICATION LIST:', application_list);

// 	return (
// 		<LeftSideBarWrapper>
// 			<h1>LEFT SIDE BAR</h1>
// 			{application_list &&
// 				application_list.map((item: any, index: any) => (
// 					<div key={index} onClick={() => handleMenuItemClicked(item)}>
// 						{item.application_name}
// 					</div>
// 				))}
// 		</LeftSideBarWrapper>
// 	);
// };

// export default LeftSideBar;

import React from 'react';
import { LeftSideBarWrapper } from '../styles';
// import { useMachine, useActor, useSelector } from '@xstate/react';
// import { ActorRef } from 'xstate';
// import { spawn } from '../../../../machines/record-machine';
// import { RecordContext } from '../../RecordProvider';
import { Sender } from 'xstate';
import styled from 'styled-components';

export interface LeftSideBarProps {
	menus: [];
	send: Sender<any>;
	active_tab: any;
}

const LeftSideBar: React.FC<LeftSideBarProps> = (props) => {
	const { menus, send, active_tab } = props;
	const { application_id } = active_tab;

	const handleMenuItemClicked = (menu_item: any) => {
		send({
			type: 'OPEN_TAB',
			payload: menu_item,
		});
	};

	return (
		<LeftSideBarWrapper className='left-side-bar-wrapper'>
			<h1>LEFT SIDE BAR</h1>
			{menus &&
				menus.map((item: any, index: any) => (
					<StyledMenu
						key={item.application_id}
						onClick={() => handleMenuItemClicked(item)}
						application_id={application_id}
						className='left-menus'
					>
						{item.application_name}
					</StyledMenu>
				))}
		</LeftSideBarWrapper>
	);
};

export default LeftSideBar;

export interface StyledMenu {
	application_id: string;
}
export const StyledMenu = styled.div<StyledMenu>`
	line-height: 2rem;
	color: ${({ key, application_id }) =>
		key === application_id ? 'blue' : 'gray'};
	margin-left: 1.2rem;
`;
