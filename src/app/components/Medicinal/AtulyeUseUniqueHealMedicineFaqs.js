import { FaqSlider } from '../FaqSlider';
import Titleslider from '../Titleslider';
import { MdCheckCircle } from "react-icons/md";
import Image from 'next/image';
import Plant from "../../../assets/images/eco/future.webp";
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";

export const Atulye = () => {
    const heading = "Atulye Krishi Vana’s Support Ecosystem";
    const title = "Atulye Krishi Vana provides a full spectrum of support to farmers, SHGs, NGOs, and institutions cultivating medicinal and multipurpose trees."
    const subtitle = "Our Services Include: "
    const className = "slider_height height_300";

    const card = [
        {
            title: "Sapling Supply",
            description: "Disease-free, high-quality planting material"
        },
        {
            title: "Agroforestry Planning",
            description: "Layouts for integrated models with food or fodder crops"
        },
        {
            title: "Medicinal Training Modules",
            description: "Identifying parts used, ideal harvest stages, drying and storage methods"
        },
        {
            title: "Market Linkage Support",
            description: "Tie-ups with ayurvedic companies, herbal product makers, and biofuel initiatives"
        },
        {
            title: "Women’s Livelihoods",
            description: "Encouraging SHGs in processing flower powders, wood infusions, oils, and teas"
        },



    ];
    return (
        <>
            <FaqSlider
                classname={className}
                className="shailendra"
                card={card}
                heading={heading}
                title1={title}
                subtitle={subtitle}
            />


        </>
    );
}



export const Use = () => {
    const heading = "Use Cases Across Sectors "

    const boxslider = [
        {
            heading: "Farmers",
            description: "Income from heartwood, oils, flowers, and seeds"
        },
        {
            heading: "Herbal Industry",
            description: "Sustainable raw material for supplements, infusions, and balms"

        },
        {
            heading: "Urban Development",
            description: "Pollution-tolerant greening with medicinal value"

        },
        {
            heading: "Climate NGOs",
            description: "Reclamation and carbon offset programs"

        },
        {
            heading: "SHGs and Cooperatives",
            description: "Training and market support for herbal product lines"

        },


    ]
    return (
        <>
            <Titleslider heading={heading} boxslider={boxslider} />

        </>
    )
}



export const Unique = () => {
    const heading = `Unique Cultural & Environmental Contributions    `

    const futurePlans = [
        `<b>Vijaysar  –</b> Revered in Ayurveda and modern herbal medicine for diabetes`,
        `<b>Lakshmitaru –</b> Symbol of green energy and climate adaptation`,
        `<b>Kachnar –</b> Icon of culinary culture and springtime beauty in India`,

    ];


    return (
        <>

            <section className="text-center md:text-left  pb-16 pt-16 lg:pb-20 lg:pt-20">
                <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-20">

                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-black mb-4 md:mb-20"
                            dangerouslySetInnerHTML={{ __html: heading }}
                        />

                        <ul className="mt-6 space-y-4">
                            {futurePlans.map((plan, index) => (
                                <li key={index} className="flex  text-left space-x-3">
                                    <span className="w-6 h-6 text-[#1B453C] flex items-center justify-center rounded-full">
                                        <MdCheckCircle className='w-6 h-6' />
                                    </span>
                                    <p
                                        className="text-[#141414] redhat"
                                        dangerouslySetInnerHTML={{ __html: plan }}
                                    />
                                </li>
                            ))}
                        </ul>
                      <p className='py-8 redhat'>These trees unite modern science and ancient wisdom to form the backbone of natural wellness, sustainable farming, and ecological restoration.
</p>


                    </div>
                    <div className=" w-full md:w-1/2">

                        <Image
                            src={Plant}
                            alt="Planting"
                            width={200}
                            height={200}
                            className="w-full h-full"
                        />

                    </div>
                </div>
            </section>
        </>
    )
}



