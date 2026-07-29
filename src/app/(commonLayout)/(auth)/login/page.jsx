"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button, Card, Label } from "@heroui/react";
import { 
  LogIn, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff 
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await authClient.signIn.email({
        email,
        password,
      });

      if (res?.error) {
        toast.error(res.error.message || "Invalid credentials!");
      } else {
        toast.success("Welcome back!");
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      toast.error(err?.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      toast.error("Google sign in failed.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-50/50 dark:bg-zinc-950 transition-colors duration-300">
      
      {/* Card Container */}
      <Card className="w-full max-w-[420px] bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xl rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl">
        
        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-cyan-400 flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-110">
            <LogIn className="w-6 h-6" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
            Welcome Back
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-1">
            Sign in to continue to <span className="font-semibold text-blue-600 dark:text-cyan-400">SkillSphere</span>
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          
          {/* Email Field */}
          <div className="flex flex-col gap-1.5 group">
            <Label className="text-xs font-semibold text-slate-700 dark:text-zinc-300 group-focus-within:text-blue-600 dark:group-focus-within:text-cyan-400 transition-colors">
              Email <span className="text-red-500">*</span>
            </Label>
            <div className="relative flex items-center">
              <Mail className="w-4 h-4 text-slate-400 dark:text-zinc-500 absolute left-3.5 z-10 pointer-events-none group-focus-within:text-blue-500 dark:group-focus-within:text-cyan-400 transition-colors" />
              <input
                required
                name="email"
                type="email"
                placeholder="hello@skillsphere.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 h-11 bg-blue-50/40 dark:bg-zinc-800/60 border border-blue-100/60 dark:border-zinc-700/60 rounded-2xl text-xs sm:text-sm text-slate-800 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 outline-none hover:bg-blue-50 dark:hover:bg-zinc-800 hover:border-blue-200 dark:hover:border-zinc-600 focus:bg-white dark:focus:bg-zinc-900 focus:border-blue-500 dark:focus:border-cyan-400 focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-cyan-400/10 transition-all duration-200"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1.5 group">
            <div className="flex items-center justify-between">
              <Label className="text-xs font-semibold text-slate-700 dark:text-zinc-300 group-focus-within:text-blue-600 dark:group-focus-within:text-cyan-400 transition-colors">
                Password <span className="text-red-500">*</span>
              </Label>
              <Link 
                href="/forgot-password" 
                className="text-[11px] font-medium text-blue-600 dark:text-cyan-400 hover:underline transition-all"
              >
                Forgot?
              </Link>
            </div>
            <div className="relative flex items-center">
              <Lock className="w-4 h-4 text-slate-400 dark:text-zinc-500 absolute left-3.5 z-10 pointer-events-none group-focus-within:text-blue-500 dark:group-focus-within:text-cyan-400 transition-colors" />
              <input
                required
                name="password"
                type={isVisible ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 h-11 bg-blue-50/40 dark:bg-zinc-800/60 border border-blue-100/60 dark:border-zinc-700/60 rounded-2xl text-xs sm:text-sm text-slate-800 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 outline-none hover:bg-blue-50 dark:hover:bg-zinc-800 hover:border-blue-200 dark:hover:border-zinc-600 focus:bg-white dark:focus:bg-zinc-900 focus:border-blue-500 dark:focus:border-cyan-400 focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-cyan-400/10 transition-all duration-200"
              />
              <button
                type="button"
                onClick={toggleVisibility}
                className="absolute right-3 z-10 p-1 rounded-md hover:bg-slate-200/60 dark:hover:bg-zinc-700 text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 transition-all"
              >
                {isVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            isLoading={loading}
            className="w-full h-11 font-semibold text-white text-sm bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-500/25 dark:from-blue-500 dark:to-cyan-400 dark:text-zinc-950 rounded-2xl active:scale-[0.98] transition-all duration-200 mt-2"
          >
           Login
          </Button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-slate-200 dark:bg-zinc-800" />
          <span className="px-3 text-[10px] font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
            OR
          </span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-zinc-800" />
        </div>

        {/* Google Login Button */}
        <Button
          onPress={handleGoogleLogin}
          variant="bordered"
          className="w-full h-10 font-medium text-slate-600 dark:text-zinc-300 border-slate-200 dark:border-zinc-800 hover:bg-slate-100/80 hover:border-slate-300 dark:hover:bg-zinc-800/80 rounded-2xl flex items-center justify-center gap-2 text-xs active:scale-[0.98] transition-all duration-200"
        >
          <FcGoogle className="text-lg shrink-0" />
          <span>Continue with Google</span>
        </Button>

        {/* Footer Link */}
        <p className="text-center text-xs text-slate-500 dark:text-zinc-400 mt-5">
          Don't have an account?{" "}
          <Link 
            href="/register" 
            className="font-semibold text-blue-600 dark:text-cyan-400 hover:underline transition-all"
          >
            Register
          </Link>
        </p>

      </Card>
    </div>
  );
}