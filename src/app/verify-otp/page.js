import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Verify OTP | Nestify",
  description: "Verify your account with a one-time password",
};

export default function VerifyOTPPage() {
  return (
    <main className="flex-1">
      <div className="flex h-screen flex-col items-center justify-center bg-[#FFF3B0]">
        <div className="mx-auto w-full max-w-md space-y-6 rounded-lg border border-[#FFDAB3] bg-white p-6 shadow-sm">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-[#5D4037]">Verify Your Email</h1>
            <p className="text-[#6D4C41]">
              We&apos;ve sent a verification code to your email address. Please enter it below.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="otp"
                className="text-sm font-medium leading-none text-[#5D4037]"
              >
                Verification Code
              </label>
              <div className="flex justify-between gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Input
                    key={i}
                    className="h-12 text-center text-lg border-[#FFDAB3] focus:border-[#5D4037] focus:ring-[#5D4037]"
                    maxLength={1}
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                ))}
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#5D4037] hover:bg-[#6D4C41] text-[#FFF3B0] cursor-pointer"
            >
              Verify
            </Button>
          </div>
          <div className="mt-4 text-center text-sm text-[#6D4C41]">
            Didn&apos;t receive a code?{" "}
            <button className="font-medium text-[#5D4037] hover:underline">
              Resend
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
