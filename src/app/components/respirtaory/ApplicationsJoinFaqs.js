import React from 'react'
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';
import Titleslider from '../Titleslider';

export const Applications = () => {
  const heading = "Applications Across Industries"

  const boxslider = [
    {
      heading: "Healthcare and Pharmaceuticals",
      description:"These herbs are used in respiratory syrups, bronchodilators, and anti-inflammatory formulations."
    },
    {

      heading: "Personal Care and Hygiene",
      description:"Vajradanti and Tulsi are popular in toothpastes, mouthwashes, and throat sprays."
    },
    {

      heading: "Dietary Supplements",
      description:"Pippali and Tulsi are key ingredients in immune-boosting capsules and powders."

    },
    {

      heading: "Aromatherapy and Essential Oils",
      description:"Tulsi oil is widely used in diffusers, massage blends, and stress-relief formulations."

    },


  ]
  return (
    <>
      <Titleslider heading={heading} boxslider={boxslider} />

    </>
  )
}



export const Join = () => {
  const heading = "Join Atulye Krishi Vana’s Respiratory Health Movement";
  const description =
    "By cultivating these powerful herbs, you can improve respiratory health, reduce inflammation, and contribute to a cleaner, healthier environment. Our project aims to create resilient, high-yield farms that support farmer livelihoods while promoting wellness and environmental restoration. <br/> <br/> For more information on how to get started, contact Atulye Krishi Vana today. Grow better, breathe easier, and cultivate a healthier tomorrow.";

  return (
    <section
      className="relative bg-no-repeat py-14 lg:py-32 bg-cover w-full my-8 md:my-12 !mt-0"
      style={{ backgroundImage: `url(${PartnerBg.src})` }}
    >

      <div className="relative z-10 h-full flex mx-auto px-4   max-w-7xl">
        <div className="max-w-2xl text-white text-center md:text-left pl-3   mt-5">
          <h2 className=" w-full  text-3xl md:text-4xl leading-snug font-bold mb-8 md:mb-10 redhat">
            {heading}
          </h2>
          <p
            className="mb-4 text-sm  md:text-base   w-full"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>


        </div>
      </div>
    </section>
  );
}


export const Faqs = () => {
  const Faqheading =
    "Can these herbs be used for seasonal allergies and respiratory infections?";
  const Faqdescription = `Yes, these herbs are highly effective in managing seasonal allergies and respiratory infections. Pippali acts as a natural decongestant, helping clear nasal passages and reduce mucus buildup. Bharangi is known for its anti-inflammatory and expectorant properties, making it ideal for reducing sinus congestion. Tulsi helps clear airways and strengthens the immune system, while Vajradanti’s antimicrobial properties can help prevent secondary infections. Regular use of these herbs can reduce the frequency and severity of respiratory flare-ups, making them excellent for allergy management and respiratory support.`;
  const FaqsData = [
    {
      question: "Are these herbs suitable for making herbal teas and home remedies?",
      answer:
        "Absolutely. These herbs are commonly used in traditional home remedies and herbal teas. For instance, a tea made from Pippali and Tulsi is often consumed to clear respiratory passages and boost immunity. Bharangi leaves can be boiled to make a soothing steam inhalation for blocked sinuses. Vajradanti can be added to mouth rinses to reduce throat inflammation. These herbs are also used in herbal syrups, throat lozenges, and steam baths for respiratory relief. They offer a convenient, natural way to manage respiratory health at home.",
    },
    {
      question:
        "How do these herbs support lung function and oxygen uptake?",
      answer:
        "These herbs support lung function by reducing inflammation, clearing mucus, and enhancing oxygen uptake. Pippali, for instance, acts as a bronchodilator, widening airways and improving lung capacity. Bharangi helps expel mucus, reducing respiratory congestion, while Tulsi promotes efficient gas exchange in the lungs. Vajradanti reduces throat inflammation, making breathing easier. Together, these herbs improve overall respiratory efficiency, support oxygenation, and reduce the effort required for breathing, making them excellent choices for respiratory health in both preventive and therapeutic contexts",
    },
    {
      question: "Are these herbs effective for smokers or people exposed to pollution?",
      answer:
        "Yes, these herbs are particularly beneficial for smokers and individuals exposed to pollution. Tulsi helps clear tar buildup in the lungs, while Pippali reduces inflammation and soothes irritated respiratory tissues. Bharangi acts as a lung cleanser, expelling trapped pollutants and reducing the risk of chronic respiratory issues. Vajradanti’s antioxidant properties protect lung cells from damage. Regular use of these herbs can help repair respiratory damage, improve lung function, and reduce the risk of respiratory infections, making them ideal for those living in polluted environments or recovering from smoking.",
    },
    {
      question: "Can these herbs be grown in urban gardens or small farms??",
      answer:
        "Yes, these herbs are well-suited for urban gardens and small farms. Tulsi, in particular, is a fast-growing, low-maintenance plant that thrives in pots and small plots. Pippali can be grown in shaded areas or as a climbing vine, making it ideal for urban balconies. Bharangi and Vajradanti can be cultivated as small shrubs in home gardens. These plants are not only space-efficient but also add significant medicinal value to homegrown herbal collections, offering fresh, pesticide-free ingredients for respiratory health and natural remedies.",
    },
    {
      question: "Are these herbs beneficial for children and the elderly?",
      answer:
        "Yes, these herbs are generally safe for children and the elderly when used appropriately. Tulsi and Pippali are often included in children’s cold remedies and immunity boosters. Bharangi is mild yet effective for respiratory congestion, making it suitable for elderly patients. However, it’s important to adjust the dosage based on age and overall health. Consulting an Ayurvedic practitioner or healthcare provider before regular use is recommended, especially for those with pre-existing respiratory conditions. These herbs provide a gentle, natural alternative to synthetic medications for respiratory support.",
    },
  ];

  return (
    <>
      <FaqsLayout
        heading={Faqheading}
        description={Faqdescription}
        faqs={FaqsData}
      />


    </>
  );
}

