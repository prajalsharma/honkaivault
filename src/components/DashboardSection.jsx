import { Bot, ChartNoAxesCombined, RefreshCw } from "lucide-react";
import Dashboard from "../assets/dashboard.jpeg";

const DashboardSection = () => {
  return (
    <section
      className="flex flex-col-reverse lg:flex-row gap-10 py-20 lg:py-28 px-10 items-center"
      id="dashboard">
      <div className="dashboard-preview-wrapper rounded-md h-full">
        <img src={Dashboard} alt="" className="rounded-md" />
      </div>
      <div className="flex flex-col gap-5 text-center lg:text-left">
        <h2 className="font-medium text-lg text-light-blue">Grants Dashboard</h2>
        <h3 className="text-white font-bold text-3xl">
          Web3Grants – Find the
          <span className="gradient-text"> Perfect Grant for Your Project</span>
        </h3>
        <p>
          The CL Web3 Grants Platform enhances how Web3 grant programs are accessed, analysed, and
          managed.
        </p>
        <ul className="text-white text-sm space-y-3 font-medium">
          <li className="flex items-center gap-2">
            <RefreshCw className="text-light-blue size-5 shrink-0" />
            Integrating real-time data updates (refreshed every 48 hours)
          </li>
          <li className="flex items-center gap-2">
            <Bot className="text-light-blue size-5 shrink-0" />
            AI-powered grant matchmaking
          </li>
          <li className="flex items-center gap-2">
            <ChartNoAxesCombined className="text-light-blue size-5 shrink-0" />
            Providing data-driven solutions for Web3 funding protocols and builders to track impact
            and achieve better results.
          </li>
        </ul>
        <div className="flex gap-2 flex-wrap justify-center">
          <a
            className="custom-btn-2"
            href="https://www.web3grants.co/"
            target="_blank"
            rel="noreferrer">
            {" "}
            <span className="grid place-items-center">Visit the Dashboard</span>
          </a>
          <a
            className="custom-btn"
            href="https://tally.so/r/nPGzAb"
            target="_blank"
            rel="noreferrer">
            <span className="text">Add Grant Program</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default DashboardSection;
