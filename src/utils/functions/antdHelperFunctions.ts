export const requiredField = (
  message: string = "Пожалуйста, заполните поле!"
) => ({
  required: true,
  message: message,
});
