import React, { use } from "react";
import { FormContext } from "../../../../../../src/context/FormContext";
import { Grid, Typography } from "@mui/material";
import TextFields from "../../Inputs/TextField";
import SelectInput from "../../Inputs/Selects";
import { typeOfPerson, ciudadesColombia } from "../../../../../../src/utils/variables";
import { MultipleSelects } from "../../Inputs/MultipleSelects";
import CheckBoxYesNo from "../../Inputs/CheckBoxYesNo";

export default function BasicInfoTwo() {
    const { control, errors, watch } = React.useContext(FormContext);
    console.log(watch());

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography
                    variant="h4"
                    fontWeight={600}
                    component="h3"
                    sx={{ color: "#008593" }}
                >
                    ¿Qué tipo de propiedad deseas?
                </Typography>
            </Grid>

            <Grid item xs={4}>
                <SelectInput
                    name="desired_property.type_of_property"
                    label="Tipo de propiedad"
                    defaultValue={""}
                    control={control}
                    error={errors?.desired_property?.type_of_property}
                    list={typeOfPerson}
                    fullWidth
                    size="small"
                />
            </Grid>

            <Grid item xs={4}>
                <MultipleSelects
                    label="Ciudad de interés"
                    name="desired_property.location"
                    size="small"
                    error={errors?.desired_property?.location}
                    control={control}
                    list={ciudadesColombia}
                    fullWidth
                />
            </Grid>

            <Grid item xs={4}>
                <Typography variant="inherit" component="h3">
                    ¿Estás dispuesto a recibir propiedades de mayor valor?
                </Typography>
                <CheckBoxYesNo
                    name="desired_property.higher_value"
                    size="small"
                    error={errors?.desired_property?.higher_value}
                    control={control}
                    list={ciudadesColombia}
                    fullWidth
                />
                {watch("desired_property.higher_value") === 1 && (
                    <TextFields
                        sx={{ marginTop: "1rem", marginBottom: "2rem" }}
                        label="¿Cuál es el valor máximo que estás dispuesto a pagar?"
                        name="desired_property.max_value"
                        type="number"
                        size="small"
                        error={errors?.desired_property?.max_value}
                        control={control}
                        fullWidth
                    />
                )}
            </Grid>

            <Grid item xs={4}>
                <Typography variant="inherit" component="h3">
                    ¿Estás dispuesto a recibir propiedades de menor valor?
                </Typography>
                <CheckBoxYesNo
                    name="desired_property.lower_value"
                    size="small"
                    error={errors?.desired_property?.lower_value}
                    control={control}
                    list={ciudadesColombia}
                    fullWidth
                />
                {watch("desired_property.lower_value") === 1 && (
                    <TextFields
                        sx={{ marginTop: "1rem", marginBottom: "2rem" }}
                        label="¿Cuál es el valor máximo que estás dispuesto a pagar?"
                        name="desired_property.max_value"
                        type="number"
                        size="small"
                        error={errors?.desired_property?.max_value}
                        control={control}
                        fullWidth
                    />
                )}
            </Grid>

            <Grid item xs={4}>
                <SelectInput
                    name="desired_property.measure"
                    label="¿Cuántos metros cuadrados tiene tu propiedad ideal?"
                    defaultValue={""}
                    control={control}
                    error={errors?.desired_property?.measure}
                    list={["50-100", "100-150", "150-200", "250-300"]}
                    fullWidth
                    size="small"
                />
            </Grid>

            <Grid item xs={4}>
                <TextFields
                    label="¿Cuántas habitaciones tiene tu propiedad ideal?"
                    name="desired_property.number_rooms"
                    type="number"
                    size="small"
                    error={errors?.desired_property?.number_rooms}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    label="¿Cuántos baños tiene tu propiedad ideal?"
                    name="desired_property.number_bathrooms"
                    type="number"
                    size="small"
                    error={errors?.desired_property?.number_bathrooms}
                    control={control}
                    fullWidth
                />
            </Grid>

            <Grid item xs={12}>
                <TextFields
                    label="Desahógate y cuéntanos sobre tu hogar ideal:"
                    name="desired_property.description"
                    size="small"
                    multiline
                    rows={4}
                    error={errors?.desired_property?.description}
                    control={control}
                    fullWidth
                />
            </Grid>

            {
            errors && (
                <Grid item xs={12}>
                    <Typography
                        variant="inherit"
                        component="h3"
                        sx={{ color: "red" }}
                    >
                        Por favor, completa los campos obligatorios.
                    </Typography>
                </Grid>
            )}
        </Grid>
    );
}
