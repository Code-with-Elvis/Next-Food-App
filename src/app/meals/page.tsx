import { Button } from "@/components/ui/button";
import Link from "next/link";

const MealsPage = () => {
  return (
    <section className="pb-10">
      <div className="meal-container">
        <header className="bg-accent py-4 px-4 rounded-md flex gap-2 flex-col sm:flex-row">
          <div className="flex-1">
            <h1 className="text-xl font-bold mb-1.5">
              Explore Our Delicious Meals
            </h1>
            <p className=" text-neutral-300 leading-relaxed">
              Discover a variety of meals crafted with fresh ingredients and
              unique flavors.
            </p>
          </div>
          <div>
            <Button className="" asChild>
              <Link href="/meals/share">Share Your Meal</Link>
            </Button>
          </div>
        </header>
      </div>
    </section>
  );
};
export default MealsPage;
