import "./App.css";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Menu from "./components/Menu";
import SmartPhone from "./components/SmartPhone";
import Title from "./components/Title";
import "./scss/Category.scss";

import "./scss/SmartPhone.scss";
import phone1 from "./assets/image1.svg";
import phone2 from "./assets/image2.svg";
import phone3 from "./assets/phone3.svg";
import phone4 from "./assets/phone4.svg";
import phone5 from "./assets/phone5.svg";

import TopCategories from "./components/TopCategories";
import "./scss/TopCategories.scss";
import cate1 from "./assets/image1.svg";
import cate2 from "./assets/cate2.svg";
import cate3 from "./assets/cate3.svg";
import cate4 from "./assets/cate4.svg";
import cate5 from "./assets/cate5.svg";
import cate6 from "./assets/cate6.svg";
import cate7 from "./assets/cate7.svg";

import ElectronicsBrands from "./components/ElectronicsBrands";
import "./scss/ElectronicsBrands.scss";
import apple from "./assets/Group 48.svg";
import brand1 from "./assets/brand1.svg";

import Fruit from "./components/Fruit";
import "./scss/Fruit.scss";
import fr from "./assets/fruit0.svg";
import fr1 from "./assets/fruit.svg";
import fr2 from "./assets/fruit1.svg";
import fr3 from "./assets/fruit2.svg";
import fr4 from "./assets/fruit3.svg";
import fr5 from "./assets/fruit4.svg";
import Footer from "./components/Footer";
import Deliver from "./components/Deliver";

function App() {
  const nameCategory = [
    "Groceries",
    "Premium Fruits",
    "Home & Kitchen",
    "Fashion",
    "Electronics",
    "Beauty",
    "Home Improvement",
    "Sports, Toys & Luggage",
  ];
  const productAllPhone = [
    {
      img: phone1,
      name: "Galaxy S22 Ultra",
      price: "$32999",
      discount: "$74999",
      sales: "$32999",
    },
    {
      img: phone2,
      name: "Galaxy M13 (4GB | 64 GB )",
      price: "$10499",
      discount: "$14999",
      sales: "$4500",
    },
    {
      img: phone3,
      name: "Galaxy M33 (4GB | 64 GB )",
      price: "$16999",
      discount: "$24999",
      sales: "$8000",
    },
    {
      img: phone4,
      name: "Galaxy M53 (4GB | 64 GB )",
      price: "$31999",
      discount: "$40999",
      sales: "9000",
    },
    {
      img: phone3,
      name: "Galaxy S22 Ultra",
      price: "$67999",
      discount: "$85999",
      sales: "$18000",
    },
  ];

  const topCategories = [
    {
      img: cate1,
      name: "Mobile",
    },
    {
      img: cate2,
      name: "Cosmetics",
    },
    {
      img: cate3,
      name: "Electronics",
    },
    {
      img: cate4,
      name: "Furniture",
    },
    {
      img: cate5,
      name: "Watches",
    },
    {
      img: cate6,
      name: "Decor",
    },
    {
      img: cate7,
      name: "Accessories",
    },
  ];

  const electronicBrands = [
    {
      name: "IPHONE",
      imgBrand: apple,
      nameSales: "UP to 80% OFF ",
      img: brand1,
    },
    {
      name: "IPHONE",
      imgBrand: apple,
      nameSales: "UP to 70% OFF ",
      img: brand1,
    },
    {
      name: "IPHONE",
      imgBrand: apple,
      nameSales: "UP to 60% OFF ",
      img: brand1,
    },
  ];

  const allFruit = [
    {
      img: fr,
      name: "Daily Essentials",
    },
    {
      img: fr1,
      name: "Vegitables",
    },
    {
      img: fr2,
      name: "Fruits",
    },
    {
      img: fr3,
      name: "Strowberry",
    },
    {
      img: fr4,
      name: "Mango",
    },
    {
      img: fr5,
      name: "Cherry",
    },
  ];
  return (
    <>
      <div className="deliver-container">
        <Deliver />
      </div>
      <div className="App">
        <Menu />
        <div className="category-container">
          {nameCategory?.map((item) => (
            <Category name={item} />
          ))}
        </div>
        <Banner />
        <Title name="Grab the best deal on " name1="Smartphones" />
        <div className="product-container">
          {productAllPhone?.map((item, index) => (
            <SmartPhone item={item} />
          ))}
        </div>
        <Title name="Shop From " name1="Top Categories" />

        <div className="top-category-container">
          {topCategories?.map((item, index) => (
            <TopCategories item={item} />
          ))}
        </div>

        <Title name="Top" name1=" Electronics Brands" />
        <div className="brand-container">
          {electronicBrands?.map((item, index) => (
            <div>
              <ElectronicsBrands item={item} />
            </div>
          ))}
        </div>
        <Title name="Daily " name1="Essentials" />
        <div className="fruit-container">
          {allFruit?.map((item, index) => (
            <Fruit item={item} />
          ))}
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

export default App;
