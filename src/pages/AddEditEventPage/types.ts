export enum AddEditEventPageFlow {
  ADD = "EVENT_PAGE_ADD_FLOW",
  EDIT = "EVENT_PAGE_EDIT_FLOW",
}

export interface AddEditEventPageProps {
  flow?: AddEditEventPageFlow;
}
