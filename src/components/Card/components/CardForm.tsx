import styled from "@emotion/styled";
import { ChangeEvent, ComponentProps, PropsWithChildren } from "react";
import { spacings } from "styles/variables";
import CardTemplate from "./CardTemplate";

const StyledActionButton = styled.button`
  & + & {
    margin-left: ${spacings.xs};
  }
`;

export type CardFormProps = PropsWithChildren<{
  inputValues: {
    title: string;
    description: string;
  };
  onInputChange: (
    inputName: keyof CardFormProps["inputValues"],
    e: ChangeEvent<HTMLInputElement>
  ) => void;
  onSave: ComponentProps<"button">["onClick"];
  onRemove: ComponentProps<"button">["onClick"];
}>;

function CardForm({
  onInputChange,
  onRemove,
  onSave,
  inputValues,
  children,
}: CardFormProps): JSX.Element {
  return (
    <CardTemplate
      title={
        <input
          name="title"
          value={inputValues.title}
          onChange={(e) => onInputChange("title", e)}
        />
      }
      description={
        <input
          name="description"
          value={inputValues.description}
          onChange={(e) => onInputChange("description", e)}
        />
      }
      action={
        <>
          <StyledActionButton onClick={onSave}>Save</StyledActionButton>
          <StyledActionButton onClick={onRemove}>Remove</StyledActionButton>
        </>
      }
    >
      {children}
    </CardTemplate>
  );
}

export default CardForm;
