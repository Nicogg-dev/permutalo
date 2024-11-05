"use client";

import React, { createContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    owner: yup.object().shape({
        name: yup.string().required("Este campo es requerido"),
        lastname: yup.string().required("Este campo es requerido"),
        type_of_property: yup.string().required("Este campo es requerido"),
        deparment: yup.string().required("Este campo es requerido"),
        city: yup.string().required("Este campo es requerido"),
        direction_property: yup.string().required("Este campo es requerido"),
        value_property: yup.string().required("Este campo es requerido"),
        meters: yup.string().required("Este campo es requerido"),
        number_rooms: yup.string().required("Este campo es requerido"),
        number_bathrooms: yup.string().required("Este campo es requerido"),
        description: yup.string().required("Este campo es requerido"),
        photos_property: yup
            .mixed()
            .test("filePresence", "El archivo es requerido", (value) => {
                console.log(value);
                return value !== undefined && value !== null && value !== ""; // Verificar si el archivo está presente
            })
            .test(
                "fileType",
                "Solo se permiten archivos PDF, JPG O PNG",
                (value) => {
                    if (value) {
                        return [
                            "image/jpeg",
                            "image/png",
                            "application/pdf",
                        ].includes(value.type);
                    }
                    return true; // Permitir que el campo esté vacío
                }
            )
            .test(
                "fileSize",
                "El tamaño del archivo no debe ser mayor a 10MB",
                (value) => {
                    if (value) {
                        return value.size <= 10485760; // 10 megabytes en bytes
                    }
                    return true; // Permitir que el campo esté vacío
                }
            ),
    }),
    desired_property: yup.object().shape({
        type_of_property: yup.string().required("Este campo es obligatorio"),
        location: yup.array().of(yup.string().required("Cada elemento debe ser un string")).min(1, "Este campo es obligatorio"),
        higher_value: yup.number().required("Este campo es obligatorio"),
        lower_value: yup.number().required("Este campo es obligatorio"),
        measure: yup.string().required("Este campo es obligatorio"),
        number_rooms: yup.string().required("Este campo es obligatorio"),
        number_bathrooms: yup.string().required("Este campo es obligatorio"),
        description: yup.string(), // No es obligatorio
    }),
});

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
        control,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            desired_property: {
                location: [],
            }
        },
    });

    console.log(errors);

    return (
        <FormContext.Provider
            value={{
                reset,
                handleSubmit,
                getValues,
                setValue,
                setError,
                watch,
                errors,
                control,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

export { FormContext, FormContextProvider };
