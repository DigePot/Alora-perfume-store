import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { 
  signUpFormControls, 
  initialSignUpFormData, 
  authFormOptions 
} from "../../config/authForms";

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialSignUpFormData
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="space-y-6 text-[#0a3657]"> {/* Default text color set here */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {signUpFormControls.map((field) => (
          <div key={field.name} className="space-y-2">
            <label 
              htmlFor={field.name}
              className="block text-sm font-medium !text-[#0a3657]" // Strong contrast
            >
              {field.label}
              {field.validationRules.required && (
                <span className="!text-[#f51b16] ml-1">*</span>
              )}
            </label>
            
            <input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name, field.validationRules)}
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                errors[field.name] 
                  ? 'border-[#f51b16] focus:ring-[#f51b16] focus:border-[#f51b16]' 
                  : 'border-[#0a3657] focus:ring-[#0a3657] focus:border-[#0a3657]'
              }`}
            />
            
            {errors[field.name] && (
              <p className="mt-1 text-sm !text-[#f51b16]">
                {errors[field.name].message}
              </p>
            )}
          </div>
        ))}

        <button
  type="submit"
  className="w-full py-3 px-4 !bg-[#4ca9ea] hover:!bg-[#3b8ac0] !text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4ca9ea] focus:ring-offset-2 shadow-md"
>
  {authFormOptions.signUp.submitText}
</button>

      </form>

       <div className="relative my-6">
  <div className="absolute inset-0 flex items-center">
    <div className="w-full border-t border-[#0a3657]/50"></div> {/* Darker line */}
  </div>
  <div className="relative flex justify-center">
    <span className="px-4 py-1 bg-[#fefdfc] text-sm font-semibold text-[#0a3657] rounded-full shadow-sm">
      {authFormOptions.signUp.alternateActionText}
    </span>
  </div>
</div>


      <Link
        to={authFormOptions.signUp.alternateActionLink}
        className="block w-full py-2.5 px-4 text-center border border-[#0a3657] !text-[#0a3657] font-medium rounded-lg hover:bg-[#fbf6f0] transition-colors duration-200"
      >
        {authFormOptions.signUp.alternateActionLinkText}
      </Link>
    </div>
  );
}

export default SignUp;
