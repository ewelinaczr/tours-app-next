export async function getUsers() {
  try {
    const response = await fetch("http://localhost:3000/api/v1/users");
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function getUser(id: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/users/${id}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function getUserByEmail(email: string) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/users/email/${email}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function updateMyProfile(profileData) {
  try {
    const response = await fetch(
      "http://localhost:3000/api/v1/users/updateMy",
      {
        method: "patch",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profileData),
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error as string);
  }
}
