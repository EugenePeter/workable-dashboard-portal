import { createContext, useState } from 'react';
// import { useInterpret } from '@xstate/react';
// import { spawn } from './machine/record-machine';

export const ProtectedRoutesContext = createContext<any | null>(null);
export interface data {
	value: string;
	name?: string;
	secondary_name?: string;
}
interface AddVacanciesActions {
	handleLogin: (data: data) => void;
	handleLogout: (data: data) => void;
}

const ProtectedRoutesProvider: React.FC<any> = (props) => {
	const { children } = props;
	// const machine = spawn({});
	// const recordService = useInterpret(machine);
	// console.log('RECORD DASHBOARD PROVIDER SERVICE:', recordService);

	const [user, setUser] = useState(false);

	const actionsProp: AddVacanciesActions = {
		handleLogin: (e: any) => {
			e.preventDefault();
			setUser(true);
		},

		handleLogout: (e: any) => {
			e.preventDefault();
			setUser(false);
		},
	};

	const handleLogin = (e: any) => {
		e.preventDefault();
		setUser(true);
	};

	const handleLogout = (e: any) => {
		e.preventDefault();
		setUser(false);
	};

	return (
		<ProtectedRoutesContext.Provider value={{ user, actionsProp }}>
			{children}
		</ProtectedRoutesContext.Provider>
	);
};

export default ProtectedRoutesProvider;
