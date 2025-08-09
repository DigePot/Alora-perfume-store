import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signInFormControls, initialSignInFormData, authFormOptions } from '../../config/authForms';

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialSignInFormData
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {signInFormControls.map((field) => (
          <div key={field.name} className="space-y-2">
            <label 
              htmlFor={field.name}
              className="block text-sm font-medium text-[#105484]"
            >
              {field.label}
              {field.validationRules.required && (
                <span className="text-[#f51b16] ml-1">*</span>
              )}
            </label>
            
            <input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name, field.validationRules)}
              className={`w-full px-4 py-2 text-[#105484] placeholder-[#4ca9ea]/70 rounded-lg border focus:outline-none focus:ring-2 ${
                errors[field.name] 
                  ? 'border-[#f51b16] focus:ring-[#f51b16]' 
                  : 'border-[#4ca9ea] focus:ring-[#105484]'
              }`}
            />
            
            {errors[field.name] && (
              <p className="mt-1 text-sm text-[#f51b16]">
                {errors[field.name].message}
              </p>
            )}
          </div>
        ))}

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-[#105484] focus:ring-[#105484] border-[#4ca9ea] rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-[#105484]">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link 
              to="/forgot-password" 
              className="font-medium text-[#105484] hover:text-[#4ca9ea]"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <button
  type="submit"
  className="w-full py-3 px-4 !bg-[#66c2ff] hover:bg-[#4ca9ea] text-[#0a3657] font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4ca9ea] focus:ring-offset-2 shadow-md"
>
  {authFormOptions.signIn.submitText}
</button>

      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#4ca9ea]/30"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 bg-white text-sm text-[#105484]">
            {authFormOptions.signIn.alternateActionText}
          </span>
        </div>
      </div>

      <Link
        to={authFormOptions.signIn.alternateActionLink}
        className="block w-full py-2.5 px-4 text-center border border-[#4ca9ea] !text-[#105484] font-medium rounded-lg hover:bg-[#fbf6f0] transition-colors duration-200"
      >
        {authFormOptions.signIn.alternateActionLinkText}
      </Link>
    </div>
  );
};

export default SignIn;