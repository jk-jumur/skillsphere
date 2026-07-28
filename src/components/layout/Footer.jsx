"use client";

import Link from "next/link";
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

import { 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 
  FaXTwitter 
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-tr from-blue-600 to-teal-400 p-2 rounded-full text-white shadow-md">
                <Globe className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Skill<span className="text-blue-500">Sphere</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering learners worldwide with practical, skill-based courses. Master modern technologies and boost your career today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-blue-400 transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-blue-400 transition-colors">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Feni, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+880 1851647899</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>support@skillsphere.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links & Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Follow Us</h3>
            <p className="text-xs text-slate-400 mb-4">
              Stay connected with our learning community on social media.
            </p>
            
       
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all text-slate-300 flex items-center justify-center"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all text-slate-300 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all text-slate-300 flex items-center justify-center"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all text-slate-300 flex items-center justify-center"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} SkillSphere. All rights reserved.</p>
          
          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-blue-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}