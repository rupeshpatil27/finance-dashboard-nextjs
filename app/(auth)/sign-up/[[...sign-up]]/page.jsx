import { SignUp } from "@clerk/nextjs";
import { TrendingUp, Rocket, Globe, Zap } from "lucide-react"; // Optional icons

export default function SignUpPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* LEFT SIDE: Branding & Conversion Section (Visible on Tablet/Desktop) */}
      <div className="hidden flex-col justify-between bg-zinc-950 p-12 text-white md:flex">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-black">
            <TrendingUp size={24} />
          </div>
          <span>FinTrack AI</span>
        </div>

        {/* Signup Value Proposition */}
        <div className="max-w-md space-y-6">
          <h1 className="text-5xl font-bold leading-tight tracking-tighter">
            Start Your Journey to <br />
            <span className="text-emerald-500">Financial Freedom.</span>
          </h1>
          <p className="text-lg text-zinc-400">
            Join 10,000+ users who have transformed their financial habits with
            real-time insights and AI-powered forecasting.
          </p>

          {/* Why Join Section */}
          <div className="grid grid-cols-1 gap-6 pt-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800">
                <Rocket className="text-emerald-500" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-white">Instant Setup</h4>
                <p className="text-sm text-zinc-400">
                  Connect your accounts and get insights in under 2 minutes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800">
                <Zap className="text-emerald-500" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-white">AI Predictions</h4>
                <p className="text-sm text-zinc-400">
                  Our 2026 AI engine predicts future trends based on your
                  spending.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm text-zinc-500">
          No credit card required to start.
        </p>
      </div>

      {/* RIGHT SIDE: Clerk Sign-Up Form */}
      <div className="flex flex-col items-center justify-center bg-white p-8 lg:p-12">
        {/* Mobile Logo: Shows only on small screens */}
        <div className="mb-10 flex flex-col items-center gap-2 md:hidden">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-black shadow-lg shadow-emerald-500/20">
            <TrendingUp size={28} />
          </div>
          <h2 className="text-2xl font-bold text-zinc-900">FinTrack AI</h2>
        </div>

        <div className="w-full max-w-md">
          <div className="mb-8 space-y-2 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Create Account
            </h2>
            <p className="text-zinc-500">
              Enter your details to get started with your 14-day free trial.
            </p>
          </div>
          <SignUp
            path="/sign-up"
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "shadow-none border-none p-0 bg-transparent",
                header: "hidden", // Removes default Clerk branding
                formButtonPrimary:
                  "bg-emerald-600 hover:bg-emerald-700 text-sm normal-case py-3 shadow-sm transition-all",
                socialButtonsBlockButton:
                  "border-zinc-200 hover:bg-zinc-50 text-zinc-600 font-medium transition-all py-2.5",
                footerActionLink:
                  "text-emerald-600 hover:text-emerald-700 font-semibold",
                formFieldInput:
                  "rounded-lg border-zinc-200 focus:border-emerald-500 focus:ring-emerald-500",
                dividerLine: "bg-zinc-100",
                dividerText: "text-zinc-400 text-xs uppercase",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
