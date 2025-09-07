import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Forgot Password | Nestify",
  description: "Reset your Nestify account password",
};

export default function ForgotPasswordPage() {
  return (
    <main className="flex-1 bg-[#FFF3B0]">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="mx-auto w-full max-w-md space-y-6 rounded-lg border border-[#FFDAB3] bg-white p-6 shadow-md">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-[#5D4037]">Forgot Password</h1>
            <p className="text-[#6D4C41]">
              Enter your email address and we&apos;ll send you a link to reset
              your password
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none text-[#5D4037] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                className="h-11 border-[#FFDAB3] focus:border-[#5D4037] focus:ring-[#5D4037]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#5D4037] text-[#FFF3B0] hover:bg-[#6D4C41]"
            >
              Send Reset Link
            </Button>
          </div>
          <div className="mt-4 text-center text-sm text-[#6D4C41]">
            Remember your password?{" "}
            <Link
              href="/login"
              className="font-medium text-[#5D4037] hover:underline"
            >
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
