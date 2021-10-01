export interface IContext {
  application_config: {
    fields: {
      company_name: {
        label: string;
        required: true;
        place_holder: string;
        name: string;
        field_type?: "text";
      };
      email: {
        label: string;
        required: true;
        place_holder: string;
        name: string;
        field_type?: "text";
      };
      password: {
        label: string;
        required: true;
        place_holder: string;
        name: string;
        field_type?: "text";
      };
    };
  };
  application_data: {
    field_value: {
      company_name: null | string;
      email: null | string;
      password: null | string;
    };
    results: SignupResults;
    errors: SignupError;
  };
}

export interface SignupError {
  [key: string]: string;
}
export interface SignupResults {
  [key: string]: string;
}

export interface IRecord<TEntry> {
  [key: string]: TEntry;
}
