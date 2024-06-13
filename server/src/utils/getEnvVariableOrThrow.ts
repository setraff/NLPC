const getEnvVariableOrThrow = (key: string) => {
  const variable = process.env[key];
  if (!variable) {
    throw new Error(`Variable not found: ${key}`);
  }
  return variable;
};

export default getEnvVariableOrThrow;
