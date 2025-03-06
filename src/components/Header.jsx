const Header = () => {
  return (
    <header className="px-5 py-4 text-white fixed w-full border-b border-primary-gray rounded-2xl lg:border-none backdrop-blur-lg">
      <nav className="flex flex-col md:flex-row items-center justify-between text-sm gap-3  ">
        <div className="w-72 lg:w-60">
          <a href="https://www.cornarolabs.xyz">
            <img src="./logo.png" alt="" />
          </a>
        </div>
        <div className="flex items-center gap-10">
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

          <div className="flex items-center gap-2">
            <a className="custom-btn" href="https://www.web3grants.co/">
              <span className="text">Grants DashBoard</span>
            </a>
            <a className="custom-btn" href="https://calendly.com/cornarolabs">
              <span className="text">Consultation</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
