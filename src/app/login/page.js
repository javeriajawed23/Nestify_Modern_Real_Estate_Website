import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const metadata = {
  title: "Login | Nestify",
  description: "Log in to your Nestify account",
};

export default function LoginPage() {
  return (
    <main className="flex-1 bg-[#FFF3B0]">
      <div className="flex h-screen flex-col items-center justify-center px-4">
        <div className="mx-auto w-full max-w-md space-y-6 rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
          {/* Heading */}
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-[#5D4037]">Welcome back</h1>
            <p className="text-[#6D4C41]">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#5D4037]"
              >
                Email
              </label>
              <Input
                id="email"
                placeholder="m@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                className="h-11 rounded-lg border-gray-300 focus:border-[#5D4037] focus:ring-[#5D4037]"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-[#5D4037]"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-[#5D4037] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-11 rounded-lg border-gray-300 focus:border-[#5D4037] focus:ring-[#5D4037]"
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                className="data-[state=checked]:bg-[#FFDAB3] data-[state=checked]:border-[#5D4037] cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium text-[#5D4037] cursor-pointer"
              >
                Remember me
              </label>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full rounded-lg bg-[#FFDAB3] py-3 text-base font-medium text-[#5D4037] hover:bg-[#FFE0A3] cursor-pointer shadow-md"
            >
              Sign In
            </Button>
          </form>

          {/* Signup link */}
          <div className="pt-2 text-center text-sm text-[#6D4C41]">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-[#5D4037] hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
