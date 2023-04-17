import React from "react";
import { IoAccessibility, IoCash, IoGlobe, IoLogoFacebook, IoLogoInstagram, IoLogoTwitch, IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-5 gap-x-20 gap-y-10 w-full py-3 container mx-auto capitalize">
        <div className="flex flex-col gap-y-3 text-sm">
          <h1 className="mb-3 font-semibold">categories</h1>
          <span>Graphics & Design</span>
          <span>Digital Marketing</span>
          <span>Writing & Translation</span>
          <span>Video & Animation</span>
          <span>Music & Audio</span>
          <span>Programming & Tech</span>
          <span>Data</span>
          <span>Business</span>
          <span>Lifestyle</span>
          <span>Photography</span>
          <span>Sitemap</span>
        </div>

        <div className="flex flex-col gap-y-3 text-sm">
          <h1 className="mb-3 font-semibold">about</h1>
          <span>Press & News</span>
          <span>Partnerships</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Intellectual Property Claims</span>
          <span>Investor Relations</span>
          <span>Contact Sales</span>
        </div>

        <div className="flex flex-col gap-y-3 text-sm">
        <h2 className="mb-3 font-semibold">Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Fiverr</span>
            <span>Buying on Fiverr</span>
        </div>

        <div className="flex flex-col gap-y-3 text-sm">
        <h2 className="mb-3 font-semibold">Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
        </div>

        <div className="flex flex-col gap-y-3 text-sm">
        <h2 className="mb-3 font-semibold">More From Fiverr</h2>
            <span>Fiverr Business</span>
            <span>Fiverr Pro</span>
            <span>Fiverr Logo Maker</span>
            <span>Fiverr Guides</span>
            <span>Get Inspired</span>
            <span>Fiverr Select</span>
            <span>ClearVoice</span>
            <span>Fiverr Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
        </div>

      </div>

      <hr />
        <div className="flex flex-col md:flex-row items-center container mx-auto capitalize justify-between w-full py-4">
          <div className="flex items-center gap-x-5">
            <h2>fiverr</h2>
            <span>© Fiverr International Ltd. 2023</span>
          </div>
          <div className="hidden md:flex items-center justify-between gap-x-10">
            <div className="flex items-center gap-x-4">
              <IoLogoTwitch />
              <IoLogoFacebook />
              <IoLogoInstagram />
              <IoLogoWhatsapp />
            </div>
            <div className="flex items-center gap-x-3">
             <IoGlobe />
              <span>English</span>
            </div>
            <div className="flex items-center gap-x-3">
             <IoCash />
              <span>USD</span>
            </div>
            <div>
            <IoAccessibility />
            </div>
          </div>
        </div>


    </footer>
  );
};

export default Footer;
