import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, LinearProgress, Typography } from "@mui/material";
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
import { registerThunk } from "../../features/Auth/userSlice";
import "./styles.scss";

const schema = yup.object().shape({
  fullName: yup.string().required("Vui lòng nhập trường này"),
  email: yup
    .string()
    .required("Vui lòng nhập trường này")
    .email("Vui lòng nhập địa chỉ email"),
  password: yup
    .string()
    .required("Vui lòng nhập password")
    .min(6, "Mật khẩu cần ít nhất 6 kí tự")
    .max(20, "Mật khẩu tối đa 20 kí tự"),
  reTypePassword: yup
    .string()
    .required("Vui lòng nhập lại pasword")
    .oneOf([yup.ref("password")], "Nhập lại mật khẩu không trùng khớp"),
});
const notiMessage = {
  success: "Chúc mừng bạn đăng ký thành công",
  error: "Đắng ký thất bại",
};
export default function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const showSuccessMessage = () => {
    enqueueSnackbar(notiMessage.success, {
      variant: "success",
    });
  };
  const showErrorMessage = (error) => {
    enqueueSnackbar(error.message, {
      variant: "error",
    });
  };
  const onSubmit = async (values) => {
    try {
      values.username = values.email;
      const action = registerThunk(values);
      const resultsAction = await dispatch(action);
      unwrapResult(resultsAction);
      showSuccessMessage();
      props.closeRegister();
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
  const { openRegister, closeRegister, setMode } = props;
  const handleClose = () => {
    closeRegister();
  };

  return (
    <div className="register">
      <Dialog open={openRegister}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Avatar className="register__avatar">
            <LockOutlined />
          </Avatar>
          <Typography className="register__head" component="h3" variant="h5">
            Create An Acount
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
              {...register("fullName")}
              fullWidth
              margin="dense"
              error={!!errors.fullName?.message}
              helperText={errors.fullName?.message}
              label="Full Name"
            />
            <TextField
              {...register("email")}
              fullWidth
              margin="dense"
              error={!!errors.email?.message}
              label="Email Address"
              helperText={errors.email?.message}
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
            <TextField
              {...register("reTypePassword")}
              fullWidth
              type="password"
              margin="dense"
              label="Retype Pasword"
              error={!!errors.reTypePassword?.message}
              helperText={errors.reTypePassword?.message}
            />
          </DialogContent>
          <DialogActions>
            <Button fullWidth type="submit">
              Register
            </Button>
            <Button fullWidth onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
          <Button onClick={setMode} fullWidth>
            Already have an account? Login here.
          </Button>
        </form>
      </Dialog>
    </div>
  );
}
