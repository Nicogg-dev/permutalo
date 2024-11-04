"use client"

import React, { createContext } from 'react';
import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({

  name: yup.string().required('Este campo es requerido'),
  lastname: yup.string().required('Este campo es requerido'),
  type_of_property: yup.string().required('Este campo es requerido'),
  deparment: yup.string().required('Este campo es requerido'),
  city: yup.string().required('Este campo es requerido'),
  direction_property: yup.string().required('Este campo es requerido'),
  value_property: yup.string().required('Este campo es requerido'),
  meters: yup.string().required('Este campo es requerido'),
  number_rooms: yup.string().required('Este campo es requerido'),
  number_bathrooms: yup.string().required('Este campo es requerido'),
  description: yup.string().required('Este campo es requerido'),  
  photos_property: yup.mixed()
  .test('filePresence', 'El archivo es requerido', value => {
    return value !== undefined && value !== null && value !== ''; // Verificar si el archivo está presente
  })
  .test('fileType', 'Solo se permiten archivos PDF, JPG O PNG', value => {
    if (value) {
      return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
    }
    return true; // Permitir que el campo esté vacío
  })
  .test('fileSize', 'El tamaño del archivo no debe ser mayor a 10MB', value => {
    if (value) {
      return value.size <= 10485760; // 10 megabytes en bytes
    }
    return true; // Permitir que el campo esté vacío
  })
})



const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const {
    handleSubmit,
    getValues,
    setValue,
    setError,
    reset,
    watch,
    formState: { errors },
    control
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      manage_public_resources:false,
      hold_public_office:false,
      enjoy_public_recognition:false,
      belong_pep:false,
      spouse_pep:false,
      family_pep_second_degree:false,
      family_pep_first_degree:false,
      family_pep_civil_degree:false,
      power_sign_foreign_accounts:false,
      declare_funds_legal:false,
      partners_info_contact:[],
      contact_final_beneficiary:[]
    }
  })

  return (
    <FormContext.Provider value={{ reset, handleSubmit, getValues, setValue, setError, watch, errors, control }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormContextProvider };