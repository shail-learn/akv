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

            {/* Full width iframe */}
            <section className="max-w-7xl mx-auto calender_event">
                <div className="w-full px-4 my-10">
                    <iframe
                        src="https://calendar.google.com/calendar/embed?src=info%40akv.org.in&ctz=Asia%2FKolkata"
                        style={{ border: 0, display: 'block' }}
                        width="100%"
                        height="600"
                        frameBorder="0"
                        scrolling="no"
                    ></iframe>
                </div>
            </section>

        </>
    );
}

export default Page;
