import React, { use } from "react";
import { FormContext } from "@/src/context/FormContext";
import {
    Checkbox,
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
    ciudadesColombia,
} from "@/src/utils/variables";
import { MultipleSelects } from "../../Inputs/MultipleSelects";

export default function BasicInfoTwo() {
    const { control, errors, watch, setValue } = React.useContext(FormContext);

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
                    idLabel={"type_of_property"}
                    defaultValue={""}
                    control={control}
                    error={errors.type_of_property}
                    list={typeOfPerson}
                    fullWidth
                    size="small"
                />
            </Grid>

            <Grid item xs={4}>
                <MultipleSelects
                    label="Nombre"
                    name="desired_property.location"
                    size="small"
                    error={errors.name}
                    control={control}
                    list={ciudadesColombia}
                    fullWidth
                />
            </Grid>

            <Grid item xs={4}>
                <Typography variant="h6" fontWeight={600} component="h3">
                    ¿Deseas que tu propiedad sea amoblada?
                </Typography>
                <Checkbox onClick={(e) => {
                    if(e.target.checked){
                        setValue('desired_property.higher_value', true)
                    }
                }} 
                checked={watch('desired_property.higher_value')}>Yes</Checkbox>
                <Checkbox onClick={(e) => {
                    if(e.target.checked){
                        setValue('desired_property.higher_value', false)
                    }
                }} 
                checked={watch('desired_property.higher_value')}>No</Checkbox>
            </Grid>

            <Grid item xs={4}>
                <SelectInput
                    name="city"
                    label="Ciudad"
                    idLabel={"city"}
                    defaultValue={""}
                    control={control}
                    error={errors.city}
                    list={ciudadesColombia}
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={8}>
                <TextFields
                    label="Direccion de la propiedad"
                    name="direction_property"
                    size="small"
                    error={errors.direction_property}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    label="Valor aproximado de la propiedad"
                    name="value_property"
                    type="number"
                    size="small"
                    error={errors.nombre}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    label="¿Cuántos metros cuadrados tiene tu propiedad?"
                    name="meters"
                    type="number"
                    size="small"
                    error={errors.nombre}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    label="¿Cuántas habitaciones tiene tu propiedad?"
                    name="number_rooms"
                    type="number"
                    size="small"
                    error={errors.nombre}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    label="¿Cuántos baños tiene tu propiedad?"
                    name="number_bathrooms"
                    type="number"
                    size="small"
                    error={errors.nombre}
                    control={control}
                    fullWidth
                />
            </Grid>

            <Grid item xs={12}>
                <TextFields
                    label="Desahógate y cuéntanos más de tu propiedad:"
                    name="description"
                    size="small"
                    multiline
                    rows={4}
                    error={errors.nombre}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <InputFile
                    label="Muéstrale tu propiedad al mundo, sube fotos de tu propiedad"
                    name="photos_property"
                    size="small"
                    error={errors.photos_property}
                    control={control}
                    fullWidth
                    type="file"
                />
            </Grid>
        </Grid>
    );
}
