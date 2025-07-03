import React from "react";
import Image from "next/image";


import laptoprep from "../../../public/Images/laptoprep.png";
import BlogList from "./BlogListing";
import Strip from "../../components/Strip/Strip";

const Blogs = () => {
  const backgroundImageUrl = laptoprep; // Path to your background image
  return (
    <>
<Strip title="Our Blog"/>

      <BlogList />
    </>
  );
};

export default Blogs;
