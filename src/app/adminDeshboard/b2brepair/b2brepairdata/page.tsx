// "use client";

// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { Typography, Paper, Box } from "@mui/material";

// interface Product {
//   id: number;
//   productName: string;
//   category: string;
//   price: string;
//   salePrice: string;
//   stock: number;
//   status: string;
//   published: boolean;
// }

// const dummyData: Product[] = [
//   {
//     id: 1,
//     productName: "ABC",
//     category: "Accessories",
//     price: "$30.00",
//     salePrice: "$25.00",
//     stock: 100,
//     status: "Selling",
//     published: true,
//   },
//   // Add other dummy products here
// ];

// const B2BRepairDetailPage: React.FC = () => {
//   const searchParams = useSearchParams();
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     const id = searchParams.get("id");
//     console.log(id)
//     if (id) {
//       const foundProduct = dummyData.find((item) => item.id === parseInt(id));
//       if (foundProduct) {
//         setProduct(foundProduct);
//       }
//     }
//   }, [searchParams]);

//   if (!product) {
//     return (
//       <Typography variant="h6" sx={{ margin: 2 }}>
//         Product not found
//       </Typography>
//     );
//   }

//   return (
//     <Paper sx={{ padding: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         Product Details: {product.productName}
//       </Typography>
//       <Box>
//         <Typography variant="body1"><strong>Category:</strong> {product.category}</Typography>
//         <Typography variant="body1"><strong>Price:</strong> {product.price}</Typography>
//         <Typography variant="body1"><strong>Sale Price:</strong> {product.salePrice}</Typography>
//         <Typography variant="body1"><strong>Stock:</strong> {product.stock}</Typography>
//         <Typography variant="body1"><strong>Status:</strong> {product.status}</Typography>
//         <Typography variant="body1"><strong>Published:</strong> {product.published ? "Yes" : "No"}</Typography>
//       </Box>
//     </Paper>
//   );
// };

// export default B2BRepairDetailPage;

"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Typography, Paper, Box } from "@mui/material";

interface Product {
  id: number;
  productName: string;
  category: string;
  price: string;
  salePrice: string;
  stock: number;
  status: string;
  published: boolean;
}

const dummyData: Product[] = [
  {
    id: 1,
    productName: "ABC",
    category: "Accessories",
    price: "$30.00",
    salePrice: "$25.00",
    stock: 100,
    status: "Selling",
    published: true,
  },
  // Add other dummy products here
];

const ProductDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      const foundProduct = dummyData.find((item) => item.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [searchParams]);

  if (!product) {
    return (
      <Typography variant="h6" sx={{ margin: 2 }}>
        Product not found
      </Typography>
    );
  }

  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Product Details: {product.productName}
      </Typography>
      <Box>
        <Typography variant="body1">
          <strong>Category:</strong> {product.category}
        </Typography>
        <Typography variant="body1">
          <strong>Price:</strong> {product.price}
        </Typography>
        <Typography variant="body1">
          <strong>Sale Price:</strong> {product.salePrice}
        </Typography>
        <Typography variant="body1">
          <strong>Stock:</strong> {product.stock}
        </Typography>
        <Typography variant="body1">
          <strong>Status:</strong> {product.status}
        </Typography>
        <Typography variant="body1">
          <strong>Published:</strong> {product.published ? "Yes" : "No"}
        </Typography>
      </Box>
    </Paper>
  );
};

const B2BRepairDetailPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetails />
    </Suspense>
  );
};

export default B2BRepairDetailPage;
