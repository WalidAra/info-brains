import { Terminal } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-white flex items-center gap-2 mb-4"
            >
              <Terminal className="h-6 w-6" />
              Infobrains
            </Link>
            <p className="text-gray-400">
              UHBC University Computer Science Club
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Events
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Resources
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://discord.gg/e4GFM2KvSU"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Discord
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/company/infobrains-uhbc"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/infobrains.uhbc/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/infobrains.uhbc"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-gray-400">
              <p>CS Building, Room 404</p>
              <p>UHBC University</p>
              <p>contact@infobrains.edu</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.02] mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Infobrains. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
