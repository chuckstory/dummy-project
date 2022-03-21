//must install react-hook-form, yup
import React from "react";
import { useTheme } from "@mui/material/styles";
import { FormControl, OutlinedInput, Button } from "@mui/material";
import { useForm, useFormState, Controller } from "react-hook-form";

const Login = () => {
  const theme = useTheme();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      userId: "540002",
      password: "0",
      org: "OPP",
      trackingstatus: "T",
      submit: null,
    },
  });

  const {
    dirtyFields: dirty,
    touchedFields: touched,
    errors,
    isSubmitting,
  } = useFormState({
    control,
  });

  return (
    <form>
      <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
        <Controller
          name={"userId"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <OutlinedInput
              id="userid-login-input"
              type="string"
              value={value}
              name="userId"
              onChange={onChange}
              label="User Id"
              inputProps={{}}
            />
          )}
        />
      </FormControl>

      <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
        <Controller
          name={"password"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <OutlinedInput
              id="userid-login-input"
              type="string"
              value={value}
              name="password"
              onChange={onChange}
              label="Password"
              inputProps={{}}
            />
          )}
        />
      </FormControl>

      <Button
        disabled={isSubmitting}
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="secondary"
      >
        Sign in
      </Button>

     
    </form>
  );
};

export default Login;
