import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import doctorImg from "assets/images/doctor.svg";
import { useFormik } from "formik";
import gsap from "gsap/all";
import { useEffect, useRef } from "react";
import AnimateContent from "./AnimateContent";
import * as Yup from "yup";
import useAuth from "hook/use-auths";

type InitialFormValues = {
  email: string;
  password: string;
  afterSubmit?: string;
};
const Login: React.FC = () => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("md"));
  let containerRef = useRef(null);
  const { login, loginWithGoogle } = useAuth();
  const formik = useFormik<InitialFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        let user = await login(values.email, values.password);
        console.log(values);
        setSubmitting(false);
      } catch (error) {
        console.error(error);
        setErrors({ afterSubmit: "Login Fail!" });
        setSubmitting(false);
      }
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(6, "Too Short!")
        .max(30, "Too Long!")
        .required("Required"),
    }),
  });
  const { errors, setErrors, isSubmitting } = formik;

  const handleLoginGoogle = async () => {
    try {
      let user = await loginWithGoogle();
      console.log(user);
    } catch (e) {
      console.error(e);
      setErrors({ afterSubmit: "Login Fail!" });
    }
  };

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 0.7,
      y: -1000,
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          // width: "100vw",
          backgroundColor: theme.palette.secondary.light,
          padding: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth={matchDownMD ? "sm" : "lg"}
          sx={{}}
          ref={containerRef}
        >
          <Grid
            component={Paper}
            elevation={3}
            container
            direction="row"
            justifyContent={"space-between"}
            alignItems={"stretch"}
            gap={8}
            sx={{
              borderRadius: "16px",
              // transform: "translateY(25%)",

              paddingX: 4,
              paddingY: 4,
            }}
          >
            <Grid
              item
              xs={12}
              md={5}
              lg={4}
              gap={8}
              container
              component={"form"}
              onSubmit={formik.handleSubmit}
              direction="column"
              justifyContent={"center"}
              sx={{
                backgroundColor: "#fff",
                boxShadow: matchDownMD
                  ? undefined
                  : "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                borderRadius: "16px",
                padding: matchDownMD ? 2 : 5,
                transition: theme.transitions.create("height", {
                  easing: theme.transitions.easing.easeInOut,
                  duration: "0.7s",
                }),
              }}
            >
              <Grid item container direction="column" gap={3}>
                <Grid item>
                  {" "}
                  <Typography variant="h1">Welcome Back</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption">
                    Welcome back! Please enter your details
                  </Typography>
                </Grid>
                <Grid item>
                  {errors.afterSubmit && (
                    <Alert severity="error">{errors.afterSubmit}</Alert>
                  )}
                </Grid>
              </Grid>
              <Grid
                item
                container
                gap={4}
                alignItems={"stretch"}
                direction={"column"}
              >
                <Grid item>
                  <FormControl fullWidth margin="dense">
                    <FormLabel sx={{ marginBottom: 2 }}>Email</FormLabel>
                    <TextField
                      fullWidth
                      placeholder="Enter your email"
                      name="email"
                      type={"email"}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      size={matchDownMD ? "small" : "medium"}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl fullWidth>
                    <FormLabel sx={{ marginBottom: 2 }}>Password</FormLabel>
                    <TextField
                      fullWidth
                      type={"password"}
                      placeholder="Enter your password"
                      name="password"
                      variant="outlined"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      size={matchDownMD ? "small" : "medium"}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  justifyContent={"space-between"}
                >
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Remember me"
                    />
                  </Grid>

                  <Grid item>
                    <Button
                      variant="text"
                      disableRipple
                      disableFocusRipple
                      disableTouchRipple
                      sx={{
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Forget Password
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                container
                direction={"column"}
                alignItems="stretch"
                gap={3}
              >
                <Grid item>
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    loading={isSubmitting}
                  >
                    Sign in
                  </LoadingButton>
                </Grid>
                {/* <Grid item alignSelf={"center"}>
                <Typography variant="subtitle1"> Or</Typography>
              </Grid> */}
                <Grid item>
                  <Button
                    variant="outlined"
                    fullWidth
                    size="large"
                    onClick={handleLoginGoogle}
                  >
                    Sign in with Google
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md hidden={matchDownMD}>
              <AnimateContent delay={1} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Login;
