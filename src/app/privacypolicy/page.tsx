import React from 'react'

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-base mb-4">Welcome to Phone Repair Centre. Your privacy is important to us. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you interact with our services, either in-store, through our website, or via other means of communication.</p>
      <p className="text-sm mb-6">By using our services, you consent to the practices described in this policy.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">1. Information We Collect</h2>
      <p className="text-base mb-2">When you visit our store, use our website, or contact us, we may collect the following types of personal information:</p>
      <ul className="list-disc list-inside text-sm mb-4 space-y-1">
        <li><span className="font-semibold">Contact Information:</span> Name, phone number, email address, and physical address.</li>
        <li><span className="font-semibold">Device Information:</span> Device make, model, serial number, and issue descriptions provided for repair.</li>
        <li><span className="font-semibold">Payment Information:</span> Payment method details (note: we do not store credit/debit card information).</li>
        <li><span className="font-semibold">Service History:</span> Details of previous repairs, purchases, and communications.</li>
        <li><span className="font-semibold">Website Usage Data:</span> IP address, browser type, device information, and usage patterns (collected via cookies and similar technologies).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">2. How We Use Your Information</h2>
      <p className="text-base mb-2">Our Phone Repair Centre uses your personal data solely for legitimate business purposes and service delivery. This includes:</p>
      <ul className="list-disc list-inside text-sm mb-4 space-y-1">
        <li>Processing repair orders and product sales</li>
        <li>Communicating updates, service confirmations, and repair statuses</li>
        <li>Issuing invoices and handling payments or refunds</li>
        <li>Managing warranty claims and service records</li>
        <li>Responding to customer inquiries and support requests</li>
        <li>Improving the quality of our services and website experience</li>
      </ul>
      <p className="text-sm mb-6">We do not sell, rent, or trade your personal data with third parties.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. Data Storage and Protection</h2>
      <p className="text-base mb-4">We take the security of your personal information seriously. All personal data is stored securely, and we employ appropriate technical and organizational measures to protect it against unauthorized access, disclosure, or misuse.<br />
      Access to customer data is restricted to authorized personnel only and used strictly for service-related purposes.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">4. Sharing Your Information</h2>
      <p className="text-base mb-2">We may share your personal information with third parties only in the following cases:</p>
      <ul className="list-disc list-inside text-sm mb-4 space-y-1">
        <li><span className="font-semibold">Service Partners:</span> Trusted vendors involved in order fulfillment (e.g. courier services).</li>
        <li><span className="font-semibold">Legal Requirements:</span> If required by law or to respond to valid legal processes.</li>
        <li><span className="font-semibold">Consent-Based Sharing:</span> When you have given us permission to share your information for specific purposes.</li>
      </ul>
      <p className="text-sm mb-6">We do not share your data for marketing purposes without your explicit consent.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">5. Data Retention</h2>
      <p className="text-base mb-4">We retain your personal information only for as long as necessary to fulfill the purpose it was collected for, including legal, accounting, or reporting obligations.<br />
      For example, we may retain repair records for warranty validation or service history reference.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">6. Your Rights</h2>
      <p className="text-base mb-2">As a customer, you have the right to:</p>
      <ul className="list-disc list-inside text-sm mb-4 space-y-1">
        <li>Access the personal information we hold about you</li>
        <li>Request corrections to your information if it is inaccurate</li>
        <li>Request deletion of your information, subject to legal or service-related obligations</li>
        <li>Opt-out of any direct communications (where applicable)</li>
      </ul>
      <p className="text-sm mb-6">To exercise any of these rights, please contact our support team using the contact details below.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">7. Cookies and Website Tracking</h2>
      <p className="text-base mb-4">Our website may use cookies and similar technologies to improve user experience, analyze traffic, and personalize content. By using our website, you consent to the use of these technologies.<br />
      You can manage or disable cookies through your browser settings.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">8. Changes to This Policy</h2>
      <p className="text-base mb-4">Phone Repair Centre reserves the right to update this Privacy Policy at any time. When changes are made, we will revise the “Effective Date” above and post the updated version on our website. Continued use of our services indicates your acceptance of the revised policy.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">9. Contact Us</h2>
      <p className="text-base">If you have any questions or concerns about this Privacy Policy or how we handle your information, please contact:<br />
      <a href="mailto:service@prcrepair.com.au" className="text-blue-600 underline">service@prcrepair.com.au</a></p>
    </div>
  )
}

export default page