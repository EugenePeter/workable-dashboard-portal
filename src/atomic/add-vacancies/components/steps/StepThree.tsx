import React from "react";
import { FormInput, CleverKeywordSelector } from "../../../../global-components";

import { StepThreeProps } from "../../types/steps.types";

const StepThree: React.FC<StepThreeProps> = (props) => {
  const { inputs, actions, field_value, current_step } = props;

  return (
    <div>
      {inputs?.job_description && (
        <FormInput
          value={
            (field_value[inputs?.job_description?.name].value ?? "") ||
            (!field_value[inputs?.job_description?.name].value && "")
          }
          type={inputs?.job_description?.field_type ?? ""}
          placeholder={inputs?.job_description?.place_holder ?? ""}
          label={inputs?.job_description?.label ?? ""}
          actions={actions ?? {}}
          name={inputs?.job_description?.name ?? ""}
          accessor={inputs?.job_description?.accessor ?? ""}
          secondary_name={inputs?.keywords?.name ?? ""}
          current_step={current_step}
        />
      )}
      <CleverKeywordSelector
        placeholder={inputs?.keywords?.place_holder ?? ""}
        label={inputs?.keywords?.label ?? ""}
        actions={actions ?? {}}
        name={inputs?.job_description?.name ?? ""}
        secondary_name={inputs?.keywords?.name ?? ""}
        current_step={current_step}
      />
    </div>
  );
};

export default StepThree;
