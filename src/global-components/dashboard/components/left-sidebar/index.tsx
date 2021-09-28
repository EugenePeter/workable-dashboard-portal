
import React from 'react';
import { LeftSideBarWrapper } from '../styles';
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
