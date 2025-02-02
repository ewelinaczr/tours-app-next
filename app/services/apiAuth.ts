interface SignInData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

interface LogInData {
  email: string;
  password: string;
}

export async function login(loginData: LogInData) {
  try {
    const response = await fetch("http://localhost:3000/api/v1/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function signUp(signUpData: SignInData) {
  try {
    const response = await fetch("http://localhost:3000/api/v1/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpData),
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function logout() {
  try {
    const response = await fetch("api/v1/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data.status;
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function forgotPassword() {
  try {
    const response = await fetch("api/v1/users/forgotPassword");
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error as string);
  }
}
