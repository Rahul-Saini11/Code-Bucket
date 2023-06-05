import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const SignUp = dynamic(() => import("../components/SignUp"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}
