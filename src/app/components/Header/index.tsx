import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

type Props = {
  backHref: string;
  color: string;
  title?: string;
  subTitle?: string;
};

export default function Header({ backHref, color, title, subTitle }: Props) {
  return (
    <div className="h-12 flex">
      <div className="w-12 flex justify-center items-center">
        <Link href={backHref}>
          <IoMdArrowRoundBack size={28} color={color} />
        </Link>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        {title && (
          <div className="font-semibold text-2xl text-#1b1b1b">{title}</div>
        )}
        {subTitle && (
          <div className="text-sm font-normal text-#6a7d8b">{subTitle}</div>
        )}
      </div>
      <div className="w-12 flex justify-center items-center"></div>
    </div>
  );
}
