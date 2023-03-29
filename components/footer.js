import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 footer">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
        <div className="space-y-4 mx-4">
          <h2 className="text-lg font-medium">About Me</h2>
          <p className="text-sm">
            I am a freelance web developer and designer with over 5 years of
            experience. I specialize in creating custom websites and
            applications using modern technologies.
          </p>
        </div>
        <div className="space-y-4 mx-4">
          <h2 className="text-lg font-medium">My Services</h2>
          <ul className="text-sm">
            <li>
              <Link href="/services/web-design" legacyBehavior>
                <a className="hover:text-white">Web Design</a>
              </Link>
            </li>
            <li>
              <Link href="/services/web-development" legacyBehavior>
                <a className="hover:text-white">Web Development</a>
              </Link>
            </li>
            <li>
              <Link href="/services/seo" legacyBehavior>
                <a className="hover:text-white">SEO</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 mx-4">
          <h2 className="text-lg font-medium">Featured Blog</h2>
          <ul className="text-sm">
            <li>
              <Link
                href="/blog/5-tips-for-building-great-websites"
                legacyBehavior
              >
                <a className="hover:text-white">
                  5 Tips for Building Great Websites
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="/blog/how-to-choose-the-right-web-hosting"
                legacyBehavior
              >
                <a className="hover:text-white">
                  How to Choose the Right Web Hosting
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="/blog/top-10-web-development-trends-for-2022"
                legacyBehavior
              >
                <a className="hover:text-white">
                  Top 10 Web Development Trends for 2022
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
            href="mailto:hello@example.com"
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
