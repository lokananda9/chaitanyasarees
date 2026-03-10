"use client";

import { useState } from "react";
import { loginAction } from "@/app/actions/auth-actions";
import { Lock, ArrowRight, Loader2 } from "lucide-react";

export default function AdminLogin() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    const res = await loginAction(formData);
    if (res?.error) {
      setError(res.error);
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#faf8f6] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-[2rem] border border-[#8d4a54]/10 bg-white p-8 shadow-[0_20px_60px_rgba(77,42,32,0.06)] sm:p-10">
        <div>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8d4a54]/10 text-[#8d4a54]">
            <Lock className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#241712]">
            Admin Access
          </h2>
          <p className="mt-2 text-center text-sm text-stone-500">
            Enter your securely encrypted master password to manage collections.
          </p>
        </div>

        <form action={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium text-stone-700">
              Master Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="block w-full rounded-2xl border-0 p-4 py-3 text-[#241712] shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-[#8d4a54] sm:text-sm sm:leading-6"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="rounded-xl bg-red-50 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#8d4a54] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#6e3842] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8d4a54] disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  Secure Login
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
