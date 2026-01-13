import React from "react";
import HeroSection from "./HeroSection";
import UpcomingCourses from "./UpcomingCourses";
import HowItWorks from "./HowItWorks";
import ExploreCategories from "./ExploreCategories";
import FeaturedJobs from "./NewAndRandomJobs";
import GlobalHiringHub from "./GlobalHiringHub";
import AssessmentPromo from "./AssessmentPromo";
import CareerCTA from "./CareerCTA";

const Homepage = () => {
  return (
    <>
      {/* START HOME */}
      <HeroSection />
      {/* End Home */}
      {/* START COURSES */}
      <UpcomingCourses />
      {/* END COURSES */}
      {/* START HOW IT WORKS */}
      <HowItWorks />
      {/* END HOW IT WORKS */}
      {/* START EXPLORE CATEGORIES */}
      <ExploreCategories />
      {/* END EXPLORE CATEGORIES */}
      {/* START SHAPE */}

      {/* END SHAPE */}

      {/* START JOB-LIST */}
      <FeaturedJobs />
      {/* END JOB-LIST */}
      {/* START GLOBAL HUB */}
      <GlobalHiringHub />
      {/* END GLOBAL HUB */}
      {/* START ASSESSMENT PROMO */}
      <AssessmentPromo />
      {/* END ASSESSMENT PROMO */}
      {/* START CAREER CTA */}
      <CareerCTA />
      {/* END CAREER CTA */}
    </>
  );
};

export default Homepage;
