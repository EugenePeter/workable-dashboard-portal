import { DashboardWrapper } from '../../global-components/dashboard/components/styles';
import { MainContainer, MenuItems } from './components';

import { RightSideBar } from '../../global-components/dashboard/components';

const Record = () => {
	return (
		<DashboardWrapper className='dashboard-wrapper'>
			<MenuItems className='menu-items' />
			<MainContainer className='main-container' />
			<RightSideBar />
		</DashboardWrapper>
	);
};

export default Record;
