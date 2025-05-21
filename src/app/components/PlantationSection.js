import React from "react";

const PlantationSection = ({ data }) => {
  if (!data || !data.sections || data.sections.length === 0) return null;

  return (
    <section className="py-14 lg:py-16 bg-[#6D8C54] bg-opacity-30 relative">
      <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
        {data.heading && (
          <h2 className="text-3xl md:leading-[1.3] text-center md:text-4xl font-medium redhat text-[#1B453C] mb-8">
            {data.heading}
          </h2>
        )}

        <div className="flex flex-wrap justify-center gap-14 relative z-10">
          {data.sections.map((section, index) => {
            const isEven = index % 2 === 0;
            const borderRadiusClass = isEven
              ? "rounded-tl-2xl"
              : "rounded-tr-2xl";

            return (
              <div
                key={index}
                className={`md:w-1/2 lg:w-[30%] p-4 pl-10 pr-10 pb-8 w-full border border-black ${borderRadiusClass}`}
              >
                {section.heading && (
                  <h3 className="font-semibold text-base md:text-lg">
                    {section.heading}
                  </h3>
                )}

                {section.items && section.items.length > 0 && (
                  <ul className="list-disc ps-6">
                    {section.items.map((item, idx) => (
                      <li className="text-sm mt-2 font-normal" key={idx}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlantationSection;
