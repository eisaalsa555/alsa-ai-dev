import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white font-sans">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-teal-400">SaasPulse</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-gray-300 transition duration-300">Features</a>
          <a href="#pricing" className="hover:text-gray-300 transition duration-300">Pricing</a>
          <a href="#testimonials" className="hover:text-gray-300 transition duration-300">Testimonials</a>
          <button className="bg-teal-500 hover:bg-teal-600 px-5 py-2 rounded-lg font-semibold transition duration-300">Sign Up</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fadeInUp">
          Unlock Your Business Potential
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fadeInUp delay-200">
          Efficient, scalable, and intuitive solutions to streamline your workflows and boost productivity.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition duration-300 animate-fadeInUp delay-400">
          Get Started for Free
        </button>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 text-teal-400">Simple & Transparent Pricing</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Basic Plan */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-2xl flex flex-col items-center border border-purple-700 hover:border-teal-500 transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-bold mb-4 text-teal-300">Starter</h4>
              <p className="text-5xl font-extrabold mb-4">$19<span className="text-xl font-normal">/month</span></p>
              <ul className="text-gray-300 text-lg mb-8 space-y-3">
                <li>✓ 5 Projects</li>
                <li>✓ 10 GB Storage</li>
                <li>✓ Basic Analytics</li>
                <li>✓ Email Support</li>
              </ul>
              <button className="bg-teal-500 hover:bg-teal-600 px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition duration-300">Choose Plan</button>
            </div>

            {/* Pro Plan */}
            <div className="bg-teal-600 p-8 rounded-xl shadow-2xl flex flex-col items-center border border-teal-500 transform hover:scale-105 transition duration-300 relative overflow-hidden">
              <span className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg">Popular</span>
              <h4 className="text-2xl font-bold mb-4">Pro</h4>
              <p className="text-5xl font-extrabold mb-4">$49<span className="text-xl font-normal">/month</span></p>
              <ul className="text-gray-100 text-lg mb-8 space-y-3">
                <li>✓ Unlimited Projects</li>
                <li>✓ 100 GB Storage</li>
                <li>✓ Advanced Analytics</li>
                <li>✓ Priority Support</li>
                <li>✓ Custom Integrations</li>
              </ul>
              <button className="bg-gray-900 hover:bg-gray-700 text-teal-400 px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition duration-300">Choose Plan</button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-2xl flex flex-col items-center border border-purple-700 hover:border-teal-500 transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-bold mb-4 text-teal-300">Enterprise</h4>
              <p className="text-5xl font-extrabold mb-4">$99<span className="text-xl font-normal">/month</span></p>
              <ul className="text-gray-300 text-lg mb-8 space-y-3">
                <li>✓ All Pro Features</li>
                <li>✓ Unlimited Storage</li>
                <li>✓ Dedicated Account Mgr</li>
                <li>✓ 24/7 Phone Support</li>
              </ul>
              <button className="bg-teal-500 hover:bg-teal-600 px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition duration-300">Choose Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 text-teal-400">What Our Customers Say</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-xl border border-purple-700 hover:border-blue-500 group transition duration-300">
              <p className="text-lg italic text-gray-200 mb-6 group-hover:text-white transition duration-300">
                "SaasPulse has transformed how we manage our projects. The intuitive interface and powerful features are a game-changer!"
              </p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cfdce53c?w=800&h=600&fit=crop" alt="Client 1" className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-teal-400"/>
                <div>
                  <p className="font-bold text-teal-300">Jane Doe</p>
                  <p className="text-sm text-gray-400">CEO, Tech Solutions</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-xl border border-purple-700 hover:border-blue-500 group transition duration-300">
              <p className="text-lg italic text-gray-200 mb-6 group-hover:text-white transition duration-300">
                "The analytics dashboard provides invaluable insights. We've seen a significant boost in efficiency since adopting SaasPulse."
              </p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1507003211169-e69fe1c5a392?w=800&h=600&fit=crop" alt="Client 2" className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-teal-400"/>
                <div>
                  <p className="font-bold text-teal-300">John Smith</p>
                  <p className="text-sm text-gray-400">CTO, Innovate Corp</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-xl border border-purple-700 hover:border-blue-500 group transition duration-300">
              <p className="text-lg italic text-gray-200 mb-6 group-hover:text-white transition duration-300">
                "Customer support is top-notch! Any queries are resolved quickly and effectively. Highly recommend!"
              </p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop" alt="Client 3" className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-teal-400"/>
                <div>
                  <p className="font-bold text-teal-300">Emily White</p>
                  <p className="text-sm text-gray-400">Operations Manager, Growth Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold mb-6">Ready to Elevate Your Business?</h3>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Join thousands of satisfied customers who are achieving more with SaasPulse.
          </p>
          <button className="bg-white text-blue-700 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SaasPulse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
