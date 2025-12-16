import React, { Suspense } from "react";
import { loadFederatedModule } from "./runtime/loadFederatedModule";

const ProfileApp = React.lazy(() => loadFederatedModule("profile", "./App"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading remote...</div>}>
      <ProfileApp />
    </Suspense>
  );
}
