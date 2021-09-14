import { createContext } from 'react';
import { useInterpret } from '@xstate/react';
import { spawn } from './machine/record-machine';

export const RecordContext = createContext<any | null>(null);

const RecordProvider: React.FC<any> = (props) => {
	const { children } = props;
	const machine = spawn({});
	const recordService = useInterpret(machine);
	console.log('RECORD DASHBOARD PROVIDER SERVICE:', recordService);

	return (
		<RecordContext.Provider value={{ recordService }}>
			{children}
		</RecordContext.Provider>
	);
};

export default RecordProvider;
