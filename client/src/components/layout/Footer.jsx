import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 grid gap-10 lg:grid-cols-2 text-sm text-gray-700">
        
        {/* Left Section */}
        <div className="flex flex-col justify-between">
          <img
            src="/company-logo.svg"
            alt="company-logo"
            className="w-40 mb-2"
          />
          <p className="max-w-xs mb-4 md:mb-5">
            We are a trusted e-commerce website that supports eco-friendly
            products and services.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-6">
            <Link to="/" className="hover:opacity-70">
              <img
                src="/images(socials)/Twitter.svg"
                alt="Twitter"
                className="w-5 h-5"
              />
            </Link>
            <Link to="/" className="hover:opacity-70">
              <img
                src="/images(socials)/Facebook.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
            </Link>
            <Link to="/" className="hover:opacity-70">
              <img
                src="/images(socials)/Tiktok.svg"
                alt="TikTok"
                className="w-5 h-5"
              />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-800">Services</h3>
            <ul className="space-y-2">
              {[
                ["Bonus program", "/bonus-program"],
                ["Gift cards", "/gift-cards"],
                ["Credit and payment", "/credit-payment"],
                ["Service contracts", "/service-contracts"],
                ["Non-cash account", "/non-cash-account"],
                ["Payment", "/payment"],
              ].map(([label, link]) => (
                <li key={link}>
                  <Link to={link} className="hover:text-blue-500">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Assistance */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-800">
              Assistance to the buyer
            </h3>
            <ul className="space-y-2">
              {[
                ["Find an order", "/orders"],
                ["Terms of delivery", "/delivery"],
                ["Exchange and return of goods", "/returns"],
                ["Guarantee", "/guarantee"],
                ["Frequently asked questions", "/faq"],
                ["Terms of use of the site", "/terms"],
              ].map(([label, link]) => (
                <li key={link}>
                  <Link to={link} className="hover:text-blue-500">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-12 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Green Code. All rights reserved.
      </div>
    </footer>
  );
}
