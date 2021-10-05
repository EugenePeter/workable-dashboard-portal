import React from "react";
import { FormInput, CleverKeywordSelector } from "../../../../global-components";

import { StepThreeProps } from "../../types/steps.types";

const StepSix: React.FC<StepThreeProps> = (props) => {
  const { inputs, actions, field_value, current_step } = props;
  const input_value = field_value[inputs?.employer_questions?.name]?.value;
  console.log("input_value", input_value);
  return (
    <div>
      {inputs?.employer_questions && (
        <FormInput
          value={input_value ?? ""}
          type={inputs?.employer_questions?.field_type ?? ""}
          placeholder={inputs?.employer_questions?.place_holder ?? ""}
          label={inputs?.employer_questions?.label ?? ""}
          actions={actions ?? {}}
          name={inputs?.employer_questions?.name ?? ""}
          accessor={inputs?.employer_questions?.accessor ?? ""}
          secondary_name={inputs?.keywords?.name ?? ""}
          current_step={current_step}
        />
      )}
      <CleverKeywordSelector
        placeholder={inputs?.keywords?.place_holder ?? ""}
        label={inputs?.keywords?.label ?? ""}
        actions={actions ?? {}}
        name={inputs?.employer_questions?.name ?? ""}
        secondary_name={inputs?.keywords?.name ?? ""}
        current_step={current_step}
      />
    </div>
  );
};

export default StepSix;
