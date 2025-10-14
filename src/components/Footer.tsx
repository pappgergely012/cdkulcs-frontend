import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/cd-key-logo.png"
                alt="CD Kulcs"
                className="h-8 w-auto"
              />
              <span className="text-white font-bold text-lg">CD Kulcs</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Legális szoftver kulcsok verhetetlen áron. Azonnali aktiválás,
              24/7 ügyfélszolgálat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Gyors linkek</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-white transition-colors"
                >
                  Főoldal
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-sm hover:text-white transition-colors"
                >
                  Szoftverek
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-white transition-colors"
                >
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Jogi információk</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm hover:text-white transition-colors"
                >
                  Adatvédelmi szabályzat
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-sm hover:text-white transition-colors"
                >
                  Szolgáltatási feltételek
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-sm hover:text-white transition-colors"
                >
                  Visszatérítési szabályzat
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CD Kulcs. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
