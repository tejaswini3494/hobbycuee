import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
// import "./ScrollUpButton.css"; // Import CSS for styling

function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    // Show the scroll-up button when scrolling down
    setIsVisible(scrollTop > 100);
  };

  // Add scroll event listener when component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-up-button ${isVisible ? "d-block" : "d-none"} `}>
      <div >
        <GoChevronDown
          onClick={scrollToTop}
          size={32}
          className=" rotate-180 pointer"
        />
      </div>
    </div>
  );
}

export default ScrollUpButton;
