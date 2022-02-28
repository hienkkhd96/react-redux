import { yupResolver } from "@hookform/resolvers/yup";
import {
  AddCircleOutlineRounded,
  RemoveCircleOutlineRounded,
} from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
  icons: {
    marginRight: "10px",
    fontSize: "30px",
  },
  form: {
    marginRight: "10px",
    "&>p.MuiFormHelperText-root": {
      color: "#d32f2f",
      position: "absolute",
      bottom: "-80%",
    },
  },
  button: {
    width: "140px",
  },
});
const schema = yup.object().shape({
  Quantity: yup
    .number("Vui lòng nhập sô lượng")
    .min(1, "Vui lòng nhập số lớn hơn 1")
    .max(99, "Quá số lượng cho phép 99")
    .typeError("Vui lòng nhập số lượng"),
});
export default function QuantityField({ productId = 1 }) {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      Quantity: 1,
    },
  });
  const onSubmit = () => {
    console.log({
      id: productId,
      quantity: Number.parseInt(getValues("Quantity")),
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={classes.root}>
          <RemoveCircleOutlineRounded
            className={classes.icons}
            onClick={() => {
              if (getValues("Quantity") > 1)
                setValue(
                  "Quantity",
                  Number.parseInt(getValues("Quantity")) - 1
                );
            }}
          />
          <TextField
            {...register("Quantity")}
            className={classes.form}
            margin="dense"
            error={!!errors.Quantity?.message}
            label="Nhập số lượng"
            style={{
              width: "160px",
            }}
            helperText={errors.Quantity?.message}
          />
          <AddCircleOutlineRounded
            className={classes.icons}
            onClick={() =>
              setValue("Quantity", Number.parseInt(getValues("Quantity")) + 1)
            }
          />
          <Button
            type="submit"
            variant="contained"
            aria-label="outlined"
            className={classes.button}
          >
            Add to cart
          </Button>
        </Box>
      </form>
    </div>
  );
}
