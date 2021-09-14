// import { createContext } from 'react';
// import { useInterpret, useMachine } from '@xstate/react';
// import { spawn } from '../../machines/record-machine';
// import { Interpreter } from 'xstate';
// import { IContext } from '../../machines/record-machine/types';

// export const RecordContext = createContext<any | null>(null);

// const RecordProvider: React.FC<any> = (props) => {
// 	const { children } = props;
// 	const machine = spawn({});
// 	// const [state, send] = useMachine(machine);
// 	const recordService = useInterpret(machine);
// 	console.log('PROVIDER SERVICE:', recordService);

// 	return (
// 		<RecordContext.Provider value={{ recordService }}>
// 			{children}
// 		</RecordContext.Provider>
// 	);
// };

// export default RecordProvider;


export {}