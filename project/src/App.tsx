import React, { useState, useEffect } from "react";
import {
  Brain,
  MessageSquare,
  Network,
  Database,
  Github,
  Linkedin,
  Twitter,
  Moon,
  Sun,
  ArrowUp,
  Copy,
  Check,
} from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyClick = async () => {
    const command =
      "docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v ai-hub:/app/backend/data --name ai-hub --restart always ghcr.io/ai-hub/ai-hub:main";
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Brain className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xl font-bold">AI HUB</span>
              </div>
              <div className="flex items-center space-x-8">
                <a
                  href="#features"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Features
                </a>
                <a
                  href="#installation"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Installation
                </a>
                <a
                  href="#about"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  About
                </a>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                ></button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="h-screen pt-16">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src="dist/assets/ai-hub.png"
                alt="AI HUB"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                <div className="flex justify-center space-x-24 mb-4">
                  <a
                    href="https://github.com/TheWatcher01/ai-hub"
                    className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Try Now
                  </a>
                  <a
                    href="#features"
                    className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
                <p className="text-white font-medium text-center text-xl max-w-2xl px-5 py-3 bg-black/50 rounded-lg mb-2">
                  Your open-source platform for seamless interaction with AI
                  models, featuring RAG technology and multi-model support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center">
                <div className="flex justify-center mb-4">
                  <MessageSquare className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Intuitive User Interface
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Responsive interface accessible on all devices (PC, mobile)
                  with full support for Markdown and LaTeX.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center">
                <div className="flex justify-center mb-4">
                  <Network className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Multi-Model Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Simultaneously use multiple AI models, with support for both
                  local Ollama and OpenAI-compatible APIs.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center">
                <div className="flex justify-center mb-4">
                  <Database className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Integrated RAG Technology
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Analyze documents and web pages using RAG technology, allowing
                  AI to respond based on your data.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Installation Section */}
        <section id="installation" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Quick Installation
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 dark:bg-black rounded-lg p-4 mb-4 relative">
                <pre className="text-gray-300 overflow-x-auto">
                  <code>
                    git clone https://github.com/TheWatcher01/ai-hub.git
                  </code>
                </pre>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "git clone https://github.com/TheWatcher01/ai-hub.git"
                    );
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white"
                >
                  {copied ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="bg-gray-900 dark:bg-black rounded-lg p-4 mb-6 relative">
                <pre className="text-gray-300 overflow-x-auto">
                  <code>cd ai-hub docker compose up -d</code>
                </pre>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "cd ai-hub\ndocker compose up -d"
                    );
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white"
                >
                  {copied ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  System Requirements
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Git and Docker installed on your system</li>
                  <li>16GB RAM minimum</li>
                  <li>100GB available disk space</li>
                  <li>Internet connection for initial download</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
                AI HUB was born out of the need for a user-friendly and
                open-source interface to interact with local AI models open and
                close sources. This project allows the use of advanced AI
                technologies in a private, secure, and customizable manner.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
                Developed as part of the portfolio for{" "}
                <a
                  href="https://www.holbertonschool.com/"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Holberton School
                </a>
                , AI HUB represents our vision of accessible and ethical AI.
              </p>
              <div className="flex flex-col items-center mb-8">
                <p className="text-lg font-medium mb-4">
                  Check out the project on GitHub:
                </p>
                <a
                  href="https://github.com/TheWatcher01/ai-hub"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors mb-4 flex items-center"
                >
                  <Github className="mr-2 w-5 h-5" />
                  TheWatcher01/ai-hub
                </a>
              </div>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/TheWatcher01/ai-hub"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  title="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/teddy-deberdt/"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/DeberdtTeddy"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  title="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Developer:{" "}
                  <a
                    href="https://www.linkedin.com/in/teddy-deberdt/"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    Teddy Deberdt
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>&copy; 2024 AI HUB. All rights reserved.</p>
              <p className="mt-2">
                <a
                  href="https://github.com/TheWatcher01/ai-hub"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
        </footer>
        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
