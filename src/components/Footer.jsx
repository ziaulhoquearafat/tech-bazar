import { FaDribbbleSquare, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  const footerNavs = [
    { href: "#", name: "About" },
    { href: "#", name: "Blog" },
    { href: "#", name: "Team" },
    { href: "#", name: "Careers" },
    { href: "#", name: "Support" },
  ];

  return (
    <footer className="bg-gray-800 px-4 py-5 md:px-8 text-white">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <p className="font-extrabold text-3xl text-cyan-400">TECH BAZAR</p>
        <p className="leading-relaxed mt-2 text-[15px]">
          Lorem Ipsum has been the industry standard dummy text ever since the
          1500s.
        </p>
      </div>

      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li key={idx} className="hover:text-gray-800">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2025 Tech Bazar. All rights reserved.
        </div>

        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            {/* Twitter */}
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="#">
                <FaSquareXTwitter />
              </a>
            </li>

            {/* Facebook */}
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="#">
                <FaFacebook />
              </a>
            </li>

            {/* Dribbble */}
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="#">
                <FaDribbbleSquare />
              </a>
            </li>

            {/* Youtube */}
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="#">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
