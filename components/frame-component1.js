"use client";
import { memo, useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Menu from "./menu";
import EyeglassesMenu from "./eyeglassesMenu";
import BrandMenu from "./Brandmenu";
import ContactLens from "./ContactLens";
import MobileSubMenu from "./mobile-sub-menu";
import BrandsMblMenu from "./brands-mbl-menu";
import EyeGlassesMblMenu from "./eye-glasses-mbl-menu";
import ContactLensMblMenu from "./contact-lens-mbl-menu";

const FrameComponent1 = memo(({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMblSubMenuOpen, setIsMblSubMenuOpen] = useState(false);
  const [isMblBrandSubMenuOpen, setIsMblBrandSubMenuOpen] = useState(false);
  const [isMblEyeGlassesSubMenuOpen, setIsMblEyeGlassesSubMenuOpen] =
    useState(false);
  const [isMblContactLensSubMenuOpen, setIsMblContactLensSubMenuOpen] =
    useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isBrandMenuOpen, setIsBrandMenuOpen] = useState(false);
  const [isContactLensMenuOpen, setIsContactLensMenuOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEyeglassesMenuOpen, setIsEyeglassesMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMenu = (setMenuState) => {
    setMenuState((prev) => !prev);
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isBrandMenuOpen && !event.target.closest(".brand-menu")) {
        setIsBrandMenuOpen(false);
      }
      if (
        isContactLensMenuOpen &&
        !event.target.closest(".contact-lens-menu")
      ) {
        setIsContactLensMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBrandMenuOpen, isContactLensMenuOpen]);

  useEffect(() => {
    const fetchBrandsData = async () => {
      try {
        const response = await fetch(
          "https://apitrivsion.prismcloudhosting.com/api/brands/all"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBrands(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBrandsData();
  }, []);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const response = await fetch(
          "https://apitrivsion.prismcloudhosting.com/api/category/all"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategoriesData();
  }, []);

  return (
    <header
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-center text-xs text-background-color-primary font-h4-32 ${className}`}
    >
      <div className="self-stretch bg-black overflow-hidden flex flex-row items-start justify-between py-[13px] px-10 gap-5 z-20">
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
          loading="lazy"
          width={24}
          height={24}
          alt=""
          src="/iconamoonarrowup2@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 mq1250:w-[-1px]">
          <div className="self-stretch relative leading-[150%] font-medium">
            Sale: 20% Off - Limited Time Only
          </div>
        </div>
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
          width={24}
          height={24}
          alt=""
          src="/iconamoonarrowup2-1@2x.png"
        />
      </div>
      <div className="self-stretch flex-1 bg-whitesmoke-100 border-gray-800 border-b-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-[18px] px-20 pb-4 max-w-full z-[20] text-left text-smi text-black font-inter mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="flex-1 flex flex-row items-center justify-center gap-[70.7px] max-w-full mq991:gap-[18px] mq750:gap-[15px]">
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <Image
              className="self-stretch h-9 relative max-w-full overflow-hidden shrink-0 object-cover mq750:object-contain w-[186px] mq480:max-w-fit mq480:w-[100px]"
              loading="lazy"
              width={186}
              height={36}
              alt=""
              src="/logo@2x.png"
            />
          </div>
          <div className="w-[777px] flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border max-w-full mq991:w-0 mq991:hidden">
            <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-6 text-center text-sm text-black font-h4-32 mq991:hidden">
              <div className="relative leading-[150%] uppercase font-medium inline-block min-w-[80px]">
                FEATURED
              </div>
              <div
                className="relative leading-[150%] uppercase font-medium cursor-pointer"
                onClick={() => toggleMenu(setIsBrandMenuOpen)}
              >
                Brands
              </div>
              <div
                className="relative leading-[150%] uppercase font-medium cursor-pointer"
                onClick={() => toggleMenu(setIsSidebarOpen)}
              >
                Sunglasses
              </div>
              <div
                className="relative leading-[150%] uppercase font-medium cursor-pointer"
                onClick={() => toggleMenu(setIsEyeglassesMenuOpen)}
              >
                Eyeglasses
              </div>
              <div
                className="flex-1 relative leading-[150%] uppercase font-medium inline-block cursor-pointer min-w-[112px]"
                onClick={() => toggleMenu(setIsContactLensMenuOpen)}
              >
                Contact Lens
              </div>
              <div className="flex-1 relative leading-[150%] uppercase font-medium inline-block min-w-[103px]">
                ACCESSORIES
              </div>
              <div className="relative leading-[150%] uppercase font-medium text-red inline-block min-w-[90px]">
                BEST VALUE
              </div>
            </nav>
          </div>
          <div className="w-44 flex flex-row items-start justify-start">
            <Image
              className="h-11 w-11 relative"
              loading="lazy"
              width={44}
              height={44}
              alt=""
              src="/search.svg"
            />
            <Image
              className="h-11 w-11 relative"
              loading="lazy"
              width={44}
              height={44}
              alt=""
              src="/account.svg"
              onClick={() => {
                const token = localStorage.getItem("token");
                if (token) {
                  router.push("/my-account");
                } else {
                  router.push("/login");
                }
              }}
            />
            <Image
              className="h-11 w-11 relative"
              loading="lazy"
              width={44}
              height={44}
              alt=""
              src="/wish.svg"
              onClick={() => {
                const token = localStorage.getItem("token");
                if (token) {
                  router.push("/wishlist");
                } else {
                  router.push("/login");
                }
              }}
            />
            <div className="h-11 w-11 flex-1 relative z-[1]">
              <Image
                className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_11px)] w-[22px] h-[22px]"
                loading="lazy"
                width={22}
                height={22}
                alt=""
                src="/svg.svg"
                onClick={() => {
                  const token = localStorage.getItem("token");
                  if (token) {
                    router.push("/Cart");
                  } else {
                    router.push("/login");
                  }
                }}
              />
              <a className="[text-decoration:none] absolute top-[0px] left-[28.9px] leading-[13px] text-[inherit] flex items-center w-[9px] h-[13px] min-w-[9px] z-[1] mq750:left-[70%] mq480:top-[5%] mq480:left-[70%]">
                0
              </a>
            </div>
          </div>
          {/* Mobile Hamburger */}
          <button
            className="nav_mbl_menu_btn bg-transparent cursor-pointer"
            onClick={() => toggleMenu(setIsMobileMenuOpen)}
          >
            <Image src="/menu-burger.svg" width={24} height={24} alt="Menu" />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-30 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end mb-4 p-1 pb-0 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image src="/close-menu.svg" width={20} height={20} alt="Menu" />
          </button>
          <div
            className="cursor-pointer p-2 mb-2 text-xs uppercase text-black text-start bg-gray-600 font-600 hover:font-bold hover:text-red"
            onClick={() => handleNavigation("/")}
          >
            Featured
          </div>
          <div
            className="cursor-pointer p-2 mb-2 text-xs uppercase text-black text-start bg-gray-600 font-600 hover:font-bold hover:text-red"
            onClick={() => toggleMenu(setIsMblBrandSubMenuOpen)}
          >
            Brands
          </div>
          <div
            className="cursor-pointer p-2 mb-2 text-xs uppercase text-black text-start bg-gray-600 font-600 hover:font-bold hover:text-red"
            onClick={() => toggleMenu(setIsMblSubMenuOpen)}
          >
            Sunglasses
          </div>
          <div
            className="cursor-pointer p-2 mb-2 text-xs uppercase text-black text-start bg-gray-600 font-600 hover:font-bold hover:text-red"
            onClick={() => toggleMenu(setIsMblEyeGlassesSubMenuOpen)}
          >
            Eyeglasses
          </div>
          <div
            className="cursor-pointer p-2 mb-2 text-xs uppercase text-black text-start bg-gray-600 font-600 hover:font-bold hover:text-red"
            onClick={() => toggleMenu(setIsMblContactLensSubMenuOpen)}
          >
            Contact Lens
          </div>
          <div className="cursor-pointer p-2 mb-2 text-xs uppercase text-black text-start bg-gray-600 font-600 hover:font-bold hover:text-red">
            Accessories
          </div>
          <div className="cursor-pointer p-2  text-xs uppercase text-black text-start bg-gray-600 font-600 hover:font-bold hover:text-red">
            Best Value
          </div>
        </div>
      </div>
      {/* mobile submenu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[30] transform ${
          isMblBrandSubMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end mb-4 p-2 text-sm text-gray-200 hover:text-black"
            onClick={() => setIsMblBrandSubMenuOpen(false)}
          >
            Close
          </button>
          <BrandsMblMenu brands={brands} />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[30] transform ${
          isMblSubMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end mb-4 p-2 text-sm text-gray-200 hover:text-black"
            onClick={() => setIsMblSubMenuOpen(false)}
          >
            Close
          </button>
          <MobileSubMenu category={categories} />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[30] transform ${
          isMblEyeGlassesSubMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end mb-4 p-2 text-sm text-gray-200 hover:text-black"
            onClick={() => setIsMblEyeGlassesSubMenuOpen(false)}
          >
            Close
          </button>
          <EyeGlassesMblMenu category={categories} />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[30] transform ${
          isMblContactLensSubMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end mb-4 p-2 text-sm text-gray-200 hover:text-black"
            onClick={() => setIsMblContactLensSubMenuOpen(false)}
          >
            Close
          </button>
          <ContactLensMblMenu brands={brands} />
        </div>
      </div>
      {/* Desktop Menus */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[30] transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end mb-4 p-2 text-sm text-gray-500 hover:text-black"
            onClick={() => setIsSidebarOpen(false)}
          >
            Close
          </button>
          <Menu category={categories} />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[30] transform ${
          isEyeglassesMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end mb-4 p-2 text-sm text-gray-500 hover:text-black"
            onClick={() => setIsEyeglassesMenuOpen(false)}
          >
            Close
          </button>
          <EyeglassesMenu category={categories} />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg z-10 transform ${
          isBrandMenuOpen ? "translate-y-20" : "-translate-y-full"
        } transition-transform duration-300 brand-menu`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end mb-4 p-2 text-sm text-gray-500 hover:text-black"
            onClick={() => setIsBrandMenuOpen(false)}
          >
            Close
          </button>
          <BrandMenu brands={brands} />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg z-10 transform ${
          isContactLensMenuOpen ? "translate-y-20" : "-translate-y-full"
        } transition-transform duration-300 overflow-auto contact-lens-menu`}
      >
        <div className="flex flex-col p-4 h-full">
          <button
            className="self-end mb-4 p-2 text-sm text-gray-500 hover:text-black"
            onClick={() => setIsContactLensMenuOpen(false)}
          >
            Close
          </button>
          <ContactLens />
        </div>
      </div>
    </header>
  );
});

FrameComponent1.propTypes = {
  className: PropTypes.string,
  handleNavigation: PropTypes.func.isRequired,
};

export default FrameComponent1;
