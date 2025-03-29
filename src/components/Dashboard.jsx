import { useState, useEffect } from "react";
import { Bell, User, Activity, Settings, List, TrendingUp, Menu, X } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { workflowData } from "../constants";
import logo2 from '../assets/logo2.png'

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [overviewStats, setOverviewStats] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOverviewStats([
        { title: "Total Flows", value: Math.floor(Math.random() * 100), icon: <List size={24} className="text-teal-400" /> },
        { title: "Active Flows", value: Math.floor(Math.random() * 50), icon: <Activity size={24} className="text-teal-400" /> },
        { title: "Pending Approvals", value: Math.floor(Math.random() * 20), icon: <TrendingUp size={24} className="text-yellow-400" /> },
        { title: "Failed Executions", value: Math.floor(Math.random() * 10), icon: <Settings size={24} className="text-red-400" /> },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex h-screen bg-gray-950 text-white">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative md:flex flex-col bg-gray-900 p-5 border-r border-gray-700 shadow-lg min-h-screen z-50 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } w-72`}
      >
        <div className="flex items-center mb-4 flex-shrink-0">
          <img className='mr-5 w-8 h-8' src={logo2} alt="logo" />
          <span className="text-3xl font-bold text-teal-400 tracking-tight">FlowSync</span>
          <button
            className="md:hidden text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <nav>
          <ul className="space-y-4 text-lg">
            {["Dashboard", "My Flows", "Execution Logs", "Analytics", "Settings"].map((item, index) => (
              <li key={index} className="p-3 rounded-lg cursor-pointer transition duration-200 hover:bg-teal-500 hover:text-gray-900">
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-auto">
        {/* Navbar */}
        <header className="bg-gray-900 shadow-lg p-5 flex justify-between items-center border-b border-gray-700">
          <div className="flex items-center space-x-3">
            {/* Sidebar Toggle Button for Mobile */}
            <button className="md:hidden text-teal-400" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-bold tracking-wide text-neutral-300">
              Welcome to <span className="bg-clip-text bg-gradient-to-r from-teal-400 to-white text-transparent">FlowSync Dashboard</span>
            </h1>
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border border-gray-700 rounded-md w-1/3 md:w-1/4 bg-gray-800 text-white focus:outline-none focus:ring focus:ring-teal-400"
          />
          <div className="flex space-x-4">
            <Bell className="text-teal-400 cursor-pointer" />
            <User className="text-teal-400 cursor-pointer" />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 flex flex-col flex-grow">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {loading ? (
              <div className="col-span-4 text-center text-teal-400">Loading...</div>
            ) : (
              overviewStats.map((stat, index) => (
                <div key={index} className="p-5 bg-gray-900 shadow-xl rounded-lg border border-gray-800 flex items-center space-x-4">
                  {stat.icon}
                  <div>
                    <h2 className="text-lg font-semibold text-teal-400">{stat.title}</h2>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Workflow Chart */}
          <div className="bg-gray-900 p-5 shadow-lg rounded-lg border border-gray-800 mb-8">
            <h2 className="text-xl font-semibold text-teal-400 mb-4">Workflow Execution Trend</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={workflowData}>
                <CartesianGrid strokeDasharray="3 3" stroke="gray" />
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip wrapperClassName="text-gray-900" />
                <Line type="monotone" dataKey="executions" stroke="#14b8a6" strokeWidth={3} dot={{ stroke: "#14b8a6", strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Active Automations */}
          <div className="bg-gray-900 p-5 shadow-lg rounded-lg border border-gray-800 flex-grow flex flex-col">
            <h2 className="text-xl font-semibold text-teal-400 mb-4">Active Automations</h2>
            <ul className="space-y-3 flex-grow">
              {["API Monitoring", "Daily Reports", "Database Sync"].map((task, index) => (
                <li key={index} className="p-4 bg-gray-800 rounded-lg flex justify-between items-center border border-gray-700 hover:bg-gray-700">
                  <span>{task}</span>
                  <span className="text-sm text-teal-400">Running</span>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
