import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const rows = Array.from({ length: 50 });

  return (
    <div className="h-screen w-full flex flex-col">
      {rows.map((_, i) => (
        <aside
          key={i}
          className="relative h-[10vh] w-full bg-black"
          style={{ "--end": i % 2 === 0 ? "120px" : "-120px" }}
        >
          <div className="absolute top-1/2 w-full h-[5px] -translate-y-1/2 bg-[url('assets/img.png')] bg-[length:120px] animate-moveline"></div>
        </aside>
      ))}
      <style>
        {`
          @keyframes moveline {
            0% { background-position: 0; }
            100% { background-position: var(--end); }
          }
          .animate-moveline { animation: moveline 0.5s infinite; }
        `}
      </style>
    </div>
  );
};

const rootEl = document.getElementById("root") || (() => {
  const el = document.createElement("div");
  el.id = "root";
  document.body.appendChild(el);
  return el;
})();

createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
