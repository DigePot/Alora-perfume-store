import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 text-center p-4 mt-8">
      &copy; {new Date().getFullYear()} Alora Perfume. All rights reserved.
    </footer>
  );
}
