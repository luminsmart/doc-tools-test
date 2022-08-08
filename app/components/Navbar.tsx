import { Link, useLocation } from "@remix-run/react";

export const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className="bg-lumin-gray text-white px-4 py-4">
      <div className="max-w-7xl flex items-center mx-auto">
        <div className="flex-grow flex items-center space-x-10">
          <div>
            <Link to="/">
              <img src="/lumin-logo.svg" />
            </Link>
          </div>
          <div>
            <ul className="flex items-center space-x-5">
              <li>
                <a
                  href="/redoc"
                  className="hover:border-b-2 border-white py-2 transition-all"
                >
                  Redoc
                </a>
              </li>
              <li>
                <a
                  href="/rapidoc"
                  className="hover:border-b-2 border-white py-2 transition-all"
                >
                  Rapidoc
                </a>
              </li>
              <li>
                <a
                  href="/stoplight"
                  className="hover:border-b-2 border-white py-2 transition-all"
                >
                  Stoplight
                </a>
              </li>
              <li>
                <Link
                  to="/bump"
                  className="hover:border-b-2 border-white py-2 transition-all"
                >
                  Bump
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <ul className="flex items-center space-x-3">
            <li>
              <Link
                to="/signin"
                className="px-5 py-2 border-lumin-yellow border-2 rounded-md text-lumin-yellow hover:opacity-80 transition-all"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="px-5 py-2 bg-lumin-yellow rounded-md text-lumin-gray hover:opacity-80 transition-all"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
