import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | EstateEase",
  description: "Our privacy policy and how we protect your data",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-teal-700 py-12 md:py-16 px-10">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-teal-100">Last updated: May 10, 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 px-10 bg-slate-50">
        <div className="mx-auto max-w-3xl space-y-10">
          
          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-700">Introduction</h2>
            <p className="text-muted-foreground">
              At EstateEase, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we handle your personal information, your rights, and how the law protects you.
            </p>
            <p className="text-muted-foreground">
              It covers how we collect and process your data when you use our website, sign up for services, make purchases, or participate in promotions.
            </p>
          </div>

          {/* Data We Collect */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-700">The Data We Collect About You</h2>
            <p className="text-muted-foreground">
              Personal data means information that identifies you. We may collect the following types of personal data:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li><strong>Identity Data:</strong> Name, username, title, date of birth, gender.</li>
              <li><strong>Contact Data:</strong> Billing & delivery address, email, phone number.</li>
              <li><strong>Financial Data:</strong> Bank account & payment card info.</li>
              <li><strong>Transaction Data:</strong> Payment and purchase details.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, login data, time zone, device info.</li>
              <li><strong>Profile Data:</strong> Username, password, preferences, interests, survey responses.</li>
              <li><strong>Usage Data:</strong> How you use our website, products, and services.</li>
              <li><strong>Marketing & Communications Data:</strong> Your communication preferences.</li>
            </ul>
          </div>

          {/* How We Use Data */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-700">How We Use Your Personal Data</h2>
            <p className="text-muted-foreground">
              We use your data only when legally allowed, commonly in these circumstances:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>To perform contracts with you.</li>
              <li>For legitimate interests that do not override your rights.</li>
              <li>To comply with legal obligations.</li>
            </ul>
            <p className="text-muted-foreground">
              You can withdraw consent to marketing communications at any time by contacting us.
            </p>
          </div>

          {/* Data Security */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-700">Data Security</h2>
            <p className="text-muted-foreground">
              We protect your personal data with appropriate security measures and limit access to authorized personnel only. Any suspected data breaches will be reported to regulators and you if required.
            </p>
          </div>

          {/* Legal Rights */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-700">Your Legal Rights</h2>
            <p className="text-muted-foreground">
              You have rights under data protection laws, including:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Access your data</li>
              <li>Correct your data</li>
              <li>Request erasure</li>
              <li>Object to processing</li>
              <li>Restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-700">Contact Us</h2>
            <p className="text-muted-foreground">
              For questions about this policy or your data:
            </p>
            <div className="text-muted-foreground space-y-1">
              <p>EstateEase</p>
              <p>123 Real Estate Avenue</p>
              <p>Property City, State 12345</p>
              <p>Email: privacy@estateease.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <Link href="/contact" className="text-teal-700 hover:underline">
              Contact us with any questions
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
