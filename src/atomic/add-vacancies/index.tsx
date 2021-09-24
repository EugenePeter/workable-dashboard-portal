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
import { StepsIndicator } from '../../global-components/index';
import { AddVacanciesForm } from './components';

import { spawn, useClever } from './machine/add-vacancies-machine';

import { Modifiers } from '../../global-styles';

const AddVacancies = () => {
	const machine = spawn({});
	const [context, state_value, state, send] = useClever(machine);

	console.log("HALAAAA", context, context, state_value, send)

	const handleNextStep = () => {
		send({
			type: 'NEXT',
		});
	};
	const handlePrevStep = () => {
		send({
			type: 'BACK',
		});
	};
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
								<AddVacanciesForm  state={state}/>
							</VacanciesFormWrapper>
						</MainPanel>
					</Body>
					<BottomToolbar className='add-vacancy_bottom-toolbar'>
						<Columns>
							<Button>Cancel</Button>
						</Columns>
						<Columns>
							<Button onClick={handlePrevStep} className='margin__spacer'>
								Back
							</Button>
							<Button onClick={handleNextStep} className='margin--right'>
								Next
							</Button>
						</Columns>
					</BottomToolbar>
				</Wrapper>
			</Container>
		</>
	);
};

export default AddVacancies;
