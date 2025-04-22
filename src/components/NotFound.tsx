import { useLocation } from "react-router";

export default function NotFound() {
  const location = useLocation();
  return (
    <main className="not-found">
      <h1 className="not-found__title">404! Not Found... {`¯\\_(ツ)_/¯`}</h1>
      <h3 className="not-found__subtitle">No match for <code>{location.pathname}</code></h3>
    </main>
  );
};