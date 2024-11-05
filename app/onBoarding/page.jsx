'use client';
import { Box, Typography } from "@mui/material";
import styles from "./onboarding.module.css";
import MainSteppers from "@/src/components/onBoarding/components/steppers/mainStepper";
import { useSession } from "next-auth/react";

export default function Home() {

  const { data: session, status } = useSession();

   if (status === "loading") {
     return <div></div>;
   }

   if (status === "authenticated") {
     return router.push("/user");
   }

  return (
    <Box component="div" className={styles.main}>
      <Typography variant="h2" marginTop={5} fontWeight={600} component="h1" sx={{color:"#008593"}}>
        Formulario Permutalo
      </Typography>

      <MainSteppers />
    </Box>
  );
}
