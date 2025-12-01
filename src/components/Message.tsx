import React from "react";
import type { ReactNode, FC, ReactElement, HTMLProps } from "react";

// --- Reusable FormGroup Component (No Changes) ---
type CloneProps = HTMLProps<HTMLElement> & {
  className: string;
};

interface FormGroupProps {
  label: string;
  children: ReactNode;
  isSelect?: boolean;
}

const FormGroup: FC<FormGroupProps> = ({ label, children, isSelect = false }) => {
  const inputClasses =
    "w-full bg-transparent border-b border-gray-600 py-2.5 text-white text-xs focus:outline-none focus:border-[#98bc62] placeholder-transparent";

  const modifiedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const element = child as ReactElement<CloneProps>;
      let dynamicClasses = inputClasses;

      if (element.type === "textarea") {
        dynamicClasses = `${inputClasses} resize-none h-20`;
      } else if (isSelect) {
        dynamicClasses = `${inputClasses} appearance-none`;
      }

      return React.cloneElement(element, {
        className: dynamicClasses,
      });
    }
    return child;
  });

  return (
    <div className="space-y-1 w-full">
      <label className="block text-xs text-gray-300 font-medium">{label}</label>
      {modifiedChildren}
    </div>
  );
};

// --- Main Contact Section Component ---

const ContactSection: FC = () => {
  return (
    <div className="flex justify-center w-full bg-gray-50 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full mx-auto shadow-xl overflow-hidden rounded-xl">
        <div className="flex flex-col lg:flex-row bg-white">

          {/* LEFT SECTION */}
          <div className="flex flex-col justify-between bg-white p-6 sm:p-8 lg:p-12 flex-1 text-[#2b3c2b] w-full">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Let's Build Your <br /> Enterprise In The
              </h1>

              <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base md:pr-10 lg:pr-20">
                Need fast support? Reach out to us, and we guarantee a response
                from a dedicated team member within one business day. Call us anytime —
                we are here for you.
              </p>

              <img
                src="/pattern-talk.png"
                alt="service mockup"
                className="w-full rounded-lg h-auto mt-8"
              />
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col justify-start items-start bg-[#2c5e2b] p-6 sm:p-8 lg:p-12 flex-1 text-white w-full">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-6">
              <span className="text-gray-300">Which Of</span> Our Services <br /> Can Support You?
            </h2>

            <form className="space-y-4 w-full">
              
              <FormGroup label="I'm looking for:" isSelect>
                <div className="max-w-40">
                <select>
                  <option value="" disabled selected className="bg-[#98bc62] text-white">
                    Select Service
                  </option>
                  <option value="service1" className="bg-[#98bc62] text-white">
                    Web Development
                  </option>
                  <option value="service2" className="bg-[#98bc62] text-white">
                    App Development
                  </option>
                  <option value="service3" className="bg-[#98bc62] text-white">
                    Software Development
                  </option>
                  <option value="service4" className="bg-[#98bc62] text-white">
                    Graphic Designing
                  </option>
                  <option value="service5" className="bg-[#98bc62] text-white">
                    Game Development
                  </option>
                  <option value="service6" className="bg-[#98bc62] text-white">
                    SEO & Content Writing
                  </option>
                  <option value="service7" className="bg-[#98bc62] text-white">
                    Digital Marketing
                  </option>
                  <option value="service8" className="bg-[#98bc62] text-white">
                    UI-UX Designing
                  </option>
                </select>
                </div>
              </FormGroup>
              

              <FormGroup label="Full Name*">
                <input type="text" required />
              </FormGroup>

              <FormGroup label="Email Address*">
                <input type="email" required />
              </FormGroup>

              <FormGroup label="Phone Number*">
                <input type="tel" required />
              </FormGroup>

              <FormGroup label="Enter Brief">
                <textarea />
              </FormGroup>

              <button className="mt-3 px-5 py-2 border border-white rounded-full text-xs sm:text-sm text-white hover:bg-white hover:text-[#2c5e2b] transition font-semibold w-full sm:w-auto">
                Let's Talk Together
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
