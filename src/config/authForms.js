export const signUpFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    type: "text",
    componentType: "input",
    validationRules: {
      required: "User name is required",
      minLength: {
        value: 3,
        message: "User name must be at least 3 characters"
      },
      maxLength: {
        value: 30,
        message: "User name must be less than 30 characters"
      }
    }
  },
  {
    name: "userEmail",
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
    componentType: "input",
    validationRules: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address"
      }
    }
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
    validationRules: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters"
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: "Password must contain uppercase, lowercase, number, and special character"
      }
    }
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirm your password",
    type: "password",
    componentType: "input",
    validationRules: {
      required: "Please confirm your password",
      validate: (value, allValues) => 
        value === allValues.password || "Passwords don't match"
    }
  }
];

export const signInFormControls = [
  {
    name: "userEmail",
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
    componentType: "input",
    validationRules: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address"
      }
    }
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
    validationRules: {
      required: "Password is required"
    }
  }
];

export const forgotPasswordFormControls = [
  {
    name: "userEmail",
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
    componentType: "input",
    validationRules: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address"
      }
    }
  }
];

export const resetPasswordFormControls = [
  {
    name: "newPassword",
    label: "New Password",
    placeholder: "Enter new password",
    type: "password",
    componentType: "input",
    validationRules: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters"
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: "Password must contain uppercase, lowercase, number, and special character"
      }
    }
  },
  {
    name: "confirmNewPassword",
    label: "Confirm New Password",
    placeholder: "Confirm new password",
    type: "password",
    componentType: "input",
    validationRules: {
      required: "Please confirm your password",
      validate: (value, allValues) => 
        value === allValues.newPassword || "Passwords don't match"
    }
  }
];

// Initial form data objects
export const initialSignUpFormData = {
  userName: "",
  userEmail: "",
  password: "",
  confirmPassword: ""
};

export const initialSignInFormData = {
  userEmail: "",
  password: ""
};

export const initialForgotPasswordFormData = {
  userEmail: ""
};

export const initialResetPasswordFormData = {
  newPassword: "",
  confirmNewPassword: ""
};

// Form options
export const authFormOptions = {
  signUp: {
    submitText: "Sing Up",
    alternateActionText: "Already have an account?",
    alternateActionLink: "/signin",
    alternateActionLinkText: "Sign In Instead"
  },
  signIn: {
    submitText: "Sign In",
    alternateActionText: "Don't have an account?",
    alternateActionLink: "/signup",
    alternateActionLinkText: "Sing Up now",
    extraLinks: [
      {
        text: "Forgot your password?",
        link: "/forgot-password"
      }
    ]
  },
  forgotPassword: {
    submitText: "Send Reset Link",
    alternateActionText: "Remember your password?",
    alternateActionLink: "/login",
    alternateActionLinkText: "Sign in instead"
  },
  resetPassword: {
    submitText: "Reset Password",
    alternateActionText: "Back to",
    alternateActionLink: "/login",
    alternateActionLinkText: "Sign in"
  }
};