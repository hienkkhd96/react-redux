import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, LinearProgress, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { loginThunk } from "../../features/Auth/userSlice";
import "./styles.scss";

const schema = yup.object().shape({
  identifier: yup
    .string()
    .required("Vui lòng nhập trường này")
    .email("Vui lòng nhập địa chỉ email"),
  password: yup
    .string()
    .required("Vui lòng nhập password")
    .min(6, "Mật khẩu cần ít nhất 6 kí tự")
    .max(20, "Mật khẩu tối đa 20 kí tự"),
});

export default function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const showErrorMessage = (error) => {
    enqueueSnackbar(error.message, {
      variant: "error",
    });
  };
  const { openRegister, closeRegister, setMode } = props;
  const onSubmit = async (values) => {
    try {
      const action = loginThunk(values);
      const resultsAction = await dispatch(action);
      unwrapResult(resultsAction);
      handleClose();
    } catch (error) {
      showErrorMessage(error);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleClose = () => {
    closeRegister();
  };

  return (
    <div className="login">
      <Dialog open={openRegister}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Avatar className="register__avatar">
            <LockOutlined />
          </Avatar>
          <Typography className="register__head" component="h3" variant="h5">
            Sign In
          </Typography>
          {isSubmitting && (
            <LinearProgress
              color="success"
              style={{
                margin: "0 auto",
                width: "90%",
              }}
            />
          )}
          <DialogContent>
            <TextField
              {...register("identifier")}
              fullWidth
              margin="dense"
              error={!!errors.identifier?.message}
              label="Email Address"
              helperText={errors.identifier?.message}
            />
            <TextField
              {...register("password")}
              fullWidth
              type="password"
              margin="dense"
              label="Pasword"
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          </DialogContent>
          <DialogActions>
            <Button fullWidth type="submit" color="primary">
              Login
            </Button>
            <Button fullWidth onClick={closeRegister}>
              Cancel
            </Button>
          </DialogActions>
          <Box>
            <Button onClick={setMode} fullWidth>
              Don't have an account? Register here
            </Button>
          </Box>
        </form>
      </Dialog>
    </div>
  );
}
