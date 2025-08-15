"use client";

import { useEffect, useState } from "react";
import BannerPage from "../components/BannerPage";

function Page() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/eventpage")
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((err) => console.error("Failed to fetch event data:", err));
    }, []);

    if (!data) return <div>Loading...</div>;

    // Safe defaults
    const bannerUrl = data.banner
    ? `http://127.0.0.1:8000/images/${data.banner}`
    : "/images/default.jpg";

    const heading = data.heading || "Upcoming Events";
    const subtitle = data.subtitle || "";
    const title = data.title || "Events";
    const opacity = data.opacity || "opacity-50";
    const googleCalendarLink =
        data.google_calendar_link ||
        "https://calendar.google.com/calendar/embed?src=info%40akv.org.in&ctz=Asia%2FKolkata";

    return (
        <>
            <BannerPage
                heading={heading}
                subtitle={subtitle}
                title={title}
                banner={bannerUrl}
                opacity={opacity}
            />

            {/* Full width iframe */}
            <section className="max-w-7xl mx-auto calender_event">
                <div className="w-full px-4 my-10">
                    <iframe
                        src={googleCalendarLink}
                        style={{ border: 0, display: "block" }}
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
