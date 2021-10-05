import React from "react";
import { FormInput, CleverKeywordSelector } from "../../../../global-components";

import { StepFourProps } from "../../types/steps.types";

const StepFour: React.FC<StepFourProps> = (props) => {
  const { inputs, actions, field_value, current_step } = props;
  const input_value = field_value[inputs?.position_and_responsibilities?.name]?.value;
  console.log("input_value", input_value ?? "");
  return (
    <div>
      {inputs?.position_and_responsibilities && (
        <FormInput
          value={input_value ?? ""}
          type={inputs?.position_and_responsibilities?.field_type ?? ""}
          placeholder={inputs?.position_and_responsibilities?.place_holder ?? ""}
          label={inputs?.position_and_responsibilities?.label ?? ""}
          actions={actions ?? {}}
          name={inputs?.position_and_responsibilities?.name ?? ""}
          accessor={inputs?.position_and_responsibilities?.accessor ?? ""}
          secondary_name={inputs?.keywords?.name ?? ""}
          current_step={current_step}
        />
      )}
      <CleverKeywordSelector
        placeholder={inputs?.keywords?.place_holder ?? ""}
        label={inputs?.keywords?.label ?? ""}
        actions={actions ?? {}}
        name={inputs?.position_and_responsibilities?.name ?? ""}
        secondary_name={inputs?.keywords?.name ?? ""}
        current_step={current_step}
      />
    </div>
  );
};

export default StepFour;
