import { Toaster } from "react-hot-toast";

import { Page } from "./components/PageLayout/Page";

function App() {
  return (
    <>
      <Page />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2500,
          style: {
            background: "#dce3ec",
            color: "#1a1f26",
            boxShadow:
              "-6px -6px 14px rgba(255,255,255,0.95), 6px 6px 16px rgba(163,177,198,0.85)",
          },
        }}
      />
    </>
  );
}

export default App;
