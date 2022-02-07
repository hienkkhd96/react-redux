import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import "./App.css";
import Header from "./component/Header";
import Counter from "./features/counter";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("email", {
            required: true,
            minLength: {
              value: 4,
              message: "Please enter your email address ",
            },
          })}
          label="Email"
          defaultValue=""
          style={{ marginTop: "20px" }}
        />
        <p>{errors.email?.message}</p>
      </form>
      <Counter />
    </div>
  );
}

export default App;
