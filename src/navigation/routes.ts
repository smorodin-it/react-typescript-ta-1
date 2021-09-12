export const routes = {
  index: () => "/",
  addEvent: () => "/add-event",
  editEvent: (eventId: string = ":eventId") => `/edit-event/${eventId}`,
};
