import Footer from "@/components/web/footer";
import Navbar from "@/components/web/navbar";
import Hero from "@/components/web/launch/hero";
import Grid from "@/components/web/launch/daysgrid";
import CTA from "@/components/web/launch/cta";
import Head from "next/head";
import ChatPage from "@/components/web/assistant/public-chat";

export default function LaunchWeek() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="GHLSign is an open-api document infrastructure for sharing and collaboration. Free alternative to Docsend with custom domain. Manage secure document sharing with real-time analytics."
        />
        <meta property="og:title" content="Launch Week | Papermark" />
        <meta
          property="og:description"
          content="GHLSign is an open-api document infrastructure for sharing and collaboration. Manage secure document sharing with real-time analytics. It is a free alternative to DocSend."
        />
        <meta
          property="og:image"
          content="https://www.papermark.io/_static/meta-image.png"
        />
        <meta property="og:url" content="https://GHLSign.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />

      <div>
        <div className="relative isolate overflow-hidden bg-white ">
          <Hero />
          <Grid />
          <CTA />
          {/* <div className="relative bg-background">
            <ChatPage />
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
