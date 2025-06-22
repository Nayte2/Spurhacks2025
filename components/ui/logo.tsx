import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/images/simplified learning logo.png";

export default function Logo() {
  return (
    <Link
      className="inline-flex items-center text-[0]"
      href="/"
      aria-label="Cruip"
    >
      <Image src={LogoImage} width={32} height={32} priority alt="Logo" />
    </Link>
  );
}
