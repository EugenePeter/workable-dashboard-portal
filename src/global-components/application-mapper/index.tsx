export interface ApplicationMapperProps {
	component: any;
}

const ApplicationMapper: React.FC<ApplicationMapperProps> = (props) => {
	const { component } = props;
	const Component: React.FC<any> = component as React.FC<any>;
	return <Component />;
};

export default ApplicationMapper;
