export const brandsData = {
  apple: {
    name: "Apple",
    slug: "apple",
    img: "/images/apple-logo.png",
    categories: {
      iphone: {
        name: "iPhone",
        slug: "iphone",
        img: "/images/iphone.png",
        series: {
          "iphone-16-series": {
            name: "iPhone 16 Series",
            slug: "iphone-16-series",
            models: {
              "apple-iphone-16e": {
                name: "Apple iPhone 16e",
                slug: "apple-iphone-16e",
                img: "/images/iphone16e.png",
                services: {
                  "screen-repair": { name: "Screen Repair", price: "$135" },
                  "camera-issue": { name: "Camera Issue", price: "$35" },
                  "speaker-issue": { name: "Speaker Issue", price: "$25" },
                },
              },
              "iphone-16-pro-max": {
                name: "iPhone 16 Pro Max",
                slug: "iphone-16-pro-max",
                img: "/images/iphone16promax.png",
                services: {
                  "screen-repair": { name: "Screen Repair", price: "$180" },
                },
              },
            },
          },
          "iphone-15-series": {
            name: "iPhone 15 Series",
            slug: "iphone-15-series",
            models: {},
          },
        },
      },
      ipad: {
        name: "iPad",
        slug: "ipad",
        img: "/images/ipad.png",
        series: {},
      },
      macbook: {
        name: "Macbook",
        slug: "macbook",
        img: "/images/macbook.png",
        series: {},
      },
    },
  },
  samsung: {
    name: "Samsung",
    slug: "samsung",
    img: "/images/samsung-logo.png",
    categories: {
      phones: {
        name: "Phones",
        slug: "phones",
        img: "/images/galaxys23.jpg",
        series: {
          "galaxy-s23-series": {
            name: "Galaxy S23 Series",
            slug: "galaxy-s23-series",
            models: {
              "galaxy-s23-ultra": {
                name: "Galaxy S23 Ultra",
                slug: "galaxy-s23-ultra",
                img: "/images/galaxys23ultra.jpg",
                services: {
                  "screen-repair": { name: "Screen Repair", price: "$120" },
                },
              },
            },
          },
        },
      },
    },
  },
};
