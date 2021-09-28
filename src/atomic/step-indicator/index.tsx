import styled from 'styled-components';

export interface StepsIndicatorProps {}

const StepsIndicator: React.FC<StepsIndicatorProps> = (props) => {
	const {} = props;

	return (
		<ProgressBarContainer>
			<ProgressWrapper>
				<StepTitle>
					<h4>Personal Details</h4>
					<h4>Education</h4>
					<h4>Experties</h4>
					<h4>Skills</h4>
					<h4>Salary</h4>
					<h4>Personal Details</h4>
				</StepTitle>
				<ProgressBarTrack>
					<StepIndicator>1</StepIndicator>
					<StepIndicator>2</StepIndicator>
					<StepIndicator>3</StepIndicator>
					<StepIndicator>4</StepIndicator>
					<StepIndicator>5</StepIndicator>
					<StepIndicator>6</StepIndicator>
				</ProgressBarTrack>
			</ProgressWrapper>
		</ProgressBarContainer>
	);
};

export default StepsIndicator;

export const ProgressWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	/* background-color: #723e3e; */
	height: 90%;
	width: 100%;
`;

export const StepTitle = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	/* background-color: #b90066; */
	height: 100%;
	min-width: 70%;
	h4 {
		font-weight: 400;
	}
`;

export const StepWrapper = styled.div`
	display: flex;
	justify-content: center;
	background-color: greenyellow;
`;

export const ProgressBarTrack = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	justify-content: space-around;
	background-color: #bebebe;
	height: 100%;
	width: 0.1rem;
	border-radius: 25px;
`;

export const ProgressBarContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	/* background-color: #723e3e; */
	height: 100%;
	width: 100%;
`;

export const StepContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: green;
	width: 100%auto;
`;

export const StepIndicator = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	height: 1.5rem;
	width: 1.5rem;
	border-radius: 50%;
	border: 2px solid #5cd176;
	color: #5cd176;
`;
