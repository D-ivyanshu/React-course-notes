import { FieldValues, useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          className="form-control"
        />
        {errors.name?.type === 'required' && <p className="text-danger">The name field is required</p>}
        {errors.name?.type === 'minLength' && <p className="text-danger">The name should be of atleast 4 characters</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          {...register("age")}
          type="number"
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary mb-2">
        Submit Form
      </button>
    </form>
  );
}

export default Form;
