
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import Spinner from "../components/ui/Spinner";


function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signup(email, password, passwordConfirmation);
      navigate("/dashboard");
    } catch (err) {
      const errors = err.response?.data?.errors;
      setError(
        Array.isArray(errors)
          ? errors.join(", ")
          : "Signup failed. Please try again.",
      );
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-paper">
      <div className="w-full max-w-sm bg-white p-8 rounded-sm border border-line">
        <h1 className="text-2xl font-semibold mb-6 text-center">Sign Up</h1>

        {error && (
          <div className="mb-4 p-3 bg-ember-soft text-ember rounded-sm text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <fieldset disabled={loading} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-line rounded-sm focus:outline-none focus:ring-2 focus:ring-ember disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-line rounded-sm focus:outline-none focus:ring-2 focus:ring-ember disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required
                className="w-full px-3 py-2 border border-line rounded-sm focus:outline-none focus:ring-2 focus:ring-ember disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-ink text-paper py-2 rounded-sm hover:bg-ember transition-colors disabled:opacity-60"
            >
              {loading && <Spinner size={14} />}
              {loading ? "Creating account…" : "Sign Up"}
            </button>
          </fieldset>
        </form>

        <p className="mt-4 text-sm text-center text-ink-muted">
          Already have an account?{" "}
          <Link to="/login" className="text-ember hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
