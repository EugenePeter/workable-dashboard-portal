export interface IVacancies {
  [key: string]: any;
}

export interface IContext {
  company_id?: string | null;
  application_config: {};
  application_data: {
    vacancies: IVacancies[];
  };
}

export interface IRecord<TEntry> {
  [key: string]: TEntry;
}
