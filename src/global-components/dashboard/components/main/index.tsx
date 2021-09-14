import { MainWrapper } from '../styles';

const Main: React.FC<any> = (props) => {
  const {children} = props
	return (
		<MainWrapper>
      {children}
		</MainWrapper>
	);
};

export default Main;
