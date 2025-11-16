import { Users, MessageSquare, Soup, HeartHandshake } from "lucide-react";
import {
  IconChefHat,
  IconBrandInstagram,
  IconPhoto,
} from "@tabler/icons-react";
import Image from "next/image";

const CommunityPage = () => {
  return (
    <section className="pb-10">
      <div className="meal-container">
        <header className="bg-accent py-4 px-4 rounded-md">
          <div className="flex mb-1">
            <Image
              src="/profile A.png"
              alt="Profile A"
              width={40}
              height={40}
              className="w-10 h-auto rounded-full shadow-sm shadow-black"
            />
            <Image
              src="/profile B.png"
              alt="Profile B"
              width={40}
              height={40}
              className="w-10 h-auto -ml-5 rounded-full shadow-sm shadow-black"
            />
            <Image
              src="/profile C.png"
              alt="Profile C"
              width={40}
              height={40}
              className="w-10 h-auto -ml-5 rounded-full shadow-sm shadow-black"
            />
          </div>
          <h1 className="text-xl font-bold mb-1.5">
            Join Our Foodie Paradise Community
          </h1>
          <p className="text-neutral-300 mt-2">
            Connect with fellow culinary adventurers, share your delicious
            discoveries, and explore unique flavors together.
          </p>
        </header>

        {/* Community Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-card p-5 rounded-xl shadow-md border border-border">
            <div className="flex items-center gap-3">
              <Soup className="w-7 h-7 shrink-0 text-green-400" />
              <h2 className="font-semibold text-lg">Share Your Meal</h2>
            </div>
            <p className="text-sm text-neutral-400 mt-2">
              Showcase your delicious meals crafted with fresh ingredients and
              unique flavors for fellow foodies to discover.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-card p-5 rounded-xl shadow-md border border-border">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-7 h-7 shrink-0 text-blue-400" />
              <h2 className="font-semibold text-lg">Discover & Discuss</h2>
            </div>
            <p className="text-sm text-neutral-400 mt-2">
              Explore cooking techniques, share ingredient secrets, and exchange
              culinary wisdom with passionate food lovers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-card p-5 rounded-xl shadow-md border border-border">
            <div className="flex items-center gap-3">
              <HeartHandshake className="w-7 h-7 shrink-0 text-pink-400" />
              <h2 className="font-semibold text-lg">Taste & Support</h2>
            </div>
            <p className="text-sm text-neutral-400 mt-2">
              Celebrate fellow foodies&apos; culinary creations and build a
              thriving paradise for food enthusiasts.
            </p>
          </div>
        </div>

        {/* Extra Cool Section */}
        <div className="bg-card mt-12 p-6 rounded-xl shadow-md border border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <IconChefHat className="w-6 h-6 shrink-0 text-yellow-400" />
            Culinary Paradise Activities
          </h2>

          <ul className="mt-4 space-y-3 text-neutral-300">
            <li className="flex items-center gap-3">
              <IconPhoto className="text-green-300 shrink-0" />
              Weekly &quot;Discover Delicious&quot; recipe showcase challenge
            </li>
            <li className="flex items-center gap-3">
              <IconBrandInstagram className="text-pink-400 shrink-0" />
              Share your culinary adventures and get featured in our foodie
              paradise
            </li>
            <li className="flex items-center gap-3">
              <Users className="text-blue-300 w-5 h-5 shrink-0" />
              Monthly &quot;Taste &amp; Share&quot; community cooking adventures
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CommunityPage;
