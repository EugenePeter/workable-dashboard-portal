export interface ApplicationMapperProps {
	component_name: any;
	component: any;
}

const ApplicationMapper: React.FC<ApplicationMapperProps> = (props) => {
	const { component_name, component } = props;
	const Component: React.FC<any> = component[component_name] as React.FC<any>;
	return <Component />;
};

export default ApplicationMapper;
