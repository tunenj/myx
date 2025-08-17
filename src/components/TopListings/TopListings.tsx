import Image from "next/image";

type Card = {
    tag: string;
    title: string;
    image: string;
};

const cards: Card[] = [
    {
        tag: "Most Clicked",
        title: "Urban Prime Plaza Premiere",
        image: "/images/img2.jpg",
    },
    {
        tag: "Most Watchlisted",
        title: "Urban Prime Plaza Premiere",
        image: "/images/img.png",
    },
    {
        tag: "Hottest Listing",
        title: "Urban Prime Plaza Premiere",
        image: "/images/img3.png",
    },
];

export default function TopListings() {
    return (
        <div className="relative">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((c) => (
                    <article
                        key={c.tag}
                        className="bg-white border rounded-xl border-gray-300 overflow-hidden shadow"
                    >
                        {/* Remove fixed height on small screens, apply it only on md+ */}
                        <div className="relative h-[220px] sm:h-[260px] md:h-[286px]">
                            <Image
                                src={c.image}
                                alt={c.title}
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 33vw, 100vw"
                                priority
                            />
                            {/* gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            {/* label + title + dots */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                                <span className="font-medium text-white text-xs sm:text-sm uppercase">
                                    {c.tag}
                                </span>
                                <h4 className="mt-1 sm:mt-2 text-white text-sm sm:text-base font-semibold drop-shadow">
                                    {c.title}
                                </h4>
                                <div className="flex justify-center gap-1.5 mt-2">
                                    {[1, 2, 3].map((_, index) => (
                                        <div
                                            key={index}
                                            className="w-1.5 h-1.5 rounded-full bg-white/70"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </section>

            {/* Chat icon - fixed position */}
            <button className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>
        </div>
    );
}
