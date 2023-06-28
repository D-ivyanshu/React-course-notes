import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

interface Props{
  onSubmit: (data: FormData) => void;
}

const schema = z.object({
  description : z.string().min(1).max(50),
  amount : z.number({invalid_type_error: "Amount is required"}).min(0.01).max(100_000),
  category : z.enum(categories, {
    errorMap: () => ({message: "Category is required"})
  }) // Array we pass here should be const 
});

type FormData = z.infer<typeof schema>;

const ExpenseForm = ({onSubmit} : Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({resolver: zodResolver(schema)});

  return (
    <form onSubmit={handleSubmit((data) =>{
      onSubmit(data);
      reset();
    })}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="descriptiontype"
          {...register("description")}
          type="text"
          className="form-control"
        />
        {errors.description && <p className="text-danger">{errors.description.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          {...register("amount", { valueAsNumber: true })}
          type="number"
          className="form-control"
        />
        {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" {...register("category")} className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className="text-danger">{errors.category.message}</p>}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
