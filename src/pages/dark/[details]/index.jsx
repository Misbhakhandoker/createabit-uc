import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import About from "@/components/InnerPages/SoftwareDetails/About";
import CallToAction from "@/components/InnerPages/SoftwareDetails/CallToAction";
import Content from "@/components/InnerPages/SoftwareDetails/Content";
import Header from "@/components/InnerPages/SoftwareDetails/Header";
import DarkFooter from "../dark-footer";
import DarkNavbar from "../dark-navbar";
import businessDate from "@/data/Showcases/interactive-center-horizontal.json";
import sliderData from "@/data/Showcases/frame-slider.json";
import { useParams } from "next/navigation";

function SoftwareDetails() {
  const params = useParams()
  console.log(params?.details);

  // data.map((item) => {
  //   item.link
    
  // })

  
 const businessSolution = businessDate.filter(item => item.link === params?.details)
 const businessSolutionData = businessSolution[0]

 const slider = sliderData.filter(item => item.link === params?.details)
 const sliderSingleData = slider[0] 

  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Software Details</title>
      </Head>

      <Loader />
      <DarkNavbar />
      {/* <Menu /> */}
      <main className="main-bg">
        <Header currentPageDate={businessSolutionData ? businessSolutionData : sliderSingleData} />
        <About />
        <Content />
        <CallToAction />
      </main>
      <DarkFooter />
    </>
  );
}

SoftwareDetails.getLayout = (page) => <Layout>{page}</Layout>;

export default SoftwareDetails;
