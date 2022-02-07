import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
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
export default function Register(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { openRegister, setOpenRegister } = props;
  const handleClose = () => {
    setOpenRegister(!openRegister);
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="register">
      <Dialog open={openRegister}>
        <Avatar className="register__avatar">
          <LockOutlined />
        </Avatar>
        <Typography className="register__head" component="h3" variant="h5">
          Create An Acount
        </Typography>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("fullName")}
              fullWidth
              type="text"
              margin="dense"
              label="Full Name"
              helperText={errors.fullName?.message}
            />
            <TextField
              {...register("email")}
              fullWidth
              type="email"
              margin="dense"
              label="Email Address"
              helperText={errors.email?.message}
            />
            <TextField
              {...register("password")}
              fullWidth
              type="password"
              margin="dense"
              label="Pasword"
              helperText={errors.password?.message}
            />
            <TextField
              {...register("reTypePassword")}
              fullWidth
              type="reTypePassword"
              margin="dense"
              label="Retype Pasword"
              helperText={errors.reTypePassword?.message}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button fullWidth onClick={handleClose}>
            Cancel
          </Button>
          <Button fullWidth type="submit">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
