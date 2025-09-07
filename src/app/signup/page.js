import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const metadata = {
  title: "Sign Up | Nestify",
  description: "Create a new Nestify account",
};

export default function SignUpPage() {
  return (
    <main className="flex-1">
      <div className="flex h-screen flex-col items-center justify-center bg-[#FFF3B0]">
        <div className="mx-auto w-full max-w-md space-y-6 rounded-lg border bg-white p-6 shadow-sm">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-[#5D4037]">Create an account</h1>
            <p className="text-[#6D4C41]">
              Enter your information to get started
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="first-name"
                  className="text-sm font-medium text-[#5D4037]"
                >
                  First name
                </label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="last-name"
                  className="text-sm font-medium text-[#5D4037]"
                >
                  Last name
                </label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-[#5D4037]">
                Email
              </label>
              <Input
                id="email"
                placeholder="m@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-medium text-[#5D4037]">
                Password
              </label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="confirm-password" className="text-sm font-medium text-[#5D4037]">
                Confirm Password
              </label>
              <Input id="confirm-password" type="password" placeholder="••••••••" />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                className="data-[state=checked]:bg-[#5D4037] data-[state=checked]:border-[#5D4037] cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-sm text-[#6D4C41]"
              >
                I agree to the{" "}
                <Link
                  href="/terms-conditions"
                  className="text-[#5D4037] hover:underline"
                >
                  terms and conditions
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#FFDAB3] text-[#5D4037] hover:bg-[#FFE0A3] cursor-pointer"
            >
              Create Account
            </Button>
          </div>

          <div className="mt-4 text-center text-sm text-[#6D4C41]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-[#5D4037] hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
