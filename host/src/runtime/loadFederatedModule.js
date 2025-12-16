export async function loadFederatedModule(scope, module) {
  const container = window[scope];
  if (!container) throw new Error(`Remote ${scope} not found`);
  const factory = await container.get(module);
  return factory();
}
