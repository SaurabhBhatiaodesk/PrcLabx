import MainHeading from "@/components/ManinHeading/MainHeading";
import React from "react";

type Step = {
    step: string;
    customerAction: string;
    ourAction: string;
    remarks: string;
};

const TableData: React.FC = () => {
    const steps: Step[] = [
        {
            step: "Packing",
            customerAction: "Securely pack all screens and prepare the box for shipping.",
            ourAction: "N/A",
            remarks: "",
        },
        {
            step: "Pickup Address",
            customerAction: "Provide us with the pickup address.",
            ourAction: "We will send you the shipping label (connote).",
            remarks: "",
        },
        {
            step: "Connote Attachment",
            customerAction: "Attach the shipping label (connote) we send you to the box.",
            ourAction: "N/A",
            remarks: "",
        },
        {
            step: "Book Pickup",
            customerAction:
                "Book a pickup from the StarTrack website. The driver will come to collect the box; no need to visit the post office.",
            ourAction: "N/A",
            remarks: "Call Bharat if you are unsure how to book. He will book it on your behalf. (Ph. 0406060607)",
        },
        {
            step: "Receive Box",
            customerAction: "N/A",
            ourAction: "We receive the box at our facility.",
            remarks: "",
        },
        {
            step: "Screen Testing",
            customerAction: "N/A",
            ourAction:
                "We test all screens one by one and prepare a detailed report. We provide a detailed report, including photos and explanations for any downgrades or rejections.",
            remarks: "",
        },
        {
            step: "Testing Report",
            customerAction:
                "Review the testing report we provide, with photos and details of any B-grade or rejected screens.",
            ourAction: "We will wait for your approval before proceeding.",
            remarks: "",
        },
        {
            step: "Customer Approval",
            customerAction: "Approve the report or request unapproved screens to be returned.",
            ourAction: "N/A",
            remarks: "",
        },
        {
            step: "Return Shipping Screens",
            customerAction: "N/A",
            ourAction:
                "We return any unapproved screens as requested. (No Charge to You) Or we dispose of them with your permission.",
            remarks: "",
        },
        {
            step: "Transparency",
            customerAction: "Send us only good screens to ensure a smooth process.",
            ourAction:
                "We ensure full transparency and explain why any screens were downgraded or rejected.",
            remarks: "",
        },
        {
            step: "Payment",
            customerAction: "Provide us your Bank Detail.",
            ourAction: "We will transfer payment to your bank.",
            remarks: "",
        },
    ];

    return (
        <div className="max-container">
            <div className="py-3">
                <MainHeading Heading="Our Delevery Process"  svg_stroke="var(--alpha)" color="var(--prc)"/>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                        <tr className="">
                            <th className="border-b border-r px-4 py-2 text-left bg-prc text-white">Step</th>

                            <th className="border-b border-r px-4 py-2 text-left bg-prc text-white">Customer Action</th>
                            <th className="border-b border-r px-4 py-2 text-left bg-prc text-white">Our Action</th>
                            <th className="border-b border-r px-4 py-2 text-left bg-prc text-white">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {steps.map((step, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? "" : ""}`}>
                                <td className="border border-gray-300 px-4 py-2">{step.step}</td>
                                <td className="border border-gray-300 px-4 py-2">{step.customerAction}</td>
                                <td className="border border-gray-300 px-4 py-2">{step.ourAction}</td>
                                <td className="border border-gray-300 px-4 py-2">{step.remarks}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="my-9">
                <div className="my-4 px-[20px] py-[6px] border-[var(--prc)] border-[2px] rounded-[15px] bg-[#B2F5EA] shadow-[5px_4px_28px_1px_#B2F5EA] animate-pulse transition-all duration-300 text-[18px] tracking-[1.5px]">
                    <span className="text-center block font-bold">Additional Notes</span>
                    <ul className="mt-[10px] list-disc pl-[20px] text-sm">
                        <li className="list-none"><strong className="text-prc font-bold">No Obligation:</strong> There s no obligation on shipping charges. We bear those expenses.</li>
                        <li className="list-none"><strong className="text-prc font-bold">Fair Deal:</strong> We ask customers to send good screens, and in return, we will keep full transparency on the quality check outcome.</li>
                        <li className="list-none"><strong className="text-prc font-bold">Time Respect:</strong> We value your time and have made the process as smooth as possible. Please respect our time by sending quality screens only.</li>
                    </ul>
                </div>

            </div>


        </div>
    );
};

export default TableData;
