const Header = () => {
  return (
    <header className="px-5 py-4 text-white fixed w-full border-b border-primary-gray rounded-2xl lg:border-none backdrop-blur-lg z-50 md:px-8">
      <nav className="flex flex-col md:flex-row items-center justify-between text-sm gap-3  ">
        <div className="w-72 lg:w-60">
          <a href="https://www.cornarolabs.xyz">
            <img src="./logo.png" alt="" />
          </a>
        </div>

        <ul className="flex items-center gap-10">
          <li className="relative group">
            <a href="#services">Services</a>
            <span className="w-full h-0.5 bg-white block absolute transition-all opacity-0 top-7 group-hover:opacity-100 group-hover:top-5" />
          </li>
          <li className="relative group">
            <a href="#about-us">About Us</a>
            <span className="w-full h-0.5 bg-white block absolute transition-all opacity-0 top-7 group-hover:opacity-100 group-hover:top-5" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
