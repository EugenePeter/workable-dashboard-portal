import { useContext } from 'react';

import {
	Container,
	Header,
	Body,
	LeftPanel,
	MainPanel,
	Wrapper,
	BottomToolbar,
	VacanciesFormWrapper,
	Button,
	Columns,
} from './styles';

import { AddVacanciesContext } from './AddVacanciesProvider';

import { StepsIndicator } from '../../global-components/index';
import { AddVacanciesForm } from './components';

// import { spawn, useClever } from './machine/add-vacancies-machine';

import { Modifiers } from '../../global-styles';

// interface data {
// 	value: string;
// 	name: string;
// }
// interface CleverFormActions {
// 	handleChange: (data: data) => void;
// }

const AddVacancies = () => {
	const add_vacancies_context = useContext(AddVacanciesContext);
	const { state, actionsProp } = add_vacancies_context;

	const { handleNextStep, handlePrevStep } = actionsProp;

	return (
		<>
			<Modifiers />
			<Container className='add-vacancy_container'>
				{/* <h1>ADD VACANCIES</h1> */}
				<Wrapper className='add-vacancy_wrapper'>
					<Header className='add-vacancy_header'>Add Vacancy</Header>
					<Body className='add-vacancy_body'>
						<LeftPanel className='add-vacancy_left-panel margin--right'>
							<StepsIndicator />
						</LeftPanel>
						<MainPanel className='add-vacancy_main-panel'>
							<VacanciesFormWrapper className='margin--right'>
								<AddVacanciesForm state={state} />
							</VacanciesFormWrapper>
						</MainPanel>
					</Body>
					<BottomToolbar className='add-vacancy_bottom-toolbar'>
						<Columns>
							<Button btn_color='cancel'>Cancel</Button>
						</Columns>
						<Columns>
							{!state.matches('ready.step_one') && (
								<Button
									btn_color='back'
									onClick={handlePrevStep}
									className='margin__spacer'
								>
									Back
								</Button>
							)}
							{!state.matches('ready.submit') &&
								!state.matches('ready.step_six') && (
									<Button
										btn_color='next'
										onClick={handleNextStep}
										className='margin--right'
									>
										Next
									</Button>
								)}
							{state.matches('ready.step_six') && (
								<Button
									btn_color='next'
									// onClick={handleNextStep}
									className='margin--right'
								>
									SUBMIT
								</Button>
							)}
						</Columns>
					</BottomToolbar>
				</Wrapper>
			</Container>
		</>
	);
};

export default AddVacancies;
