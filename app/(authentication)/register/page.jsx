"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { successAlert } from "@/src/components/onBoarding/components/alerts/success";
import errorsAlert  from "@/src/components/onBoarding/components/alerts/errors";

export const RegisterView = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {

        const { password, repeat_password } = data;
        if(password !== repeat_password){
            errorsAlert("Las contraseñas no coinciden");
            return;
        }
        setLoading(true);

        // Aquí llamamos a nuestra API personalizada de registro
        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (!response.ok) {
                errorsAlert(result.message || "Error en el registro");
                return;
            }

            // Mostrar mensaje de éxito y redirigir al login
            successAlert("Registro exitoso. Redirigiendo al login...");
            router.push("/login"); // O inicia sesión automáticamente
        } catch (error) {
            console.log(error);
            errorsAlert("Error al registrar el usuario");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen p-36 text-center items-center justify-center">
            <h4 className="text-3xl font-bold">Registro</h4>
            <form
                className="flex flex-col w-full text-center items-center justify-center"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-1/2 mt-4">
                    <input
                        {...register("name", { required: true })}
                        id="name"
                        className="bg-gray-50 border font-bold text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-md placeholder:text-blue_custom placeholder:font-light"
                        placeholder="Nombre"
                        required
                    />
                </div>
                <div className="w-1/2 mt-4">
                    <input
                        {...register("email", { required: true })}
                        type="email"
                        id="email"
                        className="bg-gray-50 border font-bold text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-md placeholder:text-blue_custom placeholder:font-light"
                        placeholder="Correo"
                        required
                    />
                </div>
                <div className="w-1/2 mt-4">
                    <input
                        {...register("phone", { required: true })}
                        type="number"
                        id="phone"
                        className="bg-gray-50 border font-bold text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-md placeholder:text-blue_custom placeholder:font-light"
                        placeholder="Teléfono"
                        required
                    />
                </div>
                <div className="w-1/2 mt-4">
                    <input
                        {...register("password", { required: true })}
                        type="password"
                        id="password"
                        className="bg-gray-50 border font-bold text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-md placeholder:text-blue_custom placeholder:font-light"
                        placeholder="Contraseña"
                        required
                    />
                </div>
                <div className="w-1/2 mt-4">
                    <input
                        {...register("repeat_password", { required: true })}
                        type="password"
                        id="repeat_password"
                        className="bg-gray-50 border font-bold text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-md placeholder:text-blue_custom placeholder:font-light"
                        placeholder="Confirma tu Contraseña"
                        required
                    />
                </div>

                <div className="w-1/2 mt-4">
                    <button
                        disabled={loading}
                        type="submit"
                        className="relative overflow-hidden rounded-md bg-blue_custom px-5 py-2.5 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110"
                    >
                        {loading ? "Registrando..." : "Registrarse"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterView;
