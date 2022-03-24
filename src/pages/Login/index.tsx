import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Hidden,
  Paper,
  Radio,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material";

import doctorImg from "assets/images/doctor.svg";
import { useFormik } from "formik";
import gsap from "gsap/all";
import { useEffect, useRef } from "react";
import AnimateContent from "./AnimateContent";

const Login: React.FC = () => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("md"));
  let containerRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
              transform: "translateY(25%)",
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
                borderRadius: "16px",
                padding: matchDownMD ? 2 : 4,
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
                      variant="outlined"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      size={matchDownMD ? "small" : "medium"}
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
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                  >
                    Sign in
                  </Button>
                </Grid>
                {/* <Grid item alignSelf={"center"}>
                <Typography variant="subtitle1"> Or</Typography>
              </Grid> */}
                <Grid item>
                  <Button variant="outlined" fullWidth size="large">
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