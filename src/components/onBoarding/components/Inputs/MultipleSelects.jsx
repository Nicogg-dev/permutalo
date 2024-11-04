
import React from "react";
import {
    Autocomplete,
    CircularProgress,
    FormControl,
    FormHelperText,
    TextField,
} from "@mui/material";
import {
    Control,
    Controller,
    FieldErrors,
    FieldValues,
    Path,
} from "react-hook-form";

export const MultipleSelects = ({
    error,
    control,
    name,
    list=[],
    isLoading,
    onActionChange,
    label,
    disabled = false,
    // defaultValue,
}) => {

    return (
        <FormControl fullWidth>
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                    <Autocomplete
                        multiple
                        // defaultValue={defaultValue}
                        disabled={disabled}
                        onBlur={onBlur}
                        value={list.filter((item) => value?.includes(item.id))}
                        options={list}
                        onChange={(_, newValue) => {
                            const selectedItem = newValue.map(
                                (item) => item.id
                            );
                            onChange(selectedItem || []);
                        }}
                        getOptionLabel={(option) => `${option.name}`}
                        loading={isLoading}
                        renderInput={(params) => (
                            <TextField
                                onChange={(e) => {
                                    if (onActionChange) {
                                        onActionChange(e.target.value);
                                    }
                                }}
                                {...params}
                                size="small"
                                fullWidth
                                label={label}
                                disabled={disabled}
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <>
                                            {isLoading ? (
                                                <CircularProgress color='primary' size={24} />
                                            ) : null}
                                            {params.InputProps.endAdornment}
                                        </>
                                    ),
                                }}
                            />
                        )}
                    />
                )}
            />
            {error && (
                <FormHelperText sx={{ ml: 1.6, color: "error.main" }}>
                    <>{error?.message}</>
                </FormHelperText>
            )}
        </FormControl>
    );
};
