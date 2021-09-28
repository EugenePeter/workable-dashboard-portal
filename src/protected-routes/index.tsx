import ProtectedRoutesProvider from './ProtectedRoutesProvider';
import ProtectedRoutesConsumer from './ProtectedRoutesConsumer';

const ProtectedRoutes: React.FC<any> = (props) => {
	const { ...rest } = props;
	console.log('REST PROTECTED ROUTES :', props);
	return (
		<ProtectedRoutesProvider {...rest}>
			<ProtectedRoutesConsumer {...rest} />
		</ProtectedRoutesProvider>
	);
};

export default ProtectedRoutes;
