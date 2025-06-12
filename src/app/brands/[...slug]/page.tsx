import BrandDetail from "./BrandDetail";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import FaqComponent from "./FaqComponent";
const Page: React.FC = () => {
  return (
    <div>
      <BrandDetail />
      <FaqComponent />
      <GoogleReviews />
    </div>
  );
};

export default Page;
