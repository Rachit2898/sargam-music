import React from "react";

function Footer() {
  const socialMediaLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/your-username",
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com/your-username",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/your-username",
    },
  ];

  return (
    <footer className=" text-white py-5  bottom-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-3">About Us</h3>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vel mauris ac sem rutrum tristique.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Contact Us</h3>
            <address className="text-gray-300">
              Address: 123 Main Street, Anytown, CA 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email:{" "}
              <a href="mailto:info@example.com" className="text-white">
                info@example.com
              </a>
            </address>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Social Media</h3>
            <div className="flex space-x-3">
              {socialMediaLinks.map((link) => (
                <a
                  href={link.url}
                  key={link.name}
                  className="text-white hover:text-blue-400 transition duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 my-2">
        <div className="container mx-auto text-center pt-4 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Example Company, Inc.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
