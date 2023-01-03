import { MenuOutlined } from "@mui/icons-material";
import { toggleSidebar } from "../utils";

interface Props{
    title:string;
}

export function Header({ title }: Props) {
  return (
    <header className="h-16 md:ml-64 sm:ml-0 bg-[#04bcc4] flex items-center text-white px-5">
        <button className="mr-5 md:hidden sm:block" onClick={toggleSidebar}>
            <MenuOutlined/>
        </button>
      <p>{title}</p>
    </header>
  );
}
