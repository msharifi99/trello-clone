import { ChangeEvent, ComponentProps, PropsWithChildren } from "react";

export type CardContainerProps = PropsWithChildren<{
  cardTitle: string;
  cardDescription: string;
  isEditing: boolean;
  inputValues: {
    title: string;
    description: string;
  };
  onInputChange: (
    inputName: keyof CardContainerProps["inputValues"],
    e: ChangeEvent<HTMLInputElement>
  ) => void;
  onEditButtonClick: ComponentProps<"button">["onClick"];
  onSave: ComponentProps<"button">["onClick"];
  onRemove: ComponentProps<"button">["onClick"];
}>;

function CardContainer({
  cardTitle,
  cardDescription,
  isEditing,
  onEditButtonClick,
  onInputChange,
  onRemove,
  onSave,
  inputValues,
  children,
}: CardContainerProps): JSX.Element {
  return (
    <section>
      <header>
        {!isEditing ? (
          <h2>{cardTitle}</h2>
        ) : (
          <input
            name="title"
            value={inputValues.title}
            onChange={(e) => onInputChange("title", e)}
          />
        )}
        {!isEditing ? (
          <button onClick={onEditButtonClick}>Edit</button>
        ) : (
          <button onClick={onSave}>Save</button>
        )}
        <button onClick={onRemove}>Remove</button>
      </header>
      {!isEditing ? (
        <p>{cardDescription}</p>
      ) : (
        <input
          value={inputValues.description}
          onChange={(e) => onInputChange("description", e)}
        />
      )}
      {children}
    </section>
  );
}

export default CardContainer;
