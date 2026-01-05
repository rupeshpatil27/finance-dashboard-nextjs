import { TrendingUp } from "lucide-react";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link
      href="/"
      className="hidden lg:flex items-center gap-2 font-bold text-xl tracking-tight"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-black shadow-lg shadow-emerald-500/20">
        <TrendingUp size={28} />
      </div>
      <h2 className="text-2xl font-bold text-zinc-900">FinTrack AI</h2>
    </Link>
  );
};

export default HeaderLogo;
