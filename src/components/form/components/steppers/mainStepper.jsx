"use client";
import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import "./mainStepper.css";
import { FormContext } from "../../../../../src/context/FormContext";
import BasicInfo from "./step_one/BasicInfoOne";
import { successAlert } from "../alerts/success";
import { errorsAlert } from "../alerts/errors";
import BasicInfoOne from "./step_one/BasicInfoOne";
import BasicInfoTwo from "./step_two/BasicInfoTwo";

const steps = ["Paso 1", "Paso 2"];

export default function MainSteppers() {
    const router = useRouter();

    const { handleSubmit, reset, watch, errors } =
        React.useContext(FormContext);

    const [activeStep, setActiveStep] = React.useState(0);

    const [completed, setCompleted] = React.useState({});
    const [enableButton, setEnabledButton] = React.useState(true);

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        console.log(errors);
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                  steps.findIndex((_, i) => !(i in completed))
                : activeStep + 1;
                setActiveStep(newActiveStep)
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    useEffect(() => {
        if(errors.owner){
            setActiveStep(0);
        }
    }, [errors]);


    const onSubmit = (data) => {
  
        setEnabledButton(false);
        const jsonData = {
            ...data,
            partners_info_contact: JSON.stringify(data.partners_info_contact),
            contact_final_beneficiary: JSON.stringify(
                data.contact_final_beneficiary
            ),
            representante: JSON.stringify(data.representante),
        };

        const formData = new FormData();

        Object.keys(jsonData).forEach((key) => {
            if (typeof jsonData[key] === "boolean") {
                formData.append(key, jsonData[key] ? 1 : 0);
                return;
            }
            formData.append(key, jsonData[key]);
        });

        // fetch(`http://localhost:4000/onboarding`, {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/onboarding`, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.ok == true) {
                    setEnabledButton(true);
                    successAlert(
                        "Registro Exitoso, por favor revisar su correo electronico para asignar contraseña",
                        10000
                    );
                    router.push(`login`);
                    // reset();
                } else {
                    errorsAlert("Error al registrar");
                }
            })
            .catch((error) => {
                setEnabledButton(true);
                console.error("Error:", error);
            });
    };


    return (
        <Box sx={{ width: "100%", mt: 5 }}>
            <Box
                component="form"
                display="flex"
                id="form"
                flexDirection="column"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepButton
                                color="inherit"
                                onClick={handleStep(index)}
                            >
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <Box mt={4}>
                    {allStepsCompleted() ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    pt: 2,
                                }}
                            >
                                <Box sx={{ flex: "1 1 auto" }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {activeStep === 0 && <BasicInfoOne />}
                            {activeStep === 1 && <BasicInfoTwo />}

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    pt: 2,
                                }}
                            >
                                {isLastStep() ? (
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{
                                            margin: "auto",
                                            backgroundColor: "#008593",
                                            color: "#fff",
                                            textTransform: "none",
                                            padding: "6px 16px",
                                        }}
                                        disabled={!enableButton}
                                    >
                                        Enviar
                                    </Button>
                                ) : (
                                    <Button 
                                    type="button"
                                    onClick={handleComplete}
                                    variant="contained" 
                                    sx={{
                                      margin: "auto",
                                      backgroundColor: "#008593",
                                      color: "#fff",
                                      textTransform: "none",
                                      padding: "6px 16px",
                                  }}>
                                        Siguiente
                                    </Button>
                                )}
                            </Box>
                        </React.Fragment>
                    )}
                </Box>
            </Box>
        </Box>
    );
}