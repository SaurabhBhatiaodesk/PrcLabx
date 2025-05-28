import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MainHeading from "@/components/ManinHeading/MainHeading";
import "./price.css";
import { LuPlus } from "react-icons/lu";
import { GrSubtract } from "react-icons/gr";
import MainTitle from "@/components/MainTitle/MainTitle";

// Define interfaces for your data structure
interface TableColumn {
  header: string;
  key: string;
}

interface TableRow {
  [key: string]: string;
}

interface AccordionData {
  title: string;
  content: {
    table: {
      columns: TableColumn[];
      rows: TableRow[];
    };
  };
}

interface Category {
  id: number;
  category: string;
  accordionData: AccordionData[];
}

interface PriceData {
  id: number;
  title: string;
  description: string;
  mobileCategory: { mobile: string }[];
  categories: {
    [key: string]: Category[];
  };
}

const Pricing: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(
    0
  );
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const [selectedCategory, setSelectedCategory] = useState<string>("iPhone");

  const priceData: PriceData[] = [
    {
      id: 1,
      title: "Screen Refurbishment Pricing - ( Buy Back )",
      description:
        "For fast screen refurbishment, you have two options: you can choose our service to replace the glass only, or you can sell your old broken screens to us, as we offer competitive buyback prices.",
      mobileCategory: [
        { mobile: "iPhone" },
        { mobile: "iPad" },
        { mobile: "SamsungPhones" },
        { mobile: "SamsungTablets" },
        { mobile: "iWatch " },
        { mobile: "Oppo" },
        { mobile: "Google" },
      ],
      categories: {
        iPhone: [
          {
            id: 0,
            category: "iPhone",
            accordionData: [
              {
                title: "iPhone 15 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 15 Pro Max",
                        repairCost: "$200",
                        replacementGradeA: "$200",
                        replacementGradeB: "$70",
                      },
                      {
                        deviceModel: "iPhone 15 Pro",
                        repairCost: "$200",
                        replacementGradeA: "$140",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "iPhone 15 Plus",
                        repairCost: "$120",
                        replacementGradeA: "$60",
                        replacementGradeB: "$25",
                      },
                      {
                        deviceModel: "iPhone 15",
                        repairCost: "$120",
                        replacementGradeA: "$55",
                        replacementGradeB: "$25",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 14 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 14 Pro Max",
                        repairCost: "$170",
                        replacementGradeA: "$180",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "iPhone 14 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$160",
                        replacementGradeB: "$50",
                      },
                      {
                        deviceModel: "iPhone 14 Plus",
                        repairCost: "$90",
                        replacementGradeA: "$60",
                        replacementGradeB: "$35",
                      },
                      {
                        deviceModel: "iPhone 14",
                        repairCost: "$90",
                        replacementGradeA: "$60",
                        replacementGradeB: "$25",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 13 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 13 Pro Max",
                        repairCost: "$140",
                        replacementGradeA: "$130",
                        replacementGradeB: "$45",
                      },
                      {
                        deviceModel: "iPhone 13 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$110",
                        replacementGradeB: "$35",
                      },
                      {
                        deviceModel: "iPhone 13",
                        repairCost: "$55",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPhone 13 Mini",
                        repairCost: "$55",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 12 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 12 Pro Max",
                        repairCost: "$70",
                        replacementGradeA: "$70",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPhone 12 Pro",
                        repairCost: "$50",
                        replacementGradeA: "$35",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPhone 12",
                        repairCost: "$50",
                        replacementGradeA: "$35",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPhone 12 Mini",
                        repairCost: "$50",
                        replacementGradeA: "$45",
                        replacementGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 11 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 11 Pro Max",
                        repairCost: "$50",
                        replacementGradeA: "$35",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPhone 11 Pro",
                        repairCost: "$40",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },

                      {
                        deviceModel: "iPhone 11",
                        repairCost: "X",
                        replacementGradeA: "X",
                        replacementGradeB: "X",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone X Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone XS Max",
                        repairCost: "$40",
                        replacementGradeA: "$40",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPhone XS",
                        repairCost: "$35",
                        replacementGradeA: "$20",
                        replacementGradeB: "$10",
                      },
                      {
                        deviceModel: "iPhone X",
                        repairCost: "$35",
                        replacementGradeA: "$20",
                        replacementGradeB: "$10",
                      },
                      {
                        deviceModel: "iPhone XR",
                        repairCost: "X",
                        replacementGradeA: "X",
                        replacementGradeB: "X",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
        // second tab
        iPad: [
          {
            id: 1,
            category: "iPad",
            accordionData: [
              {
                title: "iPad Air Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: 'Air 2 9.7" (2014)',
                        repairCost: "$80",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: 'Air 3 10.5" (2019)',
                        repairCost: "$80",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: 'Air 4 11" (2020)',
                        repairCost: "$90",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: 'Air 5 11" (2022)',
                        repairCost: "$90",
                        replacementGradeA: "$50",
                        replacementGradeB: "$25",
                      },
                      {
                        deviceModel: 'Air 6 11" (2024)',
                        repairCost: "Contact Us",
                        replacementGradeA: "Contact Us",
                        replacementGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPad Pro Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: 'Pro 9.7" (2016)',
                        repairCost: "$80",
                        replacementGradeA: "$20",
                        replacementGradeB: "$10",
                      },
                      {
                        deviceModel: 'Pro 10.5" (2017)',
                        repairCost: "$90",
                        replacementGradeA: "$40",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPad Pro 11 1st (2018)",
                        repairCost: "$120",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPad Pro 11 2nd (2020)",
                        repairCost: "$120",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPad Pro 11 3rd (2021)",
                        repairCost: "$140",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPad Pro 11 4th (2022)",
                        repairCost: "$140",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPad Pro 13 (2024)",
                        repairCost: "Contact Us",
                        replacementGradeA: "Contact Us",
                        replacementGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPad Pro 12.9",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pro 12.9 1st (2015)",
                        repairCost: "$150",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "Pro 12.9 2nd (2017)",
                        repairCost: "$200",
                        replacementGradeA: "$80",
                        replacementGradeB: "$30",
                      },
                      {
                        deviceModel: "Pro 12.9 3rd (2018)",
                        repairCost: "$150",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "Pro 12.9 4th (2020)",
                        repairCost: "$150",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "Pro 12.9 5th (2021)",
                        repairCost: "$180",
                        replacementGradeA: "$70",
                        replacementGradeB: "$25",
                      },
                      {
                        deviceModel: "Pro 12.9 6th (2022)",
                        repairCost: "Contact Us",
                        replacementGradeA: "Contact Us",
                        replacementGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPad Mini Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Mini 4",
                        repairCost: "$80",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "Mini 5",
                        repairCost: "$80",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "Mini 6",
                        repairCost: "$220",
                        replacementGradeA: "$60",
                        replacementGradeB: "$25",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],

        // third tab
        SamsungPhones: [
          {
            id: 2,
            category: "SamsungPhones",
            accordionData: [
              {
                title: "S Ultra Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      {
                        header: "Refurb price (Old Frame or No Frame)",
                        key: "refurbPriceOldFrame",
                      },
                      {
                        header: "Refurb price (New Frame)",
                        key: "refurbPriceNewFrame",
                      },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S24 Ultra",
                        refurbPriceOldFrame: "$150",
                        refurbPriceNewFrame: "$200",
                        buyBackGradeA: "$110",
                        buyBackGradeB: "$40",
                      },
                      {
                        phoneModel: "S23 Ultra",
                        refurbPriceOldFrame: "$150",
                        refurbPriceNewFrame: "$200",
                        buyBackGradeA: "$110",
                        buyBackGradeB: "$40",
                      },
                      {
                        phoneModel: "S22 Ultra",
                        refurbPriceOldFrame: "$130",
                        refurbPriceNewFrame: "$180",
                        buyBackGradeA: "$110",
                        buyBackGradeB: "$35",
                      },
                      {
                        phoneModel: "S21 Ultra",
                        refurbPriceOldFrame: "$120",
                        refurbPriceNewFrame: "$170",
                        buyBackGradeA: "$80",
                        buyBackGradeB: "$30",
                      },
                      {
                        phoneModel: "S20 Ultra",
                        refurbPriceOldFrame: "$120",
                        refurbPriceNewFrame: "$170",
                        buyBackGradeA: "$70",
                        buyBackGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              //
              {
                title: "Note Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      {
                        header: "Refurb price (Old Frame or No Frame)",
                        key: "refurbPriceOldFrame",
                      },
                      {
                        header: "Refurb price (New Frame)",
                        key: "refurbPriceNewFrame",
                      },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "Note 20 Ultra",
                        refurbPriceOldFrame: "$120",
                        refurbPriceNewFrame: "$170",
                        buyBackGradeA: "$70",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "Note 20",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$10",
                      },
                      {
                        phoneModel: "Note 10 Plus",
                        refurbPriceOldFrame: "$120",
                        refurbPriceNewFrame: "$170",
                        buyBackGradeA: "$70",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "Note 10",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "Note 9",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "Note 8",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              {
                title: "S Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      {
                        header: "Refurb price (Old Frame or No Frame)",
                        key: "refurbPriceOldFrame",
                      },
                      {
                        header: "Refurb price (New Frame)",
                        key: "refurbPriceNewFrame",
                      },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S24 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S23 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S22 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S21 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S20 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S10 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "S9 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                      {
                        phoneModel: "S8 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                      {
                        phoneModel: "S24",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S23",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S22",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S21",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S20",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S10 5G",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "S10",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "S9",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                      {
                        phoneModel: "S8",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                    ],
                  },
                },
              },
              {
                title: "Fold Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "Fold 6 (Outer)",
                        refurbPrice: "$90",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "Fold 5 (Outer)",
                        refurbPrice: "$80",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "Fold 4 (Outer)",
                        refurbPrice: "$70",
                        buyBackGradeA: "$35",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "Fold 3 (Outer)",
                        refurbPrice: "$90",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "Fold 2 (Outer)",
                        refurbPrice: "$70",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                    ],
                  },
                },
              },

              {
                title: "Fold Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "Outer Screen Refurb",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "Hinge Replacement",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel:
                          "Inner Flex Replacement (Which Goes from One Side to Another)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "Flip Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "Outer Screen Refurb",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "Hinge Replacement",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel:
                          "Inner Flex Replacement (Which Goes from One Side to Another)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],

        // fourth tab
        SamsungTablets: [
          {
            id: 2,
            category: "SamsungTablets",
            accordionData: [
              {
                title: "S8 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S8 Ultra (X900 / X906)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S8 Plus (X800 / X806)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S8 (X700 / X706)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "S7 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S7 Plus (T970 / T975)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S7 (T870 / T875)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S7 FE (T730 / T726)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },

              {
                title: "S6 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S6 (T860 / T865)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S6 Lite (P610 / P615 / P613 / P619)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "A Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "A7 (T500 / T505)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "A 10.1 (T510 / T515)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "A8.0 (T290 / T295)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "A9 Plus (X210 / X216)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },

              //
            ],
          },
        ],

        // fifth tab
        iWatch: [
          {
            id: 2,
            category: "iWatch",
            accordionData: [
              {
                title: "iWatch Series",
                content: {
                  table: {
                    columns: [
                      { header: "Watch Model", key: "watchModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        watchModel: "Series 8",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 7",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 6",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 5",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 4",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 3",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },

              //
            ],
          },
        ],
        Oppo: [
          {
            id: 1,
            category: "Oppo",
            accordionData: [
              {
                title: "Oppo Find Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Find X5 Pro",
                        repairCost: "$200",
                        replacementGradeA: "$150",
                        replacementGradeB: "$100",
                      },
                      {
                        deviceModel: "Find X5",
                        repairCost: "$180",
                        replacementGradeA: "$140",
                        replacementGradeB: "$90",
                      },
                      {
                        deviceModel: "Find X3 Pro",
                        repairCost: "$160",
                        replacementGradeA: "$130",
                        replacementGradeB: "$80",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo Reno Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Reno 8 Pro",
                        repairCost: "$160",
                        replacementGradeA: "$120",
                        replacementGradeB: "$80",
                      },
                      {
                        deviceModel: "Reno 8",
                        repairCost: "$140",
                        replacementGradeA: "$110",
                        replacementGradeB: "$70",
                      },
                      {
                        deviceModel: "Reno 7",
                        repairCost: "$120",
                        replacementGradeA: "$100",
                        replacementGradeB: "$60",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo A Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "A96",
                        repairCost: "$120",
                        replacementGradeA: "$90",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "A76",
                        repairCost: "$100",
                        replacementGradeA: "$80",
                        replacementGradeB: "$50",
                      },
                      {
                        deviceModel: "A54",
                        repairCost: "$90",
                        replacementGradeA: "$70",
                        replacementGradeB: "$40",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo K Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "K10",
                        repairCost: "$130",
                        replacementGradeA: "$100",
                        replacementGradeB: "$70",
                      },
                      {
                        deviceModel: "K9 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$90",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "K7x",
                        repairCost: "$100",
                        replacementGradeA: "$80",
                        replacementGradeB: "$50",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo F Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "F21 Pro",
                        repairCost: "$140",
                        replacementGradeA: "$110",
                        replacementGradeB: "$80",
                      },
                      {
                        deviceModel: "F19 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$90",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "F17",
                        repairCost: "$100",
                        replacementGradeA: "$80",
                        replacementGradeB: "$50",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo N Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "N1",
                        repairCost: "$80",
                        replacementGradeA: "$50",
                        replacementGradeB: "$30",
                      },
                      {
                        deviceModel: "N3",
                        repairCost: "$100",
                        replacementGradeA: "$70",
                        replacementGradeB: "$40",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],

        Google: [
          {
            id: 1,
            category: "Google",
            accordionData: [
              {
                title: "Google Pixel 7 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 7 Pro",
                        repairCost: "$220",
                        replacementGradeA: "$180",
                        replacementGradeB: "$150",
                      },
                      {
                        deviceModel: "Pixel 7",
                        repairCost: "$180",
                        replacementGradeA: "$150",
                        replacementGradeB: "$120",
                      },
                    ],
                  },
                },
              },
              {
                title: "Google Pixel 6 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 6 Pro",
                        repairCost: "$200",
                        replacementGradeA: "$160",
                        replacementGradeB: "$130",
                      },
                      {
                        deviceModel: "Pixel 6",
                        repairCost: "$170",
                        replacementGradeA: "$140",
                        replacementGradeB: "$110",
                      },
                    ],
                  },
                },
              },
              {
                title: "Google Pixel 5 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 5",
                        repairCost: "$150",
                        replacementGradeA: "$120",
                        replacementGradeB: "$90",
                      },
                    ],
                  },
                },
              },
              {
                title: "Google Pixel 4 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 4 XL",
                        repairCost: "$140",
                        replacementGradeA: "$110",
                        replacementGradeB: "$80",
                      },
                      {
                        deviceModel: "Pixel 4",
                        repairCost: "$130",
                        replacementGradeA: "$100",
                        replacementGradeB: "$70",
                      },
                    ],
                  },
                },
              },
              {
                title: "Google Pixel 3 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 3 XL",
                        repairCost: "$120",
                        replacementGradeA: "$90",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "Pixel 3",
                        repairCost: "$100",
                        replacementGradeA: "$80",
                        replacementGradeB: "$50",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
    },
    {
      id: 2,
      title: "Data Recovery / Dead Device Pricing",
      description:
        "Explore the pricing details for our professional device repair services.",
      mobileCategory: [
        { mobile: "iPhone" },
        { mobile: "iPad" },
        { mobile: "SamsungPhones" },
        { mobile: "SamsungTablets" },
        { mobile: "iWatch " },
        { mobile: "Oppo" },
        { mobile: "Google" },
      ],
      categories: {
        iPhone: [
          {
            id: 0,
            category: "iPhone",
            accordionData: [
              {
                title: "iPhone 15 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 15 Pro Max",
                        repairCost: "$200",
                        replacementGradeA: "$200",
                        replacementGradeB: "$70",
                      },
                      {
                        deviceModel: "iPhone 15 Pro",
                        repairCost: "$200",
                        replacementGradeA: "$140",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "iPhone 15 Plus",
                        repairCost: "$120",
                        replacementGradeA: "$60",
                        replacementGradeB: "$25",
                      },
                      {
                        deviceModel: "iPhone 15",
                        repairCost: "$120",
                        replacementGradeA: "$55",
                        replacementGradeB: "$25",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 14 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 14 Pro Max",
                        repairCost: "$170",
                        replacementGradeA: "$180",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "iPhone 14 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$160",
                        replacementGradeB: "$50",
                      },
                      {
                        deviceModel: "iPhone 14 Plus",
                        repairCost: "$90",
                        replacementGradeA: "$60",
                        replacementGradeB: "$35",
                      },
                      {
                        deviceModel: "iPhone 14",
                        repairCost: "$90",
                        replacementGradeA: "$60",
                        replacementGradeB: "$25",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 13 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 13 Pro Max",
                        repairCost: "$140",
                        replacementGradeA: "$130",
                        replacementGradeB: "$45",
                      },
                      {
                        deviceModel: "iPhone 13 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$110",
                        replacementGradeB: "$35",
                      },
                      {
                        deviceModel: "iPhone 13",
                        repairCost: "$55",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPhone 13 Mini",
                        repairCost: "$55",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 12 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 12 Pro Max",
                        repairCost: "$70",
                        replacementGradeA: "$70",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPhone 12 Pro",
                        repairCost: "$50",
                        replacementGradeA: "$35",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPhone 12",
                        repairCost: "$50",
                        replacementGradeA: "$35",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPhone 12 Mini",
                        repairCost: "$50",
                        replacementGradeA: "$45",
                        replacementGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 11 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 11 Pro Max",
                        repairCost: "$50",
                        replacementGradeA: "$35",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPhone 11 Pro",
                        repairCost: "$40",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },

                      {
                        deviceModel: "iPhone 11",
                        repairCost: "X",
                        replacementGradeA: "X",
                        replacementGradeB: "X",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone X Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone XS Max",
                        repairCost: "$40",
                        replacementGradeA: "$40",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPhone XS",
                        repairCost: "$35",
                        replacementGradeA: "$20",
                        replacementGradeB: "$10",
                      },
                      {
                        deviceModel: "iPhone X",
                        repairCost: "$35",
                        replacementGradeA: "$20",
                        replacementGradeB: "$10",
                      },
                      {
                        deviceModel: "iPhone XR",
                        repairCost: "X",
                        replacementGradeA: "X",
                        replacementGradeB: "X",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
        // second tab
        iPad: [
          {
            id: 1,
            category: "iPad",
            accordionData: [
              {
                title: "iPad Air Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: 'Air 2 9.7" (2014)',
                        repairCost: "$80",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: 'Air 3 10.5" (2019)',
                        repairCost: "$80",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: 'Air 4 11" (2020)',
                        repairCost: "$90",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: 'Air 5 11" (2022)',
                        repairCost: "$90",
                        replacementGradeA: "$50",
                        replacementGradeB: "$25",
                      },
                      {
                        deviceModel: 'Air 6 11" (2024)',
                        repairCost: "Contact Us",
                        replacementGradeA: "Contact Us",
                        replacementGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPad Pro Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: 'Pro 9.7" (2016)',
                        repairCost: "$80",
                        replacementGradeA: "$20",
                        replacementGradeB: "$10",
                      },
                      {
                        deviceModel: 'Pro 10.5" (2017)',
                        repairCost: "$90",
                        replacementGradeA: "$40",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPad Pro 11 1st (2018)",
                        repairCost: "$120",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPad Pro 11 2nd (2020)",
                        repairCost: "$120",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPad Pro 11 3rd (2021)",
                        repairCost: "$140",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPad Pro 11 4th (2022)",
                        repairCost: "$140",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPad Pro 13 (2024)",
                        repairCost: "Contact Us",
                        replacementGradeA: "Contact Us",
                        replacementGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPad Pro 12.9",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pro 12.9 1st (2015)",
                        repairCost: "$150",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "Pro 12.9 2nd (2017)",
                        repairCost: "$200",
                        replacementGradeA: "$80",
                        replacementGradeB: "$30",
                      },
                      {
                        deviceModel: "Pro 12.9 3rd (2018)",
                        repairCost: "$150",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "Pro 12.9 4th (2020)",
                        repairCost: "$150",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "Pro 12.9 5th (2021)",
                        repairCost: "$180",
                        replacementGradeA: "$70",
                        replacementGradeB: "$25",
                      },
                      {
                        deviceModel: "Pro 12.9 6th (2022)",
                        repairCost: "Contact Us",
                        replacementGradeA: "Contact Us",
                        replacementGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPad Mini Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Mini 4",
                        repairCost: "$80",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "Mini 5",
                        repairCost: "$80",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "Mini 6",
                        repairCost: "$220",
                        replacementGradeA: "$60",
                        replacementGradeB: "$25",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],

        // third tab
        SamsungPhones: [
          {
            id: 2,
            category: "SamsungPhones",
            accordionData: [
              {
                title: "S Ultra Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      {
                        header: "Refurb price (Old Frame or No Frame)",
                        key: "refurbPriceOldFrame",
                      },
                      {
                        header: "Refurb price (New Frame)",
                        key: "refurbPriceNewFrame",
                      },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S24 Ultra",
                        refurbPriceOldFrame: "$150",
                        refurbPriceNewFrame: "$200",
                        buyBackGradeA: "$110",
                        buyBackGradeB: "$40",
                      },
                      {
                        phoneModel: "S23 Ultra",
                        refurbPriceOldFrame: "$150",
                        refurbPriceNewFrame: "$200",
                        buyBackGradeA: "$110",
                        buyBackGradeB: "$40",
                      },
                      {
                        phoneModel: "S22 Ultra",
                        refurbPriceOldFrame: "$130",
                        refurbPriceNewFrame: "$180",
                        buyBackGradeA: "$110",
                        buyBackGradeB: "$35",
                      },
                      {
                        phoneModel: "S21 Ultra",
                        refurbPriceOldFrame: "$120",
                        refurbPriceNewFrame: "$170",
                        buyBackGradeA: "$80",
                        buyBackGradeB: "$30",
                      },
                      {
                        phoneModel: "S20 Ultra",
                        refurbPriceOldFrame: "$120",
                        refurbPriceNewFrame: "$170",
                        buyBackGradeA: "$70",
                        buyBackGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              //
              {
                title: "Note Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      {
                        header: "Refurb price (Old Frame or No Frame)",
                        key: "refurbPriceOldFrame",
                      },
                      {
                        header: "Refurb price (New Frame)",
                        key: "refurbPriceNewFrame",
                      },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "Note 20 Ultra",
                        refurbPriceOldFrame: "$120",
                        refurbPriceNewFrame: "$170",
                        buyBackGradeA: "$70",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "Note 20",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$10",
                      },
                      {
                        phoneModel: "Note 10 Plus",
                        refurbPriceOldFrame: "$120",
                        refurbPriceNewFrame: "$170",
                        buyBackGradeA: "$70",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "Note 10",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "Note 9",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "Note 8",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              {
                title: "S Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      {
                        header: "Refurb price (Old Frame or No Frame)",
                        key: "refurbPriceOldFrame",
                      },
                      {
                        header: "Refurb price (New Frame)",
                        key: "refurbPriceNewFrame",
                      },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S24 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S23 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S22 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S21 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S20 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S10 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "S9 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                      {
                        phoneModel: "S8 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                      {
                        phoneModel: "S24",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S23",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S22",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S21",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S20",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S10 5G",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "S10",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "S9",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                      {
                        phoneModel: "S8",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                    ],
                  },
                },
              },
              {
                title: "Fold Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "Fold 6 (Outer)",
                        refurbPrice: "$90",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "Fold 5 (Outer)",
                        refurbPrice: "$80",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "Fold 4 (Outer)",
                        refurbPrice: "$70",
                        buyBackGradeA: "$35",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "Fold 3 (Outer)",
                        refurbPrice: "$90",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "Fold 2 (Outer)",
                        refurbPrice: "$70",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                    ],
                  },
                },
              },

              {
                title: "Fold Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "Outer Screen Refurb",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "Hinge Replacement",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel:
                          "Inner Flex Replacement (Which Goes from One Side to Another)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "Flip Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "Outer Screen Refurb",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "Hinge Replacement",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel:
                          "Inner Flex Replacement (Which Goes from One Side to Another)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],

        // fourth tab
        SamsungTablets: [
          {
            id: 2,
            category: "SamsungTablets",
            accordionData: [
              {
                title: "S8 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S8 Ultra (X900 / X906)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S8 Plus (X800 / X806)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S8 (X700 / X706)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "S7 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S7 Plus (T970 / T975)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S7 (T870 / T875)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S7 FE (T730 / T726)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },

              {
                title: "S6 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S6 (T860 / T865)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S6 Lite (P610 / P615 / P613 / P619)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "A Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "A7 (T500 / T505)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "A 10.1 (T510 / T515)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "A8.0 (T290 / T295)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "A9 Plus (X210 / X216)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },

              //
            ],
          },
        ],

        // fifth tab
        iWatch: [
          {
            id: 2,
            category: "iWatch",
            accordionData: [
              {
                title: "iWatch Series",
                content: {
                  table: {
                    columns: [
                      { header: "Watch Model", key: "watchModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        watchModel: "Series 8",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 7",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 6",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 5",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 4",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 3",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },

              //
            ],
          },
        ],
        Oppo: [
          {
            id: 1,
            category: "Oppo",
            accordionData: [
              {
                title: "Oppo Find Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Find X5 Pro",
                        repairCost: "$200",
                        replacementGradeA: "$150",
                        replacementGradeB: "$100",
                      },
                      {
                        deviceModel: "Find X5",
                        repairCost: "$180",
                        replacementGradeA: "$140",
                        replacementGradeB: "$90",
                      },
                      {
                        deviceModel: "Find X3 Pro",
                        repairCost: "$160",
                        replacementGradeA: "$130",
                        replacementGradeB: "$80",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo Reno Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Reno 8 Pro",
                        repairCost: "$160",
                        replacementGradeA: "$120",
                        replacementGradeB: "$80",
                      },
                      {
                        deviceModel: "Reno 8",
                        repairCost: "$140",
                        replacementGradeA: "$110",
                        replacementGradeB: "$70",
                      },
                      {
                        deviceModel: "Reno 7",
                        repairCost: "$120",
                        replacementGradeA: "$100",
                        replacementGradeB: "$60",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo A Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "A96",
                        repairCost: "$120",
                        replacementGradeA: "$90",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "A76",
                        repairCost: "$100",
                        replacementGradeA: "$80",
                        replacementGradeB: "$50",
                      },
                      {
                        deviceModel: "A54",
                        repairCost: "$90",
                        replacementGradeA: "$70",
                        replacementGradeB: "$40",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo K Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "K10",
                        repairCost: "$130",
                        replacementGradeA: "$100",
                        replacementGradeB: "$70",
                      },
                      {
                        deviceModel: "K9 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$90",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "K7x",
                        repairCost: "$100",
                        replacementGradeA: "$80",
                        replacementGradeB: "$50",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo F Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "F21 Pro",
                        repairCost: "$140",
                        replacementGradeA: "$110",
                        replacementGradeB: "$80",
                      },
                      {
                        deviceModel: "F19 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$90",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "F17",
                        repairCost: "$100",
                        replacementGradeA: "$80",
                        replacementGradeB: "$50",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo N Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "N1",
                        repairCost: "$80",
                        replacementGradeA: "$50",
                        replacementGradeB: "$30",
                      },
                      {
                        deviceModel: "N3",
                        repairCost: "$100",
                        replacementGradeA: "$70",
                        replacementGradeB: "$40",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],

        Google: [
          {
            id: 1,
            category: "Google",
            accordionData: [
              {
                title: "Google Pixel 7 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 7 Pro",
                        repairCost: "$220",
                        replacementGradeA: "$180",
                        replacementGradeB: "$150",
                      },
                      {
                        deviceModel: "Pixel 7",
                        repairCost: "$180",
                        replacementGradeA: "$150",
                        replacementGradeB: "$120",
                      },
                    ],
                  },
                },
              },
              {
                title: "Google Pixel 6 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 6 Pro",
                        repairCost: "$200",
                        replacementGradeA: "$160",
                        replacementGradeB: "$130",
                      },
                      {
                        deviceModel: "Pixel 6",
                        repairCost: "$170",
                        replacementGradeA: "$140",
                        replacementGradeB: "$110",
                      },
                    ],
                  },
                },
              },
              {
                title: "Google Pixel 5 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 5",
                        repairCost: "$150",
                        replacementGradeA: "$120",
                        replacementGradeB: "$90",
                      },
                    ],
                  },
                },
              },
              {
                title: "Google Pixel 4 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 4 XL",
                        repairCost: "$140",
                        replacementGradeA: "$110",
                        replacementGradeB: "$80",
                      },
                      {
                        deviceModel: "Pixel 4",
                        repairCost: "$130",
                        replacementGradeA: "$100",
                        replacementGradeB: "$70",
                      },
                    ],
                  },
                },
              },
              {
                title: "Google Pixel 3 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 3 XL",
                        repairCost: "$120",
                        replacementGradeA: "$90",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "Pixel 3",
                        repairCost: "$100",
                        replacementGradeA: "$80",
                        replacementGradeB: "$50",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
    },
    {
      id: 3,
      title: "General Repair Pricing",
      description:
        "Our general repair pricing includes common services such as screen replacements, charging port repairs, and other standard issues typically offered by most repair shops. ",
      mobileCategory: [
        { mobile: "iPhone" },
        { mobile: "iPad" },
        { mobile: "SamsungPhones" },
        { mobile: "SamsungTablets" },
        { mobile: "iWatch " },
        { mobile: "Oppo" },
        { mobile: "Google" },
      ],
      categories: {
        iPhone: [
          {
            id: 0,
            category: "iPhone",
            accordionData: [
              {
                title: "iPhone 15 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 15 Pro Max",
                        repairCost: "$200",
                        replacementGradeA: "$200",
                        replacementGradeB: "$70",
                      },
                      {
                        deviceModel: "iPhone 15 Pro",
                        repairCost: "$200",
                        replacementGradeA: "$140",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "iPhone 15 Plus",
                        repairCost: "$120",
                        replacementGradeA: "$60",
                        replacementGradeB: "$25",
                      },
                      {
                        deviceModel: "iPhone 15",
                        repairCost: "$120",
                        replacementGradeA: "$55",
                        replacementGradeB: "$25",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 14 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 14 Pro Max",
                        repairCost: "$170",
                        replacementGradeA: "$180",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "iPhone 14 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$160",
                        replacementGradeB: "$50",
                      },
                      {
                        deviceModel: "iPhone 14 Plus",
                        repairCost: "$90",
                        replacementGradeA: "$60",
                        replacementGradeB: "$35",
                      },
                      {
                        deviceModel: "iPhone 14",
                        repairCost: "$90",
                        replacementGradeA: "$60",
                        replacementGradeB: "$25",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 13 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 13 Pro Max",
                        repairCost: "$140",
                        replacementGradeA: "$130",
                        replacementGradeB: "$45",
                      },
                      {
                        deviceModel: "iPhone 13 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$110",
                        replacementGradeB: "$35",
                      },
                      {
                        deviceModel: "iPhone 13",
                        repairCost: "$55",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPhone 13 Mini",
                        repairCost: "$55",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 12 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 12 Pro Max",
                        repairCost: "$70",
                        replacementGradeA: "$70",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPhone 12 Pro",
                        repairCost: "$50",
                        replacementGradeA: "$35",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPhone 12",
                        repairCost: "$50",
                        replacementGradeA: "$35",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPhone 12 Mini",
                        repairCost: "$50",
                        replacementGradeA: "$45",
                        replacementGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 11 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 11 Pro Max",
                        repairCost: "$50",
                        replacementGradeA: "$35",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPhone 11 Pro",
                        repairCost: "$40",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },

                      {
                        deviceModel: "iPhone 11",
                        repairCost: "X",
                        replacementGradeA: "X",
                        replacementGradeB: "X",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone X Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone XS Max",
                        repairCost: "$40",
                        replacementGradeA: "$40",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPhone XS",
                        repairCost: "$35",
                        replacementGradeA: "$20",
                        replacementGradeB: "$10",
                      },
                      {
                        deviceModel: "iPhone X",
                        repairCost: "$35",
                        replacementGradeA: "$20",
                        replacementGradeB: "$10",
                      },
                      {
                        deviceModel: "iPhone XR",
                        repairCost: "X",
                        replacementGradeA: "X",
                        replacementGradeB: "X",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
        // second tab
        iPad: [
          {
            id: 1,
            category: "iPad",
            accordionData: [
              {
                title: "iPad Air Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: 'Air 2 9.7" (2014)',
                        repairCost: "$80",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: 'Air 3 10.5" (2019)',
                        repairCost: "$80",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: 'Air 4 11" (2020)',
                        repairCost: "$90",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: 'Air 5 11" (2022)',
                        repairCost: "$90",
                        replacementGradeA: "$50",
                        replacementGradeB: "$25",
                      },
                      {
                        deviceModel: 'Air 6 11" (2024)',
                        repairCost: "Contact Us",
                        replacementGradeA: "Contact Us",
                        replacementGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPad Pro Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: 'Pro 9.7" (2016)',
                        repairCost: "$80",
                        replacementGradeA: "$20",
                        replacementGradeB: "$10",
                      },
                      {
                        deviceModel: 'Pro 10.5" (2017)',
                        repairCost: "$90",
                        replacementGradeA: "$40",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPad Pro 11 1st (2018)",
                        repairCost: "$120",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPad Pro 11 2nd (2020)",
                        repairCost: "$120",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPad Pro 11 3rd (2021)",
                        repairCost: "$140",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPad Pro 11 4th (2022)",
                        repairCost: "$140",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPad Pro 13 (2024)",
                        repairCost: "Contact Us",
                        replacementGradeA: "Contact Us",
                        replacementGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPad Pro 12.9",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pro 12.9 1st (2015)",
                        repairCost: "$150",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "Pro 12.9 2nd (2017)",
                        repairCost: "$200",
                        replacementGradeA: "$80",
                        replacementGradeB: "$30",
                      },
                      {
                        deviceModel: "Pro 12.9 3rd (2018)",
                        repairCost: "$150",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "Pro 12.9 4th (2020)",
                        repairCost: "$150",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "Pro 12.9 5th (2021)",
                        repairCost: "$180",
                        replacementGradeA: "$70",
                        replacementGradeB: "$25",
                      },
                      {
                        deviceModel: "Pro 12.9 6th (2022)",
                        repairCost: "Contact Us",
                        replacementGradeA: "Contact Us",
                        replacementGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPad Mini Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Mini 4",
                        repairCost: "$80",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "Mini 5",
                        repairCost: "$80",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "Mini 6",
                        repairCost: "$220",
                        replacementGradeA: "$60",
                        replacementGradeB: "$25",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],

        // third tab
        SamsungPhones: [
          {
            id: 2,
            category: "SamsungPhones",
            accordionData: [
              {
                title: "S Ultra Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      {
                        header: "Refurb price (Old Frame or No Frame)",
                        key: "refurbPriceOldFrame",
                      },
                      {
                        header: "Refurb price (New Frame)",
                        key: "refurbPriceNewFrame",
                      },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S24 Ultra",
                        refurbPriceOldFrame: "$150",
                        refurbPriceNewFrame: "$200",
                        buyBackGradeA: "$110",
                        buyBackGradeB: "$40",
                      },
                      {
                        phoneModel: "S23 Ultra",
                        refurbPriceOldFrame: "$150",
                        refurbPriceNewFrame: "$200",
                        buyBackGradeA: "$110",
                        buyBackGradeB: "$40",
                      },
                      {
                        phoneModel: "S22 Ultra",
                        refurbPriceOldFrame: "$130",
                        refurbPriceNewFrame: "$180",
                        buyBackGradeA: "$110",
                        buyBackGradeB: "$35",
                      },
                      {
                        phoneModel: "S21 Ultra",
                        refurbPriceOldFrame: "$120",
                        refurbPriceNewFrame: "$170",
                        buyBackGradeA: "$80",
                        buyBackGradeB: "$30",
                      },
                      {
                        phoneModel: "S20 Ultra",
                        refurbPriceOldFrame: "$120",
                        refurbPriceNewFrame: "$170",
                        buyBackGradeA: "$70",
                        buyBackGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              //
              {
                title: "Note Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      {
                        header: "Refurb price (Old Frame or No Frame)",
                        key: "refurbPriceOldFrame",
                      },
                      {
                        header: "Refurb price (New Frame)",
                        key: "refurbPriceNewFrame",
                      },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "Note 20 Ultra",
                        refurbPriceOldFrame: "$120",
                        refurbPriceNewFrame: "$170",
                        buyBackGradeA: "$70",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "Note 20",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$10",
                      },
                      {
                        phoneModel: "Note 10 Plus",
                        refurbPriceOldFrame: "$120",
                        refurbPriceNewFrame: "$170",
                        buyBackGradeA: "$70",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "Note 10",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "Note 9",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "Note 8",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              {
                title: "S Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      {
                        header: "Refurb price (Old Frame or No Frame)",
                        key: "refurbPriceOldFrame",
                      },
                      {
                        header: "Refurb price (New Frame)",
                        key: "refurbPriceNewFrame",
                      },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S24 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S23 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S22 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S21 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S20 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S10 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "S9 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                      {
                        phoneModel: "S8 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                      {
                        phoneModel: "S24",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S23",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S22",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S21",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S20",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S10 5G",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "S10",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "S9",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                      {
                        phoneModel: "S8",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                    ],
                  },
                },
              },
              {
                title: "Fold Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "Fold 6 (Outer)",
                        refurbPrice: "$90",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "Fold 5 (Outer)",
                        refurbPrice: "$80",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "Fold 4 (Outer)",
                        refurbPrice: "$70",
                        buyBackGradeA: "$35",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "Fold 3 (Outer)",
                        refurbPrice: "$90",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "Fold 2 (Outer)",
                        refurbPrice: "$70",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                    ],
                  },
                },
              },

              {
                title: "Fold Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "Outer Screen Refurb",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "Hinge Replacement",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel:
                          "Inner Flex Replacement (Which Goes from One Side to Another)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "Flip Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "Outer Screen Refurb",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "Hinge Replacement",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel:
                          "Inner Flex Replacement (Which Goes from One Side to Another)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],

        // fourth tab
        SamsungTablets: [
          {
            id: 2,
            category: "SamsungTablets",
            accordionData: [
              {
                title: "S8 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S8 Ultra (X900 / X906)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S8 Plus (X800 / X806)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S8 (X700 / X706)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "S7 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S7 Plus (T970 / T975)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S7 (T870 / T875)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S7 FE (T730 / T726)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },

              {
                title: "S6 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S6 (T860 / T865)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S6 Lite (P610 / P615 / P613 / P619)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "A Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "A7 (T500 / T505)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "A 10.1 (T510 / T515)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "A8.0 (T290 / T295)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "A9 Plus (X210 / X216)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },

              //
            ],
          },
        ],

        // fifth tab
        iWatch: [
          {
            id: 2,
            category: "iWatch",
            accordionData: [
              {
                title: "iWatch Series",
                content: {
                  table: {
                    columns: [
                      { header: "Watch Model", key: "watchModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        watchModel: "Series 8",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 7",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 6",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 5",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 4",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 3",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },

              //
            ],
          },
        ],
        Oppo: [
          {
            id: 1,
            category: "Oppo",
            accordionData: [
              {
                title: "Oppo Find Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Find X5 Pro",
                        repairCost: "$200",
                        replacementGradeA: "$150",
                        replacementGradeB: "$100",
                      },
                      {
                        deviceModel: "Find X5",
                        repairCost: "$180",
                        replacementGradeA: "$140",
                        replacementGradeB: "$90",
                      },
                      {
                        deviceModel: "Find X3 Pro",
                        repairCost: "$160",
                        replacementGradeA: "$130",
                        replacementGradeB: "$80",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo Reno Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Reno 8 Pro",
                        repairCost: "$160",
                        replacementGradeA: "$120",
                        replacementGradeB: "$80",
                      },
                      {
                        deviceModel: "Reno 8",
                        repairCost: "$140",
                        replacementGradeA: "$110",
                        replacementGradeB: "$70",
                      },
                      {
                        deviceModel: "Reno 7",
                        repairCost: "$120",
                        replacementGradeA: "$100",
                        replacementGradeB: "$60",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo A Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "A96",
                        repairCost: "$120",
                        replacementGradeA: "$90",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "A76",
                        repairCost: "$100",
                        replacementGradeA: "$80",
                        replacementGradeB: "$50",
                      },
                      {
                        deviceModel: "A54",
                        repairCost: "$90",
                        replacementGradeA: "$70",
                        replacementGradeB: "$40",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo K Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "K10",
                        repairCost: "$130",
                        replacementGradeA: "$100",
                        replacementGradeB: "$70",
                      },
                      {
                        deviceModel: "K9 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$90",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "K7x",
                        repairCost: "$100",
                        replacementGradeA: "$80",
                        replacementGradeB: "$50",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo F Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "F21 Pro",
                        repairCost: "$140",
                        replacementGradeA: "$110",
                        replacementGradeB: "$80",
                      },
                      {
                        deviceModel: "F19 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$90",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "F17",
                        repairCost: "$100",
                        replacementGradeA: "$80",
                        replacementGradeB: "$50",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo N Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "N1",
                        repairCost: "$80",
                        replacementGradeA: "$50",
                        replacementGradeB: "$30",
                      },
                      {
                        deviceModel: "N3",
                        repairCost: "$100",
                        replacementGradeA: "$70",
                        replacementGradeB: "$40",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],

        Google: [
          {
            id: 1,
            category: "Google",
            accordionData: [
              {
                title: "Google Pixel 7 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 7 Pro",
                        repairCost: "$220",
                        replacementGradeA: "$180",
                        replacementGradeB: "$150",
                      },
                      {
                        deviceModel: "Pixel 7",
                        repairCost: "$180",
                        replacementGradeA: "$150",
                        replacementGradeB: "$120",
                      },
                    ],
                  },
                },
              },
              {
                title: "Google Pixel 6 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 6 Pro",
                        repairCost: "$200",
                        replacementGradeA: "$160",
                        replacementGradeB: "$130",
                      },
                      {
                        deviceModel: "Pixel 6",
                        repairCost: "$170",
                        replacementGradeA: "$140",
                        replacementGradeB: "$110",
                      },
                    ],
                  },
                },
              },
              {
                title: "Google Pixel 5 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 5",
                        repairCost: "$150",
                        replacementGradeA: "$120",
                        replacementGradeB: "$90",
                      },
                    ],
                  },
                },
              },
              {
                title: "Google Pixel 4 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 4 XL",
                        repairCost: "$140",
                        replacementGradeA: "$110",
                        replacementGradeB: "$80",
                      },
                      {
                        deviceModel: "Pixel 4",
                        repairCost: "$130",
                        replacementGradeA: "$100",
                        replacementGradeB: "$70",
                      },
                    ],
                  },
                },
              },
              {
                title: "Google Pixel 3 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 3 XL",
                        repairCost: "$120",
                        replacementGradeA: "$90",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "Pixel 3",
                        repairCost: "$100",
                        replacementGradeA: "$80",
                        replacementGradeB: "$50",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
    },
    {
      id: 4,
      title: "DIY/Technician Damage Pricing (Dead Phone Revival)",
      description:
        "This service is specifically for devices damaged during DIY or technician attempts.",
      mobileCategory: [
        { mobile: "iPhone" },
        { mobile: "iPad" },
        { mobile: "SamsungPhones" },
        { mobile: "SamsungTablets" },
        { mobile: "iWatch " },
        { mobile: "Oppo" },
        { mobile: "Google" },
      ],
      categories: {
        iPhone: [
          {
            id: 0,
            category: "iPhone",
            accordionData: [
              {
                title: "iPhone 15 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 15 Pro Max",
                        repairCost: "$200",
                        replacementGradeA: "$200",
                        replacementGradeB: "$70",
                      },
                      {
                        deviceModel: "iPhone 15 Pro",
                        repairCost: "$200",
                        replacementGradeA: "$140",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "iPhone 15 Plus",
                        repairCost: "$120",
                        replacementGradeA: "$60",
                        replacementGradeB: "$25",
                      },
                      {
                        deviceModel: "iPhone 15",
                        repairCost: "$120",
                        replacementGradeA: "$55",
                        replacementGradeB: "$25",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 14 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 14 Pro Max",
                        repairCost: "$170",
                        replacementGradeA: "$180",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "iPhone 14 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$160",
                        replacementGradeB: "$50",
                      },
                      {
                        deviceModel: "iPhone 14 Plus",
                        repairCost: "$90",
                        replacementGradeA: "$60",
                        replacementGradeB: "$35",
                      },
                      {
                        deviceModel: "iPhone 14",
                        repairCost: "$90",
                        replacementGradeA: "$60",
                        replacementGradeB: "$25",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 13 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 13 Pro Max",
                        repairCost: "$140",
                        replacementGradeA: "$130",
                        replacementGradeB: "$45",
                      },
                      {
                        deviceModel: "iPhone 13 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$110",
                        replacementGradeB: "$35",
                      },
                      {
                        deviceModel: "iPhone 13",
                        repairCost: "$55",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPhone 13 Mini",
                        repairCost: "$55",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 12 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 12 Pro Max",
                        repairCost: "$70",
                        replacementGradeA: "$70",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPhone 12 Pro",
                        repairCost: "$50",
                        replacementGradeA: "$35",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPhone 12",
                        repairCost: "$50",
                        replacementGradeA: "$35",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPhone 12 Mini",
                        repairCost: "$50",
                        replacementGradeA: "$45",
                        replacementGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone 11 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone 11 Pro Max",
                        repairCost: "$50",
                        replacementGradeA: "$35",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPhone 11 Pro",
                        repairCost: "$40",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },

                      {
                        deviceModel: "iPhone 11",
                        repairCost: "X",
                        replacementGradeA: "X",
                        replacementGradeB: "X",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPhone X Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "iPhone XS Max",
                        repairCost: "$40",
                        replacementGradeA: "$40",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPhone XS",
                        repairCost: "$35",
                        replacementGradeA: "$20",
                        replacementGradeB: "$10",
                      },
                      {
                        deviceModel: "iPhone X",
                        repairCost: "$35",
                        replacementGradeA: "$20",
                        replacementGradeB: "$10",
                      },
                      {
                        deviceModel: "iPhone XR",
                        repairCost: "X",
                        replacementGradeA: "X",
                        replacementGradeB: "X",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
        // second tab
        iPad: [
          {
            id: 1,
            category: "iPad",
            accordionData: [
              {
                title: "iPad Air Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: 'Air 2 9.7" (2014)',
                        repairCost: "$80",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: 'Air 3 10.5" (2019)',
                        repairCost: "$80",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: 'Air 4 11" (2020)',
                        repairCost: "$90",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: 'Air 5 11" (2022)',
                        repairCost: "$90",
                        replacementGradeA: "$50",
                        replacementGradeB: "$25",
                      },
                      {
                        deviceModel: 'Air 6 11" (2024)',
                        repairCost: "Contact Us",
                        replacementGradeA: "Contact Us",
                        replacementGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPad Pro Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: 'Pro 9.7" (2016)',
                        repairCost: "$80",
                        replacementGradeA: "$20",
                        replacementGradeB: "$10",
                      },
                      {
                        deviceModel: 'Pro 10.5" (2017)',
                        repairCost: "$90",
                        replacementGradeA: "$40",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "iPad Pro 11 1st (2018)",
                        repairCost: "$120",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPad Pro 11 2nd (2020)",
                        repairCost: "$120",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPad Pro 11 3rd (2021)",
                        repairCost: "$140",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPad Pro 11 4th (2022)",
                        repairCost: "$140",
                        replacementGradeA: "$40",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "iPad Pro 13 (2024)",
                        repairCost: "Contact Us",
                        replacementGradeA: "Contact Us",
                        replacementGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPad Pro 12.9",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pro 12.9 1st (2015)",
                        repairCost: "$150",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "Pro 12.9 2nd (2017)",
                        repairCost: "$200",
                        replacementGradeA: "$80",
                        replacementGradeB: "$30",
                      },
                      {
                        deviceModel: "Pro 12.9 3rd (2018)",
                        repairCost: "$150",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "Pro 12.9 4th (2020)",
                        repairCost: "$150",
                        replacementGradeA: "$50",
                        replacementGradeB: "$20",
                      },
                      {
                        deviceModel: "Pro 12.9 5th (2021)",
                        repairCost: "$180",
                        replacementGradeA: "$70",
                        replacementGradeB: "$25",
                      },
                      {
                        deviceModel: "Pro 12.9 6th (2022)",
                        repairCost: "Contact Us",
                        replacementGradeA: "Contact Us",
                        replacementGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "iPad Mini Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A ) ",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Mini 4",
                        repairCost: "$80",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "Mini 5",
                        repairCost: "$80",
                        replacementGradeA: "$30",
                        replacementGradeB: "$15",
                      },
                      {
                        deviceModel: "Mini 6",
                        repairCost: "$220",
                        replacementGradeA: "$60",
                        replacementGradeB: "$25",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],

        // third tab
        SamsungPhones: [
          {
            id: 2,
            category: "SamsungPhones",
            accordionData: [
              {
                title: "S Ultra Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      {
                        header: "Refurb price (Old Frame or No Frame)",
                        key: "refurbPriceOldFrame",
                      },
                      {
                        header: "Refurb price (New Frame)",
                        key: "refurbPriceNewFrame",
                      },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S24 Ultra",
                        refurbPriceOldFrame: "$150",
                        refurbPriceNewFrame: "$200",
                        buyBackGradeA: "$110",
                        buyBackGradeB: "$40",
                      },
                      {
                        phoneModel: "S23 Ultra",
                        refurbPriceOldFrame: "$150",
                        refurbPriceNewFrame: "$200",
                        buyBackGradeA: "$110",
                        buyBackGradeB: "$40",
                      },
                      {
                        phoneModel: "S22 Ultra",
                        refurbPriceOldFrame: "$130",
                        refurbPriceNewFrame: "$180",
                        buyBackGradeA: "$110",
                        buyBackGradeB: "$35",
                      },
                      {
                        phoneModel: "S21 Ultra",
                        refurbPriceOldFrame: "$120",
                        refurbPriceNewFrame: "$170",
                        buyBackGradeA: "$80",
                        buyBackGradeB: "$30",
                      },
                      {
                        phoneModel: "S20 Ultra",
                        refurbPriceOldFrame: "$120",
                        refurbPriceNewFrame: "$170",
                        buyBackGradeA: "$70",
                        buyBackGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              //
              {
                title: "Note Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      {
                        header: "Refurb price (Old Frame or No Frame)",
                        key: "refurbPriceOldFrame",
                      },
                      {
                        header: "Refurb price (New Frame)",
                        key: "refurbPriceNewFrame",
                      },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "Note 20 Ultra",
                        refurbPriceOldFrame: "$120",
                        refurbPriceNewFrame: "$170",
                        buyBackGradeA: "$70",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "Note 20",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$10",
                      },
                      {
                        phoneModel: "Note 10 Plus",
                        refurbPriceOldFrame: "$120",
                        refurbPriceNewFrame: "$170",
                        buyBackGradeA: "$70",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "Note 10",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "Note 9",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "Note 8",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$20",
                      },
                    ],
                  },
                },
              },
              {
                title: "S Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      {
                        header: "Refurb price (Old Frame or No Frame)",
                        key: "refurbPriceOldFrame",
                      },
                      {
                        header: "Refurb price (New Frame)",
                        key: "refurbPriceNewFrame",
                      },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S24 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S23 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S22 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S21 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S20 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S10 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "S9 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                      {
                        phoneModel: "S8 Plus",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                      {
                        phoneModel: "S24",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S23",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S22",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S21",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$50",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S20",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$20",
                      },
                      {
                        phoneModel: "S10 5G",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "S10",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "S9",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                      {
                        phoneModel: "S8",
                        refurbPriceOldFrame: "$100",
                        refurbPriceNewFrame: "$150",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                    ],
                  },
                },
              },
              {
                title: "Fold Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "Fold 6 (Outer)",
                        refurbPrice: "$90",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "Fold 5 (Outer)",
                        refurbPrice: "$80",
                        buyBackGradeA: "$30",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "Fold 4 (Outer)",
                        refurbPrice: "$70",
                        buyBackGradeA: "$35",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "Fold 3 (Outer)",
                        refurbPrice: "$90",
                        buyBackGradeA: "$40",
                        buyBackGradeB: "$15",
                      },
                      {
                        phoneModel: "Fold 2 (Outer)",
                        refurbPrice: "$70",
                        buyBackGradeA: "$20",
                        buyBackGradeB: "$10",
                      },
                    ],
                  },
                },
              },

              {
                title: "Fold Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "Outer Screen Refurb",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "Hinge Replacement",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel:
                          "Inner Flex Replacement (Which Goes from One Side to Another)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "Flip Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "Outer Screen Refurb",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "Hinge Replacement",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel:
                          "Inner Flex Replacement (Which Goes from One Side to Another)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],

        // fourth tab
        SamsungTablets: [
          {
            id: 2,
            category: "SamsungTablets",
            accordionData: [
              {
                title: "S8 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S8 Ultra (X900 / X906)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S8 Plus (X800 / X806)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S8 (X700 / X706)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "S7 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S7 Plus (T970 / T975)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S7 (T870 / T875)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S7 FE (T730 / T726)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },

              {
                title: "S6 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "S6 (T860 / T865)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "S6 Lite (P610 / P615 / P613 / P619)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },
              {
                title: "A Series",
                content: {
                  table: {
                    columns: [
                      { header: "Phone Model", key: "phoneModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        phoneModel: "A7 (T500 / T505)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "A 10.1 (T510 / T515)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "A8.0 (T290 / T295)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        phoneModel: "A9 Plus (X210 / X216)",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },

              //
            ],
          },
        ],

        // fifth tab
        iWatch: [
          {
            id: 2,
            category: "iWatch",
            accordionData: [
              {
                title: "iWatch Series",
                content: {
                  table: {
                    columns: [
                      { header: "Watch Model", key: "watchModel" },
                      { header: "Refurb price ($AUD)", key: "refurbPrice" },
                      { header: "Buy Back (Grade A)", key: "buyBackGradeA" },
                      { header: "Buy Back (Grade B)", key: "buyBackGradeB" },
                    ],
                    rows: [
                      {
                        watchModel: "Series 8",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 7",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 6",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 5",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 4",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                      {
                        watchModel: "Series 3",
                        refurbPrice: "Contact Us",
                        buyBackGradeA: "Contact Us",
                        buyBackGradeB: "Contact Us",
                      },
                    ],
                  },
                },
              },

              //
            ],
          },
        ],
        Oppo: [
          {
            id: 1,
            category: "Oppo",
            accordionData: [
              {
                title: "Oppo Find Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Find X5 Pro",
                        repairCost: "$200",
                        replacementGradeA: "$150",
                        replacementGradeB: "$100",
                      },
                      {
                        deviceModel: "Find X5",
                        repairCost: "$180",
                        replacementGradeA: "$140",
                        replacementGradeB: "$90",
                      },
                      {
                        deviceModel: "Find X3 Pro",
                        repairCost: "$160",
                        replacementGradeA: "$130",
                        replacementGradeB: "$80",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo Reno Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Reno 8 Pro",
                        repairCost: "$160",
                        replacementGradeA: "$120",
                        replacementGradeB: "$80",
                      },
                      {
                        deviceModel: "Reno 8",
                        repairCost: "$140",
                        replacementGradeA: "$110",
                        replacementGradeB: "$70",
                      },
                      {
                        deviceModel: "Reno 7",
                        repairCost: "$120",
                        replacementGradeA: "$100",
                        replacementGradeB: "$60",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo A Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "A96",
                        repairCost: "$120",
                        replacementGradeA: "$90",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "A76",
                        repairCost: "$100",
                        replacementGradeA: "$80",
                        replacementGradeB: "$50",
                      },
                      {
                        deviceModel: "A54",
                        repairCost: "$90",
                        replacementGradeA: "$70",
                        replacementGradeB: "$40",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo K Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "K10",
                        repairCost: "$130",
                        replacementGradeA: "$100",
                        replacementGradeB: "$70",
                      },
                      {
                        deviceModel: "K9 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$90",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "K7x",
                        repairCost: "$100",
                        replacementGradeA: "$80",
                        replacementGradeB: "$50",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo F Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "F21 Pro",
                        repairCost: "$140",
                        replacementGradeA: "$110",
                        replacementGradeB: "$80",
                      },
                      {
                        deviceModel: "F19 Pro",
                        repairCost: "$120",
                        replacementGradeA: "$90",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "F17",
                        repairCost: "$100",
                        replacementGradeA: "$80",
                        replacementGradeB: "$50",
                      },
                    ],
                  },
                },
              },
              {
                title: "Oppo N Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back ( Grade A )",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back ( Grade B )",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "N1",
                        repairCost: "$80",
                        replacementGradeA: "$50",
                        replacementGradeB: "$30",
                      },
                      {
                        deviceModel: "N3",
                        repairCost: "$100",
                        replacementGradeA: "$70",
                        replacementGradeB: "$40",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],

        Google: [
          {
            id: 1,
            category: "Google",
            accordionData: [
              {
                title: "Google Pixel 7 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 7 Pro",
                        repairCost: "$220",
                        replacementGradeA: "$180",
                        replacementGradeB: "$150",
                      },
                      {
                        deviceModel: "Pixel 7",
                        repairCost: "$180",
                        replacementGradeA: "$150",
                        replacementGradeB: "$120",
                      },
                    ],
                  },
                },
              },
              {
                title: "Google Pixel 6 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 6 Pro",
                        repairCost: "$200",
                        replacementGradeA: "$160",
                        replacementGradeB: "$130",
                      },
                      {
                        deviceModel: "Pixel 6",
                        repairCost: "$170",
                        replacementGradeA: "$140",
                        replacementGradeB: "$110",
                      },
                    ],
                  },
                },
              },
              {
                title: "Google Pixel 5 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 5",
                        repairCost: "$150",
                        replacementGradeA: "$120",
                        replacementGradeB: "$90",
                      },
                    ],
                  },
                },
              },
              {
                title: "Google Pixel 4 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 4 XL",
                        repairCost: "$140",
                        replacementGradeA: "$110",
                        replacementGradeB: "$80",
                      },
                      {
                        deviceModel: "Pixel 4",
                        repairCost: "$130",
                        replacementGradeA: "$100",
                        replacementGradeB: "$70",
                      },
                    ],
                  },
                },
              },
              {
                title: "Google Pixel 3 Series",
                content: {
                  table: {
                    columns: [
                      { header: "Device Model", key: "deviceModel" },
                      { header: "Refurb price ($AUD)", key: "repairCost" },
                      {
                        header: "Buy Back (Grade A)",
                        key: "replacementGradeA",
                      },
                      {
                        header: "Buy Back (Grade B)",
                        key: "replacementGradeB",
                      },
                    ],
                    rows: [
                      {
                        deviceModel: "Pixel 3 XL",
                        repairCost: "$120",
                        replacementGradeA: "$90",
                        replacementGradeB: "$60",
                      },
                      {
                        deviceModel: "Pixel 3",
                        repairCost: "$100",
                        replacementGradeA: "$80",
                        replacementGradeB: "$50",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
    },
  ];

  const [selectedPriceData, setSelectedPriceData] = useState(priceData[0]);
  const mobileCategory = [
    { mobile: "iPhone" },
    { mobile: "iPad" },
    { mobile: "SamsungPhones" },
    { mobile: "SamsungTablets" },
    { mobile: "iWatch" },
    { mobile: "Oppo" },
    { mobile: "Google" },
  ];

  const priceCat = useSelector((state: RootState) => state.users.priceCat);

  useEffect(() => {
    const filteredData = priceData.find((item) => item.id === priceCat);
    if (filteredData) {
      setSelectedPriceData(filteredData);
    }
  }, [priceCat]);

  const handleMobileCategory = (mobile: string, index: number) => {
    setSelectedCategory(mobile);
    setActiveTabIndex(index);
  };

  const handleToggle = (index: number) => {
    setActiveCategoryIndex(activeCategoryIndex === index ? null : index);
  };

  return (
    <div>
      <section className="py-5 xl:py-10">
        <div className="max-container">
          <div className="my-4">
            <MainHeading Heading={selectedPriceData?.title || ""} />
            {/* <p className="text-gray-300"></p> */}
            <MainTitle Title={selectedPriceData?.description} />
          </div>

          {/* Tabs for categories */}
          <div className="flex mb-6 flex-wrap gap-3 justify-center">
            {mobileCategory.map((category, index) => (
              <button
                key={index}
                className={`px-2 py-2 text-white text-[18px] md:text-[18px] rounded-lg border border-gray-300 w-full sm:w-1/3 md:w-1/4 lg:w-[24%] ${
                  activeTabIndex === index ? "bg-gray-700" : "bg-transparent"
                }`}
                onClick={() => handleMobileCategory(category.mobile, index)}
              >
                {category.mobile}
              </button>
            ))}
          </div>

          {/* Accordion for category content */}
          <div className="space-y-4">
            {selectedPriceData?.categories[selectedCategory]?.length ? (
              selectedPriceData.categories[selectedCategory].map(
                (category, categoryIndex) =>
                  category.accordionData.map((accordion, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 dark:border-gray-700"
                    >
                      <button
                        className="flex w-full items-center justify-between py-3 text-left"
                        onClick={() => handleToggle(index)}
                      >
                        <h3 className="text-white xl:text-[24px] text-[18px] font-[500] xl:leading-[2rem] leading-[24px]">
                          {accordion.title}
                        </h3>
                        {activeCategoryIndex === index ? (
                          <GrSubtract color="white" />
                        ) : (
                          <LuPlus color="white" />
                        )}
                      </button>
                      {activeCategoryIndex === index && (
                        <div className="py-4 pt-0 text-white overflow-auto">
                          <table className="table min-w-full table-auto">
                            <thead>
                              <tr>
                                {accordion.content.table.columns.map(
                                  (column, colIndex) => (
                                    <th
                                      key={colIndex}
                                      className="border-bottom px-4 py-2 text-center"
                                    >
                                      {column.header}
                                    </th>
                                  )
                                )}
                              </tr>
                            </thead>
                            <tbody>
                              {accordion.content.table.rows.map(
                                (row, rowIndex) => (
                                  <tr key={rowIndex}>
                                    {accordion.content.table.columns.map(
                                      (column, colIndex) => (
                                        <td
                                          key={colIndex}
                                          className="border-bottom px-4 py-2 text-center"
                                        >
                                          {row[column.key]}
                                        </td>
                                      )
                                    )}
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  ))
              )
            ) : (
              <p className="text-gray-300">
                No data available for this category.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
