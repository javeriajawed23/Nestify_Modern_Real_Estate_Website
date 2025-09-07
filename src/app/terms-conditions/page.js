import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Nestify",
  description: "Our terms and conditions for using Nestify services",
};

export default function TermsConditionsPage() {
  return (
    <main className="flex-1">
      <section className="bg-[#5D4037] py-12 md:py-16 px-10">
        <div className="mx-auto max-w-3xl text-center text-[#FFF3B0]">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-[#FFDAB3]">Last updated: May 10, 2025</p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-10 bg-[#FFF3B0]">
        <div className="mx-auto max-w-3xl space-y-8 text-[#5D4037]">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p>
              These terms and conditions outline the rules and regulations for
              the use of Nestify's Website and services. By accessing this website, 
              we assume you accept these terms and conditions in full. Do not continue 
              to use Nestify's website if you do not accept all of the terms and conditions.
            </p>
            <p>
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and any or all Agreements:
              "Client", "You" and "Your" refers to you, the person accessing this website 
              and accepting the Company's terms and conditions. "The Company",
              "Ourselves", "We", "Our" and "Us", refers to our Company. "Party",
              "Parties", or "Us", refers to both the Client and ourselves, 
              or either the Client or ourselves.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">License</h2>
            <p>
              Unless otherwise stated, Nestify and/or its licensors own the
              intellectual property rights for all material on Nestify. All
              intellectual property rights are reserved. You may view and/or
              print pages from https://www.nestify.com for your own personal
              use subject to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Republish material from https://www.nestify.com</li>
              <li>Sell, rent or sub-license material from https://www.nestify.com</li>
              <li>Reproduce, duplicate or copy material from https://www.nestify.com</li>
              <li>Redistribute content from Nestify (unless content is specifically made for redistribution)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">User Comments</h2>
            <p>
              Certain parts of this website offer the opportunity for users to post 
              and exchange opinions, information, material and data ('Comments') 
              in areas of the website. Nestify does not screen, edit, publish or review 
              Comments prior to their appearance on the website and Comments do not reflect 
              the views or opinions of Nestify, its agents or affiliates.
            </p>
            <p>
              Nestify reserves the right to monitor all Comments and to remove any Comments 
              which it considers inappropriate, offensive or otherwise in breach of these Terms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Content Liability</h2>
            <p>
              We shall have no responsibility or liability for any content appearing on your Web site. 
              You agree to indemnify and defend us against all claims arising out of or based upon your Website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Disclaimer</h2>
            <p>
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions 
              relating to our website and the use of this website (including any warranties implied by law in respect of 
              satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). 
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
            <div>
              <p>Nestify</p>
              <p>123 Real Estate Avenue</p>
              <p>Property City, State 12345</p>
              <p>Email: legal@nestify.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>

          <div className="pt-4">
            <Link href="/contact" className="text-[#5D4037] hover:underline">
              Contact us with any questions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
