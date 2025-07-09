import PhoneCard from "@/components/phone-card";
import { iphones, samsungPhones } from "@/lib/phone-data";

interface PhoneSectionProps {
  type: "iphone" | "samsung";
  title: string;
  description: string;
  onSelectPhone: (name: string, storage: string, price: number) => void;
  onRequestQuote: (name: string, storage: string, price: number, colors: string[]) => void;
}

export default function PhoneSection({ type, title, description, onSelectPhone, onRequestQuote }: PhoneSectionProps) {
  const phones = type === "iphone" ? iphones : samsungPhones;
  const sectionId = type === "iphone" ? "iphones" : "samsung";
  const bgColor = type === "iphone" ? "bg-gray-50" : "bg-white";

  return (
    <section id={sectionId} className={`py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {phones.map((phone) => (
            <PhoneCard
              key={`${phone.name}-${phone.storage}`}
              phone={phone}
              onSelect={onSelectPhone}
              onRequestQuote={onRequestQuote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
