import Image from "next/image";
import React from "react";
import newlogo from "../../../public/Images/prclogo.png";
import ProfessionalMegaMenu from "@/app/MegaMenu/ProfessionalMegaMenu";
import MainButton from "../MainButton/MainButton";
const HeaderDev = () => {
    return (
        <div>
            <Image src={newlogo} alt="" />
            <ProfessionalMegaMenu />

            <div className="md:block  hidden">
                <MainButton
                    MainButton="Instant Quote"
                    color=""
                    // onClick={MailRepair}
                    link="/brands"
                    aria-label="Start the repair process for your device"
                />
            </div>
        </div>
    );
};

export default HeaderDev;
