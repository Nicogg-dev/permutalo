import { FormContextProvider } from "@/src/context/FormContext";
import { Box } from "@mui/material";
import styles from "./onboarding.module.css";

export const metadata = {
  title: "Permutalo",
  description: "Onboarding",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <Box component="body">
        <Box component="main" className={styles.home_main}>
            <Box component="div" className={styles.home_content}>
                {/* <Nabvar /> */}
                <FormContextProvider>
                    {children}
                </FormContextProvider>
            </Box>
        </Box>
      </Box>
    </html>
  );
}