export const Heal = () => {
    const heading = "Heal Soil, People, and Economy";
    const description =
        "Medicinal and multi-purpose trees offer more than health—they offer harmony. They reduce ecological degradation, improve farmer incomes, support community wellness, and bring ancient plant wisdom into contemporary practice. <br/><br/> With Atulye Krishi Vana, growing Vijaysar, Lakshmitaru, or Kachnar isn’t just planting a tree—it’s planting a solution. <br/><br/> <b>Nurture well-being. Grow wealth. Heal landscapes.</b>";
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




export const MedicineFaqs = () => {
    const Faqheading =
        "What are the medicinal benefits of Vijaysar, and how is it traditionally used?";
    const Faqdescription = `Vijaysar is a powerful tree in Ayurveda, mainly known for its role in managing diabetes. Its heartwood is used to make herbal cups, where soaking water overnight helps regulate blood sugar levels. The bark and gum also treat skin disorders, ulcers, and dysentery. Traditionally, Vijaysar infusions are part of daily regimens in many Indian households. Beyond human use, it contributes to forest regeneration and soil stabilization, making it a valuable asset for sustainable farming and community health.`;
    const FaqsData = [
        {
            question: "How can farmers earn from cultivating Lakshmitaru trees?",
            answer:
                "Lakshmitaru, or Simarouba glauca, offers multiple revenue streams. Its seeds are processed into oil suitable for biodiesel, soap, and lubricants. Leaves and bark have medicinal applications, while the fast-growing nature makes it suitable for timber and reforestation. Farmers can sell raw seeds to biofuel units or extract oil for value-added products. With proper training, even smallholders can develop sustainable businesses from this one tree—earning through biofuel, organic remedies, and eco-products. Atulye Krishi Vana also connects growers to markets that prioritize green energy and herbal wellness.",
        },
        {
            question:
                "Is Kachnar only used for medicinal purposes or also in food?",
            answer:
                "Kachnar (Bauhinia variegata) is both a medicinal and culinary plant. Its unopened flower buds are widely used in traditional Indian dishes like stir-fries, pickles, and curries. Medicinally, the bark and flowers help treat digestive issues, ulcers, and thyroid-related ailments. Rich in fiber, vitamins, and antioxidants, Kachnar bridges the gap between food and medicine. It is ideal for agroforestry models where dual-purpose crops are favored. The tree’s vibrant blooms also make it popular in ornamental landscaping, adding aesthetic value to farms and homes.",
        },
        {
            question: "Can Vijaysar trees be intercropped with food crops?",
            answer:
                "Yes, Vijaysar trees are ideal for agroforestry systems. They can be intercropped with pulses, millets, or medicinal herbs due to their deep-rooted structure, which does not aggressively compete for surface nutrients. Their canopy also allows filtered sunlight, benefiting partial-shade crops. Farmers practicing intercropping benefit from dual yields—timber or medicinal wood from Vijaysar, and seasonal crops for regular income. This approach improves soil health, enhances biodiversity, and diversifies farmer revenue while reducing dependency on monoculture practices.",
        },
        {
            question: "What climate and soil are suitable for Lakshmitaru plantations?",
            answer:
                "Lakshmitaru thrives in arid, semi-arid, and marginal lands with poor soil fertility. It is tolerant of saline, lateritic, and degraded soils, making it ideal for reclamation and reforestation programs. The tree prefers warm tropical to subtropical climates and requires minimal irrigation once established. It can withstand high temperatures and occasional droughts, which makes it particularly useful in areas facing desertification or low agricultural productivity. This adaptability makes Lakshmitaru a prime candidate for climate-resilient farming under Atulye Krishi Vana.",
        },
        {
            question: "How long does it take for Vijaysar and Lakshmitaru to mature?",
            answer:
                " Vijaysar generally takes 6–8 years to produce harvestable heartwood, while its bark and leaves can be sustainably pruned earlier for medicinal use. Lakshmitaru matures quickly—within 3–4 years—and begins seed production by year five, ideal for biofuel extraction. Both trees offer medium-to-long-term economic returns. With appropriate care and organic inputs, farmers can begin earning from Lakshmitaru oil or Vijaysar wood products early in the planting cycle. Training in pruning and processing can accelerate productivity and ensure ecological sustainability.",
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
