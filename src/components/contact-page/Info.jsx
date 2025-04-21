import SocialLinks from "../footer/SocialLinks";

const headingStyles = `relative mb-4 mt-6 pb-2 text-xl font-bold capitalize before:absolute before:bottom-0 before:h-1 before:w-16 before:bg-red`;

function Info() {
  return (
    <div>
      <h3 className="mb-4 text-3xl font-bold">
        We are here for help you To Shape Your Body
      </h3>
      <p className="font-medium text-gray-300">
      At BookMyFit, we are dedicated to helping you achieve your fitness goals in a supportive and motivating environment. With state-of-the-art equipment, expert trainers, and a variety of classes, we empower our members to transform their bodies and minds. Join us and become part of our vibrant fitness community!
      </p>
      <div className="grid 2xl:grid-cols-2 2xl:gap-y-8">
        <div>
          <h4 className={headingStyles}>Bengaluru, India</h4>
          <address className="font-medium not-italic text-gray-300">
            Rajankunte
            <br /> Bengaluru
          </address>
        </div>
        <div> 
          <h4 className={headingStyles}>Opening Hours</h4>
          <p className="whitespace-nowrap font-medium text-gray-300">
            Mon to Fri: 9:00 am — 10:00 pm
          </p>
          <p className="whitespace-nowrap font-medium text-gray-300">
            Sat: 10:30 pm — 12:00 am
          </p>
        </div>
        <div>
          <h4 className={headingStyles}>Information</h4>
          <p
            className="block font-medium text-gray-300"
          >
            +91 9988776655
          </p>
          <p
            className="block font-medium text-gray-300"
          >
            bookmyfit@gmail.com
          </p>
        </div>
        <div>
          <h4 className={headingStyles}>Follow Us On</h4>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Info;
