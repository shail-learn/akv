export const Info = ({ title, description }) => {
  if (!title && !description) return null; // Do not render if both are missing

  return (
    <section className="py-10 md:pt-16 px-4 md:px-6 text-center max-w-7xl mx-auto">
      {title && (
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1B453C] mb-10">
          {title}
        </h2>
      )}

      {description && (
        <div className="max-w-5xl mx-auto bg-[#1B453C] text-white rounded-2xl px-6 py-6 text-base  font-light">
          {description}
        </div>
      )}
    </section>
  );
};
