import { SignIn, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { TrendingUp, ShieldCheck, PieChart, Loader2 } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* LEFT SIDE: Finance Dashboard Branding (Visible on Tablet/Desktop) */}
      <div className="hidden flex-col justify-between bg-blue-700 p-12 text-white md:flex">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-700">
            <TrendingUp size={24} />
          </div>
          <span>FinTrack AI</span>
        </div>

        {/* Value Proposition */}
        <div className="max-w-md space-y-6">
          <h1 className="text-5xl font-bold leading-tight tracking-tighter">
            Total Clarity Over Your <br />
            <span className="text-blue-200">Financial Landscape.</span>
          </h1>
          <p className="text-lg text-blue-100">
            Automate your expense tracking, visualize growth trends, and make
            data-driven decisions with our 2026 next-gen dashboard.
          </p>

          {/* Social Proof/Features */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3 text-blue-50">
              <ShieldCheck className="text-blue-300" size={20} />
              <span className="text-sm">Bank-grade security & encryption</span>
            </div>
            <div className="flex items-center gap-3 text-blue-50">
              <PieChart className="text-blue-300" size={20} />
              <span className="text-sm">
                Real-time asset allocation tracking
              </span>
            </div>
          </div>
        </div>

        {/* Footer Credit */}
        <p className="text-sm text-blue-200/60">
          © 2026 FinTrack SaaS Inc. Trusted by 10k+ advisors.
        </p>
      </div>

      {/* RIGHT SIDE: Clerk Sign-In (Mobile First) */}
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
              Sign In
            </h2>
            <p className="text-slate-500">
              Welcome back! Please enter your details.
            </p>
          </div>

          <ClerkLoading>
            <div className="flex flex-col items-center justify-center space-y-4">
              <Loader2 className="h-10 w-10 animate-spin text-blue-700" />
              <p className="text-sm text-slate-500 animate-pulse">
                Securing connection...
              </p>
            </div>
          </ClerkLoading>

          <SignIn
            path="/sign-in"
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "shadow-none border-none p-0 bg-transparent",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                formButtonPrimary:
                  "bg-blue-700 hover:bg-blue-800 text-sm normal-case py-3 shadow-md transition-all",
                socialButtonsBlockButton:
                  "border-slate-200 hover:bg-slate-50 text-slate-600 font-medium transition-all",
                footerActionLink:
                  "text-blue-700 hover:text-blue-800 font-semibold",
                formFieldInput:
                  "rounded-lg border-slate-200 focus:border-blue-700 focus:ring-blue-700",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
