import { Container } from "./styles";
import { Modifiers } from "../../global-styles";
import { CleverTable } from "./components";

const VacanciesConsumer = () => {
  return (
    <>
      <Modifiers />
      <Container className="add-vacancy_container">
        <CleverTable />
      </Container>
    </>
  );
};

export default VacanciesConsumer;
