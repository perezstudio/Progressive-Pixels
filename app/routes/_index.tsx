import type { MetaFunction } from "@remix-run/node";
import Logo from "~/components/logo";
import ServiceCard from "~/components/serviceCard";
import Button from "~/components/button";
import FeatureCard from "~/components/featureCard";
import BadgeIcon from "~/icons/badgeIcon";
import DollarIcon from "~/icons/dollarIcon";
import FingerprintIcon from "~/icons/fingerprintIcon";
import LightningIcon from "~/icons/lightningIcon";
import TaskboardIcon from "~/icons/taskboardIcon";
import VertexIcon from "~/icons/vertexIcon";
import PricingCard from "~/components/pricingCard";
import CTACard from "~/components/ctaCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Progressive Pixels" },
    { name: "description", content: "The Premier Design Agency for Progressive Causes" },
  ];
};

export default function Index() {
  return (
    <div>
      <section className="p-4 flex flex-row justify-center">
        <div className="max-w-1200 flex flex-col items-center gap-6">
          <span className="text-cyan-500">Crafting Visions, Driving Change</span>
          <h1 className="text-4xl md:text-6xl font-bold text-center max-w-3xl">The Premier Design Agency for Progressive Causes</h1>
          <p className="text-base font-semibold text-slate-500 text-center max-w-2xl">In the fast-paced world of politics and social change, your message needs to resonate, your voice needs to be heard, and your vision needs to be seen. Progressive Pixels is more than just a service provider; we are your digital ally in the quest for change. Specializing in Democratic Political Campaigns, Parties, and non-profits, we offer a harmonized suite of services designed to amplify your impact.</p>
          <Button to="#" type="primary">Start for Free</Button>
        </div>
      </section>
      <section className="px-8 py-20 flex flex-row justify-center">
        <div className="flex flex-col gap-8 max-w-1200">
          <h2 className="font-bold text-slate-950 text-4xl">Navigating the digital landscape for political campaigns doesn't have to be complex or costly. Say hello to your dedicate marketing team.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ServiceCard preService="Meet " serviceName="Design Essentials" postService=", the unlimited design subscription for your cause." type="design" />
            <ServiceCard preService="Meet " serviceName="Social Media" postService=", your strategist for building your community." type="social" />
            <ServiceCard preService="Meet " serviceName="Web Studio" postService=", your service for building impactful campaign websites." type="web" />
            <ServiceCard preService="Meet " serviceName="Advocacy Ink" postService=", your partner for printing vibrant campaign materials." type="print" />
          </div>
        </div>
      </section>
      <section className="px-8 py-20 flex flex-row justify-center">
        <div className="flex flex-col gap-8 max-w-1200">
          <h2 className="font-bold text-slate-950 text-4xl">How do our services work?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard type="design" heading="Subscribe to a plan and receive portal access" body="With just a few clicks you can setup your login and invite your team to our proprietary client portal.">1</FeatureCard>
            <FeatureCard type="web" heading="Request as many designs as you’d like" body="Start building your request list and ensure every idea & vision is brought to life.">2</FeatureCard>
            <FeatureCard type="print" heading="We’ll revise the designs until you’re 100% satisfied" body="We’ll work closely with you to refine every detail & ensure the final product perfectly aligns with your vision and expectations.">3</FeatureCard>
          </div>
        </div>
      </section>
      <section className="px-8 py-20 flex flex-row justify-center">
        <div className="flex flex-col gap-8 max-w-1200">
          <h2 className="font-bold text-slate-950 text-4xl">Membership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard type="design" heading="Task Board" body="Easily manage your task queue within our easy to use client portal."><TaskboardIcon iconClass="fill-cyan-800" /></FeatureCard>
            <FeatureCard type="web" heading="Lightning Fast Delivery" body="Get your design one at a time in just a few days on average."><LightningIcon iconClass="fill-lime-800" /></FeatureCard>
            <FeatureCard type="print" heading="Fixed Monthly Rate" body="No surprises here! Pay the same fixed price each month."><DollarIcon iconClass="fill-amber-800" /></FeatureCard>
            <FeatureCard type="design" heading="Top Notch Quality" body="Incredible design quality at your fingertips whenever you need it."><BadgeIcon iconClass="fill-cyan-800" /></FeatureCard>
            <FeatureCard type="web" heading="Flexible and Scalable" body="Scale up or down as needed, and pause or cancel at anytime."><VertexIcon iconClass="fill-cyan-800" /></FeatureCard>
            <FeatureCard type="print" heading="Unique and All Yours" body="Each of your designs is made especially for you and is 100% yours."><FingerprintIcon iconClass="fill-amber-800" /></FeatureCard>
          </div>
        </div>
      </section>
      <section className="px-8 py-20 flex flex-row justify-center">
        <div className="flex flex-col gap-8 max-w-1200 w-full">
          <h2 className="font-bold text-slate-950 text-4xl">Join Progressive Pixels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <PricingCard type="design" heading="Design Essentials" dollarAmount="199" centsAmount=".99" included={['Unlimited Revisions', '1-2 day turnaround*']} included={['Unlimited Revisions', 'Domain & Hosting - 1 site', 'One request at a time', 'Unlimited Brands', 'Unlimited Users']} features={['Unlimited Revisions', '1-2 day turnaround*']} included={['Unlimited Revisions', '1-2 day turnaround*', 'One request at a time', 'Unlimited Brands', 'Unlimited Users']} />
            <PricingCard type="social" heading="Design Essentials" dollarAmount="199" centsAmount=".99" included={['Unlimited Revisions', '1-2 day turnaround*']} included={['Unlimited Revisions', 'Domain & Hosting - 1 site', 'One request at a time', 'Unlimited Brands', 'Unlimited Users']} features={['Unlimited Revisions', '1-2 day turnaround*']} included={['Unlimited Revisions', '1-2 day turnaround*', 'One request at a time', 'Unlimited Brands', 'Unlimited Users']} />
            <PricingCard type="web" heading="Design Essentials" dollarAmount="199" centsAmount=".99" included={['Unlimited Revisions', '1-2 day turnaround*']} included={['Unlimited Revisions', 'Domain & Hosting - 1 site', 'One request at a time', 'Unlimited Brands', 'Unlimited Users']} features={['Unlimited Revisions', '1-2 day turnaround*']} included={['Unlimited Revisions', 'Domain & Hosting - 1 site', 'One request at a time', 'Unlimited Brands', 'Unlimited Users']} />
            <PricingCard type="bundle" heading="Design Essentials" dollarAmount="199" centsAmount=".99" included={['Unlimited Revisions', '1-2 day turnaround*']} included={['Unlimited Revisions', 'Domain & Hosting - 1 site', 'One request at a time', 'Unlimited Brands', 'Unlimited Users']} features={['Unlimited Revisions', '1-2 day turnaround*']} included={['Unlimited Revisions', 'Domain & Hosting - 1 site', 'One request at a time', 'Unlimited Brands', 'Unlimited Users']} />
            <CTACard heading="Book a 15 min Intro Call" body="Learn more about how Progressive Pixels works and how it can help you."><Button type="secondary" >Book A Call</Button></CTACard>
          </div>
        </div>
      </section>
    </div>
  );
}
