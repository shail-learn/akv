"use client";
import BannerPage from "../components/BannerPage";
import banner from "../../assets/images/events/banner.webp";

function Page() {
    const text = {
        banner: banner,
        heading: `Upcoming Events`,
        opacity: 'opacity-50'
    };

    return (
        <>
            <BannerPage
                heading={text.heading}
                subtitle={text.subtitle}
                title={text.title}
                banner={text.banner}
                opacity={text.opacity}
            />

            <section className="max-w-7xl mx-auto calender_event">
                <div className="w-full px-4 my-10">
                    
                    {/* Desktop calendar view */}
                    <div className="hidden md:block">
                        <iframe
                            src="https://calendar.google.com/calendar/embed?src=atulyekrishivana1%40gmail.com&ctz=Asia%2FKolkata"
                            style={{ border: 0, display: 'block' }}
                            width="100%"
                            height="600"
                            frameBorder="0"
                            scrolling="no"
                        ></iframe>
                    </div>

                    {/* Mobile list (Agenda) view */}
                    <div className="block md:hidden">
                        <iframe
                            src="https://calendar.google.com/calendar/embed?src=atulyekrishivana1%40gmail.com&mode=AGENDA&ctz=Asia%2FKolkata"
                            style={{ border: 0, display: 'block' }}
                            width="100%"
                            height="600"
                            frameBorder="0"
                            scrolling="no"
                        ></iframe>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Page;
