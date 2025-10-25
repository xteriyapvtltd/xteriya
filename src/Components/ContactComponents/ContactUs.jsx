import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import heroImg from "../../assets/contact-hero.jpg"; // 👈 add a nice image (e.g., cityscape, office, etc.)
const countries = ["United States", "Canada", "UK", "India", "Australia", "Germany", "Other"];
const industries = ["Technology", "Healthcare", "Finance", "Education", "Logistics", "Other"];
const enquiryTypes = ["General Inquiry", "Support", "Sales", "Partnership"];

export default function ContactUs() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    organization: "",
    phone: "",
    enquiryType: "",
    country: "",
    industry: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const regex = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[0-9]{7,15}$/,
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    let temp = {};
    temp.firstName = formData.firstName ? "" : "First name is required";
    temp.lastName = formData.lastName ? "" : "Last name is required";
    temp.email = regex.email.test(formData.email) ? "" : "Valid email is required";
    temp.jobTitle = formData.jobTitle ? "" : "Job title is required";
    temp.organization = formData.organization ? "" : "Organization name is required";
    temp.phone = regex.phone.test(formData.phone) ? "" : "Valid phone number is required";
    temp.enquiryType = formData.enquiryType ? "" : "Please select enquiry type";
    temp.country = formData.country ? "" : "Country is required";
    temp.industry = formData.industry ? "" : "Industry is required";
    temp.message = formData.message ? "" : "Message is required";
    temp.terms = formData.terms ? "" : "You must agree to terms";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        organization: "",
        phone: "",
        enquiryType: "",
        country: "",
        industry: "",
        message: "",
        terms: false,
      });
      setErrors({});
    }
  };

  return (

    <>
    
    
    <div className="w-full bg-gray-50">
      {/* 🔹 Hero Section */}
      <section
        className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center"
        data-aos="fade-up"
      >
        <img
          src={heroImg}
          alt="Contact Xteriya"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl mt-3 text-gray-200">
            We’d love to hear from you — let’s connect!
          </p>
        </div>
      </section>

      {/* 🔹 Floating Form Box */}
      <section className="relative -mt-20 mb-20 z-20 px-4" data-aos="fade-up">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* First Name */}
            <div className="flex flex-col">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.firstName && <span className="text-red-500 text-sm mt-1">{errors.firstName}</span>}
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.lastName && <span className="text-red-500 text-sm mt-1">{errors.lastName}</span>}
            </div>

            {/* Email */}
            <div className="flex flex-col md:col-span-2">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
              />
              {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
            </div>

            {/* Job Title */}
            <div className="flex flex-col">
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.jobTitle && <span className="text-red-500 text-sm mt-1">{errors.jobTitle}</span>}
            </div>

            {/* Organization Name */}
            <div className="flex flex-col">
              <input
                type="text"
                name="organization"
                placeholder="Organization Name"
                value={formData.organization}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.organization && <span className="text-red-500 text-sm mt-1">{errors.organization}</span>}
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
            </div>

            {/* Enquiry Type */}
            <div className="flex flex-col">
              <select
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select Enquiry Type</option>
                {enquiryTypes.map((e, i) => (
                  <option key={i} value={e}>{e}</option>
                ))}
              </select>
              {errors.enquiryType && <span className="text-red-500 text-sm mt-1">{errors.enquiryType}</span>}
            </div>

            {/* Country */}
            <div className="flex flex-col">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select Country</option>
                {countries.map((c, i) => (
                  <option key={i} value={c}>{c}</option>
                ))}
              </select>
              {errors.country && <span className="text-red-500 text-sm mt-1">{errors.country}</span>}
            </div>

            {/* Industry */}
            <div className="flex flex-col">
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select Industry</option>
                {industries.map((i, idx) => (
                  <option key={idx} value={i}>{i}</option>
                ))}
              </select>
              {errors.industry && <span className="text-red-500 text-sm mt-1">{errors.industry}</span>}
            </div>

            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none w-full"
              />
              {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
            </div>

            {/* Terms */}
            <div className="flex items-center md:col-span-2">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mr-3 w-4 h-4 accent-blue-600"
              />
              <label className="text-gray-700 text-sm">I agree to the terms and conditions</label>
              {errors.terms && <span className="text-red-500 text-sm mt-1 ml-3">{errors.terms}</span>}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-2 px-8 rounded-lg text-sm tracking-wide transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
    </>
  );
}
