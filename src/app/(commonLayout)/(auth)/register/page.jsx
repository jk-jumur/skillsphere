"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button, Card, Label } from "@heroui/react";
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Link as LinkIcon 
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    setLoading(true);

    try {
      const res = await authClient.signUp.email({
        name,
        email,
        password,
        image: image || undefined,
      });

      if (res?.error) {
        // Show error toast if account creation fails
        toast.error(res.error.message || "Account creation failed!");
      } else {
        // Show success toast if account creation succeeds
        toast.success("Successfully account created!");
        
        // Add a slight delay before redirecting so the toast is visible
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 500);
      }
    } catch (err) {
      // Catch network or unexpected errors
      toast.error(err?.message || "Account creation failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const res = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (res?.error) {
        toast.error(res.error.message || "Google sign up failed.");
      }
    } catch (err) {
      toast.error("Google sign up failed.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-50/50 dark:bg-zinc-950 transition-colors duration-300">
      
      {/* Card Container */}
      <Card className="w-full max-w-[440px] bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xl rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-cyan-400 flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-110">
            <User className="w-6 h-6" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
            Create Account
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-1">
            Join <span className="font-semibold text-blue-600 dark:text-cyan-400">SkillSphere</span> and enjoy learning moments
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="w-full flex flex-col gap-4">
          
          {/* Full Name Field */}
          <div className="flex flex-col gap-1.5 group">
            <Label className="text-xs font-semibold text-slate-700 dark:text-zinc-300 group-focus-within:text-blue-600 dark:group-focus-within:text-cyan-400 transition-colors">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <div className="relative flex items-center">
              <User className="w-4 h-4 text-slate-400 dark:text-zinc-500 absolute left-3.5 z-10 pointer-events-none group-focus-within:text-blue-500 dark:group-focus-within:text-cyan-400 transition-colors" />
              <input
                required
                name="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 h-11 bg-blue-50/40 dark:bg-zinc-800/60 border border-blue-100/60 dark:border-zinc-700/60 rounded-2xl text-xs sm:text-sm text-slate-800 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 outline-none hover:bg-blue-50 dark:hover:bg-zinc-800 hover:border-blue-200 dark:hover:border-zinc-600 focus:bg-white dark:focus:bg-zinc-900 focus:border-blue-500 dark:focus:border-cyan-400 focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-cyan-400/10 transition-all duration-200"
              />
            </div>
          </div>

          {/* Profile Image URL Field */}
          <div className="flex flex-col gap-1.5 group">
            <Label className="text-xs font-semibold text-slate-700 dark:text-zinc-300 group-focus-within:text-blue-600 dark:group-focus-within:text-cyan-400 transition-colors">
              Profile Image URL
            </Label>
            <div className="relative flex items-center">
              <LinkIcon className="w-4 h-4 text-slate-400 dark:text-zinc-500 absolute left-3.5 z-10 pointer-events-none group-focus-within:text-blue-500 dark:group-focus-within:text-cyan-400 transition-colors" />
              <input
                name="image"
                type="url"
                placeholder="https://example.com/profile.jpg"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full pl-10 pr-4 h-11 bg-blue-50/40 dark:bg-zinc-800/60 border border-blue-100/60 dark:border-zinc-700/60 rounded-2xl text-xs sm:text-sm text-slate-800 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 outline-none hover:bg-blue-50 dark:hover:bg-zinc-800 hover:border-blue-200 dark:hover:border-zinc-600 focus:bg-white dark:focus:bg-zinc-900 focus:border-blue-500 dark:focus:border-cyan-400 focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-cyan-400/10 transition-all duration-200"
              />
            </div>
          </div>

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
            <Label className="text-xs font-semibold text-slate-700 dark:text-zinc-300 group-focus-within:text-blue-600 dark:group-focus-within:text-cyan-400 transition-colors">
              Password <span className="text-red-500">*</span>
            </Label>
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

          {/* Confirm Password Field */}
          <div className="flex flex-col gap-1.5 group">
            <Label className="text-xs font-semibold text-slate-700 dark:text-zinc-300 group-focus-within:text-blue-600 dark:group-focus-within:text-cyan-400 transition-colors">
              Confirm Password <span className="text-red-500">*</span>
            </Label>
            <div className="relative flex items-center">
              <Lock className="w-4 h-4 text-slate-400 dark:text-zinc-500 absolute left-3.5 z-10 pointer-events-none group-focus-within:text-blue-500 dark:group-focus-within:text-cyan-400 transition-colors" />
              <input
                required
                name="confirmPassword"
                type={isConfirmVisible ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-10 h-11 bg-blue-50/40 dark:bg-zinc-800/60 border border-blue-100/60 dark:border-zinc-700/60 rounded-2xl text-xs sm:text-sm text-slate-800 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 outline-none hover:bg-blue-50 dark:hover:bg-zinc-800 hover:border-blue-200 dark:hover:border-zinc-600 focus:bg-white dark:focus:bg-zinc-900 focus:border-blue-500 dark:focus:border-cyan-400 focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-cyan-400/10 transition-all duration-200"
              />
              <button
                type="button"
                onClick={toggleConfirmVisibility}
                className="absolute right-3 z-10 p-1 rounded-md hover:bg-slate-200/60 dark:hover:bg-zinc-700 text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 transition-all"
              >
                {isConfirmVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            isLoading={loading}
            className="w-full h-11 font-semibold text-white text-sm bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-500/25 dark:from-blue-500 dark:to-cyan-400 dark:text-zinc-950 rounded-2xl active:scale-[0.98] transition-all duration-200 mt-2"
          >
            Create Account
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

        {/* Google Register Button */}
        <Button
          onPress={handleGoogleRegister}
          variant="bordered"
          className="w-full h-10 font-medium text-slate-600 dark:text-zinc-300 border-slate-200 dark:border-zinc-800 hover:bg-slate-100/80 hover:border-slate-300 dark:hover:bg-zinc-800/80 rounded-2xl flex items-center justify-center gap-2 text-xs active:scale-[0.98] transition-all duration-200"
        >
          <FcGoogle className="text-lg shrink-0" />
          <span>Continue with Google</span>
        </Button>

        {/* Footer Link */}
        <p className="text-center text-xs text-slate-500 dark:text-zinc-400 mt-5">
          Already have an account?{" "}
          <Link 
            href="/login" 
            className="font-semibold text-blue-600 dark:text-cyan-400 hover:underline transition-all"
          >
            Login
          </Link>
        </p>

      </Card>
    </div>
  );
}