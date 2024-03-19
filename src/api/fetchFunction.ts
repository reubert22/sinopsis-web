export const fetchFunction = async <returnType>(
  endpoint: string
): Promise<returnType> => {
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error('Error!');

  return await response.json();
};
