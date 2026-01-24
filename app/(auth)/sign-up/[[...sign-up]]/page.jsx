import { SignUp } from "@clerk/nextjs";
import { TrendingUp, Rocket, Zap } from "lucide-react"; // Optional icons

export default function SignUpPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* LEFT SIDE: Branding & Conversion Section (Visible on Tablet/Desktop) */}
      <div className="hidden flex-col justify-between bg-blue-700 p-12 text-white md:flex">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-700">
            <TrendingUp size={24} />
          </div>
          <span>FinTrack AI</span>
        </div>

        {/* Signup Value Proposition */}
        <div className="max-w-md space-y-6">
          <h1 className="text-5xl font-bold leading-tight tracking-tighter text-white">
            Start Your Journey to <br />
            <span className="text-blue-200">Financial Freedom.</span>
          </h1>
          <p className="text-lg text-blue-100">
            Join 10,000+ users who have transformed their financial habits with
            real-time insights and AI-powered forecasting.
          </p>

          {/* Why Join Section */}
          <div className="grid grid-cols-1 gap-6 pt-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-800 border border-blue-600">
                <Rocket className="text-blue-300" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-white">Instant Setup</h4>
                <p className="text-sm text-blue-100">
                  Connect your accounts and get insights in under 2 minutes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-800 border border-blue-600">
                <Zap className="text-blue-300" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-white">AI Predictions</h4>
                <p className="text-sm text-blue-100">
                  Our 2026 AI engine predicts future trends based on your
                  spending.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm text-blue-200/60">
          No credit card required to start.
        </p>
      </div>

      {/* RIGHT SIDE: Clerk Sign-Up Form */}
      <div className="flex flex-col items-center justify-center bg-white p-8 lg:p-12">
        {/* Mobile Logo: Shows only on small screens */}
        <div className="mb-10 flex flex-col items-center gap-2 md:hidden">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
            <TrendingUp size={28} />
          </div>
          <h2 className="text-2xl font-bold text-blue-700">FinTrack AI</h2>
        </div>

        <div className="w-full max-w-md flex flex-col items-center justify-center">
          <div className="mb-8 space-y-2 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Create Account
            </h2>
            <p className="text-slate-500">
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
                  "bg-blue-700 hover:bg-blue-800 text-sm normal-case py-3 shadow-md transition-all",
                socialButtonsBlockButton:
                  "border-slate-200 hover:bg-slate-50 text-slate-600 font-medium transition-all py-2.5",
                footerActionLink:
                  "text-blue-700 hover:text-blue-800 font-semibold",
                formFieldInput:
                  "rounded-lg border-slate-200 focus:border-blue-700 focus:ring-blue-700",
                dividerLine: "bg-slate-100",
                dividerText: "text-slate-400 text-xs uppercase",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
