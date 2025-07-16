import React from 'react'

function getPrivacyPolicySections() {
  return [
    {
      heading: 'Privacy Policy',
      className: 'text-3xl font-bold mb-6',
      content: [
        'Welcome to Phone Repair Centre. Your privacy is important to us. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you interact with our services, either in-store, through our website, or via other means of communication.',
        'By using our services, you consent to the practices described in this policy.'
      ]
    },
    {
      heading: '1. Information We Collect',
      className: 'text-xl font-semibold mt-4 mb-2',
      content: [
        'When you visit our store, use our website, or contact us, we may collect the following types of personal information:',
        <ul className="list-disc list-inside text-sm mb-4 space-y-1" key="info-list">
          <li><span className="font-semibold">Contact Information:</span> Name, phone number, email address, and physical address.</li>
          <li><span className="font-semibold">Device Information:</span> Device make, model, serial number, and issue descriptions provided for repair.</li>
          <li><span className="font-semibold">Payment Information:</span> Payment method details (note: we do not store credit/debit card information).</li>
          <li><span className="font-semibold">Service History:</span> Details of previous repairs, purchases, and communications.</li>
          <li><span className="font-semibold">Website Usage Data:</span> IP address, browser type, device information, and usage patterns (collected via cookies and similar technologies).</li>
        </ul>
      ]
    },
    {
      heading: '2. How We Use Your Information',
      className: 'text-xl font-semibold mt-4 mb-2',
      content: [
        'Our Phone Repair Centre uses your personal data solely for legitimate business purposes and service delivery. This includes:',
        <ul className="list-disc list-inside text-sm mb-4 space-y-1" key="use-list">
          <li>Processing repair orders and product sales</li>
          <li>Communicating updates, service confirmations, and repair statuses</li>
          <li>Issuing invoices and handling payments or refunds</li>
          <li>Managing warranty claims and service records</li>
          <li>Responding to customer inquiries and support requests</li>
          <li>Improving the quality of our services and website experience</li>
        </ul>,
        'We do not sell, rent, or trade your personal data with third parties.'
      ]
    },
    {
      heading: '3. Data Storage and Protection',
      className: 'text-xl font-semibold mt-4 mb-2',
      content: [
        'We take the security of your personal information seriously. All personal data is stored securely, and we employ appropriate technical and organizational measures to protect it against unauthorized access, disclosure, or misuse. Access to customer data is restricted to authorized personnel only and used strictly for service-related purposes.'
      ]
    },
    {
      heading: '4. Sharing Your Information',
      className: 'text-xl font-semibold mt-4 mb-2',
      content: [
        'We may share your personal information with third parties only in the following cases:',
        <ul className="list-disc list-inside text-sm mb-4 space-y-1" key="share-list">
          <li><span className="font-semibold">Service Partners:</span> Trusted vendors involved in order fulfillment (e.g., courier services).</li>
          <li><span className="font-semibold">Legal Requirements:</span> If required by law or to respond to valid legal processes.</li>
          <li><span className="font-semibold">Consent-Based Sharing:</span> When you have given us permission to share your information for specific purposes.</li>
        </ul>,
        'We do not share your data for marketing purposes without your explicit consent.'
      ]
    },
    {
      heading: '5. Data Retention',
      className: 'text-xl font-semibold mt-4 mb-2',
      content: [
        'We retain your personal information only for as long as necessary to fulfill the purpose it was collected for, including legal, accounting, or reporting obligations. For example, we may retain repair records for warranty validation or service history reference.'
      ]
    },
    {
      heading: '6. Your Rights',
      className: 'text-xl font-semibold mt-4 mb-2',
      content: [
        'As a customer, you have the right to:',
        <ul className="list-disc list-inside text-sm mb-4 space-y-1" key="rights-list">
          <li>Access the personal information we hold about you</li>
          <li>Request corrections to your information if it is inaccurate</li>
          <li>Request deletion of your information, subject to legal or service-related obligations</li>
          <li>Opt-out of any direct communications (where applicable)</li>
        </ul>,
        'To exercise any of these rights, please contact our support team using the contact details below.'
      ]
    },
    {
      heading: '7. Cookies and Website Tracking',
      className: 'text-xl font-semibold mt-4 mb-2',
      content: [
        'Our website may use cookies and similar technologies to improve user experience, analyze traffic, and personalize content. By using our website, you consent to the use of these technologies. You can manage or disable cookies through your browser settings.'
      ]
    },
    {
      heading: '8. Changes to This Policy',
      className: 'text-xl font-semibold mt-4 mb-2',
      content: [
        'Phone Repair Centre reserves the right to update this Privacy Policy at any time. When changes are made, we will revise the “Effective Date” above and post the updated version on our website. Continued use of our services indicates your acceptance of the revised policy.'
      ]
    },
    {
      heading: '9. Contact Us',
      className: 'text-xl font-semibold mt-4 mb-2',
      content: [
        'If you have any questions or concerns about this Privacy Policy or how we handle your information, please contact:',
        <a href="mailto:service@prcrepair.com.au" className="text-blue-600 underline" key="email">service@prcrepair.com.au</a>
      ]
    }
  ];
}

const page = () => {
  const sections = getPrivacyPolicySections();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 select-none">
      {sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h2 className={section.className}>{section.heading}</h2>
          {section.content.map((c, i) =>
            typeof c === 'string' ? (
              <p className="text-base mb-2" key={i}>{c}</p>
            ) : (
              c
            )
          )}
        </div>
      ))}
    </div>
  )
}

export default page