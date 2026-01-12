"use client";
import React from "react";
import "./footer.css";
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
    const router = useTransitionRouter();

    const pathname = usePathname();



    function triggerPageTransition(){

      document.documentElement.animate([
        {
         clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)",
        },

        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }

      ],{

        duration:1000,
        easing:"cubic-bezier(0.87, 0, 0.13, 1)",
        pseudoElement:"::view-transition-new(root)",

      })

    }



    const handleNavigation = (path) => (e) =>{

      if (path == pathname){
        e.preventDefault();
        return;
      }

      router.push(path,{
        onTransitionReady: triggerPageTransition,
      })

    }

  return (
    <div className="footer-container">
      <div className="footer-content">
        
        <div className="footer-top">
          <div className="footer-logo">
            <h2>IEEE CUSAT</h2>
          </div>
          <div className="footer-cta">
            <p>Join our community</p>
          </div>
        </div>

        <div className="footer-links-wrapper">
          
          <div className="footer-col">
            <h3>Sitemap</h3>
            <ul>
              <li><a href="/" onClick={handleNavigation("/")}>Home</a></li>
              <li><a href="/about"onClick={handleNavigation("/about")}>About</a></li>
              <li><a href="/events"onClick={handleNavigation("/events")}>Events</a></li>
              <li><a href="/gallery"onClick={handleNavigation("/gallery")}>Gallery</a></li>
              <li><a href="/contact"onClick={handleNavigation("/contact")}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Socials</h3>
            <ul>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram &#8599;
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn &#8599;
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:ieeecusatsb@gmail.com">ieeecusatsb@gmail.com</a></li>
              <li><span>+91 98765 43210</span></li>
              <li><span>Kochi, Kerala</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} IEEE CUSAT SB. All rights reserved.</p>
          
          <div className="back-to-top" onClick={handleScrollTop}>
            <p>Back to Top &uarr;</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;