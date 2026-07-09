import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-12 bg-indigo-900 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-8 px-8 py-10">
        <div>
          <h3 className="mb-4 text-xl font-semibold">Filters</h3>
          <p>All Electronics</p>
          <p>© 2024 American</p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">About Us</h3>
          <p>About Us</p>
          <p>Contact</p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>

          <div className="flex gap-4 text-xl">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
}