import React from 'react';
import {
	Container,
	Header,
	Body,
	LeftPanel,
	MainPanel,
	Wrapper,
	BottomToolbar,
} from './styles';
import { StepsIndicator } from '../../global-components/index';
import { AddVacanciesForm } from './components';
// import { FormInput } from '../../../../global-components';

const AddVacancies = () => {
	return (
		<Container className='add-vacancy_container'>
			{/* <h1>ADD VACANCIES</h1> */}
			<Wrapper className='add-vacancy_wrapper'>
				<Header className='add-vacancy_header'>Add Vacancy</Header>
				<Body className='add-vacancy_body'>
					<LeftPanel className='add-vacancy_left-panel'>
						<StepsIndicator />
					</LeftPanel>
					<MainPanel className='add-vacancy_main-panel'>
						MAIN PANEL
						<AddVacanciesForm />
					</MainPanel>
				</Body>
				<BottomToolbar className='add-vacancy_bottom-toolbar'>
					TOOL BAR
				</BottomToolbar>
			</Wrapper>
		</Container>
	);
};

export default AddVacancies;
