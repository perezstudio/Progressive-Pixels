import type { MetaFunction } from "@remix-run/node";
import Logo from "~/components/logo";
import ServiceCard from "~/components/serviceCard"

export const meta: MetaFunction = () => {
  return [
    { title: "Progressive Pixels" },
    { name: "description", content: "The Premier Design Agency for Progressive Causes" },
  ];
};

export default function Index() {
  return (
    <div>
      <section className="font-sans p-4">
        <div>
          <span>Crafting Visions, Driving Change</span>
          <h1>The Premier Design Agency for Progressive Causes</h1>
          <p>In the fast-paced world of politics and social change, your message needs to resonate, your voice needs to be heard, and your vision needs to be seen. Progressive Pixels is more than just a service provider; we are your digital ally in the quest for change. Specializing in Democratic Political Campaigns, Parties, and non-profits, we offer a harmonized suite of services designed to amplify your impact.</p>
          <a href="#">Start for Free</a>
        </div>
      </section>
      <section className="p-4">
        <div className="flex flex-col gap-8">
          <h2 className="font-bold text-slate-950 text-4xl">Navigating the digital landscape for political campaigns doesn't have to be complex or costly. Say hello to your dedicate marketing team.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ServiceCard preService="Meet " serviceName="Design Essentials" postService=", the unlimited design subscription for your cause." type="design" />
            <ServiceCard preService="Meet " serviceName="Social Media" postService=", your strategist for building your community." type="social" />
            <ServiceCard preService="Meet " serviceName="Web Studio" postService=", your service for building impactful campaign websites." type="web" />
            <ServiceCard preService="Meet " serviceName="Advocacy Ink" postService=", your partner for printing vibrant campaign materials." type="print" />
          </div>
        </div>
      </section>
    </div>
  );
}
