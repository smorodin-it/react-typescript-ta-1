import { MouseEventHandler } from "react";

export interface EditDeleteCardBlockProps {
  onClickEdit: MouseEventHandler<HTMLElement>;
  onClickDelete: MouseEventHandler<HTMLElement>;
}
