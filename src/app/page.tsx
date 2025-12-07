'use client';
import { Button, SlidingButton } from "@/components";
import Modal from "@/components/models/Model";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (

    <>



      <body className="container flex flex-col justify-between items-center min-w-screen antialiased  bg-white overflow-x-hidden" cz-shortcut-listen="true">


        <Modal
          open={open}
          setOpen={setOpen}
          header="Upload DSA Sheet"
          footer={
            <Button onClick={() => setOpen(false)} content="Get Started" buttonClass="btn-primary w-30 h-14 text-black" />
          }
        >

          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border border-dashed border-default-strong rounded-base">
              <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01" /></svg>
                <p className="mb-2 text-sm">Click the button below to upload</p>
                <p className="text-xs mb-4">Max. File Size: <span className="font-semibold">30MB</span></p>
                <button type="button" className="inline-flex items-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
                  <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                  Browse file
                </button>
              </div>
            </div>
            <input id="dropzone-file-2" type="file" className="hidden" />
          </div>

        </Modal>

        <div id="RolloutPageContent">
          {/* <nav className="fixed top-0 w-full bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-white">DSAFlow</span>
              </div>

              <div className="hidden md:flex md:items-center md:space-x-8">
                <a href="#" className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">Home</a>
                <a href="#features" className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">Features</a>
                <a href="#how-it-works" className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">How it Works</a>
                <a href="#dashboard-preview" className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">Dashboard</a>
                <a href="#" className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">Get Started</a>
              </div>

              <div className="md:hidden">
                <button type="button" className="text-neutral-300 hover:text-white p-2" id="mobile-menu-btn" aria-label="Toggle menu">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div id="mobile-menu" className="md:hidden hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="text-neutral-300 hover:text-white block px-3 py-2 text-base font-medium">Home</a>
                <a href="#features" className="text-neutral-300 hover:text-white block px-3 py-2 text-base font-medium">Features</a>
                <a href="#how-it-works" className="text-neutral-300 hover:text-white block px-3 py-2 text-base font-medium">How it Works</a>
                <a href="#dashboard-preview" className="text-neutral-300 hover:text-white block px-3 py-2 text-base font-medium">Dashboard</a>
                <a href="#" className="text-neutral-300 hover:text-white block px-3 py-2 text-base font-medium">Get Started</a>
              </div>
            </div>
          </div>
        </nav> */}


          <section id="hero" className="relative pt-24 pb-20 overflow-hidden">
            <div className="absolute inset-0 "></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
                <div className="space-y-8">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Your DSA journey, <span className="primary-dark">organized.</span> Automatically.
                  </h1>
                  <p className="text-lg md:text-xl text-neutral-300 max-w-2xl">
                    Upload your DSA question sheet and get a personalized learning flow. Stop searching what to study next — we plan it for you.
                  </p>

                  <div className="flex  sm:flex-row gap-4">
                    {/* <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200">
                    
                  </button> */}
                    <Button content="Get Started" buttonClass="btn-primary w-30 h-14 text-black" />
                    {/* <button className="px-8 py-4 border border-neutral-600 text-neutral-300 font-semibold rounded-lg hover:bg-neutral-800 hover:text-white transition-colors duration-200">
                    Upload Sheet
                  </button> */}

                    <SlidingButton onClick={() => setOpen(true)} arrowDirection="left" content="Upload Sheet" />

                  </div>
                </div>

                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1555209183-8facf96a4349?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZGFyayUyMGNvZGluZyUyMHdvcmtzcGFjZXxlbnwxfDB8fHwxNzY1MTE3NjkxfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Night coding setup with dark ambient lighting" className="w-full h-64 object-cover rounded-lg opacity-90" />

                    <img src="https://images.unsplash.com/photo-1754039984985-ef607d80113a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8ZGFyayUyMGNvZGluZyUyMHdvcmtzcGFjZXxlbnwxfDB8fHwxNzY1MTE3NjkxfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Programmer workspace with neon lights and code on screen" className="w-full h-64 object-cover rounded-lg opacity-90" />

                    <img src="https://images.unsplash.com/photo-1562813733-b31f71025d54?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8ZGFyayUyMGNvZGluZyUyMHdvcmtzcGFjZXxlbnwxfDB8fHwxNzY1MTE3NjkxfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Developer in dark room with multiple monitors" className="w-full h-64 object-cover rounded-lg opacity-90 col-span-2" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>


          </section>
          <section id="features" className=" py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features for DSA Success</h2>
                <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                  Everything you need to master Data Structures and Algorithms with personalized learning paths.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                  <img src="https://images.unsplash.com/photo-1555209183-8facf96a4349?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8Y29kaW5nJTIwZGFyayUyMHdvcmtzcGFjZXxlbnwxfDB8fHwxNzY1MTE3NzM0fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Night coding workspace" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Upload DSA Sheet</h3>
                  <p className="text-neutral-300">Upload any PDF, text file, or question list. Our AI reads and understands your DSA materials instantly.</p>
                </div>

                <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                  <img src="https://images.unsplash.com/photo-1754039984985-ef607d80113a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8Y29kaW5nJTIwZGFyayUyMHdvcmtzcGFjZXxlbnwxfDB8fHwxNzY1MTE3NzM0fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Code screen with neon lights" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Flow</h3>
                  <p className="text-neutral-300">Get a personalized question-solving flow that adapts to your learning pace and focuses on your weak areas.</p>
                </div>

                <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                  <img src="https://images.unsplash.com/photo-1562813733-b31f71025d54?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8Y29kaW5nJTIwZGFyayUyMHdvcmtzcGFjZXxlbnwxfDB8fHwxNzY1MTE3NzM0fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Anonymous coder with mask" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Smart Tracking</h3>
                  <p className="text-neutral-300">Track solved, pending, and revisit questions. Visual progress stats and streak system keep you motivated.</p>
                </div>

                <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                  <div className="w-full h-48 bg-neutral-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visual Analytics</h3>
                  <p className="text-neutral-300">Beautiful charts and graphs show your progress, completion rates, and daily streaks at a glance.</p>
                </div>

                <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                  <div className="w-full h-48 bg-neutral-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">🗺️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Topic Roadmap</h3>
                  <p className="text-neutral-300">Automatically created roadmap with topics in optimal order. Never miss essential concepts again.</p>
                </div>

                <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                  <div className="w-full h-48 bg-neutral-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">📈</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Study History</h3>
                  <p className="text-neutral-300">Complete history of your learning journey. See how far you've come and what's next.</p>
                </div>
              </div>
            </div>
          </section>
          <section id="how-it-works" className=" py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
                <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                  Get your personalized DSA learning flow in just 4 simple steps
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Upload Your DSA Sheet</h3>
                      <p className="text-neutral-300">Drag &amp; drop your PDF, text file, or paste your question list. We accept all formats.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">System Analyzes Content</h3>
                      <p className="text-neutral-300">Our AI reads and categorizes questions by topics, difficulty, and importance.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Personalized Path Generated</h3>
                      <p className="text-neutral-300">Get a custom roadmap with optimal question order based on your skill level and goals.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Solve &amp; Track Progress</h3>
                      <p className="text-neutral-300">Mark questions as solved, get daily streaks, and watch your skills grow with visual analytics.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <img src="https://images.unsplash.com/photo-1555209183-8facf96a4349?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZGFyayUyMGNvZGluZyUyMHdvcmtzcGFjZXxlbnwxfDB8fHwxNzY1MTE3NjkxfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Night coding setup" className="rounded-lg w-full h-48 object-cover" />
                  <img src="https://images.unsplash.com/photo-1754039984985-ef607d80113a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8ZGFyayUyMGNvZGluZyUyMHdvcmtzcGFjZXxlbnwxfDB8fHwxNzY1MTE3NjkxfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Neon lit coding environment" className="rounded-lg w-full h-48 object-cover" />
                  <img src="https://images.unsplash.com/photo-1562813733-b31f71025d54?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8ZGFyayUyMGNvZGluZyUyMHdvcmtzcGFjZXxlbnwxfDB8fHwxNzY1MTE3NjkxfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Developer workspace setup" className="rounded-lg w-full h-48 object-cover" />
                </div>
              </div>
            </div>
          </section>
          <section id="dashboard-preview" className="bg-neutral-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dashboard Preview</h2>
                <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                  See your progress, track your streaks, and manage your DSA journey with our intuitive dashboard
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-white">Overall Progress</h3>
                      <span className="primary-dark  font-bold">67%</span>
                    </div>
                    <div className="w-full bg-neutral-700 rounded-full h-2">
                      <div className="btn-primary  h-2 rounded-full" ></div>
                    </div>
                    <p className="text-neutral-300 mt-2 text-sm">234 questions solved out of 350</p>
                  </div>

                  <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                    <h3 className="text-lg font-semibold text-white mb-4">Daily Streak</h3>
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">🔥</div>
                      <div>
                        <div className="text-2xl font-bold text-white">15 days</div>
                        <div className="text-neutral-300 text-sm">Keep it up!</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                    <h3 className="text-lg font-semibold text-white mb-4">Question Flow</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-neutral-300 text-sm">Binary Search - Medium</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-neutral-300 text-sm">Dynamic Programming - Hard</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-neutral-300 text-sm">Graph Traversal - Medium</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <img src="https://images.unsplash.com/photo-1702479744048-0351261e1ac1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZGFyayUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfDB8fHwxNzY1MTE3ODYyfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Dashboard interface preview" className="rounded-lg w-full h-64 object-cover" />
                  <img src="https://images.unsplash.com/photo-1639060015191-9d83063eab2a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8ZGFyayUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfDB8fHwxNzY1MTE3ODYyfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Modern dashboard view" className="rounded-lg w-full h-48 object-cover" />
                  <img src="https://images.unsplash.com/photo-1677044983562-5bfc4af692e4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8ZGFyayUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfDB8fHwxNzY1MTE3ODYyfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Performance tracking interface" className="rounded-lg w-full h-32 object-cover" />
                </div>
              </div>

              <div className="mt-12 text-center">
                <button className="btn-primary w-50 h-14 text-black text-white px-8 py-3 rounded-lg transition-colors duration-200">
                  Start Your Free Trial
                </button>
              </div>
            </div>
          </section>

          <footer id="footer" className=" border-t border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="text-xl font-bold text-white mb-4">DSAFlow</div>
                  <p className="text-neutral-300 text-sm">
                    Your DSA journey, organized. Automatically.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-4">Product</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Features</a></li>
                    <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Sign Up</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">DSA Guide</a></li>
                    <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Support</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">About</a></li>
                    <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Contact</a></li>
                    <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Terms</a></li>
                    <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Privacy</a></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-neutral-300 text-sm">
                  © 2024 DSAFlow. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-neutral-300 hover:text-white transition-colors">Twitter</a>
                  <a href="#" className="text-neutral-300 hover:text-white transition-colors">GitHub</a>
                  <a href="#" className="text-neutral-300 hover:text-white transition-colors">Discord</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </>

  );
}
