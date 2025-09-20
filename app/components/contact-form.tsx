import React from 'react';
import { Button } from "@/components/ui/button";

const ContactForm = () => {
    const countryCodes = [
        { value: '+1', label: '🇺🇸 +1', country: 'United States' },
        { value: '+44', label: '🇬🇧 +44', country: 'United Kingdom' },
        { value: '+91', label: '🇮🇳 +91', country: 'India' },
    ];

    return (
        <div className="flex items-center justify-center h-full w-full max-w-md mx-auto">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl w-full border border-gray-200">
                <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-stone-700 mb-2">Get a Doctor&apos;s Opinion</h2>
                    <p className="text-base text-stone-600">in 24 Hours</p>
                </div>

                <form
                    action="https://formsubmit.co/care@nilewellness.com"
                    method="POST"
                    className="space-y-4"
                >
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_subject" value="New Treatment Plan Request from Hero Form" />
                    <input type="hidden" name="_captcha" value="false" />

                    {/* Name Field */}
                    <input
                        name="name"
                        type="text"
                        placeholder="Name*"
                        required
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent text-gray-700 text-sm transition-all duration-200"
                    />

                    {/* Email Field */}
                    <input
                        name="email"
                        type="email"
                        placeholder="Email*"
                        required
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent text-gray-700 text-sm transition-all duration-200"
                    />

                    {/* Phone Input with Country Code */}
                    <div className="flex gap-2">
                        <select
                            name="countryCode"
                            defaultValue="+91"
                            className="p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent text-gray-700 bg-white text-sm max-w-[130px] transition-all duration-200"
                            title="Select your country code"
                        >
                            {countryCodes.map((code) => (
                                <option key={code.value} value={code.value} title={code.country}>
                                    {code.label}
                                </option>
                            ))}
                        </select>
                        <input
                            name="phone"
                            type="tel"
                            placeholder="Mobile Number*"
                            required
                            className="flex-1 p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent text-gray-700 text-sm transition-all duration-200"
                        />
                    </div>

                    {/* Medical Description */}
                    <textarea
                        name="medicalDescription"
                        placeholder="Briefly describe your medical emergency..."
                        rows={4}
                        required
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent resize-none text-gray-700 text-sm transition-all duration-200"
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full bg-[#7b6824] hover:bg-stone-700 text-white text-base py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        Get Free Treatment Plan
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;