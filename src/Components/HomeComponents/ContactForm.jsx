import { useState } from "react";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "India",
  "China",
  "Japan",
  "Brazil",
  "South Africa",
  "Mexico",
  "Singapore",
  "Netherlands",
  "Italy",
  "Spain",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    jobTitle: "",
    company: "",
    country: "",
    message: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-gray-50 py-12 px-4 flex justify-center">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">
            Every day, Xteriya leverages AI-infused technologies
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-1">
            to empower clients globally to build a more resilient, secure, and sustainable future.
          </p>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
            How can we help you?
          </h3>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          {/* First Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1 text-sm">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1 text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Work Email */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-medium mb-1 text-sm">Work Email</label>
            <input
              type="email"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Job Title */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1 text-sm">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1 text-sm">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Country Dropdown */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-medium mb-1 text-sm">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select your country</option>
              {countries.map((c, idx) => (
                <option key={idx} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-medium mb-1 text-sm">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center md:col-span-2 text-sm">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-2 w-4 h-4 accent-blue-500"
              required
            />
            <label className="text-gray-700">I agree to the terms and conditions</label>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-black text-white font-semibold py-2 px-4 rounded-md text-sm transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
