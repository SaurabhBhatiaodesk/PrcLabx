// "use client"; // Enables client-side components in Next.js

// import EditPage from "@/components/EditPage/EditPage";

// export default function page() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <EditPage />
//     </div>
//   );
// }





"use client";

import dynamic from "next/dynamic";

// Dynamically import the EditPage component with ssr: false
const EditPage = dynamic(() => import("@/components/EditPage/EditPage"), {
  ssr: false,
});

export default function Page() {
  return (
    <div style={{ padding: "20px" }}>
      <EditPage />
    </div>
  );
}
