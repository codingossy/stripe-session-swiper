import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/navbar/Header";
import Splashscreen from "../splashscreen/SplashScreen";
import ScrollToTop from "../utils/scrolltotop/ScrollToTop";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);
  }, []);

  return (
    <div>
      {/* {isLoading ? (
        <Splashscreen finishedLoading={setIsLoading} />
      ) : ( */}
        <ScrollToTop>
          <Header />
          <Outlet />
    
        </ScrollToTop>
      {/* )} */}
    </div>
  );
};

export default Layout;
