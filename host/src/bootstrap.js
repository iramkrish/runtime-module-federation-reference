import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { loadRemoteEntry } from "./runtime/loadRemoteEntry";
import { validateManifest } from "./runtime/validateManifest";

async function bootstrap() {
  await __webpack_init_sharing__("default");

  const manifest = await fetch("http://localhost:8000/default").then((r) =>
    r.json(),
  );
  validateManifest(manifest);

  const profile = manifest.profile;
  if (profile?.enabled) {
    await loadRemoteEntry(profile.url, profile.scope);
    await window[profile.scope].init(__webpack_share_scopes__.default);
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
}

bootstrap();
