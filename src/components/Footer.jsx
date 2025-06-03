import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div id="contact" className=" flex w-full h-full">
      <div className="flex flex-col w-[90%] mx-auto">
        <div className="flex mx-auto mb-8">
          <h1 className="md:w-[70%] mx-auto md:mb-10 md:mt-6 mt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cormorant text-center">
            The end of the theory, time to practice. Are you interested ?
          </h1>
        </div>
        {/* 3 cols with contact date */}
        <div className="w-full h-full grid sm:grid-cols-3 grid-cols-1 gap-x-2 ">
          <div className=" w-full  flex flex-col items-center justify-center py-10 px-5 mt-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-semibold mb-6">
              Contact Us
            </h1>
            <p className="text-center">
              12 W 53rd St, New York,
              <br />
              NY 10019 USA
            </p>
            <p className="mt-4">
              +1 (718) 555-0103
              <br />
              info@thecellar.com
            </p>
          </div>
          <div className=" w-full  flex flex-col items-center justify-center py-10 px-5 md:mt-[-20px] relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-semibold text-center md:mt-[-70px] md:mb-8 mb-6">
              The Opulent <span className="text-[#e99b63]">Cellar</span>
            </h1>
            <p className="mb-6">
              Unforgettable moments in one Unique Place. <br /> Don't wait,
              visit and check these products yourself.
            </p>
            <div className="absolute flex gap-8 md:mt-[120px] mt-[160px]">
              <span className="cursor-pointer hover:text-[#e99b63]">
                <TwitterIcon />
              </span>
              <span className="cursor-pointer hover:text-[#e99b63]">
                <FacebookIcon />
              </span>
              <span className="cursor-pointer hover:text-[#e99b63]">
                <InstagramIcon />
              </span>
            </div>
          </div>
          <div className=" w-full  flex flex-col items-center justify-center py-10 px-5 mt-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-semibold mb-6">
              Show Room 
            </h1>
            <p className="text-center">
              Monday - Friday : <br />
              08:00 AM - 12:00 AM
            </p>
            <p className="text-center mt-4">
              Saturday - Sunday : <br />
              10:00 AM - 11:00 PM
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center w-full h-full md:px-10 my-8 relative border-t ">
          <h1 className="text-2xl md:text-4xl font-light mt-2">
            Pio<span className="text-[#e99b63]">Der</span>
          </h1>

          <div>2025, All Rights Reserved. Developed by Pioter</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
