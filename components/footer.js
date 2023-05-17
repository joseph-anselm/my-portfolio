import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 footer">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
        <div className="space-y-4 mx-4">
          <h2 className="text-lg font-medium">About Me</h2>
          <p className="text-sm">
          
            Experienced IT professional with 10+ years in web development, design, and IT engineering. Proven track record delivering high-quality, user-friendly, and secure solutions. Proficient in various technologies, including cloud computing and artificial intelligence. Motivated, results-oriented, and collaborative team player. Achieve common goals effectively.
          </p>
        </div>
        <div className="space-y-4 mx-4">
          <h2 className="text-lg font-medium">My Services</h2>
          <ul className="text-sm">
            <li>
              <Link href="/services/" legacyBehavior>
                <a className="hover:text-white">Tech Support</a>
              </Link>
            </li>
            <li>
              <Link href="/services" legacyBehavior>
                <a className="hover:text-white">Business Digitization</a>
              </Link>
            </li>
            <li>
              <Link href="/services" legacyBehavior>
                <a className="hover:text-white">Business Branding</a>
              </Link>
            </li>
            <li>
              <Link href="/services" legacyBehavior>
                <a className="hover:text-white">Enhanced SEO</a>
              </Link>
            </li>
            <li>
              <Link href="/services" legacyBehavior>
                <a className="hover:text-white">Managed IT Services</a>
              </Link>
            </li>
            <li>
              <Link href="/services" legacyBehavior>
                <a className="hover:text-white">AI and Cloud Computing Solutions</a>
              </Link>
            </li>
            <li>
              <Link href="/services" legacyBehavior>
                <a className="hover:text-white">Dev Ops</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 mx-4">
          <h2 className="text-lg font-medium">Featured Blog</h2>
          <ul className="text-sm">
            <li>
              <Link
                href="/blog/5-proven-ways-to-make-money-with-artificial-intelligence-ai"
                legacyBehavior
              >
                <a className="hover:text-white">
                  5 Tips Proven ways to make money with AI
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="/blog/decoding-the-digital-maze-how-to-choose-the-perfect-web-hosting-solution"
                legacyBehavior
              >
                <a className="hover:text-white">
                  How to Choose the Right Web Hosting
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="/blog/10-web-development-trends-for-2023-stay-ahead-of-the-curve"
                legacyBehavior
              >
                <a className="hover:text-white">
                  Top 10 Web Development Trends for 2023
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="/blog/unveiling-the-secrets-5-tips-for-building-exceptional-websites-with-seo-in-mind"
                legacyBehavior
              >
                <a className="hover:text-white">
                5 Tips for Building Exceptional Websites
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 mx-4">
          <h2 className="text-lg font-medium">Contact Me</h2>
          <p className="text-sm">
            Feel free to contact me for any inquiries or project proposals.
          </p>
          <a
            href="mailto:iamjoeanselm@gmail.com"
            className="inline-block py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm mt-2"
          >
            Email Me
          </a>
        </div>
      </div>

      <div className="bg-gray-700 py-4 px-4 sm:px-6 lg:px-8 text-sm">
        <p className="text-gray-400 text-center">
          &copy; 2023 Joseph Anselm. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
