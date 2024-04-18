import Link from "next/link";
import Container from "./ui/container";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2024{" "}
          <Link href={"https://www.instagram.com/_kkbwk"}>KakaBewok</Link>. All
          rights reserve
        </p>
      </div>
    </footer>
  );
};

export default Footer;
