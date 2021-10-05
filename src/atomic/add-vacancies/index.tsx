import AddVacanciesProvider from "./AddVacanciesProvider";
import AddVacanciesComponent from "./AddVacancies";

const AddVacancies = () => {
  return (
    <AddVacanciesProvider>
      <AddVacanciesComponent />
    </AddVacanciesProvider>
  );
};

export default AddVacancies;
