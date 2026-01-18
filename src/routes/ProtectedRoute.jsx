import AuthGuard from "../services/AuthGuard";

export default function ProtectedRoute({ children }) {
  return <AuthGuard>{children}</AuthGuard>;
}
