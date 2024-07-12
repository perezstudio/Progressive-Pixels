import type { MetaFunction } from "@remix-run/node";
import Logo from "~/components/logo";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <section>
        <div className="font-sans p-4">
          <span>Crafting Visions, Driving Change</span>
          <h1>The Premier Design Agency for Progressive Causes</h1>
          <p>In the fast-paced world of politics and social change, your message needs to resonate, your voice needs to be heard, and your vision needs to be seen. Progressive Pixels is more than just a service provider; we are your digital ally in the quest for change. Specializing in Democratic Political Campaigns, Parties, and non-profits, we offer a harmonized suite of services designed to amplify your impact.</p>
          <a href="#">Start for Free</a>
        </div>
      </section>
      <section>
        <h2>Navigating the digital landscape for political campaigns doesn't have to be complex or costly. Say hello to your dedicate marketing team.</h2>
        <div>
        </div>
      </section>
    </div>
  );
}
