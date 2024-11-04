import React, { use } from 'react';
import { FormContext } from '@/src/context/FormContext';
import {  Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import TextFields from '../../Inputs/TextField';
import SelectInput from '../../Inputs/Selects';
import CheckBoxYesNo from '../../Inputs/CheckBoxYesNo';
import InputFile from '../../Inputs/InputFiles';
import { countries, typeOfPerson, typeOfDocument, departamentsColombia, ciudadesColombia } from '@/src/utils/variables';
import getCitiesByCountry from '@/src/utils/getCountries';
import DynamicTable from '../components/basicInfo/partners';
import FinalBeneficiary from '../components/basicInfo/finalBeneficiary';
import Representante from '../components/basicInfo/representante';

export default function BasicInfoOne() {

    const { control, errors } = React.useContext(FormContext);

    return (

        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" fontWeight={600} component="h3" sx={{ color: "#008593" }}>
                    Informacion Basica
                </Typography>
            </Grid>
            
            <Grid item xs={4}>
                <TextFields
                    label="Nombre"
                    name="name"
                    size="small"
                    error={errors.name}
                    control={control}
                    fullWidth

                />
            </Grid>
            
            <Grid item xs={4}>
                <TextFields
                    label="Apellidos"
                    name="lastname"
                    size="small"
                    error={errors.lastname}
                    control={control}
                    fullWidth

                />
            </Grid>
            
            <Grid item xs={4}>
                <SelectInput
                    name="type_of_property"
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
                <SelectInput
                    name="deparment"
                    label="Departamento"
                    idLabel={"deparment"}
                    defaultValue={""}
                    control={control}
                    error={errors.deparment}
                    list={departamentsColombia}
                    fullWidth
                    size="small"
                />
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
