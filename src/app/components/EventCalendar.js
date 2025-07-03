"use client";
import { useState } from "react";

// DATA
const eventData = [
  { date: "01-July-25", title: "Maharashtra Krishi Din & Doctor’s Day\nInternational Fruit Day / Van Mahitsav Day/Week" },
  { date: "02-July-25", title: "Van Mahitsav Day/Week" },
  { date: "03-July-25", title: "Van Mahitsav Day/Week" },
  { date: "04-July-25", title: "Van Mahitsav Day/Week" },
  { date: "05-July-25", title: "Van Mahitsav Day/Week" },
  { date: "06-July-25", title: "Van Mahitsav Day/Week" },
  { date: "07-July-25", title: "Van Mahitsav Day/Week" },
  { date: "28-July-25", title: "World Nature Conservation Day" },
  { date: "09-Aug-25", title: "Raksha Bandhan (Rakhi) / Janmashtami (Smarta)" },
  { date: "15-Aug-25", title: "Independence Day" },
  { date: "16-Aug-25", title: "World honey Day" },
  { date: "27-Aug-25", title: "Ganesh Chaturthi" },
  { date: "02-Sep-25", title: "World Coconut Day" },
  { date: "05-Sep-25", title: "Onam" },
  { date: "16-Sep-25", title: "World Ozone Day" },
  { date: "18-Sep-25", title: "World Bamboo Day\nAgronomist day" },
  { date: "21-Sep-25", title: "Biosphere Day" },
  { date: "27-Sep-25", title: "World Tourism Day" },
  { date: "28-Sep-25", title: "First Day of Durga Puja Festivities" },
  { date: "30-Sep-25", title: "Maha Ashtami" },
  { date: "02-Oct-25", title: "Gandhi Jayanti\nNational Women Literacy Day\nInternational Non-Violence Day" },
  { date: "04-Oct-25", title: "World Animal Day" },
  { date: "07-Oct-25", title: "World Cotton Day" },
  { date: "08-Oct-25", title: "Foundation Day" },
  { date: "15-Oct-25", title: "National Women Farmer Day\nInternational Day of Rural Woman" },
  { date: "16-Oct-25", title: "World Food Day" },
  { date: "17-Oct-25", title: "International Day of Eradication of Poverty" },
  { date: "20-Oct-25", title: "Diwali/Deepavali" },
  { date: "22-Oct-25", title: "Govardhan Puja" },
  { date: "28-Oct-25", title: "Chhat Puja (Pratihar Sashthi/Surya Sashthi)" },
  { date: "14-Nov-25", title: "Children’s Day\nWorld Diabetes Day" },
  { date: "28-Nov-25", title: "National Milk Day\nBirthday of Dr Verghese Kurien" },
  { date: "02-Dec-25", title: "National Pollution Day" },
  { date: "03-Dec-25", title: "National Agriculture Education Day\nBirthday of Dr. Rajendra Prasad" },
  { date: "04-Dec-25", title: "Women in Agriculture Day" },
  { date: "05-Dec-25", title: "World Soil Day" },
  { date: "23-Dec-25", title: "National Farmer’s Day (Kisan Diwas)\nBirthday of Choudhary Charan Singh" },
  { date: "24-Dec-25", title: "Jai Kisan Jai Vigyan Week" },
  { date: "25-Dec-25", title: "Jai Kisan Jai Vigyan Week\nChristmas Day" },
  { date: "26-Dec-25", title: "Jai Kisan Jai Vigyan Week" },
  { date: "27-Dec-25", title: "Jai Kisan Jai Vigyan Week" },
  { date: "28-Dec-25", title: "Jai Kisan Jai Vigyan Week" },
  { date: "29-Dec-25", title: "Jai Kisan Jai Vigyan Week" },
];

// Month Tabs
const months = ["July", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function EventCalendar() {
  const [activeMonth, setActiveMonth] = useState("July");

  const filteredEvents = eventData.filter((event) =>
    event.date.includes(`-${activeMonth}-`)
  );

  return (
    <section className="py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2">
        {/* Month Tabs */}
        <div className="flex overflow-x-auto gap-3 mb-6 border bg-[#DADADA] rounded-3xl">
          {months.map((month) => (
            <button
              key={month}
              onClick={() => setActiveMonth(month)}
              className={`min-w-max px-10 py-2 rounded-3xl text-base font-medium transition-all ${
                activeMonth === month
                  ? "bg-[#1B453C] text-white shadow"
                  : "text-black"
              }`}
            >
              {month}
            </button>
          ))}
        </div>

        {/* Event Table */}
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full table-auto border border-gray-200 text-left text-base bg-[#f9f9f9]">
            <tbody>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, idx) => (
                  <tr key={idx} className="border-b border-gray-200">
                    <td className="whitespace-nowrap px-4 py-4 md:px-8 text-[#1B453C] font-medium border-r border-gray-300 min-w-[160px] align-center">
                      {formatDate(event.date)}
                    </td>
                    <td className="px-4 py-4 md:px-8 text-gray-800 text-[15px] whitespace-pre-line">
                      {event.title}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={2}
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No events this month.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// Helper to format "01-Jul-25" => "01 July 2025"
function formatDate(dateStr) {
  const [day, mon, year] = dateStr.split("-");
  const fullMonth = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    July: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };
  return `${day} ${fullMonth[mon]} 20${year.slice(-2)}`;
}
