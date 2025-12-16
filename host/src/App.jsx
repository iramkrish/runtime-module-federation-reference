import React, { Suspense } from "react";
import { loadFederatedModule } from "./runtime/loadFederatedModule";
import ErrorBoundary from "./ErrorBoundary";

const ProfileApp = React.lazy(() => loadFederatedModule("profile", "./App"));

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading remote...</div>}>
        <ProfileApp />
      </Suspense>
    </ErrorBoundary>
  );
}
