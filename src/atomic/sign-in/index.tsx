import React, { useState } from 'react';
import { FormInput, CleverButton } from '../../global-components';

import { StyledSignIn, SignInWrapper, StyledLink } from './styles';
import { Modifiers } from '../../global-styles';

export interface data {
	value: string;
	name?: string;
	secondary_name?: string;
}

interface AddVacanciesActions {
	handleChange: (data: data) => void;
}

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const actionsProp: AddVacanciesActions = {
		handleChange: (data: data) => {
			console.log('DATAAAAA:', data);
		},
	};

	return (
		<>
			<Modifiers />
			<StyledSignIn>
				<SignInWrapper>
					<h4>sign in</h4>
					<FormInput
						value={email}
						type='text'
						placeholder='Enter Email'
						label='Email'
						actions={actionsProp ?? {}}
						name='email'
						accessor='value'
					/>
					<FormInput
						value={password}
						type='text'
						placeholder='Enter Password'
						label='Password'
						actions={actionsProp ?? {}}
						name='password'
						accessor='value'
					/>
					<CleverButton full_width={true} button_type='signin'>
						login
					</CleverButton>
					<StyledLink to='/sign-up' className='margin--top'>
						<small>I don't have an account yet, sign me up</small>
					</StyledLink>
				</SignInWrapper>
			</StyledSignIn>
		</>
	);
};
export default SignIn;
