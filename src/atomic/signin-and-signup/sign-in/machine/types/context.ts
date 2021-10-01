export interface IContext {
  application_config: {
    fields: {
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
      email: null | string;
      password: null | string;
    };
    results: SignupResults;
  };
}

export interface SignupResults {
  [key: string]: string;
}

export interface IRecord<TEntry> {
  [key: string]: TEntry;
}
