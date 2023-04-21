import React from "react";
import AboutUs from "~/assets/svg/about-us.svg";
import OurServes from "~/assets/svg/our-serves.svg";
import OurClient from "~/assets/svg/our-client.svg";
import Faq from "~/assets/svg/fqa.svg";
import Messages from "~/assets/svg/messages.svg";
import VerticalBar from "~/views/shared/vertical-bar";

function SideBar() {
  const sideBar = [
    {
      name: "about-us",
      link: "/admin",
      icon: AboutUs as React.FC<React.SVGProps<SVGSVGElement>>,
    },
    {
      name: "our-services",
      link: "/admin/our-services",
      icon: OurServes as React.FC<React.SVGProps<SVGSVGElement>>,
    },
    {
      name: "our-client",
      link: "/admin/our-client",
      icon: OurClient as React.FC<React.SVGProps<SVGSVGElement>>,
    },
    {
      name: "faq",
      link: "/admin/faq",
      icon: Faq as React.FC<React.SVGProps<SVGSVGElement>>,
    },
    {
      name: "messages",
      link: "/admin/messages",
      icon: Messages as React.FC<React.SVGProps<SVGSVGElement>>,
    },
  ];

  return (
    <nav className="flex flex-col gap-16 w-[299px] rounded-s-none rounded-3xl shadow-2xl h-screen sticky top-0 overflow-hidden">
      <VerticalBar navBar={sideBar as []} className="relative" />
    </nav>
  );
}

export default SideBar;
