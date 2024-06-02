import { CheckCircle } from "lucide-react"; // Asegúrate de importar los íconos necesarios
// Icons React
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaMeta } from "react-icons/fa6";
import Image from "next/image"; // Asegúrate de importar los íconos necesarios

const data = [
    {
        Feature: "High-Resolution Display",
        description: "Enjoy stunning visuals with our 4K Ultra HD display, providing vibrant colors and sharp details for an immersive viewing experience.",
        image: "/Feature1.jpg",

    },
    {
        Feature: "Long-Lasting Battery",
        description: "With up to 12 hours of battery life, you can work, play, and stay connected all day without needing to recharge.",
        image: "/Feature2.png",

    },
    {
        Feature: "Fast Charging",
        description: "Get back to full power quickly with our fast charging technology, which can charge your device up to 50% in just 30 minutes.",
        image: "/Feature3.png",

    },
];

const Features = () => {
    return (
        <div className="container mx-auto px-4 translate-y-24 p-4">
            {data.map((member, index) => (
                <div key={index} className="mb-10 flex flex-col md:flex-row items-center text-primary-foreground">
                    <div className={`w-full md:w-1/3 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                        <Image src={member.image} alt={member.Feature} width={500} height={500} className="rounded" />
                    </div>
                    <div className={`w-full md:w-2/3 px-4 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                        <h2 className="text-2xl font-bold">{member.Feature}</h2>
                        <p className="mb-4">{member.description}</p>

                    </div>
                </div>
            ))}
        </div>
    );
}

export { Features };
