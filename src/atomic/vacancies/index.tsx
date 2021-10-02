import VacanciesProvider from "./VacanciesProvider";
import VacanciesConsumer from "./VacanciesConsumer";

const Vacancies = () => {
  return (
    <VacanciesProvider>
      <VacanciesConsumer />
    </VacanciesProvider>
  );
};

export default Vacancies;
