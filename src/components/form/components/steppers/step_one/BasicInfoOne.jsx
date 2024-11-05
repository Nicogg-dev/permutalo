import React, { use } from "react";
import { FormContext } from "../../../../../../src/context/FormContext";
import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import TextFields from "../../Inputs/TextField";
import SelectInput from "../../Inputs/Selects";
import InputFile from "../../Inputs/InputFiles";
import {
    countries,
    typeOfPerson,
    typeOfDocument,
    departamentsColombia,
    ciudadesColombia,
} from "../../../../../../src/utils/variables";

export default function BasicInfoOne() {
    const { control, errors } = React.useContext(FormContext);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography
                    variant="h4"
                    fontWeight={600}
                    component="h3"
                    sx={{ color: "#008593" }}
                >
                    Cuéntanos más de tu propiedad
                </Typography>
            </Grid>

            <Grid item xs={4}>
                <TextFields
                    name="owner.name"
                    label="Nombre"
                    size="small"
                    error={errors?.owner?.name}
                    control={control}
                    fullWidth
                />
            </Grid>

            <Grid item xs={4}>
                <TextFields
                    name="owner.lastname"
                    label="Apellidos"
                    size="small"
                    error={errors.owner?.lastname}
                    control={control}
                    fullWidth
                />
            </Grid>

            <Grid item xs={4}>
                <SelectInput
                    name="owner.type_of_property"
                    label="Tipo de propiedad"
                    defaultValue={""}
                    control={control}
                    error={errors.owner?.type_of_property}
                    list={typeOfPerson}
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <SelectInput
                    name="owner.deparment"
                    label="Departamento"
                    idLabel={"deparment"}
                    defaultValue={""}
                    control={control}
                    error={errors.owner?.deparment}
                    list={departamentsColombia}
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <SelectInput
                    name="owner.city"
                    label="Ciudad"
                    idLabel={"city"}
                    defaultValue={""}
                    control={control}
                    error={errors.owner?.city}
                    list={ciudadesColombia}
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={8}>
                <TextFields
                    name="owner.direction_property"
                    label="Direccion de la propiedad"
                    size="small"
                    error={errors.owner?.direction_property}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    name="owner.value_property"
                    label="Valor aproximado de la propiedad"
                    type="number"
                    size="small"
                    error={errors.owner?.value_property}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    name="owner.meters"
                    label="¿Cuántos metros cuadrados tiene tu propiedad?"
                    type="number"
                    size="small"
                    error={errors.owner?.meters}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    name="owner.number_rooms"
                    label="¿Cuántas habitaciones tiene tu propiedad?"
                    type="number"
                    size="small"
                    error={errors.owner?.number_rooms}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    name="owner.number_bathrooms"
                    label="¿Cuántos baños tiene tu propiedad?"
                    type="number"
                    size="small"
                    error={errors.owner?.number_bathrooms}
                    control={control}
                    fullWidth
                />
            </Grid>

            <Grid item xs={12}>
                <TextFields
                    name="owner.description"
                    label="Desahógate y cuéntanos más de tu propiedad:"
                    size="small"
                    multiline
                    rows={4}
                    error={errors.owner?.description}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <InputFile
                    name="owner.photos_property"
                    label="Muéstrale tu propiedad al mundo, sube fotos de tu propiedad"
                    size="small"
                    error={errors.owner?.photos_property}
                    control={control}
                    fullWidth
                    type="file"
                />
            </Grid>
        </Grid>
    );
}
