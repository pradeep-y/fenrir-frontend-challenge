import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-[#071c1f] via-[#0a2f33] to-[#ff6a00]">

      <div className="flex-1 flex items-center justify-center px-6 sm:px-10 lg:px-20 py-16 lg:py-0 text-white">
        <div className="max-w-xl text-center lg:text-left">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 lg:mb-8">
            Expert level Cybersecurity
            <br />
            in <span className="text-teal-400">hours</span> not weeks.
          </h1>

          <div className="space-y-4 sm:space-y-5 text-gray-300 text-base sm:text-lg">
            <p>✔ Effortlessly spider and map targets</p>
            <p>✔ Deliver validated findings in hours</p>
            <p>✔ Generate enterprise-grade reports</p>
          </div>

          <div className="mt-8 lg:mt-10 text-sm text-gray-400">
            ⭐ Trustpilot Rated 4.5/5.0
          </div>
        </div>
      </div>


      <div className="flex-1 flex items-center justify-center px-6 sm:px-10 lg:px-0 py-10 lg:py-0">

        <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-6 sm:p-8 lg:p-10">

          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8">
            Sign up
          </h2>

          <div className="space-y-4 sm:space-y-5">

            <Input placeholder="First name*" />
            <Input placeholder="Last name*" />
            <Input placeholder="Email address*" />
            <Input placeholder="Password*" type="password" />

<button
  onClick={() => navigate("/dashboard")}
  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-medium transition"
>
  Create account
</button>

          </div>

        </div>

      </div>
    </div>
  );
}

function Input({ placeholder, type = "text" }: any) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
    />
  );
}