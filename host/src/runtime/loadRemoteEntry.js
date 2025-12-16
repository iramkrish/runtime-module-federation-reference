const loaded = new Set();

export function loadRemoteEntry(url, scope) {
  if (loaded.has(scope)) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    script.onload = () => {
      loaded.add(scope);
      resolve();
    };

    script.onerror = () => reject(new Error(`Failed to load remote: ${scope}`));

    document.head.appendChild(script);
  });
}
