import styled from "@emotion/styled";
import { ComponentProps, PropsWithChildren } from "react";
import { fontSizes, spacings } from "styles/variables";
import CardTemplate from "./CardTemplate";

const StyledActionButton = styled.button`
  & + & {
    margin-left: ${spacings.xs};
  }
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.md};
  font-weight: bold;
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.md};
`;

export type CardProps = PropsWithChildren<{
  title: string;
  description: string;
  onEdit: ComponentProps<"button">["onClick"];
  onRemove: ComponentProps<"button">["onClick"];
}>;

function Card({
  title,
  description,
  onRemove,
  onEdit,
  children,
}: CardProps): JSX.Element {
  return (
    <CardTemplate
      title={<StyledTitle>{title}</StyledTitle>}
      description={<StyledDescription>{description}</StyledDescription>}
      action={
        <>
          <StyledActionButton onClick={onEdit}>Edit</StyledActionButton>
          <StyledActionButton onClick={onRemove}>Remove</StyledActionButton>
        </>
      }
    >
      {children}
    </CardTemplate>
  );
}

export default Card;
