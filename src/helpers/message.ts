function requiredMessage(name: string) {
  return `${name} should not be empty`;
}

function invalidMessage(name: string) {
  return `Invalid ${name}`;
}

export { requiredMessage, invalidMessage };
